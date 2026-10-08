"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Award, ExternalLink, ShieldCheck, Download, X, Sparkles, Grid, SlidersHorizontal, CheckCircle2 } from "lucide-react";
import Marquee from "./Marquee";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: "Full-Stack & Web" | "Data & Analytics" | "Networking & Cloud" | "AI & Professional";
  date: string;
  credentialId?: string;
  skills: string[];
  file?: string;
  badgeColor: string;
}

export default function Certifications() {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [viewMode, setViewMode] = useState<"marquee" | "grid">("marquee");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const certificates: Certificate[] = [
    {
      id: "codingcamp2025",
      title: "Coding Camp 2025 — Front-End & Back-End Developer",
      issuer: "Dicoding Indonesia × DBS Foundation",
      category: "Full-Stack & Web",
      date: "2025 — 2026",
      credentialId: "FC636D5Y1499",
      skills: ["React", "Node.js", "REST APIs", "Modern JavaScript", "Web Optimization"],
      file: "/certificates/-Coding Camp 2025- Certificate - FC636D5Y1499.pdf",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      id: "codingcamp-transcript",
      title: "Coding Camp 2025 — Final Transcript & Academic Record",
      issuer: "Dicoding Indonesia × DBS Foundation",
      category: "Full-Stack & Web",
      date: "2025 — 2026",
      credentialId: "FC636D5Y1499",
      skills: ["Front-End Track", "Back-End Track", "Capstone Project", "Score 90+"],
      file: "/certificates/-Coding Camp 2025- Final Transcript - FC636D5Y1499.pdf",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      id: "codingcamp-grad",
      title: "Coding Camp 2025 — Graduation Letter & Completion",
      issuer: "Dicoding Indonesia × DBS Foundation",
      category: "Full-Stack & Web",
      date: "2025 — 2026",
      credentialId: "FC636D5Y1499",
      skills: ["Full-Stack Engineering", "Program Completion", "Industry Readiness"],
      file: "/certificates/-Coding Camp 2025- Graduation Letter - FC636D5Y1499.pdf",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      id: "bnsp-data",
      title: "Analis Data Madya (Associate Data Analyst)",
      issuer: "BNSP / LSP Informatika",
      category: "Data & Analytics",
      date: "2025 — 2026",
      credentialId: "BNSP-INF-2025",
      skills: ["Data Analysis", "SQL", "Data Modeling", "Business Intelligence"],
      file: "/certificates/Sertifikat_AHMAD ZAKI_Associate Data Analyst.pdf",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      id: "mtcna",
      title: "MikroTik Certified Network Associate (MTCNA)",
      issuer: "MikroTik Academy",
      category: "Networking & Cloud",
      date: "2025",
      credentialId: "MTCNA-ID-2025",
      skills: ["Routing & Switching", "Network Security", "Bandwidth Management", "Firewall"],
      file: "/certificates/Sertifikat_MikroTik_MTCNA_Ahmad_Zaki.pdf",
      badgeColor: "bg-red-50 text-red-700 border-red-200",
    },
    {
      id: "microsoft",
      title: "Microsoft Certified Professional",
      issuer: "Microsoft",
      category: "Networking & Cloud",
      date: "2024 — 2025",
      skills: ["Cloud Foundations", "Productivity Solutions", "Digital Technologies"],
      file: "/certificates/Sertifikat_Microsoft.pdf",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    },
    {
      id: "dicoding-web-int",
      title: "Belajar Membuat Front-End Web untuk Pemula & Intermediate",
      issuer: "Dicoding Indonesia",
      category: "Full-Stack & Web",
      date: "2025",
      skills: ["DOM Manipulation", "Web Storage", "Responsive Layouts", "JavaScript ES6+"],
      file: "/certificates/sertifikat web intermediate dicoding.pdf",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      id: "dicoding-fe-fund",
      title: "Belajar Fundamental Front-End Web Development",
      issuer: "Dicoding Indonesia",
      category: "Full-Stack & Web",
      date: "2025",
      skills: ["Custom Elements", "Web Components", "Fetch API", "Webpack"],
      file: "/certificates/sertifikat fundamental Front-End dicoding.pdf",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
    },
    {
      id: "dicoding-fe-pemula",
      title: "Belajar Membuat Front-End Web untuk Pemula",
      issuer: "Dicoding Indonesia",
      category: "Full-Stack & Web",
      date: "2025",
      skills: ["HTML5 Semantic", "CSS3 Flexbox/Grid", "DOM Events", "Responsive Design"],
      file: "/certificates/sertifikat Front-End pemula dicoding.pdf",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      id: "dicoding-backend",
      title: "Belajar Dasar Pemrograman & Back-End JavaScript",
      issuer: "Dicoding Indonesia",
      category: "Full-Stack & Web",
      date: "2025",
      skills: ["Node.js", "Hapi / Express", "RESTful APIs", "Server Routing"],
      file: "/certificates/sertifikat back-end pemula javascript dicoding.pdf",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    },
    {
      id: "dicoding-js-dasar",
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      category: "Full-Stack & Web",
      date: "2025",
      skills: ["OOP", "Functional Programming", "Async/Await", "ES6+ Standards"],
      file: "/certificates/sertifikat dasar Pemrograman javascript dicoding.pdf",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      id: "dicoding-web-dasar",
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      category: "Full-Stack & Web",
      date: "2025",
      skills: ["Web Standards", "HTML & CSS", "Responsive Layout", "Cross-Browser"],
      file: "/certificates/sertifikat dasar Pemrograman dicoding.pdf",
      badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
    },
    {
      id: "dicoding-software-dasar",
      title: "Belajar Dasar-Dasar Pemrograman untuk Pengembang Software",
      issuer: "Dicoding Indonesia",
      category: "Full-Stack & Web",
      date: "2025",
      skills: ["Software Principles", "Data Flow", "Clean Architecture", "Problem Solving"],
      file: "/certificates/sertifikat dasar Pemrograman untuk pengembang software dicoding.pdf",
      badgeColor: "bg-slate-50 text-slate-700 border-slate-200",
    },
    {
      id: "dicoding-logic",
      title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      issuer: "Dicoding Indonesia",
      category: "Full-Stack & Web",
      date: "2025",
      skills: ["Logic Formulation", "Algorithms", "Flowcharting", "Computational Thinking"],
      file: "/certificates/sertifikat Pemrograman logic dicoding.pdf",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      id: "dicoding-git",
      title: "Belajar Dasar Git & GitHub untuk Kolaborasi Tim",
      issuer: "Dicoding Indonesia",
      category: "Full-Stack & Web",
      date: "2025",
      skills: ["Git Workflow", "Branching", "Pull Requests", "Version Control"],
      file: "/certificates/sertifikat git dan github dicoding.pdf",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    },
    {
      id: "ai-marketing",
      title: "Pemasaran Digital Menggunakan Kecerdasan Buatan (AI)",
      issuer: "Kementerian Kominfo / Digital Talent",
      category: "AI & Professional",
      date: "2025",
      skills: ["AI Prompting", "Digital Marketing", "Content Generation", "Analytics"],
      file: "/certificates/Sertifikat Pemasaran digital Menggunakan AI.pdf",
      badgeColor: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
    },
    {
      id: "social-media-marketing",
      title: "Menguasai Pemasaran di Era Digital: Seni Social Media Marketing",
      issuer: "Sertifikasi Digital Marketing & Bisnis",
      category: "AI & Professional",
      date: "2025",
      skills: ["Social Media Strategy", "Target Audience", "Campaign Optimization"],
      file: "/certificates/Sertifikat_AHMAD ZAKI_Menguasai Pemasaran di Era Digital_ Seni Social Media Marketing.pdf",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    },
    {
      id: "chat-wirausaha",
      title: "Pemanfaatan Aplikasi Chat Bagi Wirausahawan Pemula",
      issuer: "Pelatihan Kewirausahaan Digital",
      category: "AI & Professional",
      date: "2025",
      skills: ["Customer Communication", "CRM Messaging", "Business Automation"],
      file: "/certificates/Sertifikat_AHMAD ZAKI_Pemanfaatan Aplikasi Chat Bagi Wirausahawan Pemula.pdf",
      badgeColor: "bg-green-50 text-green-700 border-green-200",
    },
    {
      id: "digital-mindset",
      title: "Pengantar Mindset Digital: Mengubah Masa Depan dengan Pola Pikir Digital",
      issuer: "Digital Mindset & Leadership Academy",
      category: "AI & Professional",
      date: "2025",
      skills: ["Digital Transformation", "Agile Mindset", "Innovation & Adaptability"],
      file: "/certificates/Sertifikat_AHMAD ZAKI_Pengantar Mindset Digital 1 _ Mengubah Masa Depan Anda Dengan Pola Pikir Digital.pdf",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      id: "financial-literacy",
      title: "Financial Literacy & Professional Development",
      issuer: "Dicoding Indonesia × DBS Foundation",
      category: "AI & Professional",
      date: "2025",
      skills: ["Financial Planning", "Professional Ethics", "Resource Management"],
      file: "/certificates/sertifikat financial literacy dicoding.pdf",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      id: "english-class",
      title: "Certificate of English Proficiency & Communication",
      issuer: "English Language Class",
      category: "AI & Professional",
      date: "2024 — 2025",
      skills: ["Technical English", "Professional Communication", "Reading & Writing"],
      file: "/certificates/Certificate English class.pdf",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
  ];

  // Split into 2 rows for smooth dual marquee
  const row1Certificates = certificates.slice(0, 11);
  const row2Certificates = certificates.slice(11);

  const rawCategories = ["All", "Full-Stack & Web", "Data & Analytics", "Networking & Cloud", "AI & Professional"];

  const filteredCertificates =
    activeCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  const renderCertCard = (cert: Certificate) => (
    <article
      key={cert.id}
      onClick={() => cert.file && setSelectedCert(cert)}
      className={`w-full p-5 sm:p-6 rounded-2xl bg-white/80 hover:bg-white border border-white/95 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between h-full ${
        cert.file ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`text-[10.5px] font-bold px-2.5 py-1 rounded-md border ${cert.badgeColor}`}>
            {cert.category}
          </span>
          <span className="text-[11px] font-mono font-bold text-[#80869d]">
            {cert.date}
          </span>
        </div>

        <div className="flex items-start gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-purple-100/60 text-[#6366f1] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-xs">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-[#101221] leading-snug group-hover:text-[#6366f1] transition-colors line-clamp-2">
              {cert.title}
            </h4>
            <p className="text-xs font-semibold text-[#5a5f77] mt-0.5">
              {cert.issuer}
            </p>
          </div>
        </div>

        {cert.credentialId && (
          <div className="text-[10.5px] font-mono text-[#8a90a7] mb-3">
            ID: <span className="text-[#3b4055] font-semibold">{cert.credentialId}</span>
          </div>
        )}
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-purple-900/5 mb-3">
          {cert.skills.slice(0, 3).map((s) => (
            <span
              key={s}
              className="text-[10.5px] font-medium bg-white text-[#4d526a] px-2 py-0.5 rounded border border-slate-200/70"
            >
              {s}
            </span>
          ))}
          {cert.skills.length > 3 && (
            <span className="text-[10px] font-medium text-[#6366f1] px-1 py-0.5">
              +{cert.skills.length - 3}
            </span>
          )}
        </div>

        {cert.file && (
          <div className="flex items-center justify-between text-xs font-bold text-[#6366f1] pt-1">
            <span className="flex items-center gap-1 group-hover:underline">
              {t.certifications.viewCert} <ExternalLink className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              {t.certifications.verified}
            </span>
          </div>
        )}
      </div>
    </article>
  );

  return (
    <section id="certifications" className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 mb-10 overflow-hidden">
      {/* Header with Badges & View Switcher */}
      <Reveal direction="up" delay={0}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#6366f1] mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              {t.certifications.tag}
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0e1122] tracking-tight">
              {t.certifications.title}
            </h3>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* 21+ Badges Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-[#6366f1] text-xs font-semibold border border-purple-100 w-fit">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-purple-600" />
              <span>{t.certifications.autoScrollBadge}</span>
            </div>

            {/* View Mode Switcher */}
            <div className="flex bg-white/70 p-1 rounded-xl border border-white/95 shadow-xs">
              <button
                type="button"
                onClick={() => setViewMode("marquee")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "marquee"
                    ? "bg-[#0f1221] text-white shadow-xs"
                    : "text-[#5b6078] hover:text-[#0f1221]"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>{t.certifications.autoScrollBtn}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-[#0f1221] text-white shadow-xs"
                    : "text-[#5b6078] hover:text-[#0f1221]"
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>{t.certifications.gridViewBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Mode 1: Dual-Row Auto-Scrolling Marquee Track */}
      {viewMode === "marquee" && (
        <Reveal direction="up" delay={150}>
          <div className="space-y-4 py-2">
            {/* Track 1: Bergerak ke Kiri */}
            <Marquee direction="left" speed={65} pauseOnHover={true} gap="gap-4" className="py-1">
              {row1Certificates.map((cert) => (
                <div key={cert.id} className="w-[300px] sm:w-[330px] shrink-0">
                  {renderCertCard(cert)}
                </div>
              ))}
            </Marquee>

            {/* Track 2: Bergerak ke Kanan (Arah Berlawanan) */}
            <Marquee direction="right" speed={60} pauseOnHover={true} gap="gap-4" className="py-1">
              {row2Certificates.map((cert) => (
                <div key={cert.id} className="w-[300px] sm:w-[330px] shrink-0">
                  {renderCertCard(cert)}
                </div>
              ))}
            </Marquee>
          </div>
        </Reveal>
      )}

      {/* Mode 2: Interactive Categorized Grid View */}
      {viewMode === "grid" && (
        <div className="space-y-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {rawCategories.map((cat) => {
              const label = t.certifications.categories[cat] || cat;
              const count = cat === "All" ? certificates.length : certificates.filter((c) => c.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#0f1221] text-white shadow-md scale-[1.02]"
                      : "bg-white/70 hover:bg-white text-[#525770] border border-white/90 shadow-2xs hover:shadow-xs"
                  }`}
                >
                  <span>{label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-purple-100 text-purple-800"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {filteredCertificates.map((cert, index) => (
              <Reveal key={cert.id} direction="up" delay={50 + (index % 6) * 60} className="h-full">
                {renderCertCard(cert)}
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {/* Certificate Viewer Modal mounted to body via Portal */}
      {mounted && selectedCert && createPortal(
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/75 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 max-w-4xl w-full max-h-[92vh] flex flex-col shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] relative animate-in zoom-in-95 duration-200 border border-white/90 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-3.5 border-b border-slate-200/80 shrink-0">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-100 text-[#6366f1] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`inline-block text-[10.5px] font-bold px-2.5 py-0.5 rounded-md border ${selectedCert.badgeColor}`}>
                      {selectedCert.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#787e97] font-semibold">
                      {selectedCert.date}
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#101221] leading-snug">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#666c85]">
                    {selectedCert.issuer} {selectedCert.credentialId ? `· ID: ${selectedCert.credentialId}` : ""}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 shadow-xs transition-all hover:scale-105 shrink-0 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Embedded Live PDF Document Viewer */}
            <div className="flex-1 my-3 min-h-[320px] max-h-[58vh] rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-100 relative shadow-inner flex flex-col">
              {selectedCert.file ? (
                <iframe
                  src={`${encodeURI(selectedCert.file)}#toolbar=0&navpanes=0`}
                  title={selectedCert.title}
                  className="w-full h-full min-h-[340px] sm:min-h-[440px] rounded-2xl bg-white border-0"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-6 text-center text-slate-500">
                  <Award className="w-12 h-12 text-slate-300 mb-2" />
                  <p className="text-sm font-semibold">{selectedCert.title}</p>
                  <p className="text-xs text-slate-400">{selectedCert.issuer}</p>
                </div>
              )}
            </div>

            {/* Modal Footer / Competencies & Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-200/80 shrink-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] font-bold text-[#717791] mr-1 uppercase tracking-wider">
                  {t.certifications.competenciesTitle}:
                </span>
                {selectedCert.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[10.5px] font-medium bg-white text-[#3b4056] px-2 py-0.5 rounded border border-slate-200 shadow-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {selectedCert.file && (
                <div className="flex items-center gap-2.5 shrink-0">
                  <a
                    href={encodeURI(selectedCert.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2 px-4 text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                  >
                    {t.certifications.openPdf} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={encodeURI(selectedCert.file)}
                    download
                    className="btn-secondary py-2 px-3.5 text-xs font-semibold flex items-center gap-1.5 shadow-xs"
                    title={t.certifications.downloadFile}
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
