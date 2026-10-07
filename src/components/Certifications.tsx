"use client";

import React, { useState } from "react";
import { Award, ExternalLink, ShieldCheck, Download, X, Sparkles } from "lucide-react";
import Marquee from "./Marquee";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

interface Certificate {
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
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
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
  ];

  return (
    <section id="certifications" className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 mb-10 overflow-hidden">
      {/* Header with Badges */}
      <Reveal direction="up" delay={0}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#6366f1] mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              {t.certifications.tag}
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0e1122] tracking-tight">
              {t.certifications.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-[#6366f1] text-xs font-semibold border border-purple-100 w-fit">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>{t.certifications.autoScrollBadge}</span>
          </div>
        </div>
      </Reveal>

      {/* Real-time Smooth Auto-Scrolling Marquee Track */}
      <Reveal direction="up" delay={150}>
        <div className="py-2">
          <Marquee speed={30} pauseOnHover={true} gap="gap-5" className="py-2">
            {certificates.map((cert) => (
              <article
                key={cert.id}
                onClick={() => cert.file && setSelectedCert(cert)}
                className={`w-[300px] sm:w-[330px] shrink-0 p-6 rounded-2xl bg-white/75 hover:bg-white border border-white/95 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between ${
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
                      <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        {t.certifications.verified}
                      </span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </Marquee>
        </div>
      </Reveal>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="glass-panel rounded-3xl p-5 sm:p-6 max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative animate-in zoom-in-95 duration-200 border border-white/95 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-3.5 border-b border-purple-900/10 shrink-0">
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
                className="w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-slate-600 shadow-sm transition-all hover:scale-105 shrink-0 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Embedded Live PDF Document Viewer */}
            <div className="flex-1 my-3 min-h-[300px] max-h-[56vh] rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-50 relative shadow-inner flex flex-col">
              {selectedCert.file ? (
                <iframe
                  src={`${encodeURI(selectedCert.file)}#toolbar=0&navpanes=0`}
                  title={selectedCert.title}
                  className="w-full h-full min-h-[320px] sm:min-h-[420px] rounded-2xl bg-white border-0"
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-purple-900/10 shrink-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] font-bold text-[#717791] mr-1 uppercase tracking-wider">
                  {t.certifications.competenciesTitle}:
                </span>
                {selectedCert.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[10.5px] font-medium bg-white/85 text-[#3b4056] px-2 py-0.5 rounded border border-slate-200/80"
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
        </div>
      )}
    </section>
  );
}
