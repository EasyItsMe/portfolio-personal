"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language, TranslationSchema } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  isTransitioning: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang") as Language | null;
    if (saved === "id" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    if (lang === language || isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setLanguageState(lang);
      try {
        localStorage.setItem("portfolio_lang", lang);
      } catch {}

      setTimeout(() => {
        setIsTransitioning(false);
      }, 40);
    }, 180);
  };

  const toggleLanguage = () => {
    const next = language === "id" ? "en" : "id";
    setLanguage(next);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        isTransitioning,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
