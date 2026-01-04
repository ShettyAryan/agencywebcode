import React from "react";
import imgImage from "figma:asset/8ae6b78145a41c7d4490b529e1350c7a15c1c2b0.png";
import imgAIGen from "figma:asset/43f4044d43b1739763c114f8ca8c5140b85e2cbd.png";
import imgDessire from "figma:asset/a8551fa71dd7346c09f555df34a43f53d41dba74.png";
import imgConstructXR from "figma:asset/adbbe32d08e5fda08c694cd3e03f9b66077d4fb7.png";
import svgPaths from "../imports/svg-nrjcgr4q04";
import { useEffect, useState } from "react";

const carouselItems = [
  {
    image: imgImage,
    title: "Estatein Real Estate",
    description: "Website Development.",
  },
  {
    image: imgAIGen,
    title: "AIGenAgentic Solutions",
    description: "Website Development.",
  },
  {
    image: imgDessire,
    title: "Dessire",
    description: "Website Development.",
  },
  {
    image: imgConstructXR,
    title: "ConstructXR",
    description: "Website Development.",
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % carouselItems.length,
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentItem = carouselItems[currentIndex];

  return (
    <section id="hero" className="pt-24 md:pt-28 pb-8 md:pb-12 px-4 md:px-8">
      <div className="grid lg:grid-cols-[70%_30%] gap-4 lg:gap-6 pr-7">
        {/* Left Column - Hero Text */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 flex flex-col gap-3 md:gap-4 relative overflow-hidden min-h-[280px] lg:min-h-[320px]">
          {/* Headline */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <h2 className="font-['Roboto_Flex'] font-semibold text-2xl md:text-3xl lg:text-4xl text-[#f9efec] uppercase leading-tight">
                <span className="text-[#1b4bce]">Digital</span>{" "}
                Solutions
              </h2>
              <div className="bg-[#1b4bce] rounded-full p-2 relative hidden md:flex">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d={svgPaths.p2e1cc100}
                    stroke="#FEFCFB"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="absolute left-9 top-1 font-['Roboto_Flex'] font-medium text-white text-xs uppercase whitespace-nowrap">
                  Your Tech partner
                </span>
              </div>
            </div>
            <h2 className="font-['Roboto_Flex'] font-semibold text-2xl md:text-3xl lg:text-4xl text-[#f9efec] uppercase leading-tight">
              That Drive{" "}
              <span className="text-[#1b4bce]">Success</span>
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-lg">
            <p className="font-['Roboto_Flex'] text-[#b3b3b2] text-xs md:text-sm leading-relaxed">
              At ConstructDev, we believe in transforming your
              vision into immersive digital experiences with
              cutting-edge development, stunning design, and
              innovative solutions.
            </p>
          </div>

          {/* Scrolling Tags */}
          <div className="absolute bottom-3 left-3 right-3 bg-[#0f0f0f] rounded-lg p-3.5 md:p-4 overflow-hidden">
            <div className="flex gap-3 items-center animate-scroll whitespace-nowrap">
              <p className="font-['Roboto_Mono'] text-[#1d4fd7] text-sm md:text-base uppercase">
                SEO Management
              </p>
              <div className="w-2.5 h-2.5 rounded-full bg-blue" />
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Website Design
              </p>
              <div className="w-2 h-2 rounded-full bg-[#1B4BCE]" />
              <p className="font-['Roboto_Mono'] text-[#1d4fd7] text-sm md:text-base uppercase">
                Branding
              </p>
              <div className="w-2 h-2 rounded-full bg-[#1B4BCE]" />
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Website Development
              </p>
              <div className="w-2 h-2 rounded-full bg-[#1B4BCE]" />
              <p className="font-['Roboto_Mono'] text-[#1d4fd7] text-sm md:text-base uppercase">
                SEO Management
              </p>
              <div className="w-2 h-2 rounded-full bg-[#1B4BCE]" />
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Website Design
              </p>
              <div className="w-2 h-2 rounded-full bg-[#1B4BCE]" />
              <p className="font-['Roboto_Mono'] text-[#1d4fd7] text-sm md:text-base uppercase">
                Branding
              </p>
              <div className="w-2 h-2 rounded-full bg-[#1B4BCE]" />
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Website Development
              </p>
              <div className="w-2 h-2 rounded-full bg-[#1B4BCE]" />
            </div>
          </div>
        </div>

        {/* Right Column - Featured Project Carousel */}
        <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden flex flex-col relative">
          <div className="h-[200px] lg:h-[220px] relative overflow-hidden">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="w-full h-full object-fit"
            />
          </div>
          <div className="bg-[#1f1f1f] p-4">
            <h3 className="font-['Roboto_Flex'] font-medium text-[#f9efec] text-base uppercase mb-1">
              {currentItem.title}
            </h3>
            <p className="font-['Roboto_Flex'] text-[#b3b3b2] text-xs md:text-sm">
              {currentItem.description}
            </p>
          </div>
          <button className="absolute top-4 right-4 bg-[#1b4bce] rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:bg-[#1640b8] transition-colors z-10">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 28 28"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p3261280}
                fill="#FEFCFB"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}