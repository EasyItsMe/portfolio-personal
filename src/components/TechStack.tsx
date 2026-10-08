"use client";

import React, { useState } from "react";
import { TechLogo } from "./TechLogos";
import { Sparkles, Grid, SlidersHorizontal } from "lucide-react";
import Marquee from "./Marquee";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

interface TechItem {
  name: string;
  category: "Core Web" | "Frameworks" | "Backend & DB" | "Media & AI" | "Tools";
  level: string;
  color: string;
}

export default function TechStack() {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<"marquee" | "grid">("marquee");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const row1Tech: TechItem[] = [
    { name: "Laravel", category: "Frameworks", level: "Advanced", color: "border-red-200 group-hover:border-red-400" },
    { name: "PHP", category: "Backend & DB", level: "Advanced", color: "border-indigo-200 group-hover:border-indigo-400" },
    { name: "Next.js", category: "Frameworks", level: "Advanced", color: "border-slate-200 group-hover:border-slate-400" },
    { name: "React", category: "Frameworks", level: "Advanced", color: "border-cyan-200 group-hover:border-cyan-400" },
    { name: "FastAPI", category: "Frameworks", level: "Intermediate", color: "border-teal-200 group-hover:border-teal-400" },
    { name: "Python", category: "Backend & DB", level: "Intermediate", color: "border-blue-200 group-hover:border-blue-400" },
    { name: "MySQL", category: "Backend & DB", level: "Advanced", color: "border-sky-200 group-hover:border-sky-400" },
    { name: "PostgreSQL", category: "Backend & DB", level: "Intermediate", color: "border-indigo-200 group-hover:border-indigo-400" },
  ];

  const row2Tech: TechItem[] = [
    { name: "TypeScript", category: "Core Web", level: "Advanced", color: "border-blue-200 group-hover:border-blue-400" },
    { name: "JavaScript", category: "Core Web", level: "Advanced", color: "border-amber-200 group-hover:border-amber-400" },
    { name: "TailwindCSS", category: "Core Web", level: "Advanced", color: "border-cyan-200 group-hover:border-cyan-400" },
    { name: "Bootstrap", category: "Core Web", level: "Advanced", color: "border-purple-200 group-hover:border-purple-400" },
    { name: "Docker", category: "Tools", level: "Intermediate", color: "border-blue-200 group-hover:border-blue-400" },
    { name: "Git & GitHub", category: "Tools", level: "Advanced", color: "border-orange-200 group-hover:border-orange-400" },
    { name: "VS Code & Postman", category: "Tools", level: "Expert", color: "border-sky-200 group-hover:border-sky-400" },
    { name: "FFmpeg & Media", category: "Media & AI", level: "Intermediate", color: "border-emerald-200 group-hover:border-emerald-400" },
    { name: "Whisper & AI", category: "Media & AI", level: "Intermediate", color: "border-purple-200 group-hover:border-purple-400" },
    { name: "OpenCV & MediaPipe", category: "Media & AI", level: "Intermediate", color: "border-violet-200 group-hover:border-violet-400" },
  ];

  const allTech = [...row1Tech, ...row2Tech];
  const rawCategories = ["All", "Core Web", "Frameworks", "Backend & DB", "Media & AI", "Tools"];

  const filteredGridTech =
    activeCategory === "All"
      ? allTech
      : allTech.filter((tItem) => tItem.category === activeCategory);

  return (
    <section id="skills" className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 mb-10 overflow-hidden">
      {/* Header */}
      <Reveal direction="up" delay={0}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#6366f1] mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {t.techStack.tag}
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0e1122] tracking-tight">
              {t.techStack.title}
            </h3>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2">
            <div className="flex bg-white/70 p-1 rounded-xl border border-white/95 shadow-xs">
              <button
                onClick={() => setViewMode("marquee")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "marquee"
                    ? "bg-[#0f1221] text-white shadow-xs"
                    : "text-[#5b6078] hover:text-[#0f1221]"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>{t.techStack.autoScrollBtn}</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-[#0f1221] text-white shadow-xs"
                    : "text-[#5b6078] hover:text-[#0f1221]"
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>{t.techStack.gridViewBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Mode 1: Dual-Row Auto-Scrolling Marquee Track */}
      {viewMode === "marquee" && (
        <Reveal direction="up" delay={150}>
          <div className="space-y-4 py-1 animate-in fade-in duration-300">
            {/* Row 1: Moving Left */}
            <Marquee direction="left" speed={65} pauseOnHover={true} gap="gap-3.5">
              {row1Tech.map((item) => (
                <div
                  key={`r1-${item.name}`}
                  className="w-56 shrink-0 p-4 rounded-2xl bg-white/75 hover:bg-white border border-white/95 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex items-center gap-3.5 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 shadow-xs group-hover:scale-110 group-hover:shadow-md transition-all shrink-0">
                    <TechLogo name={item.name} className="w-6 h-6" size={24} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block font-heading font-bold text-sm text-[#0f1222] group-hover:text-[#6366f1] transition-colors truncate">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[10.5px] font-semibold text-[#737892]">
                        {item.level}
                      </span>
                      <span className="text-[10px] text-slate-300">•</span>
                      <span className="text-[10px] font-medium text-purple-600 bg-purple-50 px-1.5 py-0.2 rounded">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>

            {/* Row 2: Moving Right (Reverse) */}
            <Marquee direction="right" speed={60} pauseOnHover={true} gap="gap-3.5">
              {row2Tech.map((item) => (
                <div
                  key={`r2-${item.name}`}
                  className="w-56 shrink-0 p-4 rounded-2xl bg-white/75 hover:bg-white border border-white/95 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex items-center gap-3.5 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 shadow-xs group-hover:scale-110 group-hover:shadow-md transition-all shrink-0">
                    <TechLogo name={item.name} className="w-6 h-6" size={24} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block font-heading font-bold text-sm text-[#0f1222] group-hover:text-[#6366f1] transition-colors truncate">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[10.5px] font-semibold text-[#737892]">
                        {item.level}
                      </span>
                      <span className="text-[10px] text-slate-300">•</span>
                      <span className="text-[10px] font-medium text-indigo-600 bg-indigo-50 px-1.5 py-0.2 rounded">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>

            <div className="text-center pt-2">
              <span className="text-xs text-[#8e93aa] font-medium">
                {t.techStack.hint}
              </span>
            </div>
          </div>
        </Reveal>
      )}

      {/* Mode 2: Filterable Grid View */}
      {viewMode === "grid" && (
        <div className="animate-in fade-in duration-300">
          <div className="flex flex-wrap gap-2 mb-6">
            {rawCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#0f1322] text-white shadow-sm"
                    : "bg-white/60 text-[#555970] hover:bg-white hover:text-[#101221] border border-white/80"
                }`}
              >
                {t.techStack.categories[cat] || cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {filteredGridTech.map((item) => (
              <div
                key={item.name}
                className="p-4 rounded-2xl bg-white/70 hover:bg-white border border-white/95 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center gap-3 group cursor-default"
              >
                <div className="w-13 h-13 rounded-2xl flex items-center justify-center p-2.5 bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 shadow-xs group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <TechLogo name={item.name} className="w-7 h-7" size={28} />
                </div>
                <div>
                  <span className="block font-heading font-bold text-sm text-[#0f1222] group-hover:text-[#6366f1] transition-colors">
                    {item.name}
                  </span>
                  <span className="block text-[11px] font-semibold text-[#787d96] mt-0.5">
                    {item.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
