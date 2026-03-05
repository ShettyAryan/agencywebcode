import React from "react";
import { Link } from "react-router-dom";
import svgPaths from "../imports/svg-nrjcgr4q04";
import { Star, MapPin, Cookie, Stethoscope, BrainCircuit, Building2, ShoppingBag, Briefcase, UtensilsCrossed } from "lucide-react";

export const projects = [
  {
    title: "Elegance Bags",
    category: "D2C E-commerce Website Development",
    filterCategory: "d2c" as const,
    icon: <ShoppingBag className="text-[#0033FF] w-5 h-5" />,
    desc: "Built a sleek and conversion-optimized D2C e-commerce platform designed to elevate brand perception while maximizing product discoverability. The website features streamlined navigation, persuasive product storytelling, smooth checkout flow, and mobile-first optimization to drive direct online sales and customer retention.",
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1772536129/elegancebags_ycnxnb.png",
    nav: "https://elegancebags.constructdev.in/",
  },
  {
    title: "Studio Gifting",
    category: "B2B Corporate Gifting Website",
    filterCategory: "b2b" as const,
    icon: <Briefcase className="text-[#0033FF] w-5 h-5" />,
    desc: "Developed a structured B2B website tailored for corporate gifting solutions, focused on positioning the brand as a reliable large-scale partner. The platform highlights bulk order capabilities, curated catalog browsing, enquiry-driven funnels, and strategic trust elements to attract and convert corporate decision-makers.",
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1772536115/gifting_i6d6oq.png",
    nav: "https://studiogifting.constructdev.in/",
  },
  {
    title: "The Paradise",
    category: " Website Design & Development",
    filterCategory: "real-estate" as const,
    icon: <UtensilsCrossed className="text-[#0033FF] w-5 h-5" />,
    desc: "Crafted a luxury, premium, design-forward digital experience for a high-end hospitality brand. The website blends elegant typography, immersive visuals, refined spacing, and smooth interactions to reflect exclusivity and sophistication. Built not just for information, but to elevate brand perception, enhance desirability, and drive reservations through intentional design.",
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1772536134/paradise_wjppcg.png",
    nav: "https://theparadise.constructdev.in/",
  },
  {
    title: "Dr. Shetty’s Cosmetology",
    category: "Medical & Cosmetology Clinic Website",
    filterCategory: "doctors" as const,
    icon: <Stethoscope className="text-[#0033FF] w-5 h-5" />,
    desc: "Designed and developed a professional, credibility-focused medical website aimed at increasing patient trust and consultation bookings. The platform highlights treatment expertise, service clarity, patient-centric navigation, and strong trust signals to position the clinic as a premium and reliable cosmetology practice.",
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1772536140/drshettycosmetics_djt4cc.png",
    nav: "https://drshettyscosmetology.constructdev.in/",
  },
  {
    title: "Summuro AI",
    category: "Saas Web Application",
    filterCategory: "saas" as const,
    icon: <BrainCircuit className="text-[#0033FF] w-5 h-5" />,
    desc: "A SaaS web application that converts PDFs into short-form reels for easier understanding",
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1770107029/Screenshot_2026-02-03_135239_rivftk.png",
    nav: "https://summuro-ai.vercel.app/",
  },
  {
    title: "Milestones: Dr. Joshi's child clinic",
    category: "Brand Design and Web Design & Development",
    filterCategory: "doctors" as const,
    icon: <Stethoscope className="text-[#0033FF] w-5 h-5" />,
    desc: "A complete end to end brand design and web design & development project for a child clinic with a complete booking system storing patient data and appointments in google sheets and calender.",
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1767447370/www.milestoneschildclinic.com__2_y9i4kx.png",
    nav: "https://milestoneschildclinic.com/",
  },

  {
    title: "AIGenAgentic Solutions",
    category: "Web Design and Development",
    filterCategory: "startups-agencies" as const,
    icon: <Star className="text-[#0033FF] w-5 h-5" />,
    desc: "A full-lifecycle, bespoke, full-stack web application meticulously designed, engineered, and deployed to serve a prominent agency client based in Ireland. The system incorporates an advanced, high-availability booking and reservation engine as its core functionality, enhancing operational efficiency and providing a seamless digital experience for both the agency and its clientele.",
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1767632166/web1_gjxejd.png",
    nav: "https://aigenagentic.com/",
  },
  {
    title: "Dessire",
    category: "Web Design Consultation",
    filterCategory: "cafes-restaurants" as const,
    icon: <Cookie className="text-[#0033FF] w-5 h-5" />,
    desc: "Provided expert strategic consultation focused on optimizing the client's public-facing website's UI & UX. The engagement delivered a comprehensive roadmap covering design methodologies and search engine optimization (SEO) best practices specifically targeted at maximizing organic traffic acquisition and significantly improving on-site client conversion rates.",
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1767632168/web3_zdneaa.png",
    nav: "https://drive.google.com/file/d/1ZNUioQ5H_JW__2b8GAIbLv86RWkvZSpw/view?usp=sharing",
  },
  {
    title: "ConstructXR",
    category: "Web Design & Development and AI Integration",
    filterCategory: "startups-agencies" as const,
    icon: <MapPin className="text-[#0033FF] w-5 h-5" />,
    desc: "A high converting web application that showcases all the services and projects and allows users to book appointments.",
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1767632168/web2_icgjig.png",
    nav: "https://www.constructxr.in/",
  },
  {
    title: "Apex Builders",
    category: "Real Estate Website Design & Development",
    filterCategory: "real-estate" as const,
    icon: <Building2 className="text-[#0033FF] w-5 h-5" />,
    desc: "Designed and developed a minimal, modern real estate website focused on clarity, structure, and high-conversion user flow. The platform emphasizes clean layouts, spacious typography, simplified project presentation, and distraction-free navigation to help potential buyers explore properties effortlessly and generate qualified enquiries.",
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1772536112/apexbuilders_yxm3zl.png",
    nav: "https://apexbuilders.constructdev.in/",
  },
];

export function Works() {
  return (
    <section id="works" className="pb-8 md:pb-12 px-4 md:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="border-2 border-[#1f1f1f] rounded-2xl p-3 md:p-4 flex flex-col gap-3 md:gap-4">
          {/* Header */}
          <div className="bg-[#1a1a1a] rounded-xl p-5 md:p-6 flex items-center justify-between gap-4 flex-wrap">
            <h2 className="font-['Roboto_Flex'] font-semibold text-2xl md:text-3xl lg:text-4xl text-[#f9efec] uppercase leading-tight">
              Our <span className="text-[#1b4bce]">Works</span>
            </h2>

            <Link to="/works" className="flex items-center gap-2 hover:opacity-80 border-2 border-gray-700 rounded-full py-2 px-4 hover:scale-105 transition-all duration-300">
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
            </Link>
          </div>

          {/* Projects */}
          <div className="flex flex-col gap-3 md:gap-4">
            {projects.slice(0, 3).map((project, index) => {
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
                <div className="grid md:grid-cols-[1fr,1fr] lg:grid-cols-[50%_50%] gap-0">
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
                  <div className="h-48 md:h-auto min-h-75">
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