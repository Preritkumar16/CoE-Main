"use client";

import Link from "next/link";
import { useState } from "react";

export default function LaboratoryPage() {
  const [activeFilter, setActiveFilter] = useState("All Equipment");

  const filters = ["All Equipment", "Electronics", "Computing", "Fabrication"];

  return (
    <>

      <main className="pt-[100px] md:pt-[120px] pb-20 max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <section className="mb-4 md:mb-8 md:mb-16 border-l-4 border-[#002155] pl-4 md:pl-8 py-4 mt-8">
          <h2 className="text-3xl md:text-[40px] font-headline tracking-tight leading-none mb-4">Laboratory Infrastructure &amp; Research Facilities</h2>
          <p className="max-w-3xl text-lg text-[#434651] font-body leading-relaxed">
            The TCET Center of Excellence houses state-of-the-art computational and experimental environments designed for high-impact multidisciplinary research. Our facilities serve as the bedrock for innovation in Electronics, Fabrication, and Advanced Computing.
          </p>
        </section>

        {/* Equipment Filter */}
        <section className="mb-4 md:mb-8 md:mb-12">
          <div className="flex flex-wrap gap-1 border-b border-[#c4c6d3] pb-px">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 md:px-8 py-3 font-['Inter'] text-xs font-bold uppercase tracking-wider transition-all ${
                  activeFilter === filter
                    ? "bg-[#002155] text-white"
                    : "bg-[#e9e8e4] text-[#434651] hover:bg-[#e3e2df]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* Equipment Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#c4c6d3] mb-20">
          {/* Equipment Item 1 */}
          <div className="border-r border-b border-[#c4c6d3] p-6 bg-white">
            <div className="aspect-video mb-6 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover grayscale-img"
                alt="High-precision digital oscilloscope on a clean laboratory workbench"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhoT1SdZZYyvVB7pZ01EbLd_ybTFnomxautcchnI1YaNhLR3ATcfvIk9rV_S0DzDLTYVJBfS3q_AtaAQPzCdMRt2iMks5Pf9nld3T9Tna1dEs5FIs4LAmEbSWN31CXyxxrUWvLPbOpjmdr6TDlSAZ5mKLdocKNhqmUPm1bGP74NgLeT4KtcwxTEv3ca8TB9dwOGrGyx0vxHtR4n7DIZCp1yxPtq4ssjOdaSI2uQrJIUQRk36efMx5tLkd-E-JDOOKl1iRW5wZuw-M"
              />
            </div>
            <h3 className="font-headline font-bold text-2xl mb-2 italic">DSOX3024T Digital Storage Oscilloscope</h3>
            <p className="text-sm font-['Inter'] text-[#8c4f00] font-bold uppercase mb-4 tracking-tighter">Electronics / Signal Analysis</p>
            <div className="space-y-2 text-sm text-[#434651] border-t border-[#c4c6d3] pt-4">
              <div className="flex justify-between"><span>Bandwidth:</span><span className="font-semibold text-[#1b1c1a]">200 MHz</span></div>
              <div className="flex justify-between"><span>Channels:</span><span className="font-semibold text-[#1b1c1a]">4 Analog + 16 Digital</span></div>
              <div className="flex justify-between"><span>Sample Rate:</span><span className="font-semibold text-[#1b1c1a]">5 GSa/s</span></div>
            </div>
          </div>

          {/* Equipment Item 2 */}
          <div className="border-r border-b border-[#c4c6d3] p-6 bg-white">
            <div className="aspect-video mb-6 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover grayscale-img"
                alt="Powerful server rack in a dark room with blue status lights"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtZsCIDkxEcZaGGO4P6OhC7AEkY-d9qnaeizUsxOcMWqMcxN-xyWoxn9wl3vhFlw7a0mkLdZQGL6-7Ayk6yyQ0EdcA-Bd-osNCUkMVat6K68bnu2LP_uxvOXw4VOq5dZrnovEslGpF4MTyAuiK9JuLrzk3Le_ea7AZlcT5Fo7_1X6CRHh2C5_FVPtT4s9Tpi2l57VSlmAYRlgexhBbDJt1vD5g7YwZHYH8DNxhrLt0cJGWqjKY3XhDm3FiDEvGuRaz1jrg0-DhKyg"
              />
            </div>
            <h3 className="font-headline font-bold text-2xl mb-2 italic">NVIDIA DGX Station A100</h3>
            <p className="text-sm font-['Inter'] text-[#8c4f00] font-bold uppercase mb-4 tracking-tighter">Computing / AI &amp; ML</p>
            <div className="space-y-2 text-sm text-[#434651] border-t border-[#c4c6d3] pt-4">
              <div className="flex justify-between"><span>GPU Memory:</span><span className="font-semibold text-[#1b1c1a]">320 GB Total</span></div>
              <div className="flex justify-between"><span>Performance:</span><span className="font-semibold text-[#1b1c1a]">2.5 PetaFLOPS AI</span></div>
              <div className="flex justify-between"><span>CUDA Cores:</span><span className="font-semibold text-[#1b1c1a]">27,648</span></div>
            </div>
          </div>

          {/* Equipment Item 3 */}
          <div className="border-r border-b border-[#c4c6d3] p-6 bg-white">
            <div className="aspect-video mb-6 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover grayscale-img"
                alt="Industrial 3D printer extruding precision mechanical parts"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB44-P8e82oNHPGyeEsbnTLJwJtu0QaE4W3EISMUQ1TgKDD3_uy5fvTcbL0IoVHwHUbriSb3j_M19Az1MNjSQetFn0One6JXleY_uNffATgM4w-sQC9MqCLXaFJD5l-UOwlfbdRixYQJmkHr75iKNSKXNuawvFoNikDWIgfsFJWPyLfc0spohHeQ6m9Fc7obCAch7V7upesoFZydIVrp-vv9tFLGALZLDwBPQEo5kvpuZRHsu3Ai0Em8-y3pQo3P2-5GdWftkGL0DU"
              />
            </div>
            <h3 className="font-headline font-bold text-2xl mb-2 italic">Ultimaker S5 Pro Bundle</h3>
            <p className="text-sm font-['Inter'] text-[#8c4f00] font-bold uppercase mb-4 tracking-tighter">Fabrication / Prototyping</p>
            <div className="space-y-2 text-sm text-[#434651] border-t border-[#c4c6d3] pt-4">
              <div className="flex justify-between"><span>Build Volume:</span><span className="font-semibold text-[#1b1c1a]">330 x 240 x 300 mm</span></div>
              <div className="flex justify-between"><span>Layer Resolution:</span><span className="font-semibold text-[#1b1c1a]">20 Microns</span></div>
              <div className="flex justify-between"><span>Feeder:</span><span className="font-semibold text-[#1b1c1a]">Dual Extrusion</span></div>
            </div>
          </div>
        </section>

        {/* Facilities List */}
        <section className="mb-4 md:mb-8">
          <div className="flex items-center gap-4 mb-4 md:mb-8">
            <div className="h-[1px] flex-grow bg-[#c4c6d3]"></div>
            <h2 className="text-sm font-['Inter'] font-black uppercase tracking-[0.2em] text-[#002155]">Specialized Research Facilities</h2>
            <div className="h-[1px] flex-grow bg-[#c4c6d3]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            {[
              "Advanced VLSI Design Center",
              "Cyber-Physical Systems Lab",
              "Center for Embedded Systems & IoT",
              "Digital Signal Processing Unit",
              "Microwave Engineering Laboratory",
              "Robotics & Automation Hub",
              "Cloud Computing & Big Data Lab",
              "Renewable Energy Systems Cell",
            ].map((facility) => (
              <div key={facility} className="flex justify-between py-3 border-b border-[#c4c6d3]">
                <span className="font-headline italic text-lg text-[#002155]">{facility}</span>
                <span className="material-symbols-outlined text-[#747782]">chevron_right</span>
              </div>
            ))}
          </div>
        </section>
      </main>

    </>
  );
}