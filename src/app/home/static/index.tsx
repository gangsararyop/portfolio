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
      "Internal systems built around your operations to replace spreadsheets and manual work — including HRIS (attendance, payroll, leave), POS / cashier, inventory & stock, CRM, learning management (LMS), and booking / reservation systems.",
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
export interface IExperienceRole {
  role: string;
  startYear: string;
  endYear: string;
  description: string;
}

export interface IExperience {
  id: number;
  company: string;
  startYear: string;
  endYear: string;
  stacks: string[];
  roles: IExperienceRole[];
}

const experiencesEN: IExperience[] = [
  {
    id: 0,
    company: "Purwadhika",
    startYear: "2022",
    endYear: "PRESENT",
    stacks: [
      "Node.js",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "Tailwind",
      "Express.js",
      "Sequelize",
      "Prisma",
      "MySQL",
      "PostgreSQL",
    ],
    roles: [
      {
        role: "Fullstack Web Developer",
        startYear: "2022",
        endYear: "PRESENT",
        description:
          "I've led development on 6+ web platforms at Purwadhika — including the landing page, admin dashboard, student dashboard, Purwadhika Career Network, and Purwadhika College — improving the experience for 500+ users. Built with Node.js, JavaScript, TypeScript, and Express.js/Sequelize on the backend, and React.js/Next.js on the frontend, with MySQL as the database.",
      },
      {
        role: "Fullstack Web Development Lecturer",
        startYear: "MAR 2025",
        endYear: "SEP 2025",
        description:
          "I taught the Full-Stack Web Development program end to end — from JavaScript fundamentals, HTML, and CSS through to React.js, Next.js, Tailwind CSS, Express.js, and Prisma, with TypeScript as the primary language — guiding students to build a fully functional full-stack application as their final project.",
      },
      {
        role: "Fullstack Web Development Mentor",
        startYear: "APR 2023",
        endYear: "JUN 2023",
        description:
          "I mentored 6 project teams across 2 batches, guiding students in building production-ready applications. My role included providing code reviews, debugging support, and sharing best practices in JavaScript and React.",
      },
    ],
  },
  {
    id: 1,
    company: "Tariot Agency (Singapore, Remote)",
    startYear: "AUG 2025",
    endYear: "OCT 2026",
    stacks: ["Node.js", "Typescript", "Next.js", "React Native", "Express.js"],
    roles: [
      {
        role: "Fullstack Web Developer",
        startYear: "AUG 2025",
        endYear: "OCT 2026",
        description:
          "I helped build full-stack web and mobile applications for automotive service appointment systems serving Toyota and Lexus dealerships — including the NBT and JMP admin dashboards, the NBT mobile booking app, and their supporting APIs. I also built a product landing page for Roachout, a pest-control brand based in Brunei.",
      },
    ],
  },
  {
    id: 2,
    company: "Kirei Wash",
    startYear: "APR 2024",
    endYear: "JUN 2024",
    stacks: ["Typescript", "Next.js", "NestJS", "Prisma", "Jest"],
    roles: [
      {
        role: "Fullstack Web Developer (Part-time)",
        startYear: "APR 2024",
        endYear: "JUN 2024",
        description:
          "I contributed to the Kirei Wash application, working on the landing page, employee app, admin dashboard, and API using TypeScript, Next.js, NestJS, and Prisma, and added unit tests with Jest for reliability.",
      },
    ],
  },
];

const experiencesID: IExperience[] = [
  {
    id: 0,
    company: "Purwadhika",
    startYear: "2022",
    endYear: "SEKARANG",
    stacks: [
      "Node.js",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "Tailwind",
      "Express.js",
      "Sequelize",
      "Prisma",
      "MySQL",
      "PostgreSQL",
    ],
    roles: [
      {
        role: "Fullstack Web Developer",
        startYear: "2022",
        endYear: "SEKARANG",
        description:
          "Saya memimpin pengembangan 6+ platform web di Purwadhika — termasuk landing page, admin dashboard, student dashboard, Purwadhika Career Network, dan Purwadhika College — meningkatkan pengalaman untuk 500+ pengguna. Dibangun dengan Node.js, JavaScript, TypeScript, serta Express.js/Sequelize di backend, dan React.js/Next.js di frontend, dengan MySQL sebagai database.",
      },
      {
        role: "Dosen Fullstack Web Development",
        startYear: "MAR 2025",
        endYear: "SEP 2025",
        description:
          "Saya mengajar program Full-Stack Web Development secara menyeluruh — dari dasar-dasar JavaScript, HTML, dan CSS hingga React.js, Next.js, Tailwind CSS, Express.js, dan Prisma, dengan TypeScript sebagai bahasa utama — membimbing siswa membangun aplikasi full-stack yang berfungsi penuh sebagai proyek akhir.",
      },
      {
        role: "Mentor Fullstack Web Development",
        startYear: "APR 2023",
        endYear: "JUN 2023",
        description:
          "Saya membimbing 6 tim proyek dalam 2 batch, mengarahkan siswa membangun aplikasi yang siap produksi. Peran saya mencakup melakukan code review, membantu debugging, dan berbagi praktik terbaik dalam JavaScript dan React.",
      },
    ],
  },
  {
    id: 1,
    company: "Tariot Agency (Singapura, Remote)",
    startYear: "AGT 2025",
    endYear: "OKT 2026",
    stacks: ["Node.js", "Typescript", "Next.js", "React Native", "Express.js"],
    roles: [
      {
        role: "Fullstack Web Developer",
        startYear: "AGT 2025",
        endYear: "OKT 2026",
        description:
          "Saya membantu membangun aplikasi web dan mobile full-stack untuk sistem appointment servis otomotif yang melayani dealer Toyota dan Lexus — termasuk admin dashboard NBT dan JMP, aplikasi mobile booking NBT, serta API pendukungnya. Saya juga membuat landing page produk untuk Roachout, brand pest-control asal Brunei.",
      },
    ],
  },
  {
    id: 2,
    company: "Kirei Wash",
    startYear: "APR 2024",
    endYear: "JUN 2024",
    stacks: ["Typescript", "Next.js", "NestJS", "Prisma", "Jest"],
    roles: [
      {
        role: "Fullstack Web Developer (Part-time)",
        startYear: "APR 2024",
        endYear: "JUN 2024",
        description:
          "Saya berkontribusi pada aplikasi Kirei Wash, mengerjakan landing page, employee app, admin dashboard, dan API menggunakan TypeScript, Next.js, NestJS, dan Prisma, serta menambahkan unit test dengan Jest untuk keandalan.",
      },
    ],
  },
];

export const experiences = LANG === "id" ? experiencesID : experiencesEN;

// ── Client work (grouped by client) ─────────────────────────────────────────
export interface IClientProject {
  title: string;
  description: string;
  websiteURL: string | null;
}

export interface IClientWork {
  id: number;
  client: string;
  image?: string;
  stacks: string[];
  projects: IClientProject[];
}

const clientWorksEN: IClientWork[] = [
  {
    id: 0,
    client: "Tariot Agency (Singapore)",
    stacks: [
      "Typescript",
      "Next.js",
      "React.js",
      "React Native",
      "NestJS",
      "Prisma",
      "Strapi",
      "Tailwind",
    ],
    projects: [
      {
        title: "NBT Mobility Dashboard & API",
        description:
          "Built a wide range of features for the admin dashboard and API behind the Toyota & Lexus Brunei service booking app.",
        websiteURL: null,
      },
      {
        title: "Roachout",
        description:
          "Website, CMS, and backend for a Brunei pest-control brand, built end to end.",
        websiteURL: "https://roachout.shop/",
      },
      {
        title: "Yao Ling Seafood Kitchen",
        description:
          "Restaurant website with its own CMS and backend, built end to end.",
        websiteURL: null,
      },
      {
        title: "Galaxy Pods Website & CMS",
        description:
          "Contributed across the website and its Strapi CMS, including the 360° view feature.",
        websiteURL: "https://galaxypods.com.sg/",
      },
      {
        title: "JMP Dashboard & API",
        description:
          "Built a wide range of features for an operations dashboard covering staff, stations, quotations, support tickets, and reports.",
        websiteURL: null,
      },
      {
        title: "NBT Mobility App",
        description:
          "Added features to the customer booking app, such as onboarding and promo pop-ups.",
        websiteURL: "https://nbtmobility.inchcape.com.bn/",
      },
      {
        title: "Lexus Cup Brunei 2026",
        description: "Redesigned the event's digital invitation flipbook.",
        websiteURL: null,
      },
    ],
  },
  {
    id: 1,
    client: "Javelo",
    stacks: ["Typescript", "Next.js", "React.js", "Hono", "Prisma", "Tailwind"],
    projects: [
      {
        title: "Company Profile Website",
        description: "Company profile website, built end to end.",
        websiteURL: "https://naturalcocosugar.com/",
      },
      {
        title: "CMS & API",
        description:
          "Admin dashboard to manage the website's content, backed by a custom API.",
        websiteURL: null,
      },
    ],
  },
  {
    id: 2,
    client: "Soluship",
    stacks: [
      "Typescript",
      "React.js",
      "Hono",
      "Drizzle",
      "PostgreSQL",
      "BullMQ",
      "Tailwind",
    ],
    projects: [
      {
        title: "Solutrack Dashboard",
        description:
          "Operations dashboard for managing job orders, profit & loss, and invoices.",
        websiteURL: null,
      },
      {
        title: "Solutrack API",
        description:
          "Backend that syncs customers, job orders, and invoices to Accurate Online accounting.",
        websiteURL: null,
      },
    ],
  },
  {
    id: 3,
    client: "Purwadhika",
    image: "/static/projects/purwadhika.png",
    stacks: [
      "Node.js",
      "Typescript",
      "Next.js",
      "React.js",
      "MUI",
      "Express.js",
      "Sequelize",
      "MySQL",
      "CMS",
    ],
    projects: [
      {
        title: "Marketing Website",
        description:
          "Main site showcasing programs and information, managed through a CMS.",
        websiteURL: "https://purwadhika.com/",
      },
      {
        title: "Student Dashboard",
        description:
          "Students access their programs, manage transactions, connect with alumni, and find jobs.",
        websiteURL: null,
      },
      {
        title: "Admin Dashboard",
        description:
          "Manages programs, users, students, alumni, transactions, grades, and reporting.",
        websiteURL: null,
      },
      {
        title: "Purwadhika College",
        description:
          "Landing page for collaborative programs with international universities.",
        websiteURL: "https://college.purwadhika.com/",
      },
      {
        title: "School of Design",
        description:
          "Landing page for creative programs such as UI/UX and 3D Animation.",
        websiteURL: "https://schoolofdesign.purwadhika.com/",
      },
    ],
  },
  {
    id: 4,
    client: "Kirei Wash",
    image: "/static/projects/kirei.png",
    stacks: ["Node.js", "Typescript", "Next.js", "Mantine"],
    projects: [
      {
        title: "Landing Page",
        description: "Product-focused website presenting Kirei Wash and its offerings.",
        websiteURL: "https://kireiwash.com/",
      },
      {
        title: "Admin Dashboard",
        description:
          "Oversees services, transactions, users, employees, and operations.",
        websiteURL: null,
      },
      {
        title: "Employee Dashboard",
        description:
          "Employees manage tasks, track services, and monitor attendance.",
        websiteURL: null,
      },
    ],
  },
];

const clientWorksID: IClientWork[] = [
  {
    id: 0,
    client: "Tariot Agency (Singapura)",
    stacks: [
      "Typescript",
      "Next.js",
      "React.js",
      "React Native",
      "NestJS",
      "Prisma",
      "Strapi",
      "Tailwind",
    ],
    projects: [
      {
        title: "NBT Mobility Dashboard & API",
        description:
          "Membangun banyak fitur untuk admin dashboard dan API di balik aplikasi booking servis Toyota & Lexus Brunei.",
        websiteURL: null,
      },
      {
        title: "Roachout",
        description:
          "Website, CMS, dan backend untuk brand pest-control asal Brunei, dibangun dari awal hingga akhir.",
        websiteURL: "https://roachout.shop/",
      },
      {
        title: "Yao Ling Seafood Kitchen",
        description:
          "Website restoran beserta CMS dan backend-nya, dibangun dari awal hingga akhir.",
        websiteURL: null,
      },
      {
        title: "Galaxy Pods Website & CMS",
        description:
          "Berkontribusi di website dan CMS Strapi-nya, termasuk fitur tampilan 360°.",
        websiteURL: "https://galaxypods.com.sg/",
      },
      {
        title: "JMP Dashboard & API",
        description:
          "Membangun banyak fitur untuk dashboard operasional: staf, station, quotation, support ticket, dan laporan.",
        websiteURL: null,
      },
      {
        title: "NBT Mobility App",
        description:
          "Menambahkan fitur di aplikasi booking pelanggan, seperti onboarding dan pop-up promo.",
        websiteURL: "https://nbtmobility.inchcape.com.bn/",
      },
      {
        title: "Lexus Cup Brunei 2026",
        description: "Redesign flipbook undangan digital untuk event tersebut.",
        websiteURL: null,
      },
    ],
  },
  {
    id: 1,
    client: "Javelo",
    stacks: ["Typescript", "Next.js", "React.js", "Hono", "Prisma", "Tailwind"],
    projects: [
      {
        title: "Company Profile Website",
        description: "Website company profile, dibangun dari awal hingga akhir.",
        websiteURL: "https://naturalcocosugar.com/",
      },
      {
        title: "CMS & API",
        description:
          "Admin dashboard untuk mengelola konten website, didukung API custom.",
        websiteURL: null,
      },
    ],
  },
  {
    id: 2,
    client: "Soluship",
    stacks: [
      "Typescript",
      "React.js",
      "Hono",
      "Drizzle",
      "PostgreSQL",
      "BullMQ",
      "Tailwind",
    ],
    projects: [
      {
        title: "Solutrack Dashboard",
        description:
          "Dashboard operasional untuk mengelola job order, laba rugi, dan invoice.",
        websiteURL: null,
      },
      {
        title: "Solutrack API",
        description:
          "Backend yang menyinkronkan pelanggan, job order, dan invoice ke Accurate Online.",
        websiteURL: null,
      },
    ],
  },
  {
    id: 3,
    client: "Purwadhika",
    image: "/static/projects/purwadhika.png",
    stacks: [
      "Node.js",
      "Typescript",
      "Next.js",
      "React.js",
      "MUI",
      "Express.js",
      "Sequelize",
      "MySQL",
      "CMS",
    ],
    projects: [
      {
        title: "Marketing Website",
        description:
          "Situs utama yang menampilkan program dan informasi, dikelola lewat CMS.",
        websiteURL: "https://purwadhika.com/",
      },
      {
        title: "Student Dashboard",
        description:
          "Siswa mengakses program, mengelola transaksi, terhubung dengan alumni, dan mencari kerja.",
        websiteURL: null,
      },
      {
        title: "Admin Dashboard",
        description:
          "Mengelola program, pengguna, siswa, alumni, transaksi, nilai, dan laporan.",
        websiteURL: null,
      },
      {
        title: "Purwadhika College",
        description:
          "Landing page program kolaborasi dengan universitas internasional.",
        websiteURL: "https://college.purwadhika.com/",
      },
      {
        title: "School of Design",
        description:
          "Landing page program kreatif seperti UI/UX dan 3D Animation.",
        websiteURL: "https://schoolofdesign.purwadhika.com/",
      },
    ],
  },
  {
    id: 4,
    client: "Kirei Wash",
    image: "/static/projects/kirei.png",
    stacks: ["Node.js", "Typescript", "Next.js", "Mantine"],
    projects: [
      {
        title: "Landing Page",
        description:
          "Website berfokus produk yang memperkenalkan Kirei Wash dan penawarannya.",
        websiteURL: "https://kireiwash.com/",
      },
      {
        title: "Admin Dashboard",
        description:
          "Mengawasi layanan, transaksi, pengguna, karyawan, dan operasional.",
        websiteURL: null,
      },
      {
        title: "Employee Dashboard",
        description:
          "Karyawan mengelola tugas, melacak layanan, dan memantau kehadiran.",
        websiteURL: null,
      },
    ],
  },
];

export const clientWorks = LANG === "id" ? clientWorksID : clientWorksEN;
