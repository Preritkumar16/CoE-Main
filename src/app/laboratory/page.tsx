'use client';
export default function Page() {
    return (
        <div className="font-body selection:bg-primary-container selection:text-white">
            {/* Real Content */}
            {/*  TopNavBar  */}
<nav className="sticky top-0 z-50 bg-white dark:bg-stone-950 border-b-2 border-[#1C1C1C] dark:border-stone-800 flex justify-between items-center w-full px-8 py-4 max-w-full">
<div onClick={() => window.location.href='/'} style={{cursor: 'pointer'}} className="flex items-center gap-2 font-['Space_Grotesk'] font-bold text-2xl text-[#1C1C1C] dark:text-white after:content-[''] after:w-4 after:h-4 after:bg-[#F7941D]">
            CoE
        </div>
<div className="hidden md:flex items-center gap-8">
<a className="text-stone-400 font-medium text-[10px] tracking-[0.1em] uppercase hover:text-[#F7941D] transition-colors duration-200" href="/laboratory" >RESEARCH</a>
<a className="text-[#F7941D] border-t-2 border-[#F7941D] pt-1 font-medium text-[10px] tracking-[0.1em] uppercase hover:text-[#F7941D] transition-colors duration-200" href="/laboratory" >FACILITIES</a>
<a className="text-stone-400 font-medium text-[10px] tracking-[0.1em] uppercase hover:text-[#F7941D] transition-colors duration-200" href="#">JOURNAL</a>
<a className="text-stone-400 font-medium text-[10px] tracking-[0.1em] uppercase hover:text-[#F7941D] transition-colors duration-200" href="#">ARCHIVE</a>
</div>
<button className="bg-[#1C1C1C] text-white font-['Space_Grotesk'] font-bold px-6 py-2 text-xs tracking-widest hover:bg-[#F7941D] transition-all active:opacity-80" onClick={() => window.location.href='/facility-booking'}>
            BOOK FACILITY
        </button>
</nav>
<main className="min-h-screen">
{/*  Hero / Header Section  */}
<header className="editorial-grid border-b border-[#1C1C1C]">
<aside className="col-span-12 md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#1C1C1C] flex flex-col justify-between">
<div>
<span className="font-stats text-5xl text-[#1C1C1C]">10</span>
<p className="font-label text-xs font-bold uppercase tracking-[0.2em] mt-2">— Equipment &amp; Facilities</p>
</div>
<div className="mt-12 md:mt-0">
<p className="font-body text-lg italic leading-relaxed text-on-surface-variant">
                        Our laboratories are engineered for precision. We maintain a high-rigidity infrastructure to support advanced research in semiconductor physics, signal processing, and additive manufacturing.
                    </p>
</div>
</aside>
<div className="col-span-12 md:col-span-8 bg-surface-container-low p-8 md:p-24">
<h1 className="font-headline font-bold text-6xl md:text-8xl tracking-tighter leading-[0.9] text-[#1C1C1C] uppercase">
                    Institutional <br/> Infrastructure
                </h1>
</div>
</header>
{/*  Category Filter  */}
<section className="border-b border-[#1C1C1C] bg-white sticky top-[74px] z-40">
<div className="editorial-grid">
<div className="col-span-12 md:col-span-8 md:col-start-5 flex items-center h-16">
<div className="flex h-full">
<button className="px-8 h-full bg-[#F7941D] text-white font-label font-bold text-[10px] tracking-[0.2em] uppercase">
                            All
                        </button>
<button className="px-8 h-full bg-white text-[#1C1C1C] font-label font-medium text-[10px] tracking-[0.2em] uppercase border-r border-[#1C1C1C] hover:text-[#F7941D] transition-colors">
                            Electronics
                        </button>
<button className="px-8 h-full bg-white text-[#1C1C1C] font-label font-medium text-[10px] tracking-[0.2em] uppercase border-r border-[#1C1C1C] hover:text-[#F7941D] transition-colors">
                            Computing
                        </button>
<button className="px-8 h-full bg-white text-[#1C1C1C] font-label font-medium text-[10px] tracking-[0.2em] uppercase hover:text-[#F7941D] transition-colors">
                            Fabrication
                        </button>
</div>
</div>
</div>
</section>
{/*  Equipment Grid  */}
<section className="border-b border-[#1C1C1C]">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
{/*  Equipment 1  */}
<article className="border-r border-b border-[#1C1C1C] group">
<div className="aspect-[4/3] overflow-hidden border-b border-[#1C1C1C]">
<img alt="Lab Equipment" className="w-full h-full object-cover grayscale-img group-hover:scale-105 transition-transform duration-500" data-alt="Scientific digital oscilloscope in a high-tech laboratory setting with bright overhead lighting, professional archival photography style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB42TT8kNMLWIPYSobkHpsCu6XnTaqsxZu7mefvys72vnMKECVcZKEUX08tjqxUWcYnM1lAtfnJ192KdlSCuJFnatwfdhRiMhq3wo5ybW1NXNU-ZXXALyRWVOLbTYoo_OCUgAz2QGmy_LLeC6yY6HOxUmrIV2QYflbPI0kdzXrcJrHoAInnNgPxwJq-XzTNLAMW8HxxAQjp4RbAzHIVT-4UPkjZJZ-4zqNFwOe7h72pCCh1gQfh7zpRIRkRjtj2yJ7tPBGtzYfqXtA"/>
</div>
<div className="p-8">
<span className="font-label text-[10px] text-primary font-bold tracking-widest uppercase mb-2 block">ELECTRONICS — E01</span>
<h3 className="font-headline font-bold text-2xl uppercase tracking-tight text-[#1C1C1C] mb-4">Keysight InfiniiVision Oscilloscope</h3>
<p className="font-body text-on-surface-variant leading-relaxed mb-6">
                            100 MHz, 4 Analog Channels. Advanced triggering and hardware-based serial decoding for high-speed signal analysis and verification.
                        </p>
<div className="border-t border-stone-200 pt-4 flex justify-between items-center">
<span className="font-stats text-2xl">04 UNITS</span>
<span className="material-symbols-outlined text-[#1C1C1C]">arrow_outward</span>
</div>
</div>
</article>
{/*  Equipment 2  */}
<article className="border-r border-b border-[#1C1C1C] group">
<div className="aspect-[4/3] overflow-hidden border-b border-[#1C1C1C]">
<img alt="Lab Equipment" className="w-full h-full object-cover grayscale-img group-hover:scale-105 transition-transform duration-500" data-alt="Industrial robotic arm performing micro-soldering on a circuit board, clinical lighting, high contrast monochromatic aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtwEIuB338DA0A8voipTHLMz7FypQveXVVIjyyNURStUdhp1LShY7BNBW9g5rxa6g4oBC6UhPtVDbD_CcDcY1_z_WZHeE7suAI8bDM33rz1I2pe2IjY4oym-836voWBlx8d6BAsHJYRHp7JVfCSbG-SDDsuSa1uSyUjgmgsFftdNaiEIqkiuA-rGV8kKKxAUfe_e1bepdG07f9PzEDwVJFb6laqxBRM9yYJMIVzTXNovC7vyzpV5hQyEtEzsljMNxwpLTR9yB-mJA"/>
</div>
<div className="p-8">
<span className="font-label text-[10px] text-primary font-bold tracking-widest uppercase mb-2 block">FABRICATION — F09</span>
<h3 className="font-headline font-bold text-2xl uppercase tracking-tight text-[#1C1C1C] mb-4">LPKF ProtoMat S103</h3>
<p className="font-body text-on-surface-variant leading-relaxed mb-6">
                            High-speed circuit board plotter for RF and microwave applications. Features 100,000 RPM spindle for ultra-fine structures.
                        </p>
<div className="border-t border-stone-200 pt-4 flex justify-between items-center">
<span className="font-stats text-2xl">01 UNIT</span>
<span className="material-symbols-outlined text-[#1C1C1C]">arrow_outward</span>
</div>
</div>
</article>
{/*  Equipment 3  */}
<article className="border-b border-[#1C1C1C] group">
<div className="aspect-[4/3] overflow-hidden border-b border-[#1C1C1C]">
<img alt="Lab Equipment" className="w-full h-full object-cover grayscale-img group-hover:scale-105 transition-transform duration-500" data-alt="Server rack with neatly organized blue cables and blinking lights in a data center, minimalist clinical style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD045Ne6ygQ23FWz5IlimH4LksKp5SdjSsIzYI0SW-IIzXzhp6wDOkf2zBmT3b-MXnS6VBVZhxe6Etd_G1hOZ_7hCwoYUZFh5JpBWiH9ruSqI5-r5dQXsIuSu_xiXcx0oEvEaVkF2O71DH2GEfPGFwnfktpzoEmn_Mxa8LVLnOskwZA9yyaWL3-m8vxcBUxKfErntk7SdmnXNNcQ87n_yjeWYqMYAVO4JddeFzL6DicJ7ocbL00KZScU3zY93MWNMKyibbGRkS4EwI"/>
</div>
<div className="p-8">
<span className="font-label text-[10px] text-primary font-bold tracking-widest uppercase mb-2 block">COMPUTING — C04</span>
<h3 className="font-headline font-bold text-2xl uppercase tracking-tight text-[#1C1C1C] mb-4">NVIDIA DGX Station A100</h3>
<p className="font-body text-on-surface-variant leading-relaxed mb-6">
                            The world’s first AI data center-in-a-box. Integrated system for deep learning training and inference acceleration.
                        </p>
<div className="border-t border-stone-200 pt-4 flex justify-between items-center">
<span className="font-stats text-2xl">02 UNITS</span>
<span className="material-symbols-outlined text-[#1C1C1C]">arrow_outward</span>
</div>
</div>
</article>
</div>
</section>
{/*  Facilities List Section  */}
<section className="bg-surface-container-low border-b border-[#1C1C1C] py-24">
<div className="px-12 mb-16">
<h2 className="font-headline font-bold text-4xl uppercase tracking-tighter">Research Facilities</h2>
</div>
<div className="editorial-grid px-12 gap-12">
{/*  Column 1  */}
<div className="col-span-12 md:col-span-6 border-r-0 md:border-r-2 border-[#1C1C1C] pr-0 md:pr-12">
<div className="border-t border-[#1C1C1C] py-8">
<div className="flex justify-between items-start mb-4">
<h4 className="font-headline font-bold text-xl uppercase tracking-tight">Advanced Signal Processing Lab</h4>
<span className="font-stats text-xl text-primary">A-204</span>
</div>
<p className="font-body text-on-surface-variant leading-relaxed">
                            Focused on real-time hardware implementation of communication algorithms. Equipped with USRP Software Defined Radios and FPGA development boards.
                        </p>
</div>
<div className="border-t border-[#1C1C1C] py-8">
<div className="flex justify-between items-start mb-4">
<h4 className="font-headline font-bold text-xl uppercase tracking-tight">Embedded Systems Center</h4>
<span className="font-stats text-xl text-primary">B-101</span>
</div>
<p className="font-body text-on-surface-variant leading-relaxed">
                            Institutional hub for IoT research and microcontroller interfacing. Houses industry-standard development environments and logic analyzers.
                        </p>
</div>
<div className="border-t border-[#1C1C1C] py-8">
<div className="flex justify-between items-start mb-4">
<h4 className="font-headline font-bold text-xl uppercase tracking-tight">Applied AI &amp; Robotics Hub</h4>
<span className="font-stats text-xl text-primary">C-305</span>
</div>
<p className="font-body text-on-surface-variant leading-relaxed">
                            Interdisciplinary space for autonomous navigation and machine vision. Features 10Gbps dedicated research network and high-density GPU clusters.
                        </p>
</div>
</div>
{/*  Column 2  */}
<div className="col-span-12 md:col-span-6">
<div className="border-t border-[#1C1C1C] py-8">
<div className="flex justify-between items-start mb-4">
<h4 className="font-headline font-bold text-xl uppercase tracking-tight">VLSI Design &amp; Characterization</h4>
<span className="font-stats text-xl text-primary">A-402</span>
</div>
<p className="font-body text-on-surface-variant leading-relaxed">
                            Clean-room style environment for silicon testing. Includes semiconductor parameter analyzers and probe stations with thermal control.
                        </p>
</div>
<div className="border-t border-[#1C1C1C] py-8">
<div className="flex justify-between items-start mb-4">
<h4 className="font-headline font-bold text-xl uppercase tracking-tight">Micro-Fabrication Unit</h4>
<span className="font-stats text-xl text-primary">F-001</span>
</div>
<p className="font-body text-on-surface-variant leading-relaxed">
                            Rapid prototyping of multi-layer PCBs and mechanical enclosures. Features CNC milling, laser cutting, and industrial grade SLA printing.
                        </p>
</div>
<div className="border-t border-[#1C1C1C] py-8">
<div className="flex justify-between items-start mb-4">
<h4 className="font-headline font-bold text-xl uppercase tracking-tight">The Library of Components</h4>
<span className="font-stats text-xl text-primary">L-100</span>
</div>
<p className="font-body text-on-surface-variant leading-relaxed">
                            Archival inventory of over 50,000 discrete components and ICs. Managed via institutional ERP for seamless research workflow.
                        </p>
</div>
</div>
</div>
</section>
{/*  CTA Section  */}
<section className="editorial-grid bg-[#1C1C1C] text-white">
<div className="col-span-12 md:col-span-8 p-12 md:p-24">
<h2 className="font-headline font-bold text-5xl md:text-7xl uppercase leading-none tracking-tighter mb-8">Access the <br/> Infrastructure.</h2>
<p className="font-body text-stone-400 text-xl max-w-xl mb-12">
                    Internal and external researchers may request facility access. We adhere to a strict rigorous booking protocol to ensure equipment integrity.
                </p>
<div className="flex flex-col md:flex-row gap-6">
<button className="bg-[#F7941D] text-white font-label font-bold px-12 py-4 tracking-widest uppercase hover:bg-white hover:text-[#1C1C1C] transition-all" onClick={() => window.location.href='/facility-booking'}>
                        SUBMIT PROTOCOL
                    </button>
<button className="border border-white text-white font-label font-bold px-12 py-4 tracking-widest uppercase hover:bg-white hover:text-[#1C1C1C] transition-all" onClick={() => alert('Downloading log...') }>
                        DOWNLOAD LOG
                    </button>
</div>
</div>
<div className="col-span-12 md:col-span-4 border-l border-white/20 relative hidden md:block overflow-hidden">
<img alt="Laboratory Window" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale-img" data-alt="Interior of a modern glass-walled research lab with glowing technical screens and sterile white workbenches, dramatic evening lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZyzEk-lmhWSBy82wJBxj95YWLkV3d3mi7r9so1tEBW1iojLFjNQXaiS3eRg2xEjNCf2BBwPA2nH9Fjfh4GOukGNiJ0bE25vnK1rZQE4lu5_h9nNH5HuFjAcDjPOkdqnCcAq1saPFDugkk8C-Ojm6IHaHrfrVhNl3XSGY7DSWcKeVKqP-Nf6Gl-J6wAiqAWqMeyRika7rHcypKItDFoBzXIGFOe0dLhBlmxvrGhtSisGogbt8u2ySSCDruGSNTiTuDI9HYmAXV-uI"/>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-[#1C1C1C] dark:bg-black border-t border-[#F7941D]">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 w-full">
<div className="flex flex-col gap-8">
<div className="text-xl font-bold text-white border-l-4 border-[#F7941D] pl-3 font-['Space_Grotesk'] uppercase tracking-widest">
                    TCET COE
                </div>
<p className="font-['Space_Grotesk'] text-stone-400 text-[10px] tracking-[0.2em] uppercase leading-loose">
                    Advanced Institutional Research <br/>
                    Center of Excellence Building <br/>
                    Plot No. 12, Research Park
                </p>
</div>
<div className="flex flex-col gap-4">
<span className="font-['Space_Grotesk'] text-[#F7941D] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">RESOURCES</span>
<a className="text-stone-400 font-['Space_Grotesk'] uppercase tracking-widest text-xs hover:text-[#F7941D] transition-colors" href="#">INSTITUTIONAL DATA</a>
<a className="text-white underline underline-offset-4 font-['Space_Grotesk'] uppercase tracking-widest text-xs" href="#">EQUIPMENT LOG</a>
<a className="text-stone-400 font-['Space_Grotesk'] uppercase tracking-widest text-xs hover:text-[#F7941D] transition-colors" href="#">EDITORIAL POLICY</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-['Space_Grotesk'] text-[#F7941D] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">CONTACT</span>
<p className="text-stone-400 font-['Space_Grotesk'] uppercase tracking-widest text-xs">FACILITIES@TCETCOE.ORG</p>
<p className="text-stone-400 font-['Space_Grotesk'] uppercase tracking-widest text-xs">+91 22 2846 1891</p>
</div>
</div>
<div className="border-t border-stone-800 px-12 py-8">
<p className="font-['Space_Grotesk'] text-stone-500 uppercase tracking-widest text-[10px]">
                © 2024 TCET CENTER OF EXCELLENCE. ALL RIGHTS RESERVED.
            </p>
</div>
</footer>
        </div>
    );
}