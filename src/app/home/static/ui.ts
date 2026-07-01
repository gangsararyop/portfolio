import { LANG } from "./lang";

// Static UI copy that lives in the section components (hero, headings, CTAs,
// labels). Kept in both languages so switching LANG in ./lang.ts flips the whole
// site. Edit copy here, not inline in the components.

const en = {
  hero: {
    buildPre: "I build ",
    buildHighlight: "websites & web apps",
    buildPost: " that grow your business",
    intro:
      "Fullstack web developer based in Indonesia. From landing pages to e-commerce and custom management systems — built to be fast, reliable, and ready to scale.",
    whatsappCta: "Hire me on WhatsApp",
    emailCta: "Email me",
  },
  about: {
    paragraph1:
      "Need a website or a system to run your business? I help businesses, startups, and professionals turn their ideas into fast, reliable web products that actually get used. Whether you want to attract more customers, sell online, or replace messy spreadsheets with a proper system, I handle it end to end — from design and development to launch.",
    paragraph2:
      "I'm a fullstack web developer with years of experience building production websites and applications for real companies, using modern technologies like React, Next.js, and TypeScript. You get clean, maintainable code, clear communication, and a partner who cares about the result — not just the code.",
  },
  services: {
    heading: "What I Can Build for You",
    subheading:
      "From a simple landing page to a full management system — pick what your business needs, or tell me your idea and I'll build it.",
  },
  work: {
    heading: "Selected Work",
    subheading:
      "Real websites and systems I've built and shipped for companies — from marketing sites to dashboards, e-commerce, and internal tools.",
  },
  experience: {
    heading: "Experience",
    subheading:
      "Companies and teams I've worked with, building and shipping production software.",
  },
  contact: {
    heading: "Let's Build Something",
    body: "Have a project in mind or just want a quote? Tell me what you need and I'll get back to you with the best way to make it happen. The first conversation is always free.",
    whatsappCta: "Chat on WhatsApp",
    emailCta: "Email me",
  },
  projectCard: {
    sourceCode: "Source Code",
  },
};

const id: typeof en = {
  hero: {
    buildPre: "Saya membangun ",
    buildHighlight: "website & aplikasi web",
    buildPost: " yang mengembangkan bisnis Anda",
    intro:
      "Fullstack web developer yang berbasis di Indonesia. Dari landing page hingga e-commerce dan sistem manajemen custom — dibuat agar cepat, andal, dan siap berkembang.",
    whatsappCta: "Hubungi via WhatsApp",
    emailCta: "Email saya",
  },
  about: {
    paragraph1:
      "Butuh website atau sistem untuk menjalankan bisnis Anda? Saya membantu bisnis, startup, dan profesional mengubah ide mereka menjadi produk web yang cepat, andal, dan benar-benar terpakai. Entah Anda ingin menarik lebih banyak pelanggan, berjualan online, atau menggantikan spreadsheet yang berantakan dengan sistem yang proper, saya menanganinya secara menyeluruh — dari desain dan pengembangan hingga peluncuran.",
    paragraph2:
      "Saya seorang fullstack web developer dengan pengalaman bertahun-tahun membangun website dan aplikasi produksi untuk perusahaan nyata, menggunakan teknologi modern seperti React, Next.js, dan TypeScript. Anda mendapatkan kode yang bersih dan mudah dipelihara, komunikasi yang jelas, dan partner yang peduli pada hasil — bukan sekadar kodenya.",
  },
  services: {
    heading: "Yang Bisa Saya Bangun untuk Anda",
    subheading:
      "Dari landing page sederhana hingga sistem manajemen lengkap — pilih yang dibutuhkan bisnis Anda, atau ceritakan ide Anda dan saya akan membangunnya.",
  },
  work: {
    heading: "Karya Pilihan",
    subheading:
      "Website dan sistem nyata yang telah saya bangun dan rilis untuk perusahaan — mulai dari situs marketing hingga dashboard, e-commerce, dan tools internal.",
  },
  experience: {
    heading: "Pengalaman",
    subheading:
      "Perusahaan dan tim yang pernah saya ajak bekerja sama dalam membangun dan merilis perangkat lunak produksi.",
  },
  contact: {
    heading: "Mari Bangun Sesuatu",
    body: "Punya proyek yang ingin dikerjakan atau sekadar ingin penawaran harga? Ceritakan kebutuhan Anda dan saya akan menghubungi Anda kembali dengan cara terbaik untuk mewujudkannya. Konsultasi pertama selalu gratis.",
    whatsappCta: "Chat via WhatsApp",
    emailCta: "Email saya",
  },
  projectCard: {
    sourceCode: "Source Code",
  },
};

export const ui = LANG === "id" ? id : en;
