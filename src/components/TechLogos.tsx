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
import { Code2, Database, Terminal, Globe, Cpu, Server } from "lucide-react";

export interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechLogo({ name, className = "w-5 h-5", size }: TechLogoProps) {
  const norm = name.toLowerCase().trim();

  // PHP
  if (norm.includes("php")) {
    return <SiPhp className={`${className} text-[#777BB4] shrink-0`} size={size} />;
  }

  // Laravel
  if (norm.includes("laravel")) {
    return <SiLaravel className={`${className} text-[#FF2D20] shrink-0`} size={size} />;
  }

  // TypeScript
  if (norm.includes("typescript") || norm === "ts") {
    return <SiTypescript className={`${className} text-[#3178C6] shrink-0`} size={size} />;
  }

  // JavaScript
  if (norm.includes("javascript") || norm === "js") {
    return <SiJavascript className={`${className} text-[#EAB308] shrink-0`} size={size} />;
  }

  // Next.js
  if (norm.includes("next")) {
    return <SiNextdotjs className={`${className} text-[#000000] shrink-0`} size={size} />;
  }

  // React
  if (norm.includes("react")) {
    return <SiReact className={`${className} text-[#0ea5e9] shrink-0 animate-[spin_12s_linear_infinite]`} size={size} />;
  }

  // FastAPI
  if (norm.includes("fastapi")) {
    return <SiFastapi className={`${className} text-[#009688] shrink-0`} size={size} />;
  }

  // Python
  if (norm.includes("python") || norm === "py") {
    return <SiPython className={`${className} text-[#3776AB] shrink-0`} size={size} />;
  }

  // MySQL
  if (norm.includes("mysql") || norm === "sql") {
    return <SiMysql className={`${className} text-[#00758F] shrink-0`} size={size} />;
  }

  // PostgreSQL
  if (norm.includes("postgres") || norm === "pg") {
    return <SiPostgresql className={`${className} text-[#336791] shrink-0`} size={size} />;
  }

  // Tailwind CSS
  if (norm.includes("tailwind")) {
    return <SiTailwindcss className={`${className} text-[#06B6D4] shrink-0`} size={size} />;
  }

  // Bootstrap
  if (norm.includes("bootstrap")) {
    return <SiBootstrap className={`${className} text-[#7952B3] shrink-0`} size={size} />;
  }

  // Git / GitHub
  if (norm.includes("git")) {
    return <SiGit className={`${className} text-[#F05032] shrink-0`} size={size} />;
  }

  // Docker
  if (norm.includes("docker")) {
    return <SiDocker className={`${className} text-[#2496ED] shrink-0`} size={size} />;
  }

  // VS Code
  if (norm.includes("vs code") || norm.includes("vscode") || norm.includes("dev")) {
    return <TbBrandVscode className={`${className} text-[#007ACC] shrink-0`} size={size} />;
  }

  // Postman
  if (norm.includes("postman")) {
    return <SiPostman className={`${className} text-[#FF6C37] shrink-0`} size={size} />;
  }

  // FFmpeg
  if (norm.includes("ffmpeg") || norm.includes("media")) {
    return <SiFfmpeg className={`${className} text-[#007808] shrink-0`} size={size} />;
  }

  // OpenCV
  if (norm.includes("opencv") || norm.includes("mediapipe") || norm.includes("cv")) {
    return <SiOpencv className={`${className} text-[#5C3EE8] shrink-0`} size={size} />;
  }

  // Whisper / Gemini AI
  if (norm.includes("ai") || norm.includes("whisper") || norm.includes("gemini")) {
    return <SiGooglegemini className={`${className} text-[#8E24AA] shrink-0`} size={size} />;
  }

  // PWA
  if (norm.includes("pwa")) {
    return <SiPwa className={`${className} text-[#5A0FC8] shrink-0`} size={size} />;
  }

  // API / REST
  if (norm.includes("api") || norm.includes("rest")) {
    return <Server className={`${className} text-[#0284c7] shrink-0`} size={size} />;
  }

  // Fallbacks
  if (norm.includes("html") || norm.includes("css")) {
    return <Code2 className={`${className} text-[#6366f1] shrink-0`} size={size} />;
  }

  if (norm.includes("db") || norm.includes("data")) {
    return <Database className={`${className} text-[#6366f1] shrink-0`} size={size} />;
  }

  return <Terminal className={`${className} text-[#6366f1] shrink-0`} size={size} />;
}
