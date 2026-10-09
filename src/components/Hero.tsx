"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Award } from "lucide-react";
import { useToast } from "./Toast";
import { useLanguage } from "@/context/LanguageContext";
import { TechLogo } from "./TechLogos";
import Marquee from "./Marquee";
import Reveal from "./Reveal";

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();
  const { language, t } = useLanguage();

  // Typewriter Animation
  const roles = t.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // When language changes, reset typewriter smoothly to start typing from the new language's first role
  useEffect(() => {
    setDisplayText("");
    setIsDeleting(false);
    setRoleIndex(0);
  }, [roles]);

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 30 : 70;
      timer = setTimeout(() => {
        setDisplayText((prev) => {
          if (!currentRole.startsWith(prev) && !isDeleting) {
            return currentRole.slice(0, 1);
          }
          return isDeleting
            ? currentRole.slice(0, prev.length - 1)
            : currentRole.slice(0, prev.length + 1);
        });
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!visualRef.current) return;
    const r = visualRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    visualRef.current.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translate3d(${x * 4}px, ${y * 4}px, 0)`;
  };

  const handlePointerLeave = () => {
    if (!visualRef.current) return;
    visualRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translate3d(0,0,0)";
  };

  const handleOpenCv = () => {
    const cvFile =
      language === "id"
        ? "/assets/CV_Ahmad_Zaki_Full_Stack_ATS.pdf"
        : "/assets/CV_Ahmad_Zaki_Full_Stack_ATS_English.pdf";
    window.open(cvFile, "_blank", "noopener,noreferrer");
    showToast(t.hero.cvToast, "success");
  };

  const toolkit = [
    { name: "PHP", label: "PHP" },
    { name: "Laravel", label: "Laravel" },
    { name: "JavaScript", label: "JavaScript" },
    { name: "TypeScript", label: "TypeScript" },
    { name: "Next.js", label: "Next.js" },
    { name: "React", label: "React" },
    { name: "FastAPI", label: "FastAPI" },
    { name: "Python", label: "Python" },
    { name: "MySQL", label: "MySQL" },
    { name: "PostgreSQL", label: "PostgreSQL" },
    { name: "Tailwind", label: "Tailwind" },
    { name: "Docker", label: "Docker" },
    { name: "Git", label: "Git" },
    { name: "Postman", label: "Postman" },
  ];

  return (
    <section id="home" className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-14 mb-10 overflow-hidden relative shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-6 items-center">
        {/* Left Copy */}
        <div className="md:col-span-7 lg:col-span-6 flex flex-col justify-center">
          <Reveal direction="up" delay={0}>
            {/* Clean Greeting with Pulsing Green Active Status Dot */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="relative flex h-2.5 w-2.5" title="Active & Available">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(168,185,129,0.8)]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6366f1]">
              {t.hero.greeting}
            </span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-[72px] text-[#0f1222] tracking-tight leading-[1.05] mb-2">
            {t.hero.name}
          </h1>

          {/* Typewriter Role Header */}
          <div className="h-10 sm:h-12 flex items-center mb-5">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[34px] text-[#6366f1] leading-[1.2] flex items-center">
              <span>{displayText}</span>
              <span className="inline-block w-[3px] sm:w-[4px] h-6 sm:h-8 bg-[#6366f1] ml-1.5 animate-pulse" />
            </h2>
          </div>

          <p className="text-[#5e6378] text-sm sm:text-[15px] leading-relaxed max-w-lg mb-8">
            {t.hero.bio}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <Link
              href="#work"
              className="bg-[#0f1221] hover:bg-[#1e2338] text-white rounded-full px-6 py-3 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-md hover:-translate-y-0.5"
            >
              {t.hero.viewWork} <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              onClick={handleOpenCv}
              className="bg-white/80 hover:bg-white text-[#101221] border border-white/95 rounded-full px-6 py-3 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
              type="button"
            >
              {t.hero.downloadCv} <ArrowUpRight className="w-4 h-4 text-purple-600" />
            </button>
          </div>

          {/* Premium Toolkit with Horizontal Auto-Scrolling */}
          <div className="pt-2 max-w-full overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#8b90a4]">
                {t.hero.toolkitTitle}
              </div>
              <span className="text-[10px] text-[#a0a5b8] font-medium hidden sm:inline">
                {t.hero.autoScroll}
              </span>
            </div>
            
            <Marquee speed={60} pauseOnHover={true} gap="gap-2.5" className="py-1">
              {toolkit.map((item) => (
                <div
                  key={item.name}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/75 hover:bg-white border border-white/95 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group cursor-default shrink-0"
                >
                  <TechLogo name={item.name} className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-xs font-semibold text-[#3b4055] group-hover:text-[#0e1122] transition-colors whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </div>

      {/* Right Visual / Exact Organic Glass Frame Wrapping Profile Photo */}
      <div className="md:col-span-5 lg:col-span-6 flex justify-center items-center py-6 relative">
        <Reveal direction="up" delay={100} className="w-full flex justify-center">
          {/* Ambient Glow Aura */}
          <div className="absolute w-80 h-80 sm:w-[440px] sm:h-[440px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-blue-400/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

          <div
            ref={visualRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="relative transition-transform duration-300 ease-out flex items-center justify-center select-none w-full max-w-[480px]"
          >
            {/* SVG Glowing Specular Arc Lines */}
            <svg
              className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)] pointer-events-none z-10 opacity-70"
              viewBox="0 0 500 500"
              fill="none"
            >
              <defs>
                <linearGradient id="neonArc" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path
                d="M 60 250 C 50 120, 160 50, 320 60 C 420 70, 460 140, 460 260"
                stroke="url(#neonArc)"
                strokeWidth="2"
                strokeLinecap="round"
                className="drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
              />
              <path
                d="M 70 340 C 90 440, 240 460, 380 390"
                stroke="url(#neonArc)"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>

            {/* Floating Glass Orb / Lens with Sparkle Diamond (Left) */}
            <div className="absolute -left-4 sm:-left-6 top-[55%] -translate-y-1/2 z-30 flex items-center justify-center group cursor-default">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/40 border border-white/80 backdrop-blur-md shadow-lg flex items-center justify-center p-1 transition-transform group-hover:scale-110">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-white/90 via-indigo-50/70 to-purple-100/80 border border-white flex items-center justify-center shadow-inner">
                  <svg className="w-6 h-6 text-[#6366f1] fill-current drop-shadow-[0_0_6px_rgba(99,102,241,0.6)]" viewBox="0 0 24 24">
                    <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Main Portrait Frame with Organic Glass Shield */}
            <div
              className="w-[280px] sm:w-[320px] md:w-[310px] lg:w-[380px] h-[350px] sm:h-[400px] md:h-[390px] lg:h-[460px] overflow-hidden relative shadow-[0_20px_50px_rgba(99,102,241,0.2)] bg-gradient-to-b from-[#b8caf5] via-[#dbe4fa] to-[#eef2fd] border-2 border-white/85 group backdrop-blur-xl"
              style={{
                borderRadius: "44% 56% 40% 60% / 28% 30% 70% 72%",
              }}
            >
              <Image
                src="/assets/profilaz1.jpeg"
                alt="Ahmad Zaki — Full-Stack Developer"
                width={800}
                height={800}
                priority
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "50% 20%" }}
              />

              <div
                className="absolute inset-0 pointer-events-none border border-white/60 shadow-inner"
                style={{
                  borderRadius: "44% 56% 40% 60% / 28% 30% 70% 72%",
                }}
              />
            </div>

            {/* Floating Card 1: 21+ Certified Credentials (Top Right) */}
            <Link
              href="#certifications"
              className="absolute -top-4 -right-2 sm:-right-4 md:-right-2 lg:-right-6 bg-white/90 backdrop-blur-xl border border-white/95 shadow-xl rounded-2xl p-3.5 sm:p-4 z-30 min-w-[150px] sm:min-w-[180px] transition-all hover:-translate-y-1 hover:shadow-2xl group/card1 cursor-pointer block"
            >
              <div className="flex items-center justify-between gap-1">
                <span className="font-heading font-black text-2xl sm:text-3xl text-[#101221] block leading-none tracking-tight group-hover/card1:text-[#6366f1] transition-colors">
                  {t.hero.card1Number}
                </span>
                <Award className="w-4 h-4 text-[#6366f1] opacity-80 group-hover/card1:scale-110 transition-transform" />
              </div>
              <span className="block text-xs font-bold text-[#3e445b] mt-1">
                {t.hero.card1Title}
              </span>
              <span className="block text-[10.5px] font-medium text-[#737992]">
                {t.hero.card1Sub}
              </span>
            </Link>

            {/* Floating Card 2: Ready for Work & Projects (Bottom Right) */}
            <Link
              href="#contact"
              className="absolute -bottom-4 -right-2 sm:-right-4 md:-right-2 lg:-right-4 bg-white/90 backdrop-blur-xl border border-white/95 shadow-xl rounded-2xl p-3.5 sm:p-4 z-30 min-w-[165px] sm:min-w-[200px] transition-all hover:-translate-y-1 hover:shadow-2xl group/card2 cursor-pointer block"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="block text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                  {t.hero.card2Badge}
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5 mb-0.5">
                <span className="font-heading font-black text-sm sm:text-base lg:text-lg text-[#101221] leading-none group-hover/card2:text-[#6366f1] transition-colors">
                  {t.hero.card2Title}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6366f1] transition-transform group-hover/card2:translate-x-0.5 group-hover/card2:-translate-y-0.5" />
              </div>
              <span className="block text-[11px] font-medium text-[#6366f1] mb-1">
                {t.hero.card2Sub}
              </span>
              <svg className="w-full h-3.5 text-[#6366f1]" viewBox="0 0 120 16" fill="none">
                <path
                  d="M 2 12 Q 25 2, 50 9 T 90 6 T 118 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
  );
}
