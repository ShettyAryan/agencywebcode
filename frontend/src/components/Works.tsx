import React from "react";
import svgPaths from "../imports/svg-nrjcgr4q04";
import { Star, MapPin, Cookie, Stethoscope } from "lucide-react";

export function Works() {
const projects = [
  {
    title: "Milestones: Dr. Joshi's child clinic",
    category: "Brand Design and Web Design & Development",
    icon: <Stethoscope className="text-[#0033FF] w-5 h-5" />,
    desc: "A complete end to end brand design and web design & development project for a child clinic with a complete booking system storing patient data and appointments in google sheets and calender.",
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1767447370/www.milestoneschildclinic.com__2_y9i4kx.png",
    nav: "https://milestoneschildclinic.com/",
  },
  {
    title: "AIGenAgentic Solutions",
    category: "Web Design and Development",
    icon: <Star className="text-[#0033FF] w-5 h-5" />,
    desc: "A full-lifecycle, bespoke, full-stack web application meticulously designed, engineered, and deployed to serve a prominent agency client based in Ireland. The system incorporates an advanced, high-availability booking and reservation engine as its core functionality, enhancing operational efficiency and providing a seamless digital experience for both the agency and its clientele.",
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1767632166/web1_gjxejd.png",
    nav: "https://aigenagentic.com/",
  },
  {
    title: "Dessire",
    category: "Web Design Consultation",
    icon: <Cookie className="text-[#0033FF] w-5 h-5" />,
    desc: "Provided expert strategic consultation focused on optimizing the client's public-facing website's UI & UX. The engagement delivered a comprehensive roadmap covering design methodologies and search engine optimization (SEO) best practices specifically targeted at maximizing organic traffic acquisition and significantly improving on-site client conversion rates.",
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1767632168/web3_zdneaa.png",
    nav: "https://drive.google.com/file/d/1ZNUioQ5H_JW__2b8GAIbLv86RWkvZSpw/view?usp=sharing",
  },
  {
    title: "ConstructXR",
    category: "Web Design & Development and AI Integration",
    icon: <MapPin className="text-[#0033FF] w-5 h-5" />,
    desc: "Led the full-cycle design and development of an innovative digital platform anchored by an integrated intelligent conversational agent. The solution is a production-ready, web application where the AI Chatbot serves as a core functional component, enabling 24/7 automated interaction, personalized service delivery, and providing a scalable method for improving operational efficiency and user engagement.",
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1767632168/web2_icgjig.png",
    nav: "https://www.constructxr.in/",
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
            {projects.map((project, index) => {
              const handleNavClick = () => {
                if (project.nav) {
                  window.open(project.nav, '_blank', 'noopener,noreferrer');
                }
              };

              return (
              <div
                key={index}
                onClick={handleNavClick}
                className="bg-[#1a1a1a] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:border-2 hover:border-[#1b4bce] border-2 border-transparent cursor-pointer"
              >
                <div className="grid md:grid-cols-[1fr,1fr] lg:grid-cols-[60%_40%] gap-0">
                  {/* Project Info */}
                  <div className="p-5 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-5 justify-between">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#1f1f1f] border border-[#333] rounded-lg p-2.5 shrink-0">
                          <div className="w-5 h-5 md:w-6 md:h-6">
                            {project.icon}
                          </div>
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
                        {project.desc}
                      </p>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.nav) {
                          window.open(project.nav, '_blank', 'noopener,noreferrer');
                        }
                      }}
                      className="flex items-center gap-2 hover:opacity-80 transition-opacity w-fit"
                    >
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}