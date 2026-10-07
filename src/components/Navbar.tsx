"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.techStack, href: "#skills" },
    { name: t.nav.work, href: "#work" },
    { name: t.nav.certifications, href: "#certifications" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 120;
        const sectionId = section.getAttribute("id") || "";

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-40 w-full mb-6">
      <div className="glass-panel rounded-2xl px-5 py-3 flex items-center justify-between relative shadow-sm">
        {/* Brand */}
        <Link href="#home" className="flex items-center gap-3 group" aria-label="Ahmad Zaki Home">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#101221] to-[#1e233d] text-purple-300 flex items-center justify-center font-bold font-mono text-sm shadow-md transition-transform group-hover:scale-105">
            AZ
          </div>
          <div>
            <span className="block font-bold text-[15px] leading-tight text-[#101222] font-heading">
              Ahmad Zaki
            </span>
            <span className="block text-[11px] font-medium text-[#6e738c] tracking-wide">
              Full-Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] xl:text-[13.5px] font-medium transition-colors relative py-1 ${
                  isActive ? "text-[#111425] font-semibold" : "text-[#595e75] hover:text-[#111425]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(147,51,234,0.6)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls: Language Toggle & CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Animated Sliding Language Switcher Pill */}
          <div className="relative flex items-center bg-white/80 p-0.5 rounded-full border border-white/95 shadow-xs backdrop-blur-md">
            {/* Sliding Active Pill */}
            <div
              className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-[#0f1221] shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
                language === "id" ? "left-0.5 translate-x-0" : "left-0.5 translate-x-full"
              }`}
            />
            <button
              type="button"
              onClick={() => setLanguage("id")}
              className={`relative z-10 w-8 py-1 rounded-full text-[11px] font-bold text-center transition-colors duration-200 cursor-pointer ${
                language === "id"
                  ? "text-white"
                  : "text-[#626780] hover:text-[#0f1221]"
              }`}
              title="Bahasa Indonesia"
              aria-label="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`relative z-10 w-8 py-1 rounded-full text-[11px] font-bold text-center transition-colors duration-200 cursor-pointer ${
                language === "en"
                  ? "text-white"
                  : "text-[#626780] hover:text-[#0f1221]"
              }`}
              title="English"
              aria-label="English"
            >
              EN
            </button>
          </div>

          {/* Let's Talk Button */}
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 bg-white/85 hover:bg-white text-[#111425] border border-white/95 px-4 py-2 rounded-full text-[13px] font-semibold shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            {t.nav.letsTalk}
            <ArrowUpRight className="w-4 h-4 text-purple-600" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-[#111425] hover:bg-white/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-[calc(100%+10px)] left-0 right-0 glass-panel rounded-2xl p-5 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-3 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm py-2 px-3 rounded-lg font-medium transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-purple-100/60 text-purple-900 font-semibold"
                    : "text-[#4b5069] hover:bg-white/60"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-between pt-2 border-t border-purple-900/10 px-2">
              <span className="text-xs font-semibold text-[#666c84] flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" /> Language / Bahasa:
              </span>
              <div className="relative flex items-center bg-white/90 p-0.5 rounded-full border border-slate-200 shadow-xs">
                <div
                  className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-[#0f1221] shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
                    language === "id" ? "left-0.5 translate-x-0" : "left-0.5 translate-x-full"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setLanguage("id")}
                  className={`relative z-10 px-3 py-1 rounded-full text-xs font-bold transition-colors duration-200 ${
                    language === "id" ? "text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  🇮🇩 ID
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`relative z-10 px-3 py-1 rounded-full text-xs font-bold transition-colors duration-200 ${
                    language === "en" ? "text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  🇬🇧 EN
                </button>
              </div>
            </div>

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-1 text-center bg-[#0e1120] text-white py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
            >
              {t.nav.letsTalk} <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
