# TCET Center of Excellence Portal

A production-oriented Next.js App Router application for TCET CoE that combines:
- role-based authentication and authorization
- student facility booking with admin approval lifecycle
- faculty content publishing workflows
- announcement/news/event/grant public feeds
- email notifications and reminder automation
- MinIO-backed object storage with browser-safe proxying

## Table of Contents

1. System Overview
2. Feature Matrix by Role
3. Technical Stack
4. Architecture
5. Domain Model
6. Page and UX Flows
7. API Contract
8. Environment and Configuration
9. Local Development
10. Deployment Notes
11. Operational Runbook
12. Security Model
13. Troubleshooting
14. Verification Checklist

## 1) System Overview

This portal serves three primary personas:
- Students: register, verify email via OTP, log in, create/cancel bookings
- Faculty: publish and manage institutional content (news, events, grants, announcements)
- Admin: approve faculty users, approve/reject bookings, monitor booking readiness and portal stats

The public home page is dynamic and reads live data from the database:
- News
- Events
- Grants
- Announcements

Object assets (news images, event posters, grant attachments) are stored in MinIO and surfaced either via signed URL or via an app-level proxy route depending on MinIO transport settings.

## 2) Feature Matrix by Role

| Capability | Public | Student | Faculty | Admin |
|---|---:|---:|---:|---:|
| View home feed (news/events/grants/announcements) | Yes | Yes | Yes | Yes |
| Register account | No | Yes | Yes | No |
| Email OTP verification | No | Yes | N/A | No |
| Login | No | Yes | Yes | Yes |
| Forgot password via email OTP | No | Yes | Yes | Yes |
| Create booking | No | Yes | No | No |
| Cancel own pending booking | No | Yes | No | No |
| Access faculty content portal | No | No | Yes | Yes |
| Create content (news/events/grants/announcements) | No | No | Yes | Yes |
| Moderate faculty registrations | No | No | No | Yes |
| Moderate bookings | No | No | No | Yes |
| View operational dashboard | No | No | No | Yes |

## 3) Technical Stack

- Framework: Next.js 16.2.1 (App Router)
- Runtime: Node.js
- Language: TypeScript
- UI: React 19 + Tailwind CSS v4
- Database: MySQL via Prisma ORM
- Authentication: JWT access/refresh tokens in httpOnly cookies
- Validation: Zod
- Email: Nodemailer (SMTP)
- Storage: MinIO (S3-compatible)
- Scheduler integration: cron trigger endpoint at /api/cron/reminder

## 4) Architecture

### 4.1 High-level runtime architecture

```mermaid
flowchart TD
  B[Browser] --> N[Next.js App]
  N --> P[Pages and Server Components]
  N --> R[Route Handlers: /api/*]
  R --> A[Auth + RBAC]
  R --> D[(MySQL via Prisma)]
  R --> M[SMTP via Nodemailer]
  R --> S[MinIO Object Store]
  C[Scheduler] --> CR[GET /api/cron/reminder]
  CR --> R
```

### 4.2 Authentication and session lifecycle

```mermaid
sequenceDiagram
  participant U as User
  participant L as POST /api/auth/login
  participant K as Browser Cookies
  participant X as Protected API
  participant F as POST /api/auth/refresh
  participant O as POST /api/auth/logout

  U->>L: email + password
  L-->>K: set accessToken (15m), refreshToken (7d)
  U->>X: request with cookies
  X->>X: authenticate + authorize
  X-->>U: 200 or 401/403
  U->>F: refresh session
  F-->>K: rotate accessToken cookie
  U->>O: logout
  O-->>K: clear accessToken + refreshToken
```

### 4.3 Booking lifecycle

```mermaid
flowchart LR
  S[Student] --> B1[POST /api/bookings]
  B1 --> PENDING[PENDING]
  PENDING --> A1[PATCH /api/admin/bookings/:id/confirm]
  PENDING --> A2[PATCH /api/admin/bookings/:id/reject]
  A1 --> CONF[CONFIRMED]
  A2 --> REJ[REJECTED]
  PENDING --> CXL[DELETE /api/bookings/:id]
  CXL --> CAN[CANCELLED]
  CONF --> REM[GET /api/cron/reminder]
  REM --> MAIL[Send reminder email]
```

## 5) Domain Model

Core entities in Prisma:
- User: identity, role, status, verification flags
- Otp: temporary email OTPs (verification and password reset)
- Booking: student booking request and status transitions
- NewsPost: image-backed news item
- Event: dated event with optional poster
- Grant: grant opportunity with optional attachment and link
- Announcement: time-bound notice with optional link

### 5.1 Entity relationship diagram

```mermaid
erDiagram
  User ||--o{ Booking : creates
  User ||--o{ NewsPost : posts
  User ||--o{ Grant : posts
  User ||--o{ Event : posts
  User ||--o{ Announcement : creates

  User {
    int id
    string name
    string email
    string role
    string status
    bool isVerified
  }

  Booking {
    int id
    string lab
    string timeSlot
    string status
    string purpose
    bool reminderSent
  }

  NewsPost {
    int id
    string title
    string imageKey
    bool isVisible
  }

  Event {
    int id
    string title
    string mode
    date date
    bool isVisible
  }

  Grant {
    int id
    string title
    string category
    date deadline
    bool isActive
  }

  Announcement {
    int id
    string text
    date expiresAt
  }
```

## 6) Page and UX Flows

### Public and common pages
- / : dynamic homepage (reads live content from DB)
- /about : institutional page
- /laboratory : lab information page

### Authentication and recovery
- /login : login with role-based redirection
  - ADMIN -> /admin
  - FACULTY -> /faculty
  - STUDENT -> /facility-booking
- /forgot-password : request OTP and set new password

### Student flow
- /facility-booking
  - if valid session exists, skips credential entry and opens booking step directly
  - login/register/OTP handled in-page
  - booking form includes room/equipment/date/slot/purpose

### Faculty flow
- /faculty
  - protected page (FACULTY or ADMIN)
  - tabbed interface for GET/POST on:
    - /api/news
    - /api/events
    - /api/grants
    - /api/announcements
  - automatic refresh-on-401 behavior via /api/auth/refresh

### Admin flow
- /admin
  - protected page (ADMIN only)
  - dashboard stats
  - pending bookings queue
  - upcoming confirmed bookings (prep view)
  - pending faculty approvals
  - user listing/filtering

## 7) API Contract

All primary APIs use a response envelope pattern:
- success: boolean
- message: string
- data: payload or null
- errors: array (for error responses)

### 7.1 Authentication APIs

- POST /api/auth/register/student
  - JSON: name, email, phone, password, uid
  - creates STUDENT with isVerified=false and sends OTP
- POST /api/auth/register/faculty
  - JSON: name, email, phone, password
  - creates FACULTY with status=PENDING and notifies admin
- POST /api/auth/verify-otp
  - JSON: email, otp
  - validates 10-minute OTP and marks user verified
- POST /api/auth/resend-otp
  - JSON: email
- POST /api/auth/login
  - JSON: email, password
  - sets accessToken + refreshToken cookies
- POST /api/auth/refresh
  - uses refreshToken cookie
  - sets a fresh accessToken cookie
- POST /api/auth/logout
  - clears auth cookies
- POST /api/auth/forgot-password
  - JSON: email
  - sends password-reset OTP (non-enumerating response)
- POST /api/auth/reset-password
  - JSON: email, otp, newPassword
  - updates password hash and clears OTP

### 7.2 Booking APIs

- POST /api/bookings
  - STUDENT only
  - JSON: purpose, date, timeSlot, facilities[], lab
  - creates booking as PENDING
- GET /api/bookings
  - guidance response only (use /my or admin route)
- GET /api/bookings/my
  - authenticated user bookings (student-centric flow)
- DELETE /api/bookings/[id]
  - STUDENT only
  - only own PENDING bookings can be cancelled

### 7.3 Admin APIs

- GET /api/admin/stats
  - ADMIN only
- GET /api/admin/users
  - ADMIN only
  - optional filters: role, status
- GET /api/admin/bookings
  - ADMIN only
  - optional filters: status, date
- PATCH /api/admin/bookings/[id]/confirm
  - ADMIN only
  - PENDING -> CONFIRMED and sends confirmation mail
- PATCH /api/admin/bookings/[id]/reject
  - ADMIN only
  - PENDING -> REJECTED with optional adminNote and sends rejection mail
- PATCH /api/admin/faculty/[id]/approve
  - ADMIN only
  - PENDING faculty -> ACTIVE and sends approval mail
- PATCH /api/admin/faculty/[id]/reject
  - ADMIN only
  - faculty -> REJECTED and sends rejection mail

### 7.4 Content APIs

News:
- GET /api/news (public)
- POST /api/news (FACULTY/ADMIN, multipart with image)
- PATCH /api/news/[id] (FACULTY/ADMIN)
- DELETE /api/news/[id] (ADMIN only)

Events:
- GET /api/events (public)
- POST /api/events (FACULTY/ADMIN, multipart with optional poster)
- PATCH /api/events/[id] (FACULTY/ADMIN)
- DELETE /api/events/[id] (FACULTY/ADMIN)

Grants:
- GET /api/grants (public)
- POST /api/grants (FACULTY/ADMIN, multipart with optional PDF)
- PATCH /api/grants/[id] (FACULTY/ADMIN)
- DELETE /api/grants/[id] (ADMIN only)

Announcements:
- GET /api/announcements (public, non-expired)
- POST /api/announcements (FACULTY/ADMIN)
- DELETE /api/announcements/[id] (FACULTY/ADMIN)

### 7.5 Utility APIs

- GET /api/health
- POST /api/seed
- GET /api/cron/reminder
- GET /api/storage/[...path] (MinIO proxy stream)

## 8) Environment and Configuration

Required environment variables:

```env
DATABASE_URL="mysql://root:password@localhost:3306/coe_db"
JWT_ACCESS_SECRET="change-me"
JWT_REFRESH_SECRET="change-me"

ADMIN_EMAIL="admin@tcetmumbai.in"
ADMIN_PASSWORD="AdminPassword123"
ADMIN_NAME="CoE Admin"

SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="app-password"
SMTP_FROM="TCET CoE <noreply@tcetmumbai.in>"

MINIO_ENDPOINT="localhost"
MINIO_PORT=9000
MINIO_ACCESS_KEY="minioadmin"
MINIO_SECRET_KEY="minioadmin"
MINIO_USE_SSL=false
MINIO_BUCKET="coe-assets"
```

Optional variables:
- NEXT_PUBLIC_APP_URL
- MINIO_USE_PROXY=true|false

## 9) Local Development

Install and run:

```bash
npm install
npx prisma migrate dev
npx prisma generate
npm run dev
```

Build and verify:

```bash
npm run lint
npm run build
```

Seed admin account:

```bash
curl -X POST http://localhost:3000/api/seed
```

## 10) Deployment Notes

### 10.1 MinIO on custom domain

The storage client supports:
- host-style endpoint: MINIO_ENDPOINT=server.example.com
- URL-style endpoint: MINIO_ENDPOINT=http://server.example.com or https://server.example.com

For HTTPS app + HTTP MinIO:
- keep MINIO_USE_SSL=false
- use the storage proxy route (enabled automatically for non-SSL MinIO)
- browser requests stay same-origin via /api/storage/[...path]

### 10.2 Cookies

Auth cookies use:
- httpOnly=true
- sameSite=lax
- secure=true in production

### 10.3 SMTP

If using Gmail, configure app password and allow SMTP settings.

## 11) Operational Runbook

### Booking reminder job

Endpoint:
- GET /api/cron/reminder

Behavior:
- finds CONFIRMED bookings starting in next 30 minutes with reminderSent=false
- sends reminder email
- marks reminderSent=true
- cleans expired OTP records (>10 minutes)

Trigger options:
- external cron service
- platform scheduler hitting the endpoint

### Health check

- GET /api/health for lightweight uptime probe

## 12) Security Model

- Passwords are hashed with bcrypt.
- Access and refresh token secrets come from environment.
- API guards:
  - authenticate() via Bearer token or accessToken cookie
  - authorize() role checks per route
- Forgot-password endpoint avoids account enumeration by returning uniform success messaging.
- Password reset requires valid OTP and TTL window.

## 13) Troubleshooting

### 401 on faculty content POST
- Likely expired access token.
- Client currently attempts /api/auth/refresh and retries once.

### Browser hydration mismatch
- Ensure no unstable dynamic text between server and client render.
- Check recent changes in shared components rendered in RootLayout.

### Mixed content for images
- Happens when browser receives direct http object URL on https site.
- Use /api/storage proxy route and confirm MinIO proxy path is returned.

### /api/seed returns 405
- Expected for GET. Use POST.

### /seed page returns 404
- Expected. There is no page route at /seed.

## 14) Verification Checklist

Before shipping:
- npm run lint
- npm run build
- Verify login, forgot-password, and OTP flows
- Verify faculty content create flows with uploads
- Verify admin approval/rejection flows
- Verify booking lifecycle from request to reminder
- Verify image/file rendering in deployed environment
- Ensure .env secrets are not committed
