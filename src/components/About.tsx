"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, GraduationCap, Briefcase, FileText, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

export default function About() {
  const { language, t } = useLanguage();

  const highlights = [
    {
      label: t.about.eduLabel,
      value: t.about.eduValue,
      sub: t.about.eduSub,
      icon: GraduationCap,
    },
    {
      label: t.about.certLabel,
      value: t.about.certValue,
      sub: t.about.certSub,
      icon: Award,
    },
    {
      label: t.about.focusLabel,
      value: t.about.focusValue,
      sub: t.about.focusSub,
      icon: Briefcase,
    },
  ];

  const certificationsList = [
    "Coding Camp 2025 (Dicoding × DBS Foundation - Front-End & Back-End)",
    "BNSP / LSP Informatika — Analis Data Madya (Associate Data Analyst)",
    "MTCNA — MikroTik Certified Network Associate",
    "Microsoft Certified Professional",
    "Dicoding: Web Intermediate, Back-End JS, Logic & Git/GitHub",
  ];

  return (
    <section id="about" className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 mb-10 overflow-hidden">
      <Reveal direction="up" delay={0}>
        <div className="text-xs font-bold uppercase tracking-widest text-[#6366f1] mb-2">
          {t.about.tag}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-10 items-center">
        {/* Left Column: Photo Card */}
        <div className="md:col-span-5 flex flex-col items-center">
          <Reveal direction="up" delay={100} className="w-full max-w-[340px]">
            <div className="relative group w-full">
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/25 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-3xl overflow-hidden glass-card border border-white/95 shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                <Image
                  src="/assets/profilaz1.jpeg"
                  alt="Ahmad Zaki — Full-Stack Developer"
                  width={600}
                  height={600}
                  className="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: "50% 15%" }}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0e1122]/95 via-[#0e1122]/65 to-transparent p-5 text-white">
                  <h4 className="font-heading font-extrabold text-lg">Ahmad Zaki</h4>
                  <p className="text-xs text-purple-200 font-medium">{t.about.photoRole}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[11px] text-emerald-300 font-semibold">{t.about.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Bio Narrative & Stats */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <Reveal direction="up" delay={150}>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0e1122] tracking-tight leading-snug mb-4">
              {t.about.title}
            </h3>

            <p className="text-[#555970] text-sm sm:text-[15px] leading-relaxed mb-4">
              {t.about.paragraph1}
            </p>

            <p className="text-[#555970] text-sm sm:text-[15px] leading-relaxed mb-6">
              {t.about.paragraph2}
            </p>
          </Reveal>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} direction="up" delay={200 + index * 80}>
                  <div className="p-3.5 rounded-2xl bg-white/60 hover:bg-white/90 border border-white/90 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                    <div className="flex items-center gap-1.5 text-[#6366f1] mb-1">
                      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#7e849e]">{item.label}</span>
                    </div>
                    <b className="font-heading font-bold text-sm text-[#101221] block leading-tight">
                      {item.value}
                    </b>
                    <span className="text-[11px] text-[#6b7086] mt-0.5 block">
                      {item.sub}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Key Certifications */}
          <Reveal direction="up" delay={350}>
            <div className="mb-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#767b93] mb-2.5 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#6366f1]" /> {t.about.certListTitle}
              </h5>
              <div className="flex flex-wrap gap-2">
                {certificationsList.map((cert) => (
                  <span
                    key={cert}
                    className="text-xs font-medium bg-white/75 hover:bg-white text-[#3b4055] px-3 py-1.5 rounded-xl border border-white/95 shadow-xs flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    {cert}
                  </span>
                ))}
                <Link
                  href="#certifications"
                  className="text-xs font-bold bg-purple-100/80 hover:bg-purple-200 text-[#6366f1] px-3.5 py-1.5 rounded-xl border border-purple-200 shadow-xs flex items-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <Award className="w-3.5 h-3.5 text-[#6366f1]" />
                  {t.about.viewAllCertBtn}
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={
                  language === "id"
                    ? "/assets/CV_Ahmad_Zaki_Full_Stack_ATS.pdf"
                    : "/assets/CV_Ahmad_Zaki_Full_Stack_ATS_English.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-[#0f1221] hover:bg-[#1e2338] text-white px-5 py-2.5 rounded-full shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-purple-300" /> {t.about.downloadCvBtn}
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#6366f1] hover:text-indigo-800 transition-all duration-200 hover:translate-x-1"
              >
                {t.about.getInTouchBtn} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
