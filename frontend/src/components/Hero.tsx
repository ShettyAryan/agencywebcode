import React from "react";
import svgPaths from "../imports/svg-nrjcgr4q04";
import { useEffect, useState } from "react";


const carouselItems = [
  {
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1767447370/www.milestoneschildclinic.com__2_y9i4kx.png",
    title: "Milestones: Dr. Joshi's child clinic",
    description: "Brand Design and Web Design & Development.",
    nav: "https://milestoneschildclinic.com/",
  },
  {
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1767632166/web1_gjxejd.png",
    title: "AIGenAgentic Solutions",
    description: "Website Development.",
    nav: "https://aigenagentic.com/",
  },
  {
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1767632168/web2_icgjig.png",
    title: "ConstructXR",
    description: "Web Design & Development.",
    nav: "https://www.constructxr.in/",
  },
  {
    image:
      "https://res.cloudinary.com/dsvgadc5d/image/upload/v1767632168/web3_zdneaa.png",
    title: "Dessire",
    description: "Web Design Consultation.",
    nav: "https://drive.google.com/file/d/1ZNUioQ5H_JW__2b8GAIbLv86RWkvZSpw/view?usp=sharing",
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentItem = carouselItems[currentIndex];

  const handleNavClick = () => {
    if (currentItem.nav) {
      window.open(currentItem.nav, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="hero" className="pt-24 md:pt-28 pb-8 md:pb-12 px-4 md:px-8">
      <div className="grid lg:grid-cols-[70%_30%] gap-4 lg:gap-6 lg:pr-7">
        {/* Left Column - Hero Text */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 flex flex-col gap-3 md:gap-4 relative overflow-hidden min-h-[400px] lg:min-h-[350px]">
          {/* Headline */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <h2 className="font-['Roboto_Flex'] font-semibold text-3xl md:text-5xl  text-[#f9efec] uppercase leading-tight">
                <span className="text-[#1b4bce]">Digital</span> Solutions
              </h2>
              <div className="bg-[#0f0f0f] p-2 border-2 border-[#1b4bce] rounded-full hidden md:flex">
                <div className="bg-[#1b4bce] rounded-full p-2 relative hidden md:flex hover:scale-115 transition-all duration-300">
                  <svg className="w-4 h-4 hover:scale-115 transition-all duration-300" fill="none" viewBox="0 0 24 24">
                    <path
                      d={svgPaths.p2e1cc100}
                      stroke="#FEFCFB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="absolute left-10 top-0 font-['Roboto_Flex'] font-medium text-white text-md uppercase whitespace-nowrap  p-1">
                    Your Tech partner
                  </span>
                </div>
              </div>
            </div>
            <h2 className="font-['Roboto_Flex'] font-semibold text-3xl md:text-5xl text-[#f9efec] uppercase leading-tight">
              That Drive <span className="text-[#1b4bce]">Success</span>
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-lg">
            <p className="font-['Roboto_Mono'] text-[#b3b3b2] text-sm md:text-md leading-relaxed">
              At ConstructDev, we believe in transforming your vision into
              immersive digital experiences with cutting-edge development,
              stunning design, and innovative solutions.
            </p>
          </div>

          {/* Scrolling Tags */}
          <div className="absolute bottom-3 left-3 right-3 bg-[#0f0f0f] rounded-lg p-3.5 md:p-4 overflow-hidden">
            <div className="flex gap-3 items-center animate-scroll whitespace-nowrap">
              {/* First set */}
              <p className="font-['Roboto_Mono'] text-[#1d4fd7] text-sm md:text-base uppercase">
                SEO Management
              </p>
              <div className="w-3 h-3 rounded-full bg-[#1d4fd7] shrink-0" />
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Website Design
              </p>
              <div className="w-3 h-3 rounded-full bg-[#1d4fd7] shrink-0" />
              <p className="font-['Roboto_Mono'] text-[#1d4fd7] text-sm md:text-base uppercase">
                Branding
              </p>
              <div className="w-3 h-3 rounded-full bg-[#1d4fd7] shrink-0" />
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Website Development
              </p>
              <div className="w-3 h-3 rounded-full bg-[#1d4fd7] shrink-0" />
              {/* Duplicate set for seamless loop */}
              <p className="font-['Roboto_Mono'] text-[#1d4fd7] text-sm md:text-base uppercase">
                SEO Management
              </p>
              <div className="w-3 h-3 rounded-full bg-[#1d4fd7] shrink-0" />
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Website Design
              </p>
              <div className="w-3 h-3 rounded-full bg-[#1d4fd7] shrink-0" />
              <p className="font-['Roboto_Mono'] text-[#1d4fd7] text-sm md:text-base uppercase">
                Branding
              </p>
              <div className="w-3 h-3 rounded-full bg-[#1d4fd7] shrink-0" />
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Website Development
              </p>
              <div className="w-3 h-3 rounded-full bg-[#1d4fd7] shrink-0" />
              {/* Third set for extra smoothness */}
              <p className="font-['Roboto_Mono'] text-[#1d4fd7] text-sm md:text-base uppercase">
                SEO Management
              </p>
              <div className="w-3 h-3 rounded-full bg-[#1d4fd7] shrink-0" />
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Website Design
              </p>
              <div className="w-3 h-3 rounded-full bg-[#1d4fd7] shrink-0" />
              <p className="font-['Roboto_Mono'] text-[#1d4fd7] text-sm md:text-base uppercase">
                Branding
              </p>
              <div className="w-3 h-3 rounded-full bg-[#1d4fd7] shrink-0" />
              <p className="font-['Roboto_Mono'] text-[#f0f4fd] text-sm md:text-base uppercase">
                Website Development
              </p>
              <div className="w-3 h-3 rounded-full bg-[#1d4fd7] shrink-0" />
            </div>
          </div>
        </div>

        {/* Right Column - Featured Project Carousel */}
        <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden flex flex-col relative">
          <div className="h-[250px] lg:h-[300px] relative overflow-hidden">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 carousel-slide ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0 z-10'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full z-0'
                    : 'opacity-0 translate-x-full z-0'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-fit"
                />
              </div>
            ))}
          </div>
          <div className="bg-[#1f1f1f] p-4 relative">
            <div
              key={currentIndex}
              className="animate-fade-in"
            >
              <h3 className="font-['Roboto_Flex'] font-medium text-[#f9efec] text-base uppercase mb-1">
                {currentItem.title}
              </h3>
              <p className="font-['Roboto_Flex'] text-[#b3b3b2] text-xs md:text-sm">
                {currentItem.description}
              </p>
            </div>
          </div>
          
          <button
            onClick={handleNavClick}
            className="absolute top-4 right-4 bg-[#1b4bce] rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:bg-[#1640b8] hover:scale-110 active:scale-95 transition-all duration-300 z-20 cursor-pointer"
            aria-label="Visit project"
          >
            <svg className="w-4 h-4 font-bold" fill="none" viewBox="0 0 28 28">
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