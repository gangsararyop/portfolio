import { LANG } from "./lang";

// ─────────────────────────────────────────────────────────────────────────────
// This file holds all content data in BOTH English (*EN) and Indonesian (*ID).
// The exported arrays resolve to the active language via LANG (see ./lang.ts).
// Edit the copy here, not in the section components. To switch the whole site
// back to English, just set LANG = "en" in ./lang.ts.
// ─────────────────────────────────────────────────────────────────────────────

// ── Sections (nav labels + scroll-spy ids) ──────────────────────────────────
// `id` must stay the same across languages (used by nav + scroll-spy); only the
// visible `label` is translated.
const sectionsEN: Record<"id" | "label", string>[] = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Background" },
  { id: "contact", label: "Contact" },
];

const sectionsID: Record<"id" | "label", string>[] = [
  { id: "about", label: "Tentang" },
  { id: "services", label: "Layanan" },
  { id: "work", label: "Karya" },
  { id: "experience", label: "Latar Belakang" },
  { id: "contact", label: "Kontak" },
];

export const sections = LANG === "id" ? sectionsID : sectionsEN;

// ── Services ────────────────────────────────────────────────────────────────
export interface IService {
  id: number;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

const servicesEN: IService[] = [
  {
    id: 0,
    title: "Landing Page & Company Profile",
    tagline: "Make a strong first impression online.",
    description:
      "A fast, modern, mobile-friendly website that introduces your business and turns visitors into customers. Perfect for promoting a product, service, or brand with clear calls-to-action that drive enquiries.",
    deliverables: [
      "Responsive design",
      "SEO-friendly",
      "Contact / WhatsApp CTA",
      "Fast loading",
    ],
  },
  {
    id: 1,
    title: "Web Apps & Custom Dashboards",
    tagline: "Run your business from one place.",
    description:
      "Tailor-made web applications with secure login, admin panels, and data management built around the way you actually work. From customer-facing platforms to internal tools, I build systems that scale with your business.",
    deliverables: [
      "User authentication",
      "Admin dashboard",
      "Data management",
      "Reports & analytics",
    ],
  },
  {
    id: 2,
    title: "E-Commerce & Online Store",
    tagline: "Sell online, get paid automatically.",
    description:
      "Online stores with product catalogs, shopping carts, and integrated payment gateways such as Midtrans so customers can purchase directly. Includes order tracking and an admin panel to manage products and transactions.",
    deliverables: [
      "Payment gateway (Midtrans)",
      "Product & order management",
      "Cart & checkout",
      "Sales tracking",
    ],
  },
  {
    id: 3,
    title: "Management Systems",
    tagline: "Digitize and streamline your operations.",
    description:
      "Internal systems built around your operations to replace spreadsheets and manual work â€” including HRIS (attendance, payroll, leave), POS / cashier, inventory & stock, CRM, learning management (LMS), and booking / reservation systems.",
    deliverables: [
      "HRIS",
      "POS / Cashier",
      "Inventory",
      "CRM",
      "LMS",
      "Booking / Reservation",
    ],
  },
  {
    id: 4,
    title: "Maintenance & Revamp",
    tagline: "Keep your site fast, secure & up to date.",
    description:
      "Already have a website? I can modernize an outdated design, fix bugs, improve performance, or take over ongoing maintenance so your site stays secure, fast, and reliable as your business grows.",
    deliverables: [
      "Redesign / revamp",
      "Performance tuning",
      "Bug fixes",
      "Ongoing support",
    ],
  },
];

const servicesID: IService[] = [
  {
    id: 0,
    title: "Landing Page & Profil Perusahaan",
    tagline: "Buat kesan pertama yang kuat secara online.",
    description:
      "Website yang cepat, modern, dan ramah perangkat seluler untuk memperkenalkan bisnis Anda dan mengubah pengunjung menjadi pelanggan. Cocok untuk mempromosikan produk, layanan, atau brand dengan ajakan bertindak yang jelas untuk mendorong calon pelanggan menghubungi Anda.",
    deliverables: [
      "Desain responsif",
      "Ramah SEO",
      "Tombol Kontak / WhatsApp",
      "Loading cepat",
    ],
  },
  {
    id: 1,
    title: "Aplikasi Web & Dashboard Custom",
    tagline: "Kelola bisnis Anda dari satu tempat.",
    description:
      "Aplikasi web yang dibuat khusus dengan login yang aman, panel admin, dan pengelolaan data yang dirancang sesuai cara kerja Anda. Mulai dari platform untuk pelanggan hingga tools internal, saya membangun sistem yang bisa berkembang bersama bisnis Anda.",
    deliverables: [
      "Autentikasi pengguna",
      "Dashboard admin",
      "Pengelolaan data",
      "Laporan & analitik",
    ],
  },
  {
    id: 2,
    title: "E-Commerce & Toko Online",
    tagline: "Jual online, terima pembayaran otomatis.",
    description:
      "Toko online dengan katalog produk, keranjang belanja, dan integrasi payment gateway seperti Midtrans agar pelanggan bisa langsung membeli. Termasuk pelacakan pesanan dan panel admin untuk mengelola produk dan transaksi.",
    deliverables: [
      "Payment gateway (Midtrans)",
      "Manajemen produk & pesanan",
      "Keranjang & checkout",
      "Pelacakan penjualan",
    ],
  },
  {
    id: 3,
    title: "Sistem Manajemen",
    tagline: "Digitalkan dan rapikan operasional Anda.",
    description:
      "Sistem internal yang dirancang sesuai operasional Anda untuk menggantikan spreadsheet dan pekerjaan manual — termasuk HRIS (absensi, payroll, cuti), POS / kasir, inventaris & stok, CRM, learning management (LMS), serta sistem booking / reservasi.",
    deliverables: [
      "HRIS",
      "POS / Kasir",
      "Inventaris",
      "CRM",
      "LMS",
      "Booking / Reservasi",
    ],
  },
  {
    id: 4,
    title: "Maintenance & Revamp",
    tagline: "Jaga situs Anda tetap cepat, aman & terkini.",
    description:
      "Sudah punya website? Saya bisa memodernisasi desain yang usang, memperbaiki bug, meningkatkan performa, atau mengambil alih maintenance rutin agar situs Anda tetap aman, cepat, dan andal seiring pertumbuhan bisnis Anda.",
    deliverables: [
      "Redesain / revamp",
      "Optimasi performa",
      "Perbaikan bug",
      "Dukungan berkelanjutan",
    ],
  },
];

export const services = LANG === "id" ? servicesID : servicesEN;

// ── Experience ──────────────────────────────────────────────────────────────
export interface IExperience {
  id: number;
  startYear: string;
  endYear: string;
  role: string;
  company: string;
  description: string;
  stacks: string[];
}

const experiencesEN: IExperience[] = [
  {
    id: 0,
    startYear: "2022",
    endYear: "PRESENT",
    role: "Fullstack Web Developer",
    company: "Purwadhika",
    description:
      "I've led development on 6+ web platforms at Purwadhika — including the landing page, admin dashboard, student dashboard, Purwadhika Career Network, and Purwadhika College — improving the experience for 500+ users. Built with Node.js, JavaScript, TypeScript, and Express.js/Sequelize on the backend, and React.js/Next.js on the frontend, with MySQL as the database.",
    stacks: [
      "Node.js",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "Express.js",
      "Sequelize",
      "MySQL",
    ],
  },
  {
    id: 1,
    startYear: "AUG 2025",
    endYear: "PRESENT",
    role: "Fullstack Web Developer",
    company: "Tariot Agency (Singapore, Remote)",
    description:
      "I help build full-stack web and mobile applications for automotive service appointment systems serving Toyota and Lexus dealerships — including the NBT and JMP admin dashboards, the NBT mobile booking app, and their supporting APIs. I also built a product landing page for Roachout, a pest-control brand based in Brunei.",
    stacks: ["Node.js", "Typescript", "Next.js", "React Native", "Express.js"],
  },
  {
    id: 2,
    startYear: "MAR",
    endYear: "SEP 2025",
    role: "Fullstack Web Development Lecturer",
    company: "Purwadhika",
    description:
      "I taught the Full-Stack Web Development program end to end — from JavaScript fundamentals, HTML, and CSS through to React.js, Next.js, Tailwind CSS, Express.js, and Prisma, with TypeScript as the primary language — guiding students to build a fully functional full-stack application as their final project.",
    stacks: [
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "Tailwind",
      "Express.js",
      "Prisma",
    ],
  },
  {
    id: 3,
    startYear: "APRIL",
    endYear: "JUNE 2024",
    role: "Fullstack Web Developer (Part-time)",
    company: "Kirei Wash",
    description:
      "I contributed to the Kirei Wash application, working on the landing page, employee app, admin dashboard, and API using TypeScript, Next.js, NestJS, and Prisma, and added unit tests with Jest for reliability.",
    stacks: ["Typescript", "Next.js", "NestJS", "Prisma", "Jest"],
  },
  {
    id: 4,
    startYear: "APRIL",
    endYear: "JUNE 2023",
    role: "Fullstack Web Development Mentor",
    company: "Purwadhika",
    description:
      "I mentored 6 project teams across 2 batches, guiding students in building production-ready applications. My role included providing code reviews, debugging support, and sharing best practices in JavaScript and React.",
    stacks: [
      "Node.js",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "Tailwind",
      "Express.js",
      "Prisma",
      "PostgreSQL",
    ],
  },
];

const experiencesID: IExperience[] = [
  {
    id: 0,
    startYear: "2022",
    endYear: "SEKARANG",
    role: "Fullstack Web Developer",
    company: "Purwadhika",
    description:
      "Saya memimpin pengembangan 6+ platform web di Purwadhika — termasuk landing page, admin dashboard, student dashboard, Purwadhika Career Network, dan Purwadhika College — meningkatkan pengalaman untuk 500+ pengguna. Dibangun dengan Node.js, JavaScript, TypeScript, serta Express.js/Sequelize di backend, dan React.js/Next.js di frontend, dengan MySQL sebagai database.",
    stacks: [
      "Node.js",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "Express.js",
      "Sequelize",
      "MySQL",
    ],
  },
  {
    id: 1,
    startYear: "AGT 2025",
    endYear: "SEKARANG",
    role: "Fullstack Web Developer",
    company: "Tariot Agency (Singapura, Remote)",
    description:
      "Saya membantu membangun aplikasi web dan mobile full-stack untuk sistem appointment servis otomotif yang melayani dealer Toyota dan Lexus — termasuk admin dashboard NBT dan JMP, aplikasi mobile booking NBT, serta API pendukungnya. Saya juga membuat landing page produk untuk Roachout, brand pest-control asal Brunei.",
    stacks: ["Node.js", "Typescript", "Next.js", "React Native", "Express.js"],
  },
  {
    id: 2,
    startYear: "MAR",
    endYear: "SEP 2025",
    role: "Dosen Fullstack Web Development",
    company: "Purwadhika",
    description:
      "Saya mengajar program Full-Stack Web Development secara menyeluruh — dari dasar-dasar JavaScript, HTML, dan CSS hingga React.js, Next.js, Tailwind CSS, Express.js, dan Prisma, dengan TypeScript sebagai bahasa utama — membimbing siswa membangun aplikasi full-stack yang berfungsi penuh sebagai proyek akhir.",
    stacks: [
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "Tailwind",
      "Express.js",
      "Prisma",
    ],
  },
  {
    id: 3,
    startYear: "APRIL",
    endYear: "JUNI 2024",
    role: "Fullstack Web Developer (Part-time)",
    company: "Kirei Wash",
    description:
      "Saya berkontribusi pada aplikasi Kirei Wash, mengerjakan landing page, employee app, admin dashboard, dan API menggunakan TypeScript, Next.js, NestJS, dan Prisma, serta menambahkan unit test dengan Jest untuk keandalan.",
    stacks: ["Typescript", "Next.js", "NestJS", "Prisma", "Jest"],
  },
  {
    id: 4,
    startYear: "APRIL",
    endYear: "JUNI 2023",
    role: "Mentor Fullstack Web Development",
    company: "Purwadhika",
    description:
      "Saya membimbing 6 tim proyek dalam 2 batch, mengarahkan siswa membangun aplikasi yang siap produksi. Peran saya mencakup melakukan code review, membantu debugging, dan berbagi praktik terbaik dalam JavaScript dan React.",
    stacks: [
      "Node.js",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "Tailwind",
      "Express.js",
      "Prisma",
      "PostgreSQL",
    ],
  },
];

export const experiences = LANG === "id" ? experiencesID : experiencesEN;

// ── Professional projects (client-work proof) ───────────────────────────────
export interface IProfessionalProject {
  id: number;
  title: string;
  image: string;
  subtitle: string;
  websiteURL: string | null;
  sourceCodeURL: string | null;
  stacks: string[];
}

const professionalProjectsEN: IProfessionalProject[] = [
  {
    id: 0,
    title: "Purwadhika Marketing Website",
    image: "/static/projects/purwadhika.png",
    subtitle:
      "A marketing website for Purwadhika that showcases programs and information using a modern full-stack tech stack.",
    websiteURL: "https://purwadhika.com/",
    sourceCodeURL: null,
    stacks: [
      "Node.js",
      "Typescript",
      "Next.js",
      "MUI",
      "Express.js",
      "Sequelize",
      "MySQL",
      "CMS",
    ],
  },
  {
    id: 1,
    title: "Purwadhika Student Dashboard",
    image: "/static/projects/purwadhika.png",
    subtitle:
      "Purwadhika Student Dashboard is a centralized platform for students to access their programs, manage transactions, connect with alumni, and explore job opportunities.",
    websiteURL: null,
    sourceCodeURL: null,
    stacks: [
      "Node.js",
      "Typescript",
      "React.js",
      "MUI",
      "Express.js",
      "Sequelize",
      "MySQL",
    ],
  },
  {
    id: 2,
    title: "Purwadhika Admin Dashboard",
    image: "/static/projects/purwadhika.png",
    subtitle:
      "Purwadhika Admin Dashboard is a management platform for handling programs, users, students, alumni, transactions, grades, and data reporting.",
    websiteURL: null,
    sourceCodeURL: null,
    stacks: [
      "Node.js",
      "Typescript",
      "React.js",
      "MUI",
      "Express.js",
      "Sequelize",
      "MySQL",
    ],
  },
  {
    id: 3,
    title: "Purwadhika College",
    image: "/static/projects/purwadhika.png",
    subtitle:
      "Purwadhika College is an informational landing page showcasing Purwadhikaâ€™s collaborative programs with various international universities.",
    websiteURL: "https://college.purwadhika.com/",
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "MUI"],
  },
  {
    id: 4,
    title: "Purwadhika School of Design",
    image: "/static/projects/purwadhika.png",
    subtitle:
      "Purwadhika School of Design is a landing page that introduces programs in creative fields such as UI/UX, 3D Animation, and other design-related studies.",
    websiteURL: "https://schoolofdesign.purwadhika.com/",
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "MUI"],
  },
  {
    id: 5,
    title: "Kirei Wash Landing Page",
    image: "/static/projects/kirei.png",
    subtitle:
      "Kirei Wash Landing Page is a product-focused website that provides information about Kirei Wash and its offerings.",
    websiteURL: "https://kireiwash.com/",
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "Mantine"],
  },
  {
    id: 6,
    title: "Kirei Wash Admin Dashboard",
    image: "/static/projects/kirei.png",
    subtitle:
      "Kirei Wash Admin Dashboard is a management platform for overseeing services, transactions, users, employees, and business operations.",
    websiteURL: null,
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "Mantine"],
  },
  {
    id: 7,
    title: "Kirei Wash Employee Dashboard",
    image: "/static/projects/kirei.png",
    subtitle:
      "Kirei Wash Employee Dashboard is a platform for employees to manage tasks, track services, monitor attendance, and handle daily responsibilities.",
    websiteURL: null,
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "Mantine"],
  },
  {
    id: 8,
    title: "English Talker United Landing Page",
    image: "/static/projects/etu.png",
    subtitle:
      "English Talker United Landing Page is a website showcasing English learning programs with a contact feature for users to connect with the admin.",
    websiteURL: "https://englishtalkerunited.com/",
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "MUI"],
  },
  {
    id: 9,
    title: "English Talker United Admin Dashboard (Ongoing Project)",
    image: "/static/projects/etu.png",
    subtitle:
      "English Talker United Admin Dashboard is a management platform for handling users, courses, schedules, student progress, and inquiries.",
    websiteURL: null,
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "MUI"],
  },
];

const professionalProjectsID: IProfessionalProject[] = [
  {
    id: 0,
    title: "Purwadhika Marketing Website",
    image: "/static/projects/purwadhika.png",
    subtitle:
      "Website marketing untuk Purwadhika yang menampilkan program dan informasi menggunakan tech stack full-stack modern.",
    websiteURL: "https://purwadhika.com/",
    sourceCodeURL: null,
    stacks: [
      "Node.js",
      "Typescript",
      "Next.js",
      "MUI",
      "Express.js",
      "Sequelize",
      "MySQL",
      "CMS",
    ],
  },
  {
    id: 1,
    title: "Purwadhika Student Dashboard",
    image: "/static/projects/purwadhika.png",
    subtitle:
      "Purwadhika Student Dashboard adalah platform terpusat bagi siswa untuk mengakses program mereka, mengelola transaksi, terhubung dengan alumni, dan menjelajahi peluang kerja.",
    websiteURL: null,
    sourceCodeURL: null,
    stacks: [
      "Node.js",
      "Typescript",
      "React.js",
      "MUI",
      "Express.js",
      "Sequelize",
      "MySQL",
    ],
  },
  {
    id: 2,
    title: "Purwadhika Admin Dashboard",
    image: "/static/projects/purwadhika.png",
    subtitle:
      "Purwadhika Admin Dashboard adalah platform manajemen untuk menangani program, pengguna, siswa, alumni, transaksi, nilai, dan pelaporan data.",
    websiteURL: null,
    sourceCodeURL: null,
    stacks: [
      "Node.js",
      "Typescript",
      "React.js",
      "MUI",
      "Express.js",
      "Sequelize",
      "MySQL",
    ],
  },
  {
    id: 3,
    title: "Purwadhika College",
    image: "/static/projects/purwadhika.png",
    subtitle:
      "Purwadhika College adalah landing page informatif yang menampilkan program kolaborasi Purwadhika dengan berbagai universitas internasional.",
    websiteURL: "https://college.purwadhika.com/",
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "MUI"],
  },
  {
    id: 4,
    title: "Purwadhika School of Design",
    image: "/static/projects/purwadhika.png",
    subtitle:
      "Purwadhika School of Design adalah landing page yang memperkenalkan program di bidang kreatif seperti UI/UX, 3D Animation, dan studi desain lainnya.",
    websiteURL: "https://schoolofdesign.purwadhika.com/",
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "MUI"],
  },
  {
    id: 5,
    title: "Kirei Wash Landing Page",
    image: "/static/projects/kirei.png",
    subtitle:
      "Kirei Wash Landing Page adalah website yang berfokus pada produk untuk memberikan informasi tentang Kirei Wash dan penawarannya.",
    websiteURL: "https://kireiwash.com/",
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "Mantine"],
  },
  {
    id: 6,
    title: "Kirei Wash Admin Dashboard",
    image: "/static/projects/kirei.png",
    subtitle:
      "Kirei Wash Admin Dashboard adalah platform manajemen untuk mengawasi layanan, transaksi, pengguna, karyawan, dan operasional bisnis.",
    websiteURL: null,
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "Mantine"],
  },
  {
    id: 7,
    title: "Kirei Wash Employee Dashboard",
    image: "/static/projects/kirei.png",
    subtitle:
      "Kirei Wash Employee Dashboard adalah platform bagi karyawan untuk mengelola tugas, melacak layanan, memantau kehadiran, dan menangani tanggung jawab harian.",
    websiteURL: null,
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "Mantine"],
  },
  {
    id: 8,
    title: "English Talker United Landing Page",
    image: "/static/projects/etu.png",
    subtitle:
      "English Talker United Landing Page adalah website yang menampilkan program belajar bahasa Inggris dengan fitur kontak agar pengguna dapat terhubung dengan admin.",
    websiteURL: "https://englishtalkerunited.com/",
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "MUI"],
  },
  {
    id: 9,
    title: "English Talker United Admin Dashboard (Proyek Berjalan)",
    image: "/static/projects/etu.png",
    subtitle:
      "English Talker United Admin Dashboard adalah platform manajemen untuk menangani pengguna, kursus, jadwal, progres siswa, dan pertanyaan.",
    websiteURL: null,
    sourceCodeURL: null,
    stacks: ["Node.js", "Typescript", "Next.js", "MUI"],
  },
];

export const professionalProjects =
  LANG === "id" ? professionalProjectsID : professionalProjectsEN;
