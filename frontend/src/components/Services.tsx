import React from "react";
import svgPaths from "../imports/svg-nrjcgr4q04";

export function Services() {
  const services = [
    {
      icon: svgPaths.p2e34ee70,
      title: "Web Design & Development",
      description: "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites."
    },
    {
      icon: svgPaths.p3d2b8100,
      title: "Seo Optimization",
      description: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go."
    },
    {
      icon: svgPaths.p2670a00,
      title: "Branding",
      description: "Our Branding service is all about creating visually stunning and user-focused Identity that leaves a lasting impression."
    },
    {
      icon: svgPaths.p70aa500,
      title: "Ai Integration",
      description: "In the digital age, artificial intelligence is a critical aspect of your business's success. Our AI Integration service employs robust automation systems to enhance your business."
    }
  ];

  return (
    <section id="services" className="pb-8 md:pb-12 px-4 md:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="border-2 border-[#1f1f1f] rounded-2xl p-3 md:p-4 flex flex-col gap-3 md:gap-4">
          {/* Header */}
          <div className="bg-[#1a1a1a] rounded-xl p-5 md:p-6">
            <h2 className="font-['Roboto_Flex'] font-semibold text-2xl md:text-3xl lg:text-4xl text-[#f9efec] uppercase leading-tight">
              Our <span className="text-[#1b4bce]">Services</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-xl p-5 md:p-6 flex flex-col gap-4 md:gap-5 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#1b4bce] border-2 border-transparent cursor-pointer">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="bg-[#1f1f1f] border border-[#333] rounded-xl p-3 flex-shrink-0">
                      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 34 34">
                        <path clipRule="evenodd" d={service.icon} fill="#F0F4FD" fillRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-['Roboto_Flex'] font-medium text-[#1b4bce] text-base md:text-lg uppercase leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  
                  <button className="bg-[#1f1f1f] border border-[#333] rounded-full p-2 md:p-3 hover:bg-[#252525] transition-colors flex-shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24">
                      <path clipRule="evenodd" d={svgPaths.pae702c0} fill="#F0F4FD" fillRule="evenodd" />
                    </svg>
                  </button>
                </div>

                <p className="font-['Roboto_Flex'] text-[#b3b3b2] text-xs md:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}