import React from "react";
import svgPaths from "../imports/svg-nrjcgr4q04";

export function Reasons() {
  const reasons = [
    {
      title: "Expertise in Cutting-Edge Technologies",
      description: "ConstructDev ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions."
    },
    {
      title: "Proven Track Record of Success",
      description: "ConstructDev demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs."
    },
    {
      title: "Client-Focused and Driven Approach",
      description: "At ConstructDev, we prioritize understanding our clients' unique requirements, fostering transparent communication throughout the development process."
    },
    {
      title: "Dedicated Team of Professionals",
      description: "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business."
    }
  ];

  return (
    <section className="pb-8 md:pb-12 px-4 md:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="border-2 border-[#1f1f1f] rounded-2xl p-3 md:p-4 flex flex-col gap-3 md:gap-4">
          {/* Header */}
          <div className="bg-[#1a1a1a] rounded-xl p-5 md:p-6">
            <h2 className="font-['Roboto_Flex'] font-semibold text-2xl md:text-3xl lg:text-4xl text-[#f9efec] uppercase leading-tight">
              <span className="text-[#1b4bce]">Reasons to Choose</span>{" "}
              ConstructDev
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-xl p-4 md:p-5 flex flex-col gap-4 md:gap-5 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#1b4bce] border-2 border-transparent cursor-pointer"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-['Roboto_Flex'] font-medium text-[#1b4bce] text-lg md:text-xl uppercase leading-tight">
                    {reason.title}
                  </h3>
                </div>
                <p className="font-['Roboto_Flex'] text-[#b3b3b2] text-sm md:text-md leading-relaxed">
                  {reason.description}
                </p>

                <button className="flex items-center gap-2 hover:opacity-80 transition-opacity w-fit mt-auto">
                  <div className="bg-[#0f0f0f] border border-[#262626] rounded-full p-3">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 28 28">
                      <path
                        clipRule="evenodd"
                        d={svgPaths.p3261280}
                        fill="#F0F4FD"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="font-['Roboto_Flex'] text-[#f0f4fd] text-sm">
                    Learn More
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}