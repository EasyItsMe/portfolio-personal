"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, ExternalLink, X, Check, Play, Wallet, GraduationCap, TrendingUp, Sparkles, FileText, Clock } from "lucide-react";
import { TechLogo } from "./TechLogos";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

interface ProjectItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tech: string[];
  features: string[];
  metrics: string;
  gradient: string;
  accentColor: string;
  mockType: "snapvid" | "dompetaman" | "tasystem";
}

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const visualConfig: Record<string, { gradient: string; accentColor: string; mockType: "snapvid" | "dompetaman" | "tasystem" }> = {
    snapvid: {
      gradient: "from-purple-100 via-indigo-100 to-pink-100",
      accentColor: "#6366f1",
      mockType: "snapvid",
    },
    dompetaman: {
      gradient: "from-emerald-100 via-teal-100 to-cyan-100",
      accentColor: "#10b981",
      mockType: "dompetaman",
    },
    tasystem: {
      gradient: "from-blue-100 via-indigo-100 to-sky-100",
      accentColor: "#3b82f6",
      mockType: "tasystem",
    },
  };

  const projects: ProjectItem[] = t.projects.items.map((item) => ({
    ...item,
    ...(visualConfig[item.id] || {
      gradient: "from-purple-100 via-indigo-100 to-pink-100",
      accentColor: "#6366f1",
      mockType: "snapvid",
    }),
  }));

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || null;

  return (
    <section id="work" className="mb-10">
      <Reveal direction="up" delay={0}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#6366f1] mb-1">
              {t.projects.tag}
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0e1122] tracking-tight">
              {t.projects.title}
            </h3>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.id} direction="up" delay={100 + index * 100} className="h-full">
            <article
              onClick={() => setSelectedProjectId(project.id)}
              className="glass-card rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl group flex flex-col justify-between border border-white/90 h-full"
            >
            {/* Visual Header / Custom Mockup UI */}
            <div className={`h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden p-4 flex flex-col items-center justify-center border-b border-white/60`}>
              {/* Top Project Label Badge */}
              <div className="absolute top-3 left-4 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md border border-white text-[10px] font-black uppercase tracking-wider text-[#3b4055] shadow-xs">
                {project.badge}
              </div>

              {/* SNAPVID Mockup */}
              {project.mockType === "snapvid" && (
                <div className="w-56 h-34 bg-[#0f1221] rounded-2xl shadow-xl p-3 text-white border border-slate-700/80 flex flex-col justify-between transform transition-transform group-hover:scale-105 duration-300">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[9px] font-mono text-indigo-300 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" /> Media PWA
                    </span>
                  </div>
                  <div className="bg-slate-900/90 rounded-lg p-2 flex items-center justify-between border border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center shadow-xs">
                        <Play className="w-3.5 h-3.5 text-white fill-current ml-0.5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold">clip_render.mp4</div>
                        <div className="text-[8.5px] text-slate-400">1080p • 60 FPS • Web Worker</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Ready</span>
                  </div>
                  <div className="w-full bg-slate-800/80 rounded-md h-3 flex items-center px-1 gap-0.5">
                    <div className="w-1 h-2 bg-indigo-400 rounded-full" />
                    <div className="w-1 h-2.5 bg-indigo-400 rounded-full" />
                    <div className="w-1 h-1.5 bg-indigo-500 rounded-full" />
                    <div className="w-1 h-2 bg-indigo-300 rounded-full" />
                    <div className="w-1 h-2.5 bg-indigo-400 rounded-full" />
                    <div className="w-1 h-1.5 bg-indigo-400 rounded-full" />
                    <div className="flex-1 h-1 bg-slate-700 rounded-full ml-1" />
                  </div>
                </div>
              )}

              {/* DOMPETAMAN Mockup */}
              {project.mockType === "dompetaman" && (
                <div className="w-56 h-34 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3 text-slate-800 border border-emerald-100 flex flex-col justify-between transform transition-transform group-hover:scale-105 duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <Wallet className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700">Dompet Utama</span>
                    </div>
                    <span className="text-[8.5px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200">
                      Active Balance
                    </span>
                  </div>
                  <div className="bg-emerald-50/70 rounded-xl p-2 border border-emerald-100/80">
                    <div className="text-[8.5px] font-medium text-slate-500">Total Saldo Terkelola</div>
                    <div className="text-sm font-heading font-black text-emerald-800">Rp 14.850.000</div>
                  </div>
                  <div className="flex items-center justify-between text-[8.5px] text-slate-600 pt-0.5">
                    <span className="flex items-center gap-1 text-emerald-600 font-bold">
                      <TrendingUp className="w-3 h-3" /> +18.4%
                    </span>
                    <span className="text-slate-400">MySQL Linked</span>
                  </div>
                </div>
              )}

              {/* TA SYSTEM Mockup */}
              {project.mockType === "tasystem" && (
                <div className="w-56 h-34 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3 text-slate-800 border border-blue-100 flex flex-col justify-between transform transition-transform group-hover:scale-105 duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <GraduationCap className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-800">Portal Tugas Akhir</span>
                    </div>
                    <span className="text-[8.5px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                      Status TA
                    </span>
                  </div>
                  <div className="bg-blue-50/70 rounded-xl p-2 border border-blue-100/80 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-blue-600" />
                      <div>
                        <div className="text-[9.5px] font-bold text-slate-800">Dokumen Proposal</div>
                        <div className="text-[8px] text-slate-500">Review Dosen Pembimbing</div>
                      </div>
                    </div>
                    <span className="text-[8.5px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      Disetujui
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[8.5px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-blue-500" /> Bimbingan: 8/8 Selesai
                    </span>
                    <span className="text-blue-600 font-bold">Siap Sidang</span>
                  </div>
                </div>
              )}
            </div>

            {/* Metadata Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-heading font-bold text-base text-[#101221] mb-1">
                    {project.title}
                  </h4>
                  <span className="text-xs font-semibold text-[#646882]">
                    {project.subtitle}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/80 border border-white/95 flex items-center justify-center text-[#4b4f66] group-hover:text-[#6366f1] group-hover:bg-white shadow-xs transition-colors shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Tech Badges with Official Logos */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((tItem) => (
                  <span
                    key={tItem}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-white/90 text-[#3b4055] px-2.5 py-1 rounded-lg border border-white shadow-xs"
                  >
                    <TechLogo name={tItem} className="w-3.5 h-3.5" />
                    <span>{tItem}</span>
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
        ))}
      </div>

      {/* Project Details Modal mounted to body via Portal */}
      {mounted && selectedProject && createPortal(
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedProjectId(null)}
        >
          <div
            className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] relative animate-in zoom-in-95 duration-200 border border-white/90 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProjectId(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 shadow-xs cursor-pointer transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#6366f1] mb-1 block">
              {selectedProject.category}
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#101221] mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-[#555970] text-sm sm:text-base leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="mb-6 p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex items-center gap-3">
              <span className="text-xs font-bold text-indigo-900">{t.projects.keyMetric}</span>
              <span className="text-xs font-semibold text-indigo-700">{selectedProject.metrics}</span>
            </div>

            <div className="mb-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#767b93] mb-3">
                {t.projects.coreArch}
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProject.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2 text-xs text-[#4b5069]">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-7">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#767b93] mb-3">
                {t.projects.techStackTitle}
              </h5>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tItem) => (
                  <span
                    key={tItem}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-[#33384f] shadow-xs"
                  >
                    <TechLogo name={tItem} className="w-4 h-4" />
                    <span>{tItem}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-indigo-900/10">
              <a
                href="#contact"
                onClick={() => setSelectedProjectId(null)}
                className="btn-primary flex-1 text-center"
              >
                {t.projects.discussBtn} <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/EasyItsMe"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary px-5 flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                {t.projects.codeBtn}
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
