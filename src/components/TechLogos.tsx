"use client";

import React from "react";
import {
  SiPhp,
  SiLaravel,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiFastapi,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiDocker,
  SiPostman,
  SiFfmpeg,
  SiOpencv,
  SiGooglegemini,
  SiPwa,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { Code2, Database, Terminal, Server } from "lucide-react";

export interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechLogo({ name, className = "w-5 h-5", size }: TechLogoProps) {
  const norm = name.toLowerCase().trim();
  const label = `${name} logo`;
  const commonProps = {
    size,
    title: label,
    "aria-label": label,
    role: "img" as const,
  };

  // PHP
  if (norm.includes("php")) {
    return <SiPhp {...commonProps} className={`${className} text-[#777BB4] shrink-0`} />;
  }

  // Laravel
  if (norm.includes("laravel")) {
    return <SiLaravel {...commonProps} className={`${className} text-[#FF2D20] shrink-0`} />;
  }

  // TypeScript
  if (norm.includes("typescript") || norm === "ts") {
    return <SiTypescript {...commonProps} className={`${className} text-[#3178C6] shrink-0`} />;
  }

  // JavaScript
  if (norm.includes("javascript") || norm === "js") {
    return <SiJavascript {...commonProps} className={`${className} text-[#EAB308] shrink-0`} />;
  }

  // Next.js
  if (norm.includes("next")) {
    return <SiNextdotjs {...commonProps} className={`${className} text-[#000000] shrink-0`} />;
  }

  // React
  if (norm.includes("react")) {
    return <SiReact {...commonProps} className={`${className} text-[#0ea5e9] shrink-0 animate-[spin_12s_linear_infinite]`} />;
  }

  // FastAPI
  if (norm.includes("fastapi")) {
    return <SiFastapi {...commonProps} className={`${className} text-[#009688] shrink-0`} />;
  }

  // Python
  if (norm.includes("python") || norm === "py") {
    return <SiPython {...commonProps} className={`${className} text-[#3776AB] shrink-0`} />;
  }

  // MySQL
  if (norm.includes("mysql") || norm === "sql") {
    return <SiMysql {...commonProps} className={`${className} text-[#00758F] shrink-0`} />;
  }

  // PostgreSQL
  if (norm.includes("postgres") || norm === "pg") {
    return <SiPostgresql {...commonProps} className={`${className} text-[#336791] shrink-0`} />;
  }

  // Tailwind CSS
  if (norm.includes("tailwind")) {
    return <SiTailwindcss {...commonProps} className={`${className} text-[#06B6D4] shrink-0`} />;
  }

  // Bootstrap
  if (norm.includes("bootstrap")) {
    return <SiBootstrap {...commonProps} className={`${className} text-[#7952B3] shrink-0`} />;
  }

  // Git / GitHub
  if (norm.includes("git")) {
    return <SiGit {...commonProps} className={`${className} text-[#F05032] shrink-0`} />;
  }

  // Docker
  if (norm.includes("docker")) {
    return <SiDocker {...commonProps} className={`${className} text-[#2496ED] shrink-0`} />;
  }

  // VS Code
  if (norm.includes("vs code") || norm.includes("vscode") || norm.includes("dev")) {
    return <TbBrandVscode {...commonProps} className={`${className} text-[#007ACC] shrink-0`} />;
  }

  // Postman
  if (norm.includes("postman")) {
    return <SiPostman {...commonProps} className={`${className} text-[#FF6C37] shrink-0`} />;
  }

  // FFmpeg
  if (norm.includes("ffmpeg") || norm.includes("media")) {
    return <SiFfmpeg {...commonProps} className={`${className} text-[#007808] shrink-0`} />;
  }

  // OpenCV
  if (norm.includes("opencv") || norm.includes("mediapipe") || norm.includes("cv")) {
    return <SiOpencv {...commonProps} className={`${className} text-[#5C3EE8] shrink-0`} />;
  }

  // Whisper / Gemini AI
  if (norm.includes("ai") || norm.includes("whisper") || norm.includes("gemini")) {
    return <SiGooglegemini {...commonProps} className={`${className} text-[#8E24AA] shrink-0`} />;
  }

  // PWA
  if (norm.includes("pwa")) {
    return <SiPwa {...commonProps} className={`${className} text-[#5A0FC8] shrink-0`} />;
  }

  // API / REST
  if (norm.includes("api") || norm.includes("rest")) {
    return <Server {...commonProps} className={`${className} text-[#0284c7] shrink-0`} />;
  }

  // Fallbacks
  if (norm.includes("html") || norm.includes("css")) {
    return <Code2 {...commonProps} className={`${className} text-[#6366f1] shrink-0`} />;
  }

  if (norm.includes("db") || norm.includes("data")) {
    return <Database {...commonProps} className={`${className} text-[#6366f1] shrink-0`} />;
  }

  return <Terminal {...commonProps} className={`${className} text-[#6366f1] shrink-0`} />;
}
