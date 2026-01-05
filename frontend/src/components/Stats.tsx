import React from "react";
import svgPaths from "../imports/svg-nrjcgr4q04";

export function Stats() {
  return (
    <section className="pb-8 md:pb-12 px-4 md:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="border-2 border-[#1f1f1f] rounded-2xl p-3 md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
            {/* Stats Cards */}
            <div className="bg-[#1a1a1a] rounded-xl p-4 md:p-6 text-center transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#1b4bce] border-2 border-transparent cursor-pointer">
              <p className="font-['Roboto_Mono'] font-medium text-[#b3b3b2] text-sm md:text-base mb-3 md:mb-4 uppercase">
                Clients
              </p>
              <p className="font-['Roboto_Flex'] font-semibold text-[#1d4fd7] text-3xl md:text-5xl uppercase">
                4
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-xl p-4 md:p-6 text-center transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#1b4bce] border-2 border-transparent cursor-pointer">
              <p className="font-['Roboto_Mono'] font-medium text-[#b3b3b2] text-sm md:text-base mb-3 md:mb-4">
                PROJECTS
              </p>
              <p className="font-['Roboto_Flex'] font-semibold text-[#1d4fd7] text-3xl md:text-5xl uppercase">
                4
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-xl p-4 md:p-6 text-center transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#1b4bce] border-2 border-transparent cursor-pointer">
              <p className="font-['Roboto_Mono'] font-medium text-[#b3b3b2] text-sm md:text-base mb-3 md:mb-4">
                HAPPY CLIENTS
              </p>
              <p className="font-['Roboto_Flex'] font-semibold text-[#1d4fd7] text-3xl md:text-5xl uppercase">
                100%
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-xl p-4 md:p-6 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#1b4bce] border-2 border-transparent cursor-pointer">
              <button className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
                <div className="bg-[#0f0f0f] border border-[#262626] rounded-full p-3 md:p-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 28 28">
                    <path clipRule="evenodd" d={svgPaths.p3261280} fill="#F0F4FD" fillRule="evenodd" />
                  </svg>
                </div>
                <p className="font-['Roboto_Mono'] font-medium text-[#f0f4fd] text-base md:text-lg uppercase">
                  Know More
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}