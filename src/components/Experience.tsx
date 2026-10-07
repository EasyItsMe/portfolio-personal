"use client";

import React from "react";
import { Briefcase, Building2, Users, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

export default function Experience() {
  const { language, t } = useLanguage();

  const experiences = [
    {
      period: "2023 — 2026",
      isCurrent: false,
      role: language === "id" ? "Divisi Teknologi & Digital" : "Technology & Digital Division",
      company: "HMMI (Politeknik Piksi Input Serang)",
      type: language === "id" ? "Organisasi Mahasiswa" : "Student Organization",
      description:
        language === "id"
          ? "Berperan aktif dalam pengelolaan kebutuhan teknologi, media digital organisasi, koordinasi kegiatan, dan inisiatif digital kampus."
          : "Participated in managing the organization's technology and digital needs, activity coordination, and collaborative tech initiatives.",
      highlights:
        language === "id"
          ? [
              "Mengelola media digital dan kebutuhan teknis operasional kegiatan organisasi",
              "Membantu koordinasi acara serta penyiapan infrastruktur teknologi informasi",
              "Berkolaborasi lintas anggota untuk menyukseskan program kerja digital",
            ]
          : [
              "Managed organization's digital media and event technology workflows",
              "Assisted with activity coordination and technical requirements",
              "Collaborated with cross-functional members to deliver digital initiatives",
            ],
      tags: language === "id" ? ["Media Digital", "Koordinasi Teknologi", "Kerja Tim"] : ["Digital Media", "Tech Coordination", "Teamwork"],
      gradient: "from-blue-500/10 via-indigo-500/5 to-purple-500/10",
      accentColor: "border-blue-200 text-blue-600 bg-blue-50",
      icon: Users,
    },
    {
      period: "2025 — 2026",
      isCurrent: false,
      role: language === "id" ? "Asisten Administrasi & Kearsipan" : "Administrative Assistant",
      company: "Kantor Notaris & PPAT Munir Syawal",
      type: language === "id" ? "Praktik Kerja Profesional" : "Professional Practice",
      description:
        language === "id"
          ? "Menangani input data akta autentik, penataan arsip berkas hukum secara terstruktur, dan koordinasi administratif klien dengan presisi tinggi."
          : "Handled legal document input, structured filing, archiving workflows, and client administrative coordination with high accuracy.",
      highlights:
        language === "id"
          ? [
              "Mengelola pengarsipan dan penomoran dokumen legal kenotariatan & PPAT",
              "Memastikan akurasi input data berkas klien dan kelengkapan dokumen resmi",
              "Berkoordinasi dengan para pihak untuk kelancaran proses administrasi kantor",
            ]
          : [
              "Managed legal document indexing, archival, and official filing",
              "Assisted with data management ensuring precision and completeness",
              "Coordinated with stakeholders to support administrative processes",
            ],
      tags: language === "id" ? ["Kearsipan Dokumen", "Manajemen Data", "Administrasi Legal"] : ["Document Archiving", "Data Management", "Legal Admin"],
      gradient: "from-amber-500/10 via-orange-500/5 to-purple-500/10",
      accentColor: "border-amber-200 text-amber-600 bg-amber-50",
      icon: Building2,
    },
    {
      period: language === "id" ? "2026 — SEKARANG" : "2026 — NOW",
      isCurrent: true,
      role: "Full-Stack Web Developer",
      company: language === "id" ? "Freelance & Proyek Mandiri" : "Freelance / Personal Projects",
      type: language === "id" ? "Rekayasa Web Full-Stack" : "Full-Stack Engineering",
      description:
        language === "id"
          ? "Merancang dan membangun aplikasi web full-stack, endpoint REST API teroptimasi, antarmuka responsif, serta integrasi AI dengan Laravel dan Next.js."
          : "Engineering full-stack web applications, RESTful APIs, modern reactive user interfaces, and database architectures with Laravel, Next.js, and AI tools.",
      highlights:
        language === "id"
          ? [
              "Mengembangkan aplikasi web full-stack berbasis Laravel, PHP, Next.js, dan React",
              "Mengimplementasikan otentikasi aman, database relasional MySQL, dan REST API",
              "Mengintegrasikan toolkit media/AI modern dan version control terstruktur via GitHub",
            ]
          : [
              "Developed full-stack web applications using PHP, Laravel, Next.js, and React",
              "Implemented authentication, RESTful APIs, relational databases, and CRUD",
              "Integrated AI toolkits (Whisper, OpenCV) and version control via Git/GitHub",
            ],
      tags: ["Laravel", "Next.js", "FastAPI", "MySQL", "Git"],
      gradient: "from-emerald-500/10 via-teal-500/5 to-indigo-500/10",
      accentColor: "border-emerald-200 text-emerald-600 bg-emerald-50",
      icon: Briefcase,
    },
  ];

  return (
    <section id="experience" className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 mb-10 overflow-hidden">
      <Reveal direction="up" delay={0}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#6366f1] mb-2 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              {t.experience.tag}
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0e1122] tracking-tight">
              {t.experience.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#666c84] max-w-md">
            {t.experience.subtitle}
          </p>
        </div>
      </Reveal>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <Reveal key={exp.company} direction="up" delay={100 + index * 100} className="h-full">
              <article className="glass-card rounded-2xl p-6 relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group border border-white/95 h-full">
                <div>
                  {/* Period Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border ${exp.accentColor}`}
                    >
                      {exp.isCurrent && (
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      )}
                      <span>{exp.period}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#8b90a4]">
                      {exp.type}
                    </span>
                  </div>

                  {/* Company & Role */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-[#6366f1] shadow-xs shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-base text-[#101221] leading-tight group-hover:text-[#6366f1] transition-colors">
                        {exp.company}
                      </h4>
                      <p className="text-xs font-bold text-[#6366f1] mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#555a73] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-5">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#4b5066]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-purple-900/5 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10.5px] font-medium bg-white/80 text-[#555a73] px-2.5 py-1 rounded-md border border-white/95"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
