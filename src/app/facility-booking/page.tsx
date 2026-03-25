'use client';
export default function Page() {
    return (
        <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-white">
            {/* Real Content */}
            {/*  TopNavBar  */}
<nav className="bg-white dark:bg-stone-950 flex justify-between items-center w-full px-8 py-4 max-w-full docked full-width top-0 border-b-2 border-[#1C1C1C] dark:border-stone-800 flat no shadows z-50 sticky">
<div onClick={() => window.location.href='/'} style={{cursor: 'pointer'}} className="flex items-center gap-2 font-['Space_Grotesk'] font-bold text-2xl text-[#1C1C1C] dark:text-white after:content-[''] after:w-4 after:h-4 after:bg-[#F7941D]">
            CoE
        </div>
<div className="hidden md:flex items-center gap-8">
<a className="text-[#1C1C1C] dark:text-stone-300 font-medium text-[10px] tracking-[0.1em] uppercase hover:text-[#F7941D] transition-colors duration-200" href="/laboratory" >RESEARCH</a>
<a className="text-[#1C1C1C] dark:text-stone-300 font-medium text-[10px] tracking-[0.1em] uppercase hover:text-[#F7941D] transition-colors duration-200" href="/laboratory" >FACILITIES</a>
<a className="text-[#1C1C1C] dark:text-stone-300 font-medium text-[10px] tracking-[0.1em] uppercase hover:text-[#F7941D] transition-colors duration-200" href="#">JOURNAL</a>
<a className="text-[#1C1C1C] dark:text-stone-300 font-medium text-[10px] tracking-[0.1em] uppercase hover:text-[#F7941D] transition-colors duration-200" href="#">ARCHIVE</a>
</div>
<button className="bg-[#1C1C1C] text-white font-['Space_Grotesk'] font-bold py-2 px-6 text-sm tracking-wider uppercase active:opacity-80 transition-all" onClick={() => window.location.href='/facility-booking'}>
            BOOK FACILITY
        </button>
</nav>
<main className="max-w-7xl mx-auto px-6 md:px-12 py-12 min-h-screen">
{/*  Header & Grid Anchor  */}
<header className="grid grid-cols-12 gap-8 mb-16">
<div className="col-span-12 md:col-span-4 border-l-4 border-primary-container pl-6">
<h1 className="font-headline font-bold text-4xl leading-none uppercase tracking-tighter text-on-surface">
                    Facility<br/>Reservations
                </h1>
<p className="mt-4 font-body text-on-surface-variant italic">
                    Institutional access for researchers, faculty, and vetted editorial partners.
                </p>
</div>
<div className="col-span-12 md:col-span-8 flex flex-col justify-end">
{/*  Step Indicator  */}
<div className="flex flex-wrap items-center gap-4 md:gap-8 font-headline text-xs font-bold tracking-widest uppercase">
<span className="text-primary-container">01 Verify</span>
<span className="text-outline">→</span>
<span className="text-outline">02 Profile</span>
<span className="text-outline">→</span>
<span className="text-outline">03 Book</span>
<span className="text-outline">→</span>
<span className="text-outline">04 Confirm</span>
</div>
<div className="w-full h-[1px] bg-outline mt-4"></div>
</div>
</header>
<div className="grid grid-cols-12 gap-12">
{/*  Left Margin: Metadata/Context  */}
<aside className="hidden md:block col-span-4 space-y-12">
<div className="border-t border-on-surface pt-4">
<h3 className="font-headline text-xs font-bold uppercase tracking-[0.2em] mb-4">Verification Protocols</h3>
<p className="font-body text-sm leading-relaxed text-on-surface-variant">
                        All bookings require a valid institutional domain verification. External partners must provide their Editorial Access Token (EAT) during the profile setup stage.
                    </p>
</div>
<div className="border-t border-on-surface pt-4">
<h3 className="font-headline text-xs font-bold uppercase tracking-[0.2em] mb-4">Available Assets</h3>
<ul className="space-y-2 font-headline text-[10px] uppercase tracking-widest text-on-surface">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-container"></span> Advanced Spectroscopy Lab</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-container"></span> High-Performance Computing Cluster</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-container"></span> Archive &amp; Manuscript Vault</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-container"></span> Clean Room Facility</li>
</ul>
</div>
<div className="aspect-[4/5] bg-surface-container-low border border-outline p-1">
<img className="w-full h-full object-cover grayscale contrast-125" data-alt="monochrome high-contrast architectural detail of a modern scientific laboratory with clean lines and sterile equipment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7AW2tLovHRiPcH130IDLgetkmhWCfUqEJsFWKHEgvkIzGlbbsjs8V5m4BD43nmWy4NXxbfNWciXu0HrvTjuD5QZQVdI2eTdfxN7hxX5d6UrXf2_2-5PrXCFCEd3Ai0efJtuLJwDgXAkwn0lzgF3jwvSwDhAEg9-s7yrbzEf2YurLlolc6FAZJ4_fUJA3iLry-EHSugtQ8UGUyYJjHBmpSiHUROASUlyZ82TLM4cn2R1P4SOsFGxjSwIHFy8Pi3o6t3n0YHI1gmYY"/>
</div>
</aside>
{/*  Main Form Canvas  */}
<div className="col-span-12 md:col-span-8">
{/*  Section 01: Verify  */}
<section className="bg-white border border-on-surface p-8 md:p-12 mb-12">
<div className="mb-10">
<span className="font-headline text-xs font-bold text-primary-container uppercase tracking-[0.3em]">Phase 01</span>
<h2 className="font-headline text-2xl font-bold uppercase mt-2">Institutional Identification</h2>
<p className="font-body italic text-on-surface-variant mt-2">Access is restricted to authorized academic and research domains only.</p>
</div>
<div className="space-y-10">
<div className="relative group">
<label className="block font-headline text-[10px] font-bold uppercase tracking-[0.15em] mb-1">Institutional Email Address</label>
<input className="w-full bg-transparent border-0 border-b border-on-surface px-0 py-3 focus:ring-0 focus:border-primary-container font-body text-lg transition-all outline-none" placeholder="u.researcher@tcet.edu.in" type="email"/>
</div>
<div className="relative group">
<label className="block font-headline text-[10px] font-bold uppercase tracking-[0.15em] mb-1">Verification Code / Token</label>
<input className="w-full bg-transparent border-0 border-b border-on-surface px-0 py-3 focus:ring-0 focus:border-primary-container font-body text-lg transition-all outline-none" placeholder="XXXX-XXXX-XXXX" type="text"/>
</div>
</div>
</section>
{/*  Section 02: Profile Role Selector  */}
<section className="mb-12">
<div className="mb-6">
<span className="font-headline text-xs font-bold text-on-surface-variant uppercase tracking-[0.3em]">Phase 02</span>
<h2 className="font-headline text-2xl font-bold uppercase mt-2">Account Role</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">
<button className="bg-primary-container text-white border border-on-surface py-6 px-4 font-headline text-xs font-bold uppercase tracking-widest transition-all">
                            Chief Researcher
                        </button>
<button className="bg-white text-on-surface border border-on-surface py-6 px-4 font-headline text-xs font-bold uppercase tracking-widest hover:bg-surface-container transition-all">
                            Graduate Associate
                        </button>
<button className="bg-white text-on-surface border border-on-surface py-6 px-4 font-headline text-xs font-bold uppercase tracking-widest hover:bg-surface-container transition-all">
                            Editorial Liaison
                        </button>
</div>
</section>
{/*  Section 03: Booking Grid  */}
<section className="mb-12">
<div className="mb-6 flex justify-between items-end border-b border-on-surface pb-4">
<div>
<span className="font-headline text-xs font-bold text-on-surface-variant uppercase tracking-[0.3em]">Phase 03</span>
<h2 className="font-headline text-2xl font-bold uppercase mt-2">Schedule Slot</h2>
</div>
<div className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface">
                            May 24, 2024
                        </div>
</div>
<div className="flex flex-wrap gap-3 mb-8">
<button className="px-4 py-2 border border-on-surface font-headline text-[10px] font-bold uppercase tracking-widest bg-on-secondary-container text-white">Lab A: Spectroscopy</button>
<button className="px-4 py-2 border border-on-surface font-headline text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container">Lab B: Microscopy</button>
<button className="px-4 py-2 border border-on-surface font-headline text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container">Vault 01: Archives</button>
<button className="px-4 py-2 border border-on-surface font-headline text-[10px] font-bold uppercase tracking-widest hover:bg-surface-container">Data Cluster IV</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
<button className="p-4 border border-on-surface font-headline text-xs font-bold hover:bg-primary-container hover:text-white transition-all">08:00 — 10:00</button>
<button className="p-4 border border-on-surface font-headline text-xs font-bold bg-primary-container text-white transition-all">10:00 — 12:00</button>
<button className="p-4 border border-on-surface font-headline text-xs font-bold hover:bg-primary-container hover:text-white transition-all">12:00 — 14:00</button>
<button className="p-4 border border-on-surface font-headline text-xs font-bold opacity-30 cursor-not-allowed bg-surface-container">14:00 — 16:00</button>
<button className="p-4 border border-on-surface font-headline text-xs font-bold hover:bg-primary-container hover:text-white transition-all">16:00 — 18:00</button>
<button className="p-4 border border-on-surface font-headline text-xs font-bold hover:bg-primary-container hover:text-white transition-all">18:00 — 20:00</button>
<button className="p-4 border border-on-surface font-headline text-xs font-bold hover:bg-primary-container hover:text-white transition-all">20:00 — 22:00</button>
<button className="p-4 border border-on-surface font-headline text-xs font-bold hover:bg-primary-container hover:text-white transition-all">22:00 — 00:00</button>
</div>
</section>
{/*  Final Action  */}
<div className="mt-16 flex justify-between items-center border-t-2 border-on-surface pt-8">
<div className="max-w-xs font-body text-xs italic text-on-surface-variant">
                        *By clicking confirm, you agree to the CoE Lab Safety Protocols and Institutional Usage Guidelines.
                    </div>
<button className="bg-on-surface text-white font-headline font-bold text-lg uppercase px-12 py-6 tracking-widest hover:bg-primary-container transition-all" onClick={() => { alert('Booking Completed! Reference ID: COE-8829-QX'); window.location.href='/'; }}>
                        Complete Booking
                    </button>
</div>
{/*  Section 04: Confirmation (Preview/States)  */}
<div className="mt-24 pt-12 border-t border-outline border-dashed">
<p className="font-headline text-[10px] uppercase tracking-[0.4em] mb-4 text-outline text-center">Post-Submission Preview</p>
<div className="bg-surface-container-low p-10 border-l-[6px] border-primary-container">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div>
<h3 className="font-headline font-bold text-xl uppercase tracking-tight">Booking Confirmed</h3>
<p className="font-body text-on-surface-variant mt-1">Institutional verification successful. Your session is now reserved.</p>
</div>
<div className="text-right">
<span className="block font-headline text-[10px] font-bold uppercase tracking-widest text-outline">Reference ID</span>
<span className="font-display text-5xl text-on-surface tracking-tighter">COE-8829-QX</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant grid grid-cols-2 md:grid-cols-4 gap-4">
<div>
<span className="block font-headline text-[9px] font-bold uppercase tracking-widest text-outline">Date</span>
<span className="font-headline text-sm font-medium">May 24, 2024</span>
</div>
<div>
<span className="block font-headline text-[9px] font-bold uppercase tracking-widest text-outline">Facility</span>
<span className="font-headline text-sm font-medium">Lab A: Spectroscopy</span>
</div>
<div>
<span className="block font-headline text-[9px] font-bold uppercase tracking-widest text-outline">Timeline</span>
<span className="font-headline text-sm font-medium">10:00 — 12:00</span>
</div>
<div>
<span className="block font-headline text-[9px] font-bold uppercase tracking-widest text-outline">Status</span>
<span className="font-headline text-sm font-medium text-on-secondary-container">ACTIVE</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="bg-[#1C1C1C] dark:bg-black grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 w-full full-width border-t border-[#F7941D] flat no shadows mt-20">
<div>
<div className="text-xl font-bold text-white border-l-4 border-[#F7941D] pl-3 uppercase font-['Space_Grotesk'] tracking-tighter">
                TCET CoE
            </div>
<p className="mt-4 font-['Source_Serif_4'] text-stone-400 text-sm leading-relaxed max-w-xs">
                Advancing scientific inquiry through rigorous data management and state-of-the-art facility access for global research partners.
            </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-['Space_Grotesk'] text-[#F7941D] uppercase tracking-widest text-xs font-bold">Quick Links</h4>
<div className="flex flex-col gap-2">
<a className="font-['Space_Grotesk'] text-stone-400 uppercase tracking-widest text-xs hover:text-[#F7941D] transition-colors" href="#">INSTITUTIONAL DATA</a>
<a className="font-['Space_Grotesk'] text-stone-400 uppercase tracking-widest text-xs hover:text-[#F7941D] transition-colors" href="#">EQUIPMENT LOG</a>
<a className="font-['Space_Grotesk'] text-stone-400 uppercase tracking-widest text-xs hover:text-[#F7941D] transition-colors underline underline-offset-4 text-white" href="#">EDITORIAL POLICY</a>
<a className="font-['Space_Grotesk'] text-stone-400 uppercase tracking-widest text-xs hover:text-[#F7941D] transition-colors" href="#">CONTACT</a>
</div>
</div>
<div className="flex flex-col justify-between">
<div className="font-['Space_Grotesk'] text-white uppercase tracking-widest text-[10px] opacity-60">
                SYSTEM STATUS: OPTIMAL<br/>
                LAST UPDATED: 24.05.2024
            </div>
<div className="font-['Space_Grotesk'] text-stone-400 uppercase tracking-widest text-[10px] mt-8">
                © 2024 TCET CENTER OF EXCELLENCE. ALL RIGHTS RESERVED.
            </div>
</div>
</footer>
        </div>
    );
}