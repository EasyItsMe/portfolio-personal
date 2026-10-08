export type Language = "id" | "en";

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    services: string;
    techStack: string;
    work: string;
    certifications: string;
    experience: string;
    contact: string;
    letsTalk: string;
  };
  hero: {
    greeting: string;
    name: string;
    roles: string[];
    bio: string;
    viewWork: string;
    downloadCv: string;
    cvToast: string;
    toolkitTitle: string;
    autoScroll: string;
    card1Number: string;
    card1Title: string;
    card1Sub: string;
    card2Badge: string;
    card2Title: string;
    card2Sub: string;
  };
  about: {
    tag: string;
    photoRole: string;
    status: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    eduLabel: string;
    eduValue: string;
    eduSub: string;
    certLabel: string;
    certValue: string;
    certSub: string;
    focusLabel: string;
    focusValue: string;
    focusSub: string;
    certListTitle: string;
    viewAllCertBtn: string;
    downloadCvBtn: string;
    getInTouchBtn: string;
  };
  services: {
    tag: string;
    title: string;
    learnMore: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  techStack: {
    tag: string;
    title: string;
    autoScrollBtn: string;
    gridViewBtn: string;
    hint: string;
    categories: Record<string, string>;
  };
  projects: {
    tag: string;
    title: string;
    discussBtn: string;
    codeBtn: string;
    keyMetric: string;
    coreArch: string;
    techStackTitle: string;
    items: Array<{
      id: string;
      badge: string;
      title: string;
      subtitle: string;
      category: string;
      description: string;
      tech: string[];
      features: string[];
      metrics: string;
    }>;
  };
  certifications: {
    tag: string;
    title: string;
    subtitle: string;
    autoScrollBadge: string;
    autoScrollBtn: string;
    gridViewBtn: string;
    viewCert: string;
    verified: string;
    competenciesTitle: string;
    openPdf: string;
    downloadFile: string;
    totalCountBadge: string;
    categories: Record<string, string>;
  };
  experience: {
    tag: string;
    title: string;
    subtitle: string;
    present: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    whatsappSub: string;
    locationSub: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formTopic: string;
    formTopicOptions: string[];
    formMessage: string;
    formMessagePlaceholder: string;
    sendBtn: string;
    sendingBtn: string;
    responseTime: string;
    toastSuccess: string;
  };
  footer: {
    copyrightRole: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      services: "Layanan",
      techStack: "Tech Stack",
      work: "Proyek",
      certifications: "Sertifikasi",
      experience: "Pengalaman",
      contact: "Kontak",
      letsTalk: "Hubungi Saya",
    },
    hero: {
      greeting: "HALO, SAYA",
      name: "Ahmad Zaki",
      roles: [
        "Full-Stack Developer",
        "Spesialis Laravel & Next.js",
        "Arsitek Backend & REST API",
        "Modern Web Engineer",
      ],
      bio: "Spesialis dalam membangun aplikasi web yang terukur, responsif, dan berperforma tinggi dengan Laravel, Next.js, dan arsitektur database modern. Berfokus pada kode bersih dan solusi praktis.",
      viewWork: "Lihat Karya Saya",
      downloadCv: "Lihat CV / Resume",
      cvToast: "Membuka CV Ahmad Zaki di tab baru...",
      toolkitTitle: "My Toolkit & Tech Stack",
      autoScroll: "↔ Bergerak otomatis",
      card1Number: "10+",
      card1Title: "Proyek Selesai",
      card1Sub: "Web & Full-Stack",
      card2Badge: "Spesialisasi Inti",
      card2Title: "Laravel · Next.js",
      card2Sub: "Clean Code & REST API",
    },
    about: {
      tag: "Tentang Saya",
      photoRole: "Full-Stack Developer · Serang, Banten",
      status: "Tersedia untuk Pekerjaan & Proyek",
      title: "Lulusan D3 Manajemen Informatika & Full-Stack Web Developer",
      paragraph1:
        "Halo! Saya Ahmad Zaki, seorang Full-Stack Web Developer yang berdedikasi dan lulusan D3 Manajemen Informatika dari Politeknik Piksi Input Serang. Saya memiliki antusiasme mendalam dalam merancang sistem web yang andal, efisien, dan ramah pengguna.",
      paragraph2:
        "Melalui perpaduan pengalaman akademis, kepemimpinan organisasi di HMMI, magang di Kantor Notaris & PPAT, serta sertifikasi bergengsi dari Dicoding × DBS Foundation, BNSP, dan MikroTik, saya siap menghadirkan solusi digital berkualitas tinggi untuk kebutuhan bisnis maupun tim engineering Anda.",
      eduLabel: "Pendidikan",
      eduValue: "Lulusan D3",
      eduSub: "Manajemen Informatika · Politeknik Piksi Input",
      certLabel: "Sertifikasi",
      certValue: "Dicoding × DBS",
      certSub: "Coding Camp 2025 · Front & Back-End",
      focusLabel: "Fokus Keahlian",
      focusValue: "Full-Stack",
      focusSub: "Laravel, Next.js & REST API",
      certListTitle: "Kredensial & Sertifikasi Utama:",
      viewAllCertBtn: "Lihat Semua (21+ Sertifikat) ⬇",
      downloadCvBtn: "Unduh CV Lengkap (PDF)",
      getInTouchBtn: "Mari Berdiskusi",
    },
    services: {
      tag: "Keahlian & Layanan",
      title: "Layanan & Kemampuan Teknis",
      learnMore: "Pelajari Lebih Lanjut",
      items: [
        {
          id: "frontend",
          title: "Frontend Engineering",
          description: "Membangun antarmuka web yang responsif, interaktif, dan berkecepatan tinggi menggunakan React, Next.js, dan TailwindCSS.",
        },
        {
          id: "backend",
          title: "Backend & REST API",
          description: "Merancang arsitektur server terukur, otentikasi JWT/Session yang aman, dan endpoint RESTful dengan Laravel, PHP, dan FastAPI.",
        },
        {
          id: "database",
          title: "Arsitektur Database",
          description: "Merancang skema relasional teroptimasi, indexing query, dan manajemen database MySQL serta PostgreSQL untuk integritas data tinggi.",
        },
        {
          id: "fullstack",
          title: "Aplikasi Web Full-Stack",
          description: "Mengembangkan sistem informasi terintegrasi dari hulu ke hilir untuk kebutuhan portal kampus, manajemen keuangan, hingga media web.",
        },
      ],
    },
    techStack: {
      tag: "Tech Stack & Toolkit",
      title: "Teknologi & Framework",
      autoScrollBtn: "Auto-Scroll",
      gridViewBtn: "Tampilan Grid",
      hint: "↔ Bergerak otomatis ke samping · Arahkan kursor pada kartu untuk berhenti sementara",
      categories: {
        All: "Semua",
        "Core Web": "Core Web",
        Frameworks: "Framework",
        "Backend & DB": "Backend & Database",
        "Media & AI": "Media & AI",
        Tools: "Tools & DevOps",
      },
    },
    projects: {
      tag: "PROYEK UNGGULAN",
      title: "Karya Pilihan",
      discussBtn: "Diskusikan Proyek Serupa",
      codeBtn: "Kode",
      keyMetric: "Metrik Kunci:",
      coreArch: "Arsitektur & Fitur Utama",
      techStackTitle: "Tech Stack yang Digunakan",
      items: [
        {
          id: "snapvid",
          badge: "SNAPVID",
          title: "Snapvid — Media Toolkit",
          subtitle: "JS · PWA · API",
          category: "Media & Web Toolkit",
          description:
            "Aplikasi web progresif (PWA) dan toolkit pemrosesan media berkinerja tinggi untuk pemotongan video sisi klien, konversi audio, kompresi, dan integrasi API streaming tanpa beban server.",
          tech: ["JavaScript", "PWA", "API", "Tailwind", "Git"],
          features: [
            "Pemangkasan video & ekstraksi audio langsung di browser",
            "Arsitektur Progressive Web App (PWA) siap pakai secara offline",
            "Integrasi API streaming bitrate adaptif dengan pratinjau instan",
            "Pemrosesan batch media dengan antarmuka drag-and-drop intuitif",
          ],
          metrics: "Memproses klip video langsung di browser dengan 0 detik antrean server",
        },
        {
          id: "dompetaman",
          badge: "DOMPETAMAN",
          title: "DompetAman — Finance Management",
          subtitle: "Laravel · PHP · MySQL",
          category: "Full-Stack Web App",
          description:
            "Platform manajemen keuangan komprehensif berbasis Laravel, PHP, dan MySQL. Menyediakan klasifikasi pengeluaran real-time, buku kas multi-dompet, analitik arus kas, dan pelaporan keuangan PDF otomatis.",
          tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
          features: [
            "Pencatatan pemasukan & pengeluaran dinamis dengan multi-dompet",
            "Batas anggaran bulanan otomatis & analitik tren pengeluaran",
            "Otentikasi pengguna aman, hak akses berbasis peran, dan log audit",
            "Laporan ringkasan arus kas bulanan yang dapat diekspor ke PDF",
          ],
          metrics: "Respons query di bawah 80ms dengan skema relasional yang terindeks rapi",
        },
        {
          id: "tasystem",
          badge: "TA SYSTEM",
          title: "TA Submission & Monitoring",
          subtitle: "Laravel · MySQL",
          category: "Academic Management System",
          description:
            "Sistem terpusat pengelolaan alur Tugas Akhir / Skripsi mahasiswa di lingkungan akademik. Mengatur pengajuan judul proposal, log konsultasi bimbingan dosen, pengecekan progres, hingga penjadwalan sidang.",
          tech: ["Laravel", "PHP", "MySQL", "Tailwind", "JavaScript"],
          features: [
            "Pengajuan proposal skripsi dari awal hingga validasi bertingkat dosen",
            "Pelacakan riwayat konsultasi/bimbingan dengan catatan revisi",
            "Perencana jadwal sidang terotomatisasi & matriks penilaian dosen",
            "Dashboard multi-peran untuk Mahasiswa, Dosen Pembimbing, dan Admin Jurusan",
          ],
          metrics: "Mendigitalkan 100% proses pengajuan dan verifikasi tugas akhir kampus",
        },
      ],
    },
    certifications: {
      tag: "Sertifikasi & Kredensial",
      title: "Keahlian & Pencapaian Terverifikasi",
      subtitle:
        "Kompetensi terverifikasi dalam pengembangan full-stack web, analisis data, arsitektur jaringan, dan software engineering.",
      autoScrollBadge: "21+ Sertifikat Terverifikasi",
      autoScrollBtn: "Auto-Scroll",
      gridViewBtn: "Tampilan Grid",
      viewCert: "Lihat Sertifikat",
      verified: "Terverifikasi",
      competenciesTitle: "Kompetensi yang Terbukti",
      openPdf: "Buka Dokumen Penuh",
      downloadFile: "Unduh Berkas",
      totalCountBadge: "21 Kredensial Resmi",
      categories: {
        All: "Semua Kategori",
        "Full-Stack & Web": "Full-Stack & Web",
        "Data & Analytics": "Data & Analitik",
        "Networking & Cloud": "Jaringan & Cloud",
        "AI & Professional": "AI & Bisnis Digital",
      },
    },
    experience: {
      tag: "Pengalaman",
      title: "Tempat Berkarya & Belajar",
      subtitle:
        "Rekam jejak kepemimpinan organisasi, administrasi hukum berakurasi tinggi, dan rekayasa perangkat lunak full-stack mandiri.",
      present: "SEKARANG",
    },
    contact: {
      tag: "Mari Terhubung",
      title: "Punya ide proyek atau peluang kolaborasi?",
      subtitle: "Mari ciptakan solusi digital yang berdampak bersama.",
      whatsappSub: "WhatsApp Aktif · Respons Cepat",
      locationSub: "Serang, Banten, Indonesia (Remote & On-Site)",
      formName: "Nama Lengkap *",
      formNamePlaceholder: "Masukkan nama Anda",
      formEmail: "Email Anda *",
      formEmailPlaceholder: "anda@email.com",
      formTopic: "Kategori Proyek / Topik",
      formTopicOptions: [
        "Pengembangan Web (Laravel / Next.js)",
        "Frontend Development (React / Tailwind)",
        "Aplikasi Web Full-Stack",
        "Desain & Optimasi Database (MySQL)",
        "Peluang Karir & Kolaborasi",
      ],
      formMessage: "Pesan Anda *",
      formMessagePlaceholder: "Ceritakan tentang ide proyek, kebutuhan, atau pesan Anda...",
      sendBtn: "Kirim Pesan",
      sendingBtn: "Mengirim...",
      responseTime: "Siap merespons dalam 1x24 jam kerja.",
      toastSuccess: "Terima kasih! Pesan Anda telah terkirim.",
    },
    footer: {
      copyrightRole: "Full-Stack Developer · Lulusan D3 Manajemen Informatika, Politeknik Piksi Input Serang.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      techStack: "Tech Stack",
      work: "Work",
      certifications: "Certifications",
      experience: "Experience",
      contact: "Contact",
      letsTalk: "Let's Talk",
    },
    hero: {
      greeting: "HELLO, I'M",
      name: "Ahmad Zaki",
      roles: [
        "Full-Stack Developer",
        "Laravel & Next.js Specialist",
        "Backend & REST API Architect",
        "Modern Web Engineer",
      ],
      bio: "Specialized in building scalable, responsive web applications with Laravel, Next.js, and modern AI/media toolkits. Focused on clean architecture and practical solutions.",
      viewWork: "View My Work",
      downloadCv: "View CV / Resume",
      cvToast: "Opening Ahmad Zaki CV in a new tab...",
      toolkitTitle: "My Toolkit & Tech Stack",
      autoScroll: "↔ Auto-scrolling",
      card1Number: "10+",
      card1Title: "Projects Built",
      card1Sub: "Web & Full-Stack",
      card2Badge: "Core Specialization",
      card2Title: "Laravel · Next.js",
      card2Sub: "Clean Code & REST APIs",
    },
    about: {
      tag: "About Me",
      photoRole: "Full-Stack Developer · Serang, Banten",
      status: "Available for Work & Projects",
      title: "Full-Stack Web Developer & Informatics Management Graduate",
      paragraph1:
        "Hi! I'm Ahmad Zaki, a dedicated Full-Stack Web Developer and graduate in D3 Informatics Management from Politeknik Piksi Input Serang. I have a deep passion for designing resilient, scalable, and user-centric web applications.",
      paragraph2:
        "Through a combination of academic foundation, student leadership in HMMI, professional practice at a Notary & PPAT office, and certified credentials from Dicoding × DBS Foundation, BNSP, and MikroTik, I am ready to deliver robust digital solutions for your business or engineering team.",
      eduLabel: "Education",
      eduValue: "D3 Graduate",
      eduSub: "Informatics Management · Politeknik Piksi Input",
      certLabel: "Certifications",
      certValue: "Dicoding × DBS",
      certSub: "Coding Camp 2025 · Front & Back-End",
      focusLabel: "Focus Area",
      focusValue: "Full-Stack",
      focusSub: "Laravel, Next.js & REST APIs",
      certListTitle: "Key Credentials & Certifications:",
      viewAllCertBtn: "View All (21+ Certificates) ⬇",
      downloadCvBtn: "Download Full CV (PDF)",
      getInTouchBtn: "Let's Discuss",
    },
    services: {
      tag: "What I Do",
      title: "Services & Capabilities",
      learnMore: "Learn More",
      items: [
        {
          id: "frontend",
          title: "Frontend Engineering",
          description: "Crafting responsive, accessible, and ultra-fast user interfaces with React, Next.js, and TypeScript.",
        },
        {
          id: "backend",
          title: "Backend & APIs",
          description: "Designing scalable RESTful & GraphQL microservices, robust authentication, and resilient server logic with Laravel & FastAPI.",
        },
        {
          id: "database",
          title: "Database Architecture",
          description: "Architecting relational (MySQL, PostgreSQL) databases with optimized queries, indexing, and schema design.",
        },
        {
          id: "fullstack",
          title: "Full-Stack Web Applications",
          description: "End-to-end web software development from campus portals and financial management systems to web media toolkits.",
        },
      ],
    },
    techStack: {
      tag: "Tech Stack & Toolkit",
      title: "Technologies & Frameworks",
      autoScrollBtn: "Auto-Scroll",
      gridViewBtn: "Grid View",
      hint: "↔ Moving automatically · Hover over any card to pause animation",
      categories: {
        All: "All",
        "Core Web": "Core Web",
        Frameworks: "Frameworks",
        "Backend & DB": "Backend & DB",
        "Media & AI": "Media & AI",
        Tools: "Tools & DevOps",
      },
    },
    projects: {
      tag: "FEATURED PROJECTS",
      title: "Selected Projects",
      discussBtn: "Discuss Similar Project",
      codeBtn: "Code",
      keyMetric: "Key Metric:",
      coreArch: "Core Architecture & Features",
      techStackTitle: "Technology Stack",
      items: [
        {
          id: "snapvid",
          badge: "SNAPVID",
          title: "Snapvid — Media Toolkit",
          subtitle: "JS · PWA · API",
          category: "Media & Web Toolkit",
          description:
            "Modern progressive web application (PWA) and high-performance media processing toolkit built for fast client-side video clipping, audio conversion, compression, and seamless streaming APIs.",
          tech: ["JavaScript", "PWA", "API", "Tailwind", "Git"],
          features: [
            "Client-side video trimming & audio extraction pipeline",
            "Offline-ready Progressive Web App (PWA) architecture",
            "Adaptive bitrate streaming API integration with instant preview",
            "Batch media processing with intuitive drag-and-drop UI",
          ],
          metrics: "Processes video clips directly in browser with 0s server queue delay",
        },
        {
          id: "dompetaman",
          badge: "DOMPETAMAN",
          title: "DompetAman — Finance Management",
          subtitle: "Laravel · PHP · MySQL",
          category: "Full-Stack Web App",
          description:
            "Comprehensive personal & business financial management platform built with Laravel, PHP, and MySQL. Features real-time expense classification, multi-wallet balance ledgers, cashflow analytics, and PDF reporting.",
          tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
          features: [
            "Dynamic income & expense tracking with multi-wallet management",
            "Automated monthly budget limits & spending category analytics",
            "Secure user authentication, role-based access, and encrypted audit logs",
            "Automated monthly cashflow reports with PDF export generator",
          ],
          metrics: "Sub-80ms query response with optimized relational schema",
        },
        {
          id: "tasystem",
          badge: "TA SYSTEM",
          title: "TA Submission & Monitoring",
          subtitle: "Laravel · MySQL",
          category: "Academic Management System",
          description:
            "Centralized Final Project (Tugas Akhir) submission and monitoring system built for campus academic workflows. Handles student proposal submissions, supervisor consultation logs (bimbingan), and graduation defense schedules.",
          tech: ["Laravel", "PHP", "MySQL", "Tailwind", "JavaScript"],
          features: [
            "End-to-end thesis proposal submission & multi-stage lecturer approval",
            "Consultation & bimbingan progress tracking with revision history",
            "Automated thesis defense schedule planner & grading matrix",
            "Role-based portals for Students, Academic Supervisors, and Admins",
          ],
          metrics: "Digitized 100% of campus final project validation workflows",
        },
      ],
    },
    certifications: {
      tag: "Certifications & Credentials",
      title: "Verified Skills & Achievements",
      subtitle:
        "Certified competencies in full-stack web development, data analytics, network infrastructure, and software engineering.",
      autoScrollBadge: "21+ Verified Certificates",
      autoScrollBtn: "Auto-Scroll",
      gridViewBtn: "Grid View",
      viewCert: "View Certificate",
      verified: "Verified",
      competenciesTitle: "Demonstrated Competencies",
      openPdf: "Open Full Document",
      downloadFile: "Download File",
      totalCountBadge: "21 Official Credentials",
      categories: {
        All: "All Categories",
        "Full-Stack & Web": "Full-Stack & Web",
        "Data & Analytics": "Data & Analytics",
        "Networking & Cloud": "Networking & Cloud",
        "AI & Professional": "AI & Digital Business",
      },
    },
    experience: {
      tag: "Experience",
      title: "Where I've Built & Learned",
      subtitle:
        "A track record of organizational leadership, administrative precision, and hands-on full-stack development.",
      present: "NOW",
    },
    contact: {
      tag: "Let's Connect",
      title: "Have a project or collaboration in mind?",
      subtitle: "Let's create something impactful together.",
      whatsappSub: "WhatsApp Active · Quick Response",
      locationSub: "Serang, Banten, Indonesia (Remote & On-Site)",
      formName: "Full Name *",
      formNamePlaceholder: "Enter your name",
      formEmail: "Your Email *",
      formEmailPlaceholder: "your@email.com",
      formTopic: "Project Category / Topic",
      formTopicOptions: [
        "Web Development (Laravel / Next.js)",
        "Frontend Development (React / Tailwind)",
        "Full-Stack Web Application",
        "Database Design & Optimization (MySQL)",
        "Collaboration & Career Opportunity",
      ],
      formMessage: "Your Message *",
      formMessagePlaceholder: "Tell me about your project idea, requirements, or message...",
      sendBtn: "Send Message",
      sendingBtn: "Sending...",
      responseTime: "Ready to respond within 1 business day.",
      toastSuccess: "Thank you! Your message has been sent successfully.",
    },
    footer: {
      copyrightRole: "Full-Stack Developer · D3 Informatics Management Graduate, Politeknik Piksi Input Serang.",
    },
  },
};
