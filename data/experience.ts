export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets?: string[];
  summary?: string;
  isCompact?: boolean;
  highlightMetric?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  field?: string;
  badge: string;
}

export interface CertificationItem {
  title: string;
  issuer?: string;
  badge?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "inet",
    role: "Software Developer",
    company: "I-Net Secure Labs Pvt Ltd",
    period: "12/2025 — Present",
    bullets: [
      "Engineered multi-tenant iHub portal with Angular 14+, RxJS, and PrimeNG",
      "Designed asset lifecycle, allocation workflows, QR tags, and digital acknowledgements",
      "Configured CI/CD deployment pipelines on Azure DevOps and led UAT testing releases",
      "Built and deployed Shiyarah Weddings Next.js platform alongside enterprise development",
    ],
    highlightMetric: "Angular 14+ SPA & iHub Multi-Tenant Architecture",
  },
  {
    id: "freelancer",
    role: "Software Developer",
    company: "Freelancer (Direct Clients)",
    period: "04/2023 — 11/2025",
    bullets: [
      "Architected Clinical EMR System with patient scheduling & role-based access",
      "Built HR Management Portal covering employee lifecycle, payroll & recruitment",
      "Engineered Order & Inventory Logistics platform with real-time stock alerts",
      "Managed Azure DevOps repositories and hosted Ubuntu servers on AWS",
    ],
    highlightMetric: "3 Enterprise Projects Delivered",
  },
  {
    id: "foxconn",
    role: "Technician & Quality Leader",
    company: "Foxconn Pvt Ltd",
    period: "08/2021 — 04/2023",
    bullets: [
      "Led the flagship iPhone 11 production line and quality control audits",
      "Contributed to line efficiency improvements worth approximately $20K via 6S & Kaizen",
      "Earned two promotions within the first year for leadership and quality metrics",
    ],
    highlightMetric: "+$20K Annual Efficiency Gains & 2 Promotions",
  },
  {
    id: "eminence",
    role: "Site Technician",
    company: "Eminence",
    period: "04/2021 — 08/2021",
    summary: "Telecom infrastructure validation, hardware testing, and site assistance.",
    isCompact: true,
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Engineering - Electronics & Communication Engineering",
    institution: "Meenakshi Sundararajan Engineering College",
    period: "08/2016 — 05/2019",
    field: "Systems Engineering, Advanced Signal Processing & Communications",
    badge: "BACHELOR DEGREE",
  },
  {
    degree: "Diploma in Electronics & Communication Engineering",
    institution: "Panimalar Polytechnic College",
    period: "08/2013 — 05/2016",
    field: "Circuit Engineering, Hardware Diagnostics & Digital Systems",
    badge: "DIPLOMA DEGREE",
  },
];

export const certificationData: CertificationItem[] = [
  {
    title: "Angular for Front End Engineer",
    issuer: "Front End Architecture Certification",
    badge: "ANGULAR CERTIFIED",
  },
  {
    title: "Angular - The Complete Guide",
    issuer: "Enterprise SPA & RxJS Masterclass",
    badge: "FRONTEND SPECIALIST",
  },
];
