'use client';
export default function Page() {
    return (
        <div className="bg-background text-on-surface font-serif-body">
            {/* Real Content */}
            {/*  TopNavBar  */}
<nav className="sticky top-0 z-50 bg-white dark:bg-stone-950 flex justify-between items-center w-full px-8 py-4 max-w-full border-b-2 border-[#1C1C1C] dark:border-stone-800">
<div onClick={() => window.location.href='/'} style={{cursor: 'pointer'}} className="flex items-center gap-2 font-['Space_Grotesk'] font-bold text-2xl text-[#1C1C1C] dark:text-white after:content-[''] after:w-4 after:h-4 after:bg-[#F7941D]">
            CoE
        </div>
<div className="hidden md:flex items-center gap-8">
<a className="text-[#F7941D] border-t-2 border-[#F7941D] pt-1 font-medium text-[10px] tracking-[0.1em] uppercase" href="/laboratory" >RESEARCH</a>
<a className="text-[#1C1C1C] dark:text-stone-300 font-medium text-[10px] tracking-[0.1em] uppercase hover:text-[#F7941D] transition-colors duration-200" href="/laboratory" >FACILITIES</a>
<a className="text-[#1C1C1C] dark:text-stone-300 font-medium text-[10px] tracking-[0.1em] uppercase hover:text-[#F7941D] transition-colors duration-200" href="#">JOURNAL</a>
<a className="text-[#1C1C1C] dark:text-stone-300 font-medium text-[10px] tracking-[0.1em] uppercase hover:text-[#F7941D] transition-colors duration-200" href="#">ARCHIVE</a>
</div>
<button className="bg-[#F7941D] text-white px-6 py-2 font-['Space_Grotesk'] font-bold tracking-tighter text-sm uppercase active:opacity-80 transition-all" onClick={() => window.location.href='/facility-booking'}>
            BOOK FACILITY
        </button>
</nav>
{/*  Hero Section  */}
<section className="grid grid-cols-12 min-h-[819px] items-center bg-white">
<div className="col-span-12 md:col-span-7 px-8 md:px-16 py-20 flex flex-col justify-center">
<h1 className="font-editorial text-7xl md:text-[5.5rem] leading-[0.9] text-institutional-charcoal mb-8 tracking-tighter">
                A Culture of <br/>Inquiry.
            </h1>
<p className="font-serif-body text-xl md:text-2xl text-on-surface-variant mb-12 max-w-xl">
                TCET's Center of Excellence — where engineering meets rigorous research.
            </p>
<div className="flex flex-wrap gap-4">
<button className="bg-institutional-orange text-white px-10 py-4 font-space font-bold uppercase tracking-widest text-sm transition-all hover:bg-opacity-90" onClick={() => window.location.href='/about'}>
                    Explore CoE
                </button>
<button className="bg-white border-2 border-institutional-charcoal text-institutional-charcoal px-10 py-4 font-space font-bold uppercase tracking-widest text-sm transition-all hover:bg-institutional-charcoal hover:text-white" onClick={() => window.location.href='/laboratory'}>
                    View Research
                </button>
</div>
</div>
<div className="hidden md:block col-span-1 border-l border-institutional-orange h-full py-20"></div>
<div className="col-span-12 md:col-span-4 h-full min-h-[400px]">
<img alt="Lab Environment" className="w-full h-full object-cover grayscale contrast-125" data-alt="High-contrast black and white photograph of a modern engineering laboratory with scientific equipment, sharp industrial edges, and dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEtNb0hh9Va1Yk4-sWDtQLhrw-9rQu0xdMo-9giHp87WFyTlW1RR-2VQ9cXDSFpi69WPXKzZBDNCYhpTxxvPdXQ9Xpj9cC80J5PQZ9oZLwjq54iSbau4vydgZ9PNSC6U3sEb3QakDzSlPzphItjiVVt4Dyjq9kYbnvjYOO0lnyKELsbhHP4c2jeFjU5EkFGAeoiw_d5F2SPeG0esRQsVDrP3bjUx8p7LsoSzwwLlPfW1-OmZQInWA5O9AGdxEpna45PHKg4QGqmxg"/>
</div>
</section>
{/*  Ticker Section  */}
<div className="bg-institutional-orange py-3 ticker-wrap border-y-2 border-institutional-charcoal">
<div className="ticker font-space font-medium text-white uppercase tracking-[0.2em] text-sm">
            NOW ACCEPTING RESEARCH FELLOWSHIP APPLICATIONS 2024 — NEW SMART MATERIALS LAB OPENING OCTOBER — PEER REVIEWED JOURNAL VOL. 14 OUT NOW — TCET CoE RANKED #1 IN INNOVATION — NOW ACCEPTING RESEARCH FELLOWSHIP APPLICATIONS 2024 — NEW SMART MATERIALS LAB OPENING OCTOBER — PEER REVIEWED JOURNAL VOL. 14 OUT NOW — TCET CoE RANKED #1 IN INNOVATION — 
        </div>
</div>
{/*  Slideshow / Strip  */}
<section className="bg-surface-container-low py-20 overflow-hidden">
<div className="px-8 md:px-16 mb-12 flex justify-between items-end">
<div>
<h2 className="font-space font-bold text-4xl uppercase tracking-tighter text-institutional-charcoal">Laboratory Assets</h2>
</div>
<div className="flex gap-8 font-serif-body italic text-institutional-charcoal text-lg">
<button className="hover:underline">← Prev</button>
<button className="hover:underline">Next →</button>
</div>
</div>
<div className="flex gap-8 px-8 md:px-16 overflow-x-auto no-scrollbar pb-10">
<div className="min-w-[400px] md:min-w-[600px]">
<img alt="Asset 1" className="w-full aspect-video object-cover border-2 border-institutional-charcoal grayscale" data-alt="Desaturated wide shot of advanced chemical research facility with glass tubes and stainless steel machinery in a high-tech lab setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABEA0dE-DIunJ97EYK0bVOk0J06WbIX6F2nv0_4xsvAjMo1c4lYOIzrOTeXxQk-3Nawb3Uxf_fFfNWJx6uStp5CDJ8G1CaorzYpU-njMbY0Qb10yAWjkjMrAZN1-80R5H2ulPOmS8HQ4-X6AuRjVX2AJJviJpS6veVmLFPGtfj1l1xdbz5CwLfP4Qz3vC5Oou1FSKoy3HLTmwzbBHM_fHcwZl6GCA2ARLQBvIGg-znyjSZB56a_T6215vw0MTXlCZLSrADL7j0p7g"/>
<p className="mt-4 text-stone-500 font-serif-body italic">Fig 1.0 — Advanced Molecular Analysis Unit (AMAU)</p>
</div>
<div className="min-w-[400px] md:min-w-[600px]">
<img alt="Asset 2" className="w-full aspect-video object-cover border-2 border-institutional-charcoal grayscale" data-alt="High contrast black and white image of industrial robotic arm working on micro-circuits in a precision engineering environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh19M0Fx3u05hpmQvPb6lTjoYpYvIkC1HWJ_s444xpLk-YsnROTj67wm8mfWlOktRVgF6tAHfqI4WDwXq2M8hfwj77vp7HbLtULMHp4vI9oKdhJvbv0aXcGb4v892h58orfHBKU02aE53zz1cYUaDL8AVnrKtlhrVd_Hilq7CPqqPR-RkgaqYiQ2LAwZ_N2qPYol-mroY5h7nBQTvRQPeUiunGpfeS-pCO4UbCDOdokH2UNFvfbBEK_L2pSvo_lzWfkusxAiIvrPs"/>
<p className="mt-4 text-stone-500 font-serif-body italic">Fig 2.4 — Precision Robotics &amp; Mechatronics Bay</p>
</div>
<div className="min-w-[400px] md:min-w-[600px]">
<img alt="Asset 3" className="w-full aspect-video object-cover border-2 border-institutional-charcoal grayscale" data-alt="Archival style photograph of a clean-room laboratory with scientists in protective gear working with laser optics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAjDOfJqe237Tm1nzl8VakvVcydnvxNIlpmJLwJ7VpVaIS41Yb4rv7eJt2LPmZyK6egF2c62vftq2Mit-z0joNKDGYLJEwivPR9l9vnifurEVS1f3a9hjhO_JwdiZvt_-w3I1GzQlmwE1x8CRvmHYpOjNWDjgH1UjigqptmIvzu3UUpMq7Vzl4WGTIdmsgfru65eNhDs_PN6qHQMQZMGAMqJ_uyyJ0viOr4qRBI_bdiYpL3Ebf15lUAiChSlkyQNoeZ6nc7C5fcc4"/>
<p className="mt-4 text-stone-500 font-serif-body italic">Fig 3.1 — Optical Physics Interference Chamber</p>
</div>
</div>
</section>
{/*  About Section  */}
<section className="grid grid-cols-12 px-8 md:px-16 py-32 bg-surface">
<div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
<span className="font-space font-medium text-institutional-orange uppercase tracking-[0.2em] text-xs">01 — Who We Are</span>
</div>
<div className="col-span-12 md:col-span-8">
<h3 className="font-space font-bold text-5xl md:text-6xl text-institutional-charcoal mb-20 leading-tight">
                Built on the belief that <br/>every student is a researcher.
            </h3>
<div className="grid md:grid-cols-3 gap-12">
<div className="pr-8 border-r border-institutional-charcoal border-opacity-20 last:border-0">
<h4 className="font-space font-bold uppercase tracking-widest text-sm mb-6">Mission</h4>
<p className="text-on-surface-variant leading-relaxed">To catalyze disruptive innovation by providing world-class infrastructure and academic mentorship to the next generation of engineers.</p>
</div>
<div className="pr-8 border-r border-institutional-charcoal border-opacity-20 last:border-0">
<h4 className="font-space font-bold uppercase tracking-widest text-sm mb-6">Vision</h4>
<p className="text-on-surface-variant leading-relaxed">To become the global benchmark for institutional excellence where theoretical pedagogy meets industrial application seamlessly.</p>
</div>
<div className="pr-8 border-r border-institutional-charcoal border-opacity-20 last:border-0">
<h4 className="font-space font-bold uppercase tracking-widest text-sm mb-6">Focus</h4>
<p className="text-on-surface-variant leading-relaxed">Concentrated research in AI/ML, Quantum Computing, Sustainable Infrastructure, and Biotech Engineering.</p>
</div>
</div>
</div>
</section>
{/*  Press Section  */}
<section className="bg-white py-32 border-y border-institutional-charcoal">
<div className="px-8 md:px-16 grid grid-cols-12 gap-y-12">
<div className="col-span-12 md:col-span-4">
<span className="font-space font-medium text-institutional-orange uppercase tracking-[0.2em] text-xs">02 — Press</span>
</div>
<div className="col-span-12 md:col-span-8 grid md:grid-cols-2 gap-px bg-institutional-charcoal border border-institutional-charcoal">
{/*  Newspaper Scan Grid  */}
<div className="bg-white p-8 group overflow-hidden">
<div className="mb-6 overflow-hidden">
<img alt="News 1" className="w-full grayscale brightness-110 contrast-125 transition-transform duration-500 group-hover:scale-105" data-alt="A vintage style black and white close-up of a newspaper headline about technological advancement with visible paper texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCalLZr4I5C44fs5V_t9DnWPxudmtrNpAnaP3hQeVaF16HLMY_2xU4b0pPopgrP-dcKbBi_lPa0HmhOfKrX4kdeaQhtbvXYVaskJJgEYO1sWBK0Q2Qy2JHnnmolBWHHbjPPVmCRtzjV0F5uiB0t-RghQRYbS8M9rLhe7Z0Irc8uom35BDBJ9XeL49dOEWM-8OEJoVKh0Zdq4CoWBLsSUwbYvs1Y1zlBtRUQprQ7Q3FkcvGLRzLtxPjJfvdyRokjmmGPNKQSMqzBqMY"/>
</div>
<div className="flex justify-between items-start mb-4">
<span className="font-bebas text-3xl text-institutional-orange tracking-widest">AUG 24</span>
<span className="font-serif-body italic text-sm text-stone-400">The Daily Journal</span>
</div>
<h5 className="font-space font-bold text-xl uppercase leading-tight group-hover:text-institutional-orange transition-colors">Breakthrough in Nanomaterial Resilience</h5>
</div>
<div className="bg-white p-8 group overflow-hidden">
<div className="mb-6 overflow-hidden">
<img alt="News 2" className="w-full grayscale brightness-110 contrast-125 transition-transform duration-500 group-hover:scale-105" data-alt="A high-contrast grainy photo of a scientific diagram in an archival publication, industrial and academic aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC354fypno4yvJTGJvomV-JceuaDvx7pgZzsDb7DykO8yrWpRBJAe4lHy2vSmL6zREV68XFeCFUCA9IfqiWsvgyO75UBwoPTpGWq5wzaTrrTbQ4tX4jK7WISh59PbG1V-v0XMy4oo1TQ6Lyk7a8VQpryRAFTK28B09r0iI20muRISYgiPOM4HO6XPz3pHv32URLGhcdsDmFCnd9KL_cOmNR38iGnxQ_VQwlz-F3klJH0pZt9YlcSpAdqaP2sOjO5svjeEeCtmeztfA"/>
</div>
<div className="flex justify-between items-start mb-4">
<span className="font-bebas text-3xl text-institutional-orange tracking-widest">JUL 24</span>
<span className="font-serif-body italic text-sm text-stone-400">Engineering Weekly</span>
</div>
<h5 className="font-space font-bold text-xl uppercase leading-tight group-hover:text-institutional-orange transition-colors">TCET CoE Secures $5M Government Grant</h5>
</div>
</div>
</div>
</section>
{/*  Events Section  */}
<section className="bg-institutional-blue py-32 text-white">
<div className="px-8 md:px-16 grid grid-cols-12">
<div className="col-span-12 md:col-span-4 mb-12">
<span className="font-space font-medium text-institutional-orange uppercase tracking-[0.2em] text-xs">03 — Events</span>
</div>
<div className="col-span-12 md:col-span-8 overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white border-opacity-20 uppercase font-space text-[10px] tracking-widest text-stone-400">
<th className="pb-4 font-normal">Event Name</th>
<th className="pb-4 font-normal">Date</th>
<th className="pb-4 font-normal">Mode</th>
<th className="pb-4 font-normal text-right">Action</th>
</tr>
</thead>
<tbody className="font-space">
<tr className="border-b border-white border-opacity-10 group cursor-pointer hover:bg-white hover:bg-opacity-5 transition-colors">
<td className="py-8 font-bold text-2xl uppercase tracking-tighter" style={{cursor: 'pointer'}} onClick={() => window.location.href='/facility-booking'}>Global AI Summit</td>
<td className="py-8 font-bebas text-3xl text-institutional-orange">SEP 12</td>
<td className="py-8 text-stone-300">Hybrid / Mumbai</td>
<td className="py-8 text-right font-bold hover:text-institutional-orange transition-colors">Register →</td>
</tr>
<tr className="border-b border-white border-opacity-10 group cursor-pointer hover:bg-white hover:bg-opacity-5 transition-colors">
<td className="py-8 font-bold text-2xl uppercase tracking-tighter" style={{cursor: 'pointer'}} onClick={() => window.location.href='/facility-booking'}>Circular Economy Workshop</td>
<td className="py-8 font-bebas text-3xl text-institutional-orange">SEP 28</td>
<td className="py-8 text-stone-300">Offline</td>
<td className="py-8 text-right font-bold hover:text-institutional-orange transition-colors">Register →</td>
</tr>
<tr className="border-b border-white border-opacity-10 group cursor-pointer hover:bg-white hover:bg-opacity-5 transition-colors">
<td className="py-8 font-bold text-2xl uppercase tracking-tighter" style={{cursor: 'pointer'}} onClick={() => window.location.href='/facility-booking'}>Research Paper Colloquium</td>
<td className="py-8 font-bebas text-3xl text-institutional-orange">OCT 05</td>
<td className="py-8 text-stone-300">Virtual Only</td>
<td className="py-8 text-right font-bold hover:text-institutional-orange transition-colors">Register →</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
{/*  Verticals Section  */}
<section className="bg-white py-32 border-b border-institutional-charcoal">
<div className="px-8 md:px-16 grid grid-cols-12">
<div className="col-span-12 md:col-span-4 mb-16 md:mb-0">
<span className="font-space font-medium text-institutional-orange uppercase tracking-[0.2em] text-xs">05 — What We Do</span>
</div>
<div className="col-span-12 md:col-span-8">
<div className="border-t border-institutional-charcoal flex flex-col">
<div className="py-12 border-b border-institutional-charcoal flex items-center gap-12 group hover:bg-surface transition-colors">
<span className="font-bebas text-5xl text-institutional-orange">01</span>
<div className="flex-grow">
<h4 className="font-space font-bold text-3xl uppercase tracking-tighter mb-2">Computational Fluid Dynamics</h4>
<p className="font-serif-body text-on-surface-variant">Modeling high-velocity airflow for aerospace applications.</p>
</div>
<span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</div>
<div className="py-12 border-b border-institutional-charcoal flex items-center gap-12 group hover:bg-surface transition-colors">
<span className="font-bebas text-5xl text-institutional-orange">02</span>
<div className="flex-grow">
<h4 className="font-space font-bold text-3xl uppercase tracking-tighter mb-2">Sustainable Energy Systems</h4>
<p className="font-serif-body text-on-surface-variant">Designing the next generation of perovskite solar cells.</p>
</div>
<span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</div>
<div className="py-12 border-b border-institutional-charcoal flex items-center gap-12 group hover:bg-surface transition-colors">
<span className="font-bebas text-5xl text-institutional-orange">03</span>
<div className="flex-grow">
<h4 className="font-space font-bold text-3xl uppercase tracking-tighter mb-2">Human-Robot Collaboration</h4>
<p className="font-serif-body text-on-surface-variant">Cognitive interfaces for industrial cobot environments.</p>
</div>
<span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</div>
</div>
</div>
</div>
</section>
{/*  CTA Section  */}
<section className="bg-institutional-orange px-8 md:px-16 py-32 text-institutional-charcoal text-center flex flex-col items-center">
<h2 className="font-editorial text-6xl md:text-8xl mb-12 tracking-tighter">The lab is open.</h2>
<button className="bg-institutional-charcoal text-white px-16 py-6 font-space font-bold uppercase tracking-[0.3em] text-sm hover:bg-opacity-90 transition-all" onClick={() => window.location.href='/facility-booking'}>
            Book a Facility
        </button>
</section>
{/*  Footer  */}
<footer className="bg-[#1C1C1C] dark:bg-black text-white py-24 border-t-2 border-[#F7941D]">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 w-full">
<div className="flex flex-col gap-6">
<div className="text-xl font-bold text-white border-l-4 border-[#F7941D] pl-3 uppercase tracking-tighter font-space">
                    TCET CoE
                </div>
<p className="text-stone-400 font-serif-body text-sm leading-relaxed max-w-xs">
                    Leading academic research through structured inquiry and industrial partnership since 2012.
                </p>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="flex flex-col gap-4 uppercase font-space text-[10px] tracking-widest text-stone-500">
<span className="text-stone-300 font-bold mb-2">Institutional</span>
<a className="hover:text-[#F7941D] transition-colors" href="#">Institutional Data</a>
<a className="hover:text-[#F7941D] transition-colors" href="#">Equipment Log</a>
<a className="hover:text-[#F7941D] transition-colors" href="#">Compliance</a>
</div>
<div className="flex flex-col gap-4 uppercase font-space text-[10px] tracking-widest text-stone-500">
<span className="text-stone-300 font-bold mb-2">Legal</span>
<a className="hover:text-[#F7941D] transition-colors" href="#">Editorial Policy</a>
<a className="hover:text-[#F7941D] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#F7941D] transition-colors" href="#">Contact</a>
</div>
</div>
<div className="flex flex-col gap-8 items-start md:items-end">
<div className="flex gap-4">
<span className="material-symbols-outlined text-white hover:text-institutional-orange cursor-pointer">share</span>
<span className="material-symbols-outlined text-white hover:text-institutional-orange cursor-pointer">mail</span>
<span className="material-symbols-outlined text-white hover:text-institutional-orange cursor-pointer">rss_feed</span>
</div>
<div className="font-['Space_Grotesk'] text-stone-400 uppercase tracking-widest text-[10px] text-right">
                    © 2024 TCET CENTER OF EXCELLENCE.<br/>ALL RIGHTS RESERVED.
                </div>
</div>
</div>
</footer>
        </div>
    );
}