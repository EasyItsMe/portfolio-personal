import React from "react";
import { Search, Database, Code, ShieldCheck, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover & Design",
      description: "Analyzing system requirements, data modeling, and defining scalable software architecture.",
      icon: Search,
    },
    {
      number: "02",
      title: "API & Schema",
      description: "Designing database relations, API contracts, security rules, and data flow pipelines.",
      icon: Database,
    },
    {
      number: "03",
      title: "Full-Stack Build",
      description: "Writing clean, type-safe frontend components and high-throughput backend services.",
      icon: Code,
    },
    {
      number: "04",
      title: "Test & Optimize",
      description: "Automated unit tests, integration testing, query optimization, and security audits.",
      icon: ShieldCheck,
    },
    {
      number: "05",
      title: "Deploy & Monitor",
      description: "Automated CI/CD deployment, cloud scaling, and real-time observability.",
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="glass-panel rounded-3xl p-8 sm:p-12 mb-10">
      <div className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-1">
        Engineering Workflow
      </div>
      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0e1122] tracking-tight mb-8">
        Development Process I Follow
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <article
              key={step.number}
              className="p-6 rounded-2xl bg-white/45 hover:bg-white border border-white/90 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-purple-100/60 text-purple-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono font-extrabold text-xs text-purple-600 tracking-wider">
                    {step.number}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base text-[#101221] mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-[13px] text-[#636881] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
