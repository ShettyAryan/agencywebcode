import React from "react";
import imgImage1 from "figma:asset/8410421760a1d164d08527cf8780ec84c55aa884.png";
import imgImage2 from "figma:asset/9333dbfd96156981d7444169ea92aa972ca6be65.png";
import svgPaths from "../imports/svg-nrjcgr4q04";

export function Works() {
  const projects = [
    {
      icon: svgPaths.p2fe78780,
      title: "AIGenAgentic Solutions",
      category: "Web Design and Development",
      description:
        "A full-lifecycle, bespoke, full-stack web application meticulously designed, engineered, and deployed to serve a prominent agency client based in Ireland. The system incorporates an advanced, high-availability booking and reservation engine as its core functionality, enhancing operational efficiency and providing a seamless digital experience for both the agency and its clientele.",
      image: imgImage1,
    },
    {
      icon: svgPaths.p2f781600,
      title: "A-Aura Ecommerce",
      category: "Web Design & Development",
      description:
        "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
      image: imgImage2,
    },
  ];

  return (
    <section id="works" className="pb-8 md:pb-12 px-4 md:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="border-2 border-[#1f1f1f] rounded-2xl p-3 md:p-4 flex flex-col gap-3 md:gap-4">
          {/* Header */}
          <div className="bg-[#1a1a1a] rounded-xl p-5 md:p-6 flex items-center justify-between gap-4 flex-wrap">
            <h2 className="font-['Roboto_Flex'] font-semibold text-2xl md:text-3xl lg:text-4xl text-[#f9efec] uppercase leading-tight">
              Our <span className="text-[#1b4bce]\">Works</span>
            </h2>

            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
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
              <p className="font-['Roboto_Mono'] font-medium text-[#b3b3b2] text-sm md:text-base uppercase">
                ALL Works
              </p>
            </button>
          </div>

          {/* Projects */}
          <div className="flex flex-col gap-3 md:gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="grid md:grid-cols-[1fr,1fr] lg:grid-cols-[60%_40%] gap-0">
                  {/* Project Info */}
                  <div className="p-5 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-5 justify-between">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#1f1f1f] border border-[#333] rounded-lg p-2.5 flex-shrink-0">
                          <svg
                            className="w-5 h-5 md:w-6 md:h-6"
                            fill="none"
                            viewBox="0 0 34 34"
                          >
                            <path d={project.icon} fill="#1b4bce" />
                          </svg>
                        </div>
                        <h3 className="font-['Roboto_Flex'] font-medium text-[#f0f4fd] text-base md:text-lg uppercase leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 w-fit">
                        <p className="font-['Roboto_Flex'] text-[#666666] text-xs">
                          Category
                        </p>
                        <div className="w-1 h-1 rounded-full bg-[#1B4BCE]" />
                        <p className="font-['Roboto_Flex'] font-medium text-[#1b4bce] text-xs">
                          {project.category}
                        </p>
                      </div>

                      <p className="font-['Roboto_Flex'] text-[#b3b3b2] text-xs md:text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <button className="flex items-center gap-2 hover:opacity-80 transition-opacity w-fit">
                      <div className="bg-[#0f0f0f] border border-[#262626] rounded-full p-2.5">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 28 28"
                        >
                          <path
                            clipRule="evenodd"
                            d={svgPaths.p3261280}
                            fill="#F0F4FD"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="font-['Roboto_Flex'] text-[#f0f4fd] text-xs uppercase tracking-wide">
                        Details
                      </p>
                    </button>
                  </div>

                  {/* Project Image */}
                  <div className="h-48 md:h-auto min-h-[300px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}