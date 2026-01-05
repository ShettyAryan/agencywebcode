import React from "react";
import svgPaths from "../imports/svg-nrjcgr4q04";

export function CTA() {
  return (
    <section className="pb-8 md:pb-12 px-4 md:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="bg-[#1d4fd7] rounded-xl p-5 md:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8">
          <div className="flex-1 flex flex-col gap-2">
            <h2 className="font-['Roboto_Flex'] font-medium text-white text-xl md:text-2xl lg:text-3xl uppercase leading-tight">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="font-['Roboto_Flex'] font-medium text-[#1a1a1a] text-xs md:text-sm leading-relaxed">
              Take the first step towards digital success with ConstructDev by
              your side. Our team of experts is eager to craft tailored
              solutions that drive growth for your business.
            </p>
          </div>

          <button className="bg-[#0f0f0f] rounded-lg px-5 py-3 md:py-3.5 flex items-center gap-2 hover:bg-[#1a1a1a] transition-colors shrink-0">
            <p className="font-['Roboto_Flex'] font-medium text-[#f3dfd8] text-xs md:text-sm uppercase">
              Get in Touch
            </p>
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              viewBox="0 0 28 28"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p3261280}
                fill="#1D4FD7"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Social Media Scroll */}
        <div className="bg-[#1a1a1a] rounded-xl p-3 md:p-4 mt-4 md:mt-5 overflow-hidden">
          <div className="flex gap-4 items-center animate-scroll whitespace-nowrap">
            {/* First set */}
            <div className="flex items-center gap-4">
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Let's Work Together
              </p>
              <div className="w-2 h-2 rounded-full bg-[#1B4BCE]" />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-4">
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Let's Work Together
              </p>
              <div className="w-2 h-2 rounded-full bg-[#1B4BCE]" />
            </div>
            {/* Third set for extra smoothness */}
            <div className="flex items-center gap-4">
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Let's Work Together
              </p>
              <div className="w-2 h-2 rounded-full bg-[#1B4BCE]" />
            </div>
            <div className="flex items-center gap-4">
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Let's Work Together
              </p>
              <div className="w-2 h-2 rounded-full bg-[#1B4BCE]" />
            </div>
            <div className="flex items-center gap-4">
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Let's Work Together
              </p>
              <div className="w-2 h-2 rounded-full bg-[#1B4BCE]" />
            </div>
            <div className="flex items-center gap-4">
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Let's Work Together
              </p>
              <div className="w-2 h-2 rounded-full bg-[#1B4BCE]" />
            </div>
            <div className="flex items-center gap-4">
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Let's Work Together
              </p>
              <div className="w-2 h-2 rounded-full bg-[#1B4BCE]" />
            </div>
            <div className="flex items-center gap-4">
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Let's Work Together
              </p>
              <div className="w-2 h-2 rounded-full bg-[#1B4BCE]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}