"use client";

import React from "react";
import { Layout, Server, Database, Layers, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

export default function Services() {
  const { t } = useLanguage();

  const iconMap: Record<string, any> = {
    frontend: Layout,
    backend: Server,
    database: Database,
    fullstack: Layers,
  };

  const colorMap: Record<string, string> = {
    frontend: "from-amber-500/20 to-amber-500/5 text-amber-600 border-amber-500/30",
    backend: "from-purple-500/20 to-purple-500/5 text-purple-600 border-purple-500/30",
    database: "from-blue-500/20 to-blue-500/5 text-blue-600 border-blue-500/30",
    fullstack: "from-cyan-500/20 to-cyan-500/5 text-cyan-600 border-cyan-500/30",
  };

  return (
    <section id="services" className="mb-10">
      <Reveal direction="up" delay={0}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-1">
              {t.services.tag}
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0e1122] tracking-tight">
              {t.services.title}
            </h3>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {t.services.items.map((service, index) => {
          const Icon = iconMap[service.id] || Layout;
          const colorClass = colorMap[service.id] || "from-purple-500/20 to-purple-500/5 text-purple-600 border-purple-500/30";
          return (
            <Reveal key={service.id} direction="up" delay={100 + index * 80} className="h-full">
              <article className="glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col justify-between h-full border border-white/95">
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border bg-gradient-to-br ${colorClass} shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#101221] mb-2.5 group-hover:text-[#6366f1] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-[#636881] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center text-xs font-bold text-purple-600 gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>{t.services.learnMore}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
