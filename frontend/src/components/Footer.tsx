import React from "react";
import svgPaths from "../imports/svg-nrjcgr4q04";
import { MessageCircleIcon } from "lucide-react";

// Your WhatsApp number: country code + number, no + or spaces (e.g. 919876543210 for India).
// You can set VITE_WHATSAPP_NUMBER in .env instead to avoid committing the number.
const WHATSAPP_NUMBER = (import.meta as any).env?.VITE_WHATSAPP_NUMBER || "919876543210";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function Footer() {
  return (
    <footer className="pb-6 md:pb-8 px-4 md:px-8">
      <div className="max-w-8xl mx-auto flex flex-col gap-3 md:gap-4">
        {/* Footer Links */}
        <div className="bg-[#1a1a1a] rounded-xl p-5 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <div className="flex flex-col gap-4 md:gap-5">
              <h3 className="font-['Roboto_Mono'] font-bold text-[#1b4bce] text-base md:text-lg">Home</h3>
              <div className="flex flex-col gap-3 font-['Roboto_Flex'] text-[#81807e] text-xs md:text-sm">
                <a href="/#reasons" className="hover:text-[#1b4bce] transition-colors">Why Us</a>
                <a href="/#works" className="hover:text-[#1b4bce] transition-colors">Our Work</a>
                <a href="/#testimonials" className="hover:text-[#1b4bce] transition-colors">Testimonials</a>
                <a href="/contact" className="hover:text-[#1b4bce] transition-colors">Contact Us</a>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-5">
              <h3 className="font-['Roboto_Mono'] font-bold text-[#1b4bce] text-base md:text-lg">Services</h3>
              <div className="flex flex-col gap-3 font-['Roboto_Flex'] text-[#81807e] text-xs md:text-sm">
                <a href="/#services" className="hover:text-[#1b4bce] transition-colors">Web Development</a>
                <a href="/#services" className="hover:text-[#1b4bce] transition-colors">SEO Optimization</a>
                <a href="/#services" className="hover:text-[#1b4bce] transition-colors">Web Design</a>
                <a href="/#services" className="hover:text-[#1b4bce] transition-colors">AI Integration</a>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-5">
              <h3 className="font-['Roboto_Mono'] font-bold text-[#1b4bce] text-base md:text-lg">Projects</h3>
              <div className="flex flex-col gap-3 font-['Roboto_Flex'] text-[#81807e] text-xs md:text-sm">
                <a href="/works" className="hover:text-[#1b4bce] transition-colors">Milestones</a>
                <a href="/works" className="hover:text-[#1b4bce] transition-colors">AIGenAgentic Solutions</a>
                <a href="/works" className="hover:text-[#1b4bce] transition-colors">ConstructXR</a>
                <a href="/works" className="hover:text-[#1b4bce] transition-colors">Dessire</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-[#1a1a1a] rounded-xl p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-['Roboto_Mono'] text-[#b3b3b2] text-xs md:text-sm">
            © 2025 ConstructDev. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="font-['Roboto_Mono'] text-[#b3b3b2] text-xs md:text-sm hover:text-[#1b4bce] transition-colors">
              Terms & Conditions
            </a>
            <div className="h-4 w-px bg-[#232329] rotate-90" />
            <a href="#" className="font-['Roboto_Mono'] text-[#b3b3b2] text-xs md:text-sm hover:text-[#1b4bce] transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Social Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1a1a] rounded-xl p-4 md:p-5 flex flex-col gap-8 md:gap-10 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#1b4bce] border-2 border-transparent cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <div className="bg-[#1f1f1f] border border-[#333] rounded-lg p-2.5">
                <MessageCircleIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <span className="bg-[#1f1f1f] border border-[#333] rounded-full p-2 md:p-2.5 group-hover:bg-[#252525] transition-colors inline-flex">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.pae702c0} fill="#F0F4FD" fillRule="evenodd" />
                </svg>
              </span>
            </div>
            <div>
              <h4 className="font-['Roboto_Flex'] font-medium text-[#f9efec] text-base md:text-lg uppercase mb-2">
                Whatsapp
              </h4>
              <p className="font-['Roboto_Flex'] text-[#b3b3b2] text-xs md:text-sm">
                Connect with us on Whatsapp.
              </p>
            </div>
          </a>

          <a
            href="https://x.com/ConstructDevHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a1a1a] rounded-xl p-4 md:p-5 flex flex-col gap-8 md:gap-10 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[#1b4bce] border-2 border-transparent cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <div className="bg-[#1f1f1f] border border-[#333] rounded-lg p-2.5">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 34 34">
                  <path d={svgPaths.p7f44580} fill="#F0F4FD" />
                </svg>
              </div>
              <button className="bg-[#1f1f1f] border border-[#333] rounded-full p-2 md:p-2.5 hover:bg-[#252525] transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.pae702c0} fill="#F0F4FD" fillRule="evenodd" />
                </svg>
              </button>
            </div>
            <div>
              <h4 className="font-['Roboto_Flex'] font-medium text-[#f9efec] text-base md:text-lg uppercase mb-2">
                Twitter
              </h4>
              <p className="font-['Roboto_Flex'] text-[#b3b3b2] text-xs md:text-sm">
                Tweet about interesting coding challenges you've overcome.
              </p>
            </div>
          
          </a>
        </div>
      </div>
    </footer>
  );
}