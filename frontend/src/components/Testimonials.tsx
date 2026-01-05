import React from "react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "ConstructDev transformed our digital presence completely. Their attention to detail and innovative solutions exceeded our expectations. The team delivered on time and within budget.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, DesignStudio",
      content: "Working with ConstructDev was a game-changer. They understood our vision and brought it to life with cutting-edge technology. Our website traffic increased by 300% after launch.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "The team at ConstructDev is professional, responsive, and incredibly talented. They delivered a stunning website that perfectly represents our brand. Highly recommended!",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "CTO, InnovateLabs",
      content: "ConstructDev's expertise in web development and AI integration helped us create a unique platform. Their technical knowledge and creative solutions are outstanding.",
      rating: 5,
    },
  ];

  const renderTestimonial = (testimonial: typeof testimonials[0], key: number) => (
    <div
      key={key}
      className="bg-black rounded-xl p-4 md:p-5 flex flex-col gap-3 md:gap-4 max-w-xs  md:max-w-md lg:max-w-xl shrink-0 border-2 border-transparent hover:border-[#1b4bce] transition-all duration-300"
    >
      {/* Rating Stars */}
      <div className="flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 md:w-5 md:h-5 text-[#1b4bce]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Content */}
      <p className="font-['Roboto_Flex'] text-[#b3b3b2] text-sm md:text-base leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Author Info */}
      <div className="flex flex-col gap-1 pt-2 border-t border-[#1f1f1f]">
        <p className="font-['Roboto_Flex'] font-medium text-[#f0f4fd] text-sm md:text-base">
          {testimonial.name}
        </p>
        <p className="font-['Roboto_Flex'] text-[#81807e] text-xs md:text-sm">
          {testimonial.role}
        </p>
      </div>
    </div>
  );

  return (
    <section className="pb-8 md:pb-12 px-4 md:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="border-2 border-[#1f1f1f] rounded-2xl p-3 md:p-4 flex flex-col gap-3 md:gap-4">
          {/* Header */}
          <div className="bg-[#1a1a1a] rounded-xl p-5 md:p-6">
            <h2 className="font-['Roboto_Flex'] font-semibold text-2xl md:text-3xl lg:text-4xl text-[#f9efec] uppercase leading-tight">
              Client <span className="text-[#1b4bce]">Testimonials</span>
            </h2>
          </div>

          {/* Infinite Scrolling Testimonials */}
          <div className="bg-[#1a1a1a] rounded-xl p-4 md:p-6 overflow-hidden">
            <div className="testimonials-scroll group">
              {/* First set */}
              {testimonials.map((testimonial, index) => renderTestimonial(testimonial, index))}
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, index) => renderTestimonial(testimonial, index + testimonials.length))}
              {/* Third set for extra smoothness */}
              {testimonials.map((testimonial, index) => renderTestimonial(testimonial, index + testimonials.length * 2))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

