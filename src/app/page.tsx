"use client";

import React from "react";
import { ToastProvider } from "@/components/Toast";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function PortfolioContent() {
  const { isTransitioning } = useLanguage();

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-4 relative z-10">
      <Navbar />
      <div
        className={`will-change-[opacity,transform,filter] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isTransitioning
            ? "opacity-0 blur-[2px] translate-y-1.5 scale-[0.996] pointer-events-none"
            : "opacity-100 blur-0 translate-y-0 scale-100"
        }`}
      >
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <ToastProvider>
        <PortfolioContent />
      </ToastProvider>
    </LanguageProvider>
  );
}
