import React, { useRef, useEffect, useState } from "react";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const dotCount = 4; // one per testimonial

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    if (e.deltaY !== 0) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

  // Update active dot from scroll position (within the first set, since content loops)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const updateDot = () => {
      const oneSetWidth = container.scrollWidth / 3;
      const posInSet = container.scrollLeft % oneSetWidth;
      const segment = oneSetWidth / dotCount;
      const index = Math.min(dotCount - 1, Math.floor(posInSet / segment));
      setActiveDot(index);
    };
    updateDot();
    container.addEventListener("scroll", updateDot, { passive: true });
    return () => container.removeEventListener("scroll", updateDot);
  }, [dotCount]);

  const scrollToDot = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const oneSetWidth = container.scrollWidth / 3;
    const segment = oneSetWidth / dotCount;
    container.scrollTo({ left: index * segment, behavior: "smooth" });
  };

  // Auto-scroll: advance horizontally every frame; loop when we pass one set (we have 3 duplicated sets)
  useEffect(() => {
    const speed = 0.6;
    let raf = 0;
    const tick = () => {
      const container = scrollRef.current;
      if (!container) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const oneSetWidth = container.scrollWidth / 3;
      container.scrollLeft += speed;
      if (container.scrollLeft >= oneSetWidth) {
        container.scrollLeft -= oneSetWidth;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const testimonials = [
    {
      name: "Saideepak Deshpande",
      role: "CEO, AIGenAgentic Solutions",
      content: "We are extremely satisfied with the work done by ConstructDev. They delivered a high-quality website that exceeded our expectations. The team is professional, responsive, and has a deep understanding of the latest web technologies. We highly recommend them to anyone looking for a web development partner.",
      rating: 5,
    },
    {
      name: "Deepti Shetty",
      role: "Founder, Dessire",
      content: "ConstructDev delivered a stunning website that perfectly represents our brand. Highly recommended!",
      rating: 5,
    },
    {
      name: "Dr. Vinay Joshi",
      role: "Fouder and Lead Physician, Milestones Child Clinic",
      content: "The entire scheduling system and website are a game-changer. Patients can now book appointments easily, and the system is incredibly user-friendly. Great job!",
      rating: 5,
    },
    {
      name: "Rohit Kumar",
      role: "Marketing, ConstructXR",
      content: "The website is not only visually appealing but also highly functional. It has greatly improved our online presence and engagement.",
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

          {/* Scrollable Testimonials - dots indicate position, no scrollbar */}
          <div className="bg-[#1a1a1a] rounded-xl p-4 md:p-6 overflow-hidden">
            <div
              ref={scrollRef}
              onWheel={handleWheel}
              className="testimonials-no-scrollbar overflow-x-auto overflow-y-hidden scroll-smooth py-2"
            >
              <div className="testimonials-scroll flex gap-4 md:gap-6 w-max">
                {testimonials.map((testimonial, index) => renderTestimonial(testimonial, index))}
                {testimonials.map((testimonial, index) => renderTestimonial(testimonial, index + testimonials.length))}
                {testimonials.map((testimonial, index) => renderTestimonial(testimonial, index + testimonials.length * 2))}
              </div>
            </div>
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 pt-3">
              {Array.from({ length: dotCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToDot(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeDot
                      ? "w-6 bg-[#1b4bce]"
                      : "w-2 bg-[#333] hover:bg-[#444]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

