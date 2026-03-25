'use client';
export default function Page() {
    return (
        <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
            {/* Real Content */}
            {/*  TopNavBar  */}
<nav className="bg-white dark:bg-stone-950 flex justify-between items-center w-full px-8 py-4 max-w-full sticky top-0 z-50 border-b-2 border-[#1C1C1C] dark:border-stone-800">
<div onClick={() => window.location.href='/'} style={{cursor: 'pointer'}} className="flex items-center gap-2 font-['Space_Grotesk'] font-bold text-2xl text-[#1C1C1C] dark:text-white after:content-[''] after:w-4 after:h-4 after:bg-[#F7941D]">
            CoE
        </div>
<div className="hidden md:flex items-center gap-8">
<a className="text-[#1C1C1C] dark:text-stone-300 font-medium text-[10px] tracking-[0.1em] uppercase hover:text-[#F7941D] transition-colors duration-200" href="/laboratory" >RESEARCH</a>
<a className="text-[#1C1C1C] dark:text-stone-300 font-medium text-[10px] tracking-[0.1em] uppercase hover:text-[#F7941D] transition-colors duration-200" href="/laboratory" >FACILITIES</a>
<a className="text-[#1C1C1C] dark:text-stone-300 font-medium text-[10px] tracking-[0.1em] uppercase hover:text-[#F7941D] transition-colors duration-200" href="#">JOURNAL</a>
<a className="text-[#1C1C1C] dark:text-stone-300 font-medium text-[10px] tracking-[0.1em] uppercase hover:text-[#F7941D] transition-colors duration-200" href="#">ARCHIVE</a>
</div>
<button className="bg-[#1C1C1C] text-white font-['Space_Grotesk'] font-bold py-2 px-6 uppercase tracking-wider text-sm active:opacity-80 transition-all" onClick={() => window.location.href='/facility-booking'}>
            BOOK FACILITY
        </button>
</nav>
<main>
{/*  Section 07: Our Story  */}
<section className="bg-white py-24 px-8 md:px-12 grid grid-cols-12 gap-0 border-b editorial-rule">
<aside className="col-span-12 md:col-span-4 mb-12 md:mb-0">
<span className="font-label font-medium uppercase tracking-[0.15em] text-xs text-[#1C1C1C]">07 — Our Story</span>
<h1 className="font-headline font-bold text-5xl md:text-7xl mt-8 leading-[0.9] tracking-tighter text-[#1C1C1C]">
                    THE ARCHITECTURE OF INNOVATION.
                </h1>
</aside>
<div className="col-span-12 md:col-start-6 md:col-span-7 border-l editorial-rule pl-8 md:pl-16">
<div className="max-w-2xl">
<p className="font-body text-xl leading-relaxed text-[#1C1C1C] mb-8 italic font-light">
                        The TCET Center of Excellence was not founded on the pursuit of academic volume, but on the rigorous necessity of industrial precision. 
                    </p>
<p className="font-body text-lg leading-relaxed text-[#1C1C1C] mb-6">
                        Established as a sanctuary for high-impact engineering research, our institution bridges the structural gap between theoretical physics and applied industrial systems. We operate on the principle of Structural Intellect—the idea that innovation must be both mathematically sound and socially transformative.
                    </p>
<p className="font-body text-lg leading-relaxed text-[#1C1C1C]">
                        Today, the CoE serves as a nexus for global researchers, providing the machinery and the editorial oversight required to turn volatile ideas into enduring infrastructure. Our story is one of persistent iteration, where every failure is archived as a necessary blueprint for the next breakthrough.
                    </p>
</div>
</div>
</section>
{/*  Section 08: The Team  */}
<section className="bg-surface-container-low py-24 border-b editorial-rule">
<div className="px-8 md:px-12 mb-16">
<span className="font-label font-medium uppercase tracking-[0.15em] text-xs text-[#1C1C1C]">08 — THE TEAM</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 border-t editorial-rule">
{/*  Team Member 1  */}
<div className="border-r border-b md:border-b-0 editorial-rule group">
<div className="team-image-container overflow-hidden aspect-[4/5] bg-stone-300">
<img alt="Portrait of Director" className="w-full h-full object-cover transition-all duration-500 grayscale" data-alt="Black and white professional portrait of a senior academic man with glasses in a minimalist architectural studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh7b2XHjTLJwEP5oLDajYIon5hB7TpGOBXuVIbVM1m2Y2odsOsfI7ECriCKWKCK3Qy1RWNZUum2yGgjMWx18m6OrKmB0GXXuM2q6CwZ4L_yT3CVVxFEieSQPAYPYJkqXNxi-mupWasbZ_ZcQPiKCWc2VXDFiVRD-p3oeEUKKMCa_s8XpMq1J0_Rz_3tMiC0N7gb6jI0guBKGnSwHgH29mOAs-TbqMcLVp6lgEsEezbiBQ4iNAHQ4v3yuU9qEN8xz5jpd_CZJAcKgw"/>
</div>
<div className="p-6">
<h3 className="font-headline font-bold text-xl uppercase text-[#1C1C1C]">DR. ARJUN MEHTA</h3>
<p className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold mt-2">Executive Director</p>
</div>
</div>
{/*  Team Member 2  */}
<div className="border-r border-b md:border-b-0 editorial-rule group">
<div className="team-image-container overflow-hidden aspect-[4/5] bg-stone-300">
<img alt="Portrait of Lead Researcher" className="w-full h-full object-cover transition-all duration-500 grayscale" data-alt="High-contrast black and white close-up portrait of a female research scientist with a confident expression in a laboratory environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb-EQ7MUbzAeJBP12Jn7juSmlij4C4kYoXmsdAdDmw923V9wr3fFHvHlht9JMsfHWSpQ_C2ViUHIkbnbt_6qdDhuHJSaBqvfSCnxXmnKtdCS3ZFk6quLZOZprqWwvskZDmq4ug_8dcJPtVmGPjMubtHWYSlcuXm6cAcPHpdIDGA2tcCVfMZ3sNGpNirzBOGCSN8NeIh4QH-B7sx_TLcVi86zzVSx69l1NcyHpXcDvTJH_v6xVaS1PGAMuN4Z5L81fWJvUxcriG8t0"/>
</div>
<div className="p-6">
<h3 className="font-headline font-bold text-xl uppercase text-[#1C1C1C]">SARAH JENKINS</h3>
<p className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold mt-2">Lead Researcher</p>
</div>
</div>
{/*  Team Member 3  */}
<div className="border-r border-b md:border-b-0 editorial-rule group">
<div className="team-image-container overflow-hidden aspect-[4/5] bg-stone-300">
<img alt="Portrait of Operations Head" className="w-full h-full object-cover transition-all duration-500 grayscale" data-alt="Cinematic black and white portrait of a man in professional attire against a clean geometric wall with sharp shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQyL4g0kOyeSet3QMpubBPf8LQ1AQNdTbwbI5pA5kKKkEFSR5Jyi81a-nqIvGPPSheudr3TxgNat6zRi0z5EwN_3QQATj5R2n3mgKbLHAVYTgLLX6CzYtFC5WHs6zkuz2caBLG3CeYhumogft8hZUJBFvCEhUPYo4FQ0fiAT2roDD4PuzbhoEyRhDI0YYDOfP9ry1jNVVPykSv2l7KXO63kPDtYgh0rmPWCRp7fjm4zEFQ_dS-Gw8ZpdBwdcPGoxVsKSeJXMOJkJ0"/>
</div>
<div className="p-6">
<h3 className="font-headline font-bold text-xl uppercase text-[#1C1C1C]">VIKRAM KHANNA</h3>
<p className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold mt-2">Head of Operations</p>
</div>
</div>
{/*  Team Member 4  */}
<div className="border-b md:border-b-0 editorial-rule group">
<div className="team-image-container overflow-hidden aspect-[4/5] bg-stone-300">
<img alt="Portrait of Ethics Chair" className="w-full h-full object-cover transition-all duration-500 grayscale" data-alt="Sharp black and white portrait of a woman with short hair and modern glasses in a focused institutional setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKMsTjoH0cme8F03pCcCUpoWRUSeIpb_DX-2yGICfghiD9tG7WMw-TysacmMasl7HN0IJT4A1CcS6ZY-8sTEx3cJIeXS3wScYsQqT4FAPpck-c64iESvx3Y3lWWRpcf1au23alQdlq9_Yozc6RMC1IGn_1myIuGHZHDIazs9HE5KwSBXtQ384lbUTViwieAZhArlK5yFj8NW3-IOBHrQVOE6I-5BMM3m9BWrPSuMldp5Pa_AOFJA2VHtEJye3WpycRiSATEM7qJS8"/>
</div>
<div className="p-6">
<h3 className="font-headline font-bold text-xl uppercase text-[#1C1C1C]">ELENA ROSSI</h3>
<p className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold mt-2">Editorial Ethics</p>
</div>
</div>
</div>
</section>
{/*  Section 09: Journey  */}
<section className="bg-white py-24">
<div className="px-8 md:px-12 mb-16">
<span className="font-label font-medium uppercase tracking-[0.15em] text-xs text-[#1C1C1C]">09 — JOURNEY</span>
</div>
<div className="w-full">
{/*  Journey Entry 2012  */}
<div className="grid grid-cols-12 border-t editorial-rule py-12 px-8 md:px-12">
<div className="col-span-12 md:col-span-3">
<span className="font-stats text-7xl md:text-9xl text-[#1C1C1C] leading-none">2012</span>
</div>
<div className="col-span-12 md:col-span-9 pt-4 md:pt-2">
<h4 className="font-headline font-bold text-2xl uppercase mb-4 text-[#1C1C1C]">The Foundation Decree</h4>
<p className="font-body text-lg text-stone-600 max-w-3xl">
                            The CoE was established under a tripartite agreement between TCET, national research councils, and industrial consortiums. The initial focus was the consolidation of fragmented engineering data.
                        </p>
</div>
</div>
{/*  Journey Entry 2016  */}
<div className="grid grid-cols-12 border-t editorial-rule py-12 px-8 md:px-12">
<div className="col-span-12 md:col-span-3">
<span className="font-stats text-7xl md:text-9xl text-[#1C1C1C] leading-none">2016</span>
</div>
<div className="col-span-12 md:col-span-9 pt-4 md:pt-2">
<h4 className="font-headline font-bold text-2xl uppercase mb-4 text-[#1C1C1C]">Proprietary Archive Launch</h4>
<p className="font-body text-lg text-stone-600 max-w-3xl">
                            Migration of physical institutional records to a secured digital neural network. This marked the beginning of our editorial policy implementation for scientific transparency.
                        </p>
</div>
</div>
{/*  Journey Entry 2021  */}
<div className="grid grid-cols-12 border-t editorial-rule py-12 px-8 md:px-12">
<div className="col-span-12 md:col-span-3">
<span className="font-stats text-7xl md:text-9xl text-[#1C1C1C] leading-none">2021</span>
</div>
<div className="col-span-12 md:col-span-9 pt-4 md:pt-2">
<h4 className="font-headline font-bold text-2xl uppercase mb-4 text-[#1C1C1C]">Global Nexus Certification</h4>
<p className="font-body text-lg text-stone-600 max-w-3xl">
                            Achieving Tier-1 status for autonomous research. The CoE becomes the primary consulting body for urban infrastructure stability in the region.
                        </p>
</div>
</div>
{/*  Journey Entry 2024  */}
<div className="grid grid-cols-12 border-t border-b editorial-rule py-12 px-8 md:px-12">
<div className="col-span-12 md:col-span-3">
<span className="font-stats text-7xl md:text-9xl text-[#1C1C1C] leading-none">2024</span>
</div>
<div className="col-span-12 md:col-span-9 pt-4 md:pt-2">
<h4 className="font-headline font-bold text-2xl uppercase mb-4 text-[#1C1C1C]">Structural Intellect Protocol</h4>
<p className="font-body text-lg text-stone-600 max-w-3xl">
                            Integration of advanced algorithmic verification in all journal publications. Launching the next phase of collaborative facility booking.
                        </p>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-[#1C1C1C] dark:bg-black grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 w-full border-t border-[#F7941D]">
<div className="flex flex-col gap-6">
<div className="text-xl font-bold text-white border-l-4 border-[#F7941D] pl-3 uppercase font-['Space_Grotesk'] tracking-widest">
                TCET CoE
            </div>
<p className="text-stone-400 font-['Space_Grotesk'] text-xs uppercase tracking-widest max-w-xs">
                ARCHITECTING THE FUTURE OF INDUSTRIAL INTELLIGENCE THROUGH RIGOROUS RESEARCH AND EDITORIAL PRECISION.
            </p>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-[#F7941D] font-['Space_Grotesk'] font-bold text-xs uppercase tracking-[0.2em] mb-4">RESOURCES</h5>
<a className="text-stone-400 font-['Space_Grotesk'] uppercase tracking-widest text-xs hover:text-[#F7941D] transition-colors" href="#">INSTITUTIONAL DATA</a>
<a className="text-stone-400 font-['Space_Grotesk'] uppercase tracking-widest text-xs hover:text-[#F7941D] transition-colors" href="#">EQUIPMENT LOG</a>
<a className="text-stone-400 font-['Space_Grotesk'] uppercase tracking-widest text-xs hover:text-[#F7941D] transition-colors" href="#">EDITORIAL POLICY</a>
<a className="text-stone-400 font-['Space_Grotesk'] uppercase tracking-widest text-xs hover:text-[#F7941D] transition-colors" href="#">CONTACT</a>
</div>
<div className="flex flex-col justify-between">
<div className="flex gap-4">
<span className="material-symbols-outlined text-white hover:text-primary transition-colors cursor-pointer">public</span>
<span className="material-symbols-outlined text-white hover:text-primary transition-colors cursor-pointer">analytics</span>
<span className="material-symbols-outlined text-white hover:text-primary transition-colors cursor-pointer">terminal</span>
</div>
<div className="text-stone-400 font-['Space_Grotesk'] uppercase tracking-widest text-[10px] mt-8 md:mt-0">
                © 2024 TCET CENTER OF EXCELLENCE. ALL RIGHTS RESERVED.
            </div>
</div>
</footer>
        </div>
    );
}