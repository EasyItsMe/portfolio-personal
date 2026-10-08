"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useToast } from "./Toast";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useLanguage();
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "Web Development (Laravel / React)",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      showToast(`${t.contact.toastSuccess} (${formData.name || "Friend"})`, "success");
      setFormData({
        name: "",
        email: "",
        project: "Web Development (Laravel / React)",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="glass-panel rounded-3xl p-8 sm:p-12 mb-10 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        {/* Contact Info */}
        <div className="md:col-span-5">
          <Reveal direction="up" delay={0}>
            <div className="text-xs font-bold uppercase tracking-widest text-[#6366f1] mb-1">
              {t.contact.tag}
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0e1122] tracking-tight leading-snug mb-6">
              {t.contact.title}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-purple-600">
                {t.contact.subtitle}
              </span>
            </h3>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:adroitahmadzaki@gmail.com"
                className="flex items-center gap-3 text-sm sm:text-base font-medium text-[#4e5369] hover:text-[#6366f1] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100/60 text-[#6366f1] group-hover:bg-[#6366f1] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs group-hover:scale-110">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-semibold">adroitahmadzaki@gmail.com</span>
              </a>

              <a
                href="https://wa.me/6283150828377"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm sm:text-base font-medium text-[#4e5369] hover:text-[#10b981] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100/60 text-[#10b981] group-hover:bg-[#10b981] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs group-hover:scale-110">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">+62 831-5082-8377</span>
                  <span className="text-xs text-emerald-600 font-medium">{t.contact.whatsappSub}</span>
                </div>
              </a>

              <div className="flex items-center gap-3 text-sm sm:text-base font-medium text-[#4e5369]">
                <div className="w-10 h-10 rounded-xl bg-purple-100/60 text-[#6366f1] flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>{t.contact.locationSub}</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7">
          <Reveal direction="up" delay={150}>
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-white/50 border border-white/90 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4a4f66] mb-1.5">
                    {t.contact.formName}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.formNamePlaceholder}
                    required
                    className="w-full bg-white/80 border border-slate-200 focus:border-[#6366f1] focus:bg-white focus:ring-2 focus:ring-[#6366f1]/20 rounded-xl px-3.5 py-2.5 text-sm text-[#111425] outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#4a4f66] mb-1.5">
                    {t.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.formEmailPlaceholder}
                    required
                    className="w-full bg-white/80 border border-slate-200 focus:border-[#6366f1] focus:bg-white focus:ring-2 focus:ring-[#6366f1]/20 rounded-xl px-3.5 py-2.5 text-sm text-[#111425] outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-[#4a4f66] mb-1.5">
                  {t.contact.formTopic}
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full bg-white/80 border border-slate-200 focus:border-[#6366f1] focus:bg-white focus:ring-2 focus:ring-[#6366f1]/20 rounded-xl px-3.5 py-2.5 text-sm text-[#111425] outline-none transition-all duration-200 cursor-pointer"
                >
                  {t.contact.formTopicOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-[#4a4f66] mb-1.5">
                  {t.contact.formMessage}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.formMessagePlaceholder}
                  rows={4}
                  required
                  className="w-full bg-white/80 border border-slate-200 focus:border-[#6366f1] focus:bg-white focus:ring-2 focus:ring-[#6366f1]/20 rounded-xl px-3.5 py-2.5 text-sm text-[#111425] outline-none transition-all duration-200 resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> {t.contact.sendingBtn}
                  </>
                ) : (
                  <>
                    {t.contact.sendBtn} <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              <span className="block text-center text-[11px] text-[#8a8fa3] mt-2.5">
                {t.contact.responseTime}
              </span>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
