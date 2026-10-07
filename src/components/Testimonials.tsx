import React from "react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Aarav is an exceptional full-stack engineer. He architected our platform from scratch with incredible performance and zero downtime on launch day.",
      name: "Rohit Sharma",
      role: "Engineering Lead",
      company: "Google",
      initials: "RS",
      gradient: "from-amber-200 to-purple-200",
    },
    {
      quote:
        "Working with Aarav was seamless. His mastery across frontend interactivity and robust backend APIs accelerated our product delivery by months.",
      name: "Neha Verma",
      role: "VP of Engineering",
      company: "Microsoft",
      initials: "NV",
      gradient: "from-emerald-200 to-sky-200",
    },
    {
      quote:
        "Aarav's ability to solve complex database bottlenecks and deliver elegant, responsive UI features made a huge impact on our platform scalability.",
      name: "Karan Malhotra",
      role: "CTO",
      company: "StartupX",
      initials: "KM",
      gradient: "from-fuchsia-200 to-blue-200",
    },
  ];

  return (
    <section id="testimonials" className="mb-10">
      <div className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-1">
        Testimonials
      </div>
      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0e1122] tracking-tight mb-8">
        What Teams &amp; Clients Say
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="glass-card rounded-3xl p-7 relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute top-6 right-6 text-purple-300/60">
              <Quote className="w-8 h-8" />
            </div>

            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm sm:text-[14.5px] text-[#484d63] leading-relaxed mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-purple-900/5">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center font-bold text-xs text-[#101221] shadow-xs shrink-0`}
              >
                {item.initials}
              </div>
              <div>
                <b className="block font-heading font-bold text-sm text-[#101221]">
                  {item.name}
                </b>
                <span className="block text-xs text-[#787d96]">
                  {item.role}, {item.company}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
