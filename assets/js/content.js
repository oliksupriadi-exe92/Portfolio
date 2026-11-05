/**
 * CONTENT.JS - Basis Data Konten Portofolio (Bilingual ID / EN)
 * =============================================================
 * File ini menyimpan seluruh teks dan data proyek dalam bentuk Objek JavaScript.
 * Keuntungan:
 * 1. Sangat mudah diedit tanpa merusak tampilan HTML.
 * 2. Tidak terkena CORS error di browser saat dibuka lokal (file://).
 * 3. Memudahkan peralihan ke framework seperti React di masa mendatang.
 */

const portfolioData = {
  // ==========================================
  // BAHASA INDONESIA (DEFAULT)
  // ==========================================
  id: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      experience: "Pengalaman",
      projects: "Proyek",
      contact: "Kontak",
      cta: "Hubungi Saya"
    },
    hero: {
      status: "DESIGN • CODE • CREATE",
      headline: "Hello, I'm <span class=\"text-neon\">Kholid Supriadi</span>.<br>Building Ideas Into <span class=\"text-gradient\">Digital Experiences</span>.",
      role: "Mahasiswa Teknik Informatika di <strong>Institut Teknologi Sains Bandung (ITSB)</strong> &bull; <span class=\"text-accent\">Front-End Developer & UI Designer</span>",
      description: "Menghubungkan desain UI/UX intuitif dengan kode web bersih berkinerja tinggi untuk mengubah ide kreatif menjadi produk digital yang fungsional.",
      btnProjects: "Jelajahi Proyek",
      btnCv: "Unduh CV (PDF)",
      btnContact: "Hubungi Saya",
      socialLabel: "Temukan saya di:"
    },
    about: {
      title: "Tentang Saya",
      subtitle: "Menghubungkan Logika dan Estetika",
      badge: "Profil & Latar Belakang",
      paragraphs: [
        "Saya Kholid Supriadi, mahasiswa Teknik Informatika di Institut Teknologi Sains Bandung (ITSB). Berada di titik temu antara logika pemrograman dan estetika visual, saya fokus mengembangkan solusi digital yang bersih, responsif, dan mudah digunakan.",
        "Bagi saya, kode yang baik bukan hanya tentang fungsi teknis, melainkan tentang menghadirkan pengalaman pengguna yang bermakna. Di luar koding, saya aktif mengeksplorasi desain grafis, visual digital, dan berkolaborasi dalam berbagai proyek teknologi kampus."
      ],
      highlights: [
        { label: "Kampus", value: "ITSB (Teknik Informatika)" },
        { label: "Fokus Utama", value: "Front-End & UI/UX Design" },
        { label: "Pendekatan", value: "Clean Code & User-Centered" }
      ]
    },
    experienceSection: {
      badge: "Jejak Langkah & Kontribusi",
      title: "Pengalaman & Kepemimpinan",
      subtitle: "Aktivitas organisasi, pengabdian masyarakat, dan peran kreatif yang melatih komunikasi dan kepemimpinan saya."
    },
    experiences: [
      {
        role: "Fasilitator & Edukator Literasi Digital",
        organization: "Program Pengabdian di Lingkungan Pendidikan",
        period: "2024 - Sekarang",
        type: "Community Service",
        description: "Memfasilitasi edukasi pemanfaatan teknologi dan literasi digital dasar bagi siswa, menyederhanakan konsep teknis menjadi modul interaktif yang menyenangkan dan mudah dipahami.",
        skills: ["Public Speaking", "User Empathy", "Mentoring", "Educational Tech"]
      },
      {
        role: "Koordinator Kreatif & Publikasi Digital",
        organization: "Organisasi & Kepanitiaan Kampus ITSB",
        period: "2023 - 2024",
        type: "Campus Organization",
        description: "Memimpin perancangan aset grafis digital, poster kegiatan, dan publikasi media sosial untuk berbagai agenda kampus, memastikan konsistensi visual di setiap materi publikasi.",
        skills: ["Visual Design", "Cross-team Collaboration", "Project Management", "Figma"]
      },
      {
        role: "Pengembang Solusi Teknologi Mandiri",
        organization: "Eksplorasi Proyek Teknologi & Open Source",
        period: "2024",
        type: "Technical Initiative",
        description: "Meriset dan mengembangkan proyek mandiri terintegrasi seperti LogicLoop dan Transit_in untuk memecahkan kendala nyata efisiensi belajar mahasiswa dan rute mobilitas.",
        skills: ["Problem Solving", "Full-Stack Development", "API Integration", "Git"]
      }
    ],
    projectsSection: {
      title: "Karya & Proyek Pilihan",
      subtitle: "Studi kasus aplikasi dan sistem yang saya kembangkan dari ide hingga implementasi kode.",
      badge: "Portofolio Proyek"
    },
    projects: [
      {
        id: "logicloop",
        title: "LogicLoop — Academic Management Platform",
        category: "Full-Stack Web & Automation",
        tag: "Featured Project",
        description: "Platform manajemen akademik mahasiswa cerdas dengan fitur Auto-Prioritas Tugas, simulasi target nilai & prediksi UAS, dashboard analitik, dan notifikasi pengingat via Telegram Bot.",
        problem: "Mahasiswa sering kewalahan mengelola tenggat tugas, menghitung proyeksi IPK, dan membagi prioritas belajar saat menjelang ujian akhir.",
        solution: "Membangun sistem terintegrasi yang secara otomatis mengkalkulasi prioritas berdasarkan bobot nilai dan deadline, dilengkapi notifikasi bot Telegram langsung ke ponsel pengguna.",
        tools: ["Python", "JavaScript", "Telegram Bot API", "Analytics Dashboard", "HTML5/CSS3"],
        githubUrl: "https://github.com/oliksupriadi-exe92/LogicLoop_Project_",
        demoUrl: "https://github.com/oliksupriadi-exe92/LogicLoop_Project_",
        imagePlaceholder: "🎓 LogicLoop"
      },
      {
        id: "transitin",
        title: "Transit_in — Transport & Logistics Solution",
        category: "Web Application & System",
        tag: "Web Project",
        description: "Sistem informasi dan monitoring rute transit transportasi yang dirancang untuk kemudahan mobilitas dan keteraturan logistik perjalanan.",
        problem: "Kebutuhan akan platform informasi transportasi dan transit yang cepat diakses, ringan, dan memiliki visual alur rute yang mudah dipahami.",
        solution: "Merancang antarmuka ramah pengguna dengan alur navigasi jelas serta struktur data rute yang terorganisir.",
        tools: ["JavaScript", "HTML5", "CSS3", "UI/UX Design"],
        githubUrl: "https://github.com/oliksupriadi-exe92/Transit_in",
        demoUrl: "https://github.com/oliksupriadi-exe92/Transit_in",
        imagePlaceholder: "🚌 Transit_in"
      },
      {
        id: "portfolio",
        title: "Personal Portfolio & Digital Identity",
        category: "Front-End & UI/UX Design",
        tag: "Interactive Portfolio",
        description: "Website portofolio pribadi modern bergaya futuristik minimalis dengan sistem tema bilingual (ID/EN) dan performa tinggi.",
        problem: "Membutuhkan platform profesional untuk membangun personal branding, memamerkan hasil karya nyata, dan menarik peluang kerja/freelance.",
        solution: "Merancang sistem desain berbasis token CSS, arsitektur responsif mobile-first, dan struktur studi kasus berorientasi pemecahan masalah.",
        tools: ["HTML5", "CSS3 Variables", "Vanilla JavaScript", "Figma", "GitHub Pages"],
        githubUrl: "https://github.com/oliksupriadi-exe92",
        demoUrl: "#",
        imagePlaceholder: "💻 Personal Web"
      }
    ],
    contact: {
      badge: "Hubungi Saya",
      title: "Mari Berkolaborasi",
      subtitle: "Punya ide proyek, tawaran magang, atau ingin mendiskusikan peluang kerja sama? Kirim pesan langsung melalui formulir di bawah ini.",
      infoTitle: "Saluran Komunikasi Langsung",
      infoEmailLabel: "Email Utama",
      infoGithubLabel: "Profil GitHub",
      infoLocationLabel: "Lokasi",
      infoLocation: "Bandung, Jawa Barat, Indonesia",
      infoStatusLabel: "Status Ketersediaan",
      infoStatus: "Terbuka untuk Magang & Freelance",
      formNameLabel: "Nama Lengkap",
      formNamePlaceholder: "Masukkan nama Anda atau perusahaan",
      formEmailLabel: "Alamat Email",
      formEmailPlaceholder: "nama@contoh.com",
      formSubjectLabel: "Keperluan / Subjek",
      formSubjects: [
        "Tawaran Magang / Junior Developer",
        "Peluang Proyek Freelance / Desain Web",
        "Kolaborasi Teknologi & Proyek Kampus",
        "Pertanyaan Umum / Diskusi"
      ],
      formMessageLabel: "Pesan Anda",
      formMessagePlaceholder: "Tuliskan detail proyek atau pesan yang ingin didiskusikan...",
      formSubmitBtn: "Kirim Pesan Sekarang",
      formSending: "Mengirim pesan...",
      formSuccess: "✅ Pesan Anda berhasil terkirim! Terima kasih telah menghubungi saya, saya akan segera membalasnya via email.",
      formError: "⚠️ Terjadi kendala saat mengirim. Anda juga bisa langsung mengirim email ke: kholidsupriadi.dev@gmail.com"
    }
  },

  // ==========================================
  // ENGLISH VERSION
  // ==========================================
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      cta: "Get in Touch"
    },
    hero: {
      status: "DESIGN • CODE • CREATE",
      headline: "Hello, I'm <span class=\"text-neon\">Kholid Supriadi</span>.<br>Building Ideas Into <span class=\"text-gradient\">Digital Experiences</span>.",
      role: "Informatics Student at <strong>Institut Teknologi Sains Bandung (ITSB)</strong> &bull; <span class=\"text-accent\">Front-End Developer & UI Designer</span>",
      description: "Bridging intuitive UI/UX design with clean, high-performance web code to turn creative concepts into functional digital products.",
      btnProjects: "Explore Projects",
      btnCv: "Download CV (PDF)",
      btnContact: "Get in Touch",
      socialLabel: "Connect with me:"
    },
    about: {
      title: "About Me",
      subtitle: "Bridging Logic and Aesthetics",
      badge: "Profile & Background",
      paragraphs: [
        "I am Kholid Supriadi, an Informatics Engineering student at Institut Teknologi Sains Bandung (ITSB). Sitting at the intersection of logical programming and visual aesthetics, I focus on building clean, responsive, and user-friendly digital solutions.",
        "To me, great code goes beyond technical functionality—it creates meaningful human experiences. Beyond development, I actively explore graphic design, digital visuals, and enjoy collaborating on creative campus technology projects."
      ],
      highlights: [
        { label: "Institution", value: "ITSB (Informatics Engineering)" },
        { label: "Core Focus", value: "Front-End & UI/UX Design" },
        { label: "Philosophy", value: "Clean Code & User-Centered" }
      ]
    },
    experienceSection: {
      badge: "Journey & Milestones",
      title: "Experience & Leadership",
      subtitle: "Campus organizations, community education initiatives, and technical projects shaping my teamwork and problem-solving skills."
    },
    experiences: [
      {
        role: "Digital Literacy Educator & Facilitator",
        organization: "Educational Community Service Initiative",
        period: "2024 - Present",
        type: "Community Service",
        description: "Facilitated foundational digital literacy and technology adoption for students, translating complex technical ideas into engaging, easy-to-grasp learning modules.",
        skills: ["Public Speaking", "User Empathy", "Mentoring", "Educational Tech"]
      },
      {
        role: "Creative Media & Digital Publication Coordinator",
        organization: "ITSB Campus Organization & Event Committee",
        period: "2023 - 2024",
        type: "Campus Organization",
        description: "Spearheaded digital visual asset creation, event posters, and branding guidelines across campus media channels for large-scale student initiatives.",
        skills: ["Visual Design", "Cross-team Collaboration", "Project Management", "Figma"]
      },
      {
        role: "Independent Tech Solution Developer",
        organization: "Open Source & Tech Initiatives",
        period: "2024",
        type: "Technical Initiative",
        description: "Researched and built end-to-end applications including LogicLoop and Transit_in to solve real academic productivity and logistics challenges.",
        skills: ["Problem Solving", "Full-Stack Development", "API Integration", "Git"]
      }
    ],
    projectsSection: {
      title: "Featured Works & Projects",
      subtitle: "Case studies of applications and systems I developed from concept to functional code.",
      badge: "Project Portfolio"
    },
    projects: [
      {
        id: "logicloop",
        title: "LogicLoop — Academic Management Platform",
        category: "Full-Stack Web & Automation",
        tag: "Featured Project",
        description: "An intelligent academic management platform featuring Smart Task Prioritization, exam grade simulations, analytics dashboard, and automated Telegram Bot reminders.",
        problem: "Students frequently struggle to manage deadlines, calculate GPA projections, and allocate study priorities ahead of final exams.",
        solution: "Engineered an integrated system that automatically computes task priority based on syllabus weights and deadlines, coupled with direct Telegram Bot alerts.",
        tools: ["Python", "JavaScript", "Telegram Bot API", "Analytics Dashboard", "HTML5/CSS3"],
        githubUrl: "https://github.com/oliksupriadi-exe92/LogicLoop_Project_",
        demoUrl: "https://github.com/oliksupriadi-exe92/LogicLoop_Project_",
        imagePlaceholder: "🎓 LogicLoop"
      },
      {
        id: "transitin",
        title: "Transit_in — Transport & Logistics Solution",
        category: "Web Application & System",
        tag: "Web Project",
        description: "A transit information and route monitoring system built for streamlined mobility and organized trip logistics.",
        problem: "The need for a lightweight, easily accessible transportation platform with crystal-clear visual route navigation.",
        solution: "Designed a user-friendly UI with intuitive workflow navigation and well-structured route data management.",
        tools: ["JavaScript", "HTML5", "CSS3", "UI/UX Design"],
        githubUrl: "https://github.com/oliksupriadi-exe92/Transit_in",
        demoUrl: "https://github.com/oliksupriadi-exe92/Transit_in",
        imagePlaceholder: "🚌 Transit_in"
      },
      {
        id: "portfolio",
        title: "Personal Portfolio & Digital Identity",
        category: "Front-End & UI/UX Design",
        tag: "Interactive Portfolio",
        description: "A sleek futuristic-minimalist personal portfolio featuring a bilingual system (ID/EN) and high-performance design architecture.",
        problem: "Requiring a standout platform to establish professional branding, showcase real-world projects, and attract tech recruiters & clients.",
        solution: "Engineered a CSS-tokenized design system, mobile-first responsive layouts, and problem-oriented case study presentations.",
        tools: ["HTML5", "CSS3 Variables", "Vanilla JavaScript", "Figma", "GitHub Pages"],
        githubUrl: "https://github.com/oliksupriadi-exe92",
        demoUrl: "#",
        imagePlaceholder: "💻 Personal Web"
      }
    ],
    contact: {
      badge: "Get in Touch",
      title: "Let's Collaborate",
      subtitle: "Have an exciting project idea, internship opportunity, or want to connect? Send a direct message below.",
      infoTitle: "Direct Channels",
      infoEmailLabel: "Direct Email",
      infoGithubLabel: "GitHub Profile",
      infoLocationLabel: "Location",
      infoLocation: "Bandung, West Java, Indonesia",
      infoStatusLabel: "Availability",
      infoStatus: "Open for Internship & Freelance",
      formNameLabel: "Full Name",
      formNamePlaceholder: "Your name or company",
      formEmailLabel: "Your Email",
      formEmailPlaceholder: "name@example.com",
      formSubjectLabel: "Inquiry / Subject",
      formSubjects: [
        "Internship / Junior Role Opportunity",
        "Freelance Project / Web Design",
        "Tech Collaboration & Campus Project",
        "General Inquiries / Coffee Chat"
      ],
      formMessageLabel: "Your Message",
      formMessagePlaceholder: "Tell me about your project or what you would like to discuss...",
      formSubmitBtn: "Send Message Now",
      formSending: "Sending message...",
      formSuccess: "✅ Your message has been sent successfully! Thank you for reaching out, I will reply shortly via email.",
      formError: "⚠️ Something went wrong. You can also reach me directly at: kholidsupriadi.dev@gmail.com"
    }
  }
};

