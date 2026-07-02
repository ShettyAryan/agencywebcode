import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "./Works";
import svgPaths from "../imports/svg-nrjcgr4q04";
import { ArrowUpRight } from "lucide-react";

export const FILTER_CATEGORIES = [
  { slug: "doctors", label: "Doctors" },
  { slug: "ngo-nonprofits", label: "NGO / Non-profits" },
  { slug: "startups-agencies", label: "Startups / Agencies" },
  { slug: "cafes-restaurants", label: "Cafes & Restaurants" },
  { slug: "real-estate", label: "Real Estate" },
  { slug: "d2c", label: "D2C" },
  { slug: "b2b", label: "B2B" },
  { slug: "saas", label: "SaaS" },
  { slug: "finance", label: "Finance" },
] as const;

export type FilterCategorySlug = (typeof FILTER_CATEGORIES)[number]["slug"];

export function AllWorks() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategorySlug | null>(null);

  return (
    <section className="pt-24 md:pt-28 pb-16 md:pb-24 px-4 md:px-8 min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        {/* Page header */}
        <div className="mb-10 md:mb-14">
          <Link
            to="/#works"
            className="inline-flex items-center gap-2 font-['Roboto_Mono'] text-[#81807e] text-sm uppercase hover:text-[#1b4bce] transition-colors mb-6"
          >
            <span className="opacity-80">←</span> Back to home
          </Link>
          <div className="border-2 border-[#1f1f1f] rounded-2xl p-5 md:p-8 bg-[#1a1a1a]">
            <h1 className="font-['Roboto_Flex'] font-semibold text-3xl md:text-4xl lg:text-5xl text-[#f9efec] uppercase leading-tight">
              All <span className="text-[#1b4bce]">Works</span>
            </h1>
            <p className="font-['Roboto_Flex'] text-[#b3b3b2] text-sm md:text-base mt-3 max-w-2xl">
              A collection of our recent projects across brand design, web development, SaaS, and AI integration.
            </p>
          </div>
        </div>

        {/* Category filters */}
        <div className="mb-8 md:mb-10">
          <p className="font-['Roboto_Mono'] text-[#666666] text-xs uppercase mb-3">Filter by category</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2.5 rounded-xl font-['Roboto_Mono'] font-medium text-sm uppercase transition-all duration-200 ${
                selectedCategory === null
                  ? "bg-[#1b4bce] text-[#fefcfb] border-2 border-[#1b4bce]"
                  : "bg-[#1a1a1a] text-[#81807e] border-2 border-[#1f1f1f] hover:border-[#333] hover:text-[#b3b3b2]"
              }`}
            >
              All
            </button>
            {FILTER_CATEGORIES.map(({ slug, label }) => (
              <button
                key={slug}
                onClick={() => setSelectedCategory(slug)}
                className={`px-4 py-2.5 rounded-xl font-['Roboto_Mono'] font-medium text-sm uppercase transition-all duration-200 ${
                  selectedCategory === slug
                    ? "bg-[#1b4bce] text-[#fefcfb] border-2 border-[#1b4bce]"
                    : "bg-[#1a1a1a] text-[#81807e] border-2 border-[#1f1f1f] hover:border-[#333] hover:text-[#b3b3b2]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid — 2 cards per row from md up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {projects.map((project, index) => {
            const isMatch = selectedCategory === null || (project.filterCategory && project.filterCategory === selectedCategory);
            const handleCardClick = () => {
              if (!isMatch) return;
              if (project.nav) {
                window.open(project.nav, "_blank", "noopener,noreferrer");
              }
            };

            return (
              <article
                key={index}
                onClick={handleCardClick}
                className={`group flex flex-col rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  isMatch
                    ? "bg-[#1a1a1a] border-transparent hover:border-[#1b4bce] hover:scale-[1.02] cursor-pointer"
                    : "bg-[#141414] border-[#1f1f1f] cursor-default pointer-events-none grayscale opacity-70"
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${isMatch ? "group-hover:scale-105" : ""}`}
                  />
                  {isMatch && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-2 right-2 rounded-full bg-[#1b4bce] p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className={`rounded-lg p-1.5 shrink-0 border [&>svg]:w-3.5 [&>svg]:h-3.5 ${isMatch ? "bg-[#1f1f1f] border-[#333]" : "bg-[#1a1a1a] border-[#262626] [&>svg]:opacity-60"}`}>
                      {project.icon}
                    </div>
                    <span className={`font-['Roboto_Flex'] font-medium text-[10px] uppercase ${isMatch ? "text-[#1b4bce]" : "text-[#666666]"}`}>
                      {project.category.split(" and ")[0]}
                    </span>
                  </div>
                  <h2 className={`font-['Roboto_Flex'] font-medium text-sm md:text-base uppercase leading-tight mb-1.5 line-clamp-2 ${isMatch ? "text-[#f0f4fd]" : "text-[#666666]"}`}>
                    {project.title}
                  </h2>
                  <p className="font-['Roboto_Flex'] text-[11px] md:text-xs leading-relaxed line-clamp-2 flex-1 text-[#b3b3b2]">
                    {project.desc}
                  </p>
                  {isMatch && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.nav) {
                          window.open(project.nav, "_blank", "noopener,noreferrer");
                        }
                      }}
                      className="flex items-center gap-1.5 mt-3 w-fit hover:opacity-80 transition-opacity"
                    >
                      <div className="bg-[#0f0f0f] border border-[#262626] rounded-full p-2">
                        <svg
                          className="w-3 h-3"
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
                      <span className="font-['Roboto_Flex'] text-[#f0f4fd] text-[10px] uppercase tracking-wide">
                        View project
                      </span>
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
