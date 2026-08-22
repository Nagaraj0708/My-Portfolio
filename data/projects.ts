export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  author: string;
  image: string;
  stack: string[];
  stackDisplay: string;
  description: string;
  features: string[];
  overview: string;
  problem: string;
  solution: string;
  engineeringDecisions: string[];
  challenges: string[];
  outcome: string;
  placeholderMockupType: "clinical" | "hr" | "inventory" | "photography" | "gym" | "tea" | "popcorn";
  liveUrl?: string;
  tooltipText: string;
  codeSnippet?: string;
}

export interface ArchitectureLayerItem {
  id: string;
  title: string;
  protocol: string;
  tech: string[];
  description: string;
}

export const architectureLayers: ArchitectureLayerItem[] = [
  {
    id: "presentation",
    title: "Presentation & UI Components",
    protocol: "Next.js / Angular / CSS",
    tech: ["Next.js React 19", "Angular SPA", "Framer Motion", "Tailwind CSS"],
    description:
      "Component-driven presentation layer structured around single-responsibility components, dynamic templates, and custom glassmorphism style systems.",
  },
  {
    id: "state",
    title: "State & Data Flow",
    protocol: "RxJS / React Hooks",
    tech: ["RxJS Observables", "Route Guards", "Framer Scroll Triggers"],
    description:
      "Reactive state management handling asynchronous data streams, dynamic form validation, and client-side access control route guards.",
  },
  {
    id: "api",
    title: "API & HTTP Services",
    protocol: "REST / JSON",
    tech: ["HTTP Client", "Interceptors", "Token Auth"],
    description:
      "Decoupled service layer managing HTTP requests, authorization headers, error handling interceptors, and typed response mapping.",
  },
  {
    id: "backend",
    title: "Backend & Business Logic",
    protocol: "ASP.NET Core / C# / Node",
    tech: ["Web API Controllers", "Role Authorization", "Business Logic"],
    description:
      "Robust .NET Core Web API backend handling secure authentication, request validation, business rules, and controller logic.",
  },
  {
    id: "data",
    title: "Data Persistence & Models",
    protocol: "SQL Server / EF Core",
    tech: ["Entity Framework", "SQL Queries", "Schema Models"],
    description:
      "Relational database persistence using Entity Framework ORM and structured SQL Server schemas for fast queries and data integrity.",
  },
];

export const projectsData: Project[] = [
  {
    id: "01",
    slug: "shiyarah-weddings-photography",
    number: "01 —",
    title: "Shiyarah Weddings",
    subtitle: "Award-Winning Photography & Cinema Platform",
    author: "Nagaraj K — Full-Stack Developer",
    image: "/images/projects/shiyarah-weddings.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    stackDisplay: "Next.js / TypeScript / Tailwind CSS / Framer Motion",
    description:
      "Award-winning wedding photography & cinema platform crafted frame by frame in Chennai. Features interactive portfolios, cinematic video showcases, session booking pipelines, and responsive mobile storytelling.",
    features: [
      "Interactive Photography Portfolios",
      "Cinematic Video Showcase Player",
      "Instant WhatsApp Session Booking Pipeline",
      "Custom Service & Pricing Calculator",
      "Heirloom Keepsake & Album Showcase",
      "SEO & High-Performance Vercel Deployment",
    ],
    overview:
      "A luxury, editorial-grade web application engineered for Shiyarah Weddings in Chennai. Built with Next.js, Framer Motion, and Tailwind CSS to deliver immersive visual storytelling, dark-room glassmorphic aesthetics, and high-conversion client session booking flows.",
    problem:
      "Traditional photography websites suffer from heavy image load latency, rigid layouts, and complex contact forms that cause potential clients to drop off.",
    solution:
      "Engineered a high-performance Next.js application with optimized image CDN delivery, fluid Framer Motion page transitions, responsive gallery grids, and 1-click WhatsApp session booking integration.",
    engineeringDecisions: [
      "Next.js Static Generation & Image Optimization for ultra-fast, crisp high-res gallery rendering.",
      "Framer Motion micro-animations and custom dark-room glassmorphic styling for a luxury editorial feel.",
      "Direct WhatsApp API integration for friction-free client inquiries and date availability checks.",
    ],
    challenges: [
      "Delivering uncompressed high-definition wedding photography without compromising Lighthouse page speed metrics.",
      "Maintaining responsive dark-mode contrast and luxury typography hierarchy across mobile viewports.",
    ],
    outcome:
      "Live production web application deployed on Vercel driving direct client bookings across Chennai & Tamil Nadu.",
    placeholderMockupType: "photography",
    liveUrl: "https://photo-website-chi-sooty.vercel.app/",
    tooltipText: "Shiyarah Weddings — Award-Winning Photography & Cinema Platform (Vercel Production)",
  },
  {
    id: "02",
    slug: "fifusion-studio",
    number: "02 —",
    title: "FiFusion Studio",
    subtitle: "Premium Athletic & High-Performance Gym Platform",
    author: "Nagaraj K — Full-Stack Developer",
    image: "/images/projects/fifusion-hero-theme.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    stackDisplay: "Next.js / TypeScript / Tailwind CSS / Framer Motion",
    description:
      "Ultra-premium athletic gym and spin studio platform featuring 3D arena navigation, live biometric telemetry HUDs, sub-zero contrast plunge reservation, and automated 3-day QR biometric pass activation.",
    features: [
      "Live Biometric HUD Telemetry (VO2 Max & Heart-Rate)",
      "Spin & Cycling Synapse Audio-Responsive Grids",
      "Biometric Strength Rig Sensor Tracking",
      "Sub-Zero Contrast Cryo & Sauna Booking Engine",
      "Instant 3-Day Biometric QR Pass Activation",
      "High-Performance Vercel Edge Deployment",
    ],
    overview:
      "An uncompromised athletic training & recovery platform engineered for FiFusion Studio. Built with Next.js, Framer Motion, and Tailwind CSS to deliver an immersive, high-octane dark-mode experience complete with real-time biometric telemetry, spin arena booking, and contrast cryotherapy reservation pipelines.",
    problem:
      "Traditional gym web applications fail to capture the high-energy, high-tech atmosphere of modern athletic studios, suffering from static schedules, clunky class reservation flows, and lack of real-time member engagement.",
    solution:
      "Engineered a dynamic, cinematic web platform with responsive biometrics dashboards, 3D horizontal arena scroll experiences, real-time class capacity monitors, and 1-click instant QR biometric pass onboarding.",
    engineeringDecisions: [
      "Next.js App Router & Framer Motion layout animations for fluid horizontal arena transitions and zero-lag tab switches.",
      "RxJS state streams for live telemetry simulation across biometric heart-rate and velocity training cards.",
      "Sub-zero contrast therapy booking workflow with instant client state persistence and QR ticket generation.",
    ],
    challenges: [
      "Maintaining 60 FPS animation performance during dense canvas and glowing telemetry grid renders.",
      "Designing a sleek dark studio aesthetic with cyber-neon green, magenta, and cyan accent systems.",
    ],
    outcome:
      "Deploys an end-to-end high-performance athletic platform live on Vercel with instant biometric pass activation and membership conversion.",
    placeholderMockupType: "gym",
    liveUrl: "https://gym-indol-delta-68.vercel.app/",
    tooltipText: "FiFusion Studio — Premium Athletic & High-Performance Gym Platform (Vercel Production)",
  },
  {
    id: "03",
    slug: "chaiwala-co",
    number: "03 —",
    title: "Chaiwala Co.",
    subtitle: "Premium Artisanal Single-Origin Tea House",
    author: "Nagaraj K — Full-Stack Developer",
    image: "/images/projects/chaiwala-hero-theme.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    stackDisplay: "Next.js / TypeScript / Tailwind CSS / Framer Motion",
    description:
      "Bespoke artisanal single-origin tea house platform steeped in slowness. Sourced directly from high-altitude estates with sommelier brewing companions and sustainable eco-canister subscriptions.",
    features: [
      "Single-Estate Terroir & Origin Explorer",
      "Interactive Sommelier Steep Guide Companion",
      "Masala Chai & Organic Pearl Blossom Collections",
      "Micro-Batch Charcoal Gaiwan Roasting Showcase",
      "Sustainable Earth Eco-Canister Subscription",
      "Direct Sommelier Concierge Inquiry Pipeline",
    ],
    overview:
      "A luxury, editorial-grade e-commerce & tea ritual web application engineered for Chaiwala Co. Built with Next.js and Tailwind CSS, featuring warm earth-tone typography, interactive steep timers, estate origin mapping, and direct sommelier tasting reservation flows.",
    problem:
      "E-commerce tea websites often present generic product listings without conveying the rich heritage, brewing temperature precision, or artisanal single-origin narrative required for premium tea connoisseurs.",
    solution:
      "Designed an elegant, slow-living digital atelier featuring interactive brewing temperature guides, terroir harvesting profiles, bespoke tea family filtering, and seamless single-origin subscription pipelines.",
    engineeringDecisions: [
      "Next.js static site generation for instant leaf profile loading and SEO optimization.",
      "Interactive water temperature & steep time calculation widget for precise tea extraction guidance.",
      "Tailwind CSS custom color tokens reflecting clay kulhads, amber liquor, and jade tea leaf palettes.",
    ],
    challenges: [
      "Balancing tranquil, minimalist editorial typography with rich interactive e-commerce touchpoints.",
      "Optimizing high-res estate photography for immediate rendering on desktop and mobile viewports.",
    ],
    outcome:
      "Live production artisanal tea atelier deployed on Vercel providing an immersive single-origin tea journey.",
    placeholderMockupType: "tea",
    liveUrl: "https://tea-website-eta.vercel.app/",
    tooltipText: "Chaiwala Co. — Premium Artisanal Single-Origin Tea House (Vercel Production)",
  },
  {
    id: "04",
    slug: "popcorn-company",
    number: "04 —",
    title: "Popcorn & Company",
    subtitle: "Gourmet E-Commerce & Festive Gifting Platform",
    author: "Nagaraj K — Full-Stack Developer",
    image: "/images/projects/popcorn-hero-theme.png",
    stack: ["Angular 14+", "TypeScript", "RxJS", "CSS3", "Vercel"],
    stackDisplay: "Angular 14+ / TypeScript / RxJS / CSS3 / Vercel",
    description:
      "A luxury gourmet popcorn e-commerce SPA crafted for Popcorn & Company. Features festive discount coupon engines (POPCORN20), product catalog filters, artisan gift box exploration, reactive shopping carts, and live Vercel production deployment.",
    features: [
      "Interactive Gourmet Popcorn & Flavor Catalog",
      "Festive Discount & Coupon Code Engine (POPCORN20)",
      "Artisan Gift Box & Festive Special Showcase",
      "Reactive Cart State & Order Summary Stream (RxJS)",
      "Custom Gold-Gilded Brand Aesthetic & CSS Tokens",
      "High-Performance Vercel Live Deployment",
    ],
    overview:
      "A high-conversion e-commerce SPA engineered for Popcorn & Company. Built with Angular 14+ and TypeScript, featuring gold-accented luxury typography, real-time coupon code discount validation, category-based product filtering, and an intuitive gift box curation flow.",
    problem:
      "Conventional retail food e-commerce platforms suffer from clunky cart state persistence, static product displays, and unoptimized checkout pipelines that degrade customer conversion during festive seasonal promotions.",
    solution:
      "Engineered a responsive Angular SPA leveraging RxJS reactive state management, instant client-side coupon code calculation, dynamic product catalog filtering, and smooth mobile-first shopping interactions.",
    engineeringDecisions: [
      "Angular Single-Page Application (SPA) architecture with lazy-loaded route modules for instant page transitions.",
      "RxJS BehaviorSubjects for seamless cart item state updates, dynamic pricing totals, and coupon application.",
      "Custom CSS variable token system implementing gold-gilded accents, navy blue typography, and high-contrast accessibility.",
    ],
    challenges: [
      "Managing dynamic coupon code discount recalculation across varying product categories without state desynchronization.",
      "Delivering high-resolution product imagery and festive branding without impacting Angular initial bundle loading times.",
    ],
    outcome:
      "Live production e-commerce application deployed on Vercel driving gourmet popcorn sales and festive gift box inquiries.",
    placeholderMockupType: "popcorn",
    liveUrl: "https://popcorn-mocha.vercel.app/",
    tooltipText: "Popcorn & Company — Gourmet E-Commerce & Festive Gifting Platform (Vercel Production)",
    codeSnippet: `@Injectable({ providedIn: 'root' })
export class CouponService {
  private activeCoupon$ = new BehaviorSubject<string | null>(null);

  applyCoupon(code: string, subtotal: number): number {
    if (code.toUpperCase() === 'POPCORN20' && subtotal >= 350) {
      return subtotal * 0.8; // 20% OFF for orders >= ₹350
    }
    return subtotal;
  }
}`,
  },
  {
    id: "05",
    slug: "clinical-management-system",
    number: "05 —",
    title: "Clinical Management System",
    subtitle: "Healthcare Patient & Practice Management Platform",
    author: "Nagaraj K — Full-Stack Developer",
    image: "/images/projects/clinical-system.png",
    stack: ["Angular 14+", "RxJS", "ASP.NET Core", "C#", "SQL Server"],
    stackDisplay: "Angular 14+ / RxJS / ASP.NET Core / C# / SQL Server",
    description:
      "A clinical management platform covering patient registration, appointment scheduling, electronic medical records, clinical data entry and role-based access control.",
    features: [
      "Patient management",
      "Appointment scheduling",
      "Electronic Medical Records (EMR)",
      "Clinical reporting",
      "Role-based permissions",
    ],
    overview:
      "A unified clinical software solution engineered to digitize healthcare workflows from initial patient registration to secure EMR management and clinical reporting.",
    problem:
      "Healthcare facilities often face fragmented patient records, inefficient appointment scheduling, and strict security requirements for patient data privacy.",
    solution:
      "Developed a reactive Angular front-end coupled with a robust ASP.NET Core backend and SQL Server data store, featuring role-based access control and stream-lined clinical data entry interfaces.",
    engineeringDecisions: [
      "Role-based access control implemented via Angular route guards and API-level authorization filters.",
      "Optimized dynamic form state management for patient registration and clinical data entry.",
      "Structured SQL database schema for efficient lookup of EMR data and scheduled appointments.",
    ],
    challenges: [
      "Handling dynamic medical record attributes without compromising form validation performance.",
      "Ensuring real-time availability sync for patient appointment scheduling across multi-doctor schedules.",
    ],
    outcome:
      "Delivered as a working system covering the core clinical workflows including patient registration, scheduling, EMR tracking, and secure role-based permissions.",
    placeholderMockupType: "clinical",
    tooltipText: "Clinical Management System — Healthcare EHR & Patient Queue Platform",
  },
  {
    id: "06",
    slug: "human-resource-management-system",
    number: "06 —",
    title: "Human Resource Management",
    subtitle: "Enterprise HR, Payroll & Talent Pipeline Platform",
    author: "Nagaraj K — Full-Stack Developer",
    image: "/images/projects/hr-system.png",
    stack: ["Angular 14+", "RxJS", "ASP.NET Core", "EF Core", "SQL Server"],
    stackDisplay: "Angular 14+ / ASP.NET Core / Entity Framework",
    description:
      "A business HR platform covering employee management, recruitment, leave management, performance evaluation and payroll workflows.",
    features: [
      "Employee management",
      "Recruitment pipeline",
      "Leave management",
      "Performance evaluation",
      "Payroll",
      "Authentication & authorization",
    ],
    overview:
      "An enterprise-ready HR system designed to unify workforce data, streamline recruitment pipelines, automate leave approvals, and process performance evaluations.",
    problem:
      "Organizations struggle with dispersed employee records, manual leave tracking, and lack of visibility across the recruitment pipeline.",
    solution:
      "Built a centralized web platform utilizing Angular single-page application architecture backed by ASP.NET Core services and Entity Framework object-relational mapping.",
    engineeringDecisions: [
      "Modular Angular domain modules for HR sub-systems (Leave, Payroll, Recruitment).",
      "Secure authentication and token-based authorization across all HTTP services.",
      "EF Core query optimization for aggregated employee performance and payroll reporting.",
    ],
    challenges: [
      "Managing complex state transitions for multi-stage leave approval and evaluation workflows.",
      "Ensuring clean component boundaries for large multi-tab employee management dashboards.",
    ],
    outcome:
      "Delivered as a working system covering the core enterprise HR workflows from recruitment to payroll processing.",
    placeholderMockupType: "hr",
    tooltipText: "Human Resource Management System — Enterprise HR, Payroll & Talent Pipeline",
  },
  {
    id: "07",
    slug: "order-inventory-management",
    number: "07 —",
    title: "Order & Inventory Logistics",
    subtitle: "Real-time Product Search & Stock Logistics Engine",
    author: "Nagaraj K — Full-Stack Developer",
    image: "/images/projects/inventory-system.png",
    stack: ["Angular 14+", "RxJS", ".NET Core", "Web API", "SQL Server"],
    stackDisplay: "Angular / .NET Core / Web API",
    description:
      "An inventory and order management experience covering product search, order workflows, inventory updates and stock alerts.",
    features: [
      "Product search",
      "Dynamic order creation",
      "Inventory management",
      "Stock alerts",
      "API integration",
      "Responsive UI",
    ],
    overview:
      "A responsive inventory operations tool allowing real-time product search, order placement, stock monitoring, and dynamic inventory re-stock alerts.",
    problem:
      "Stockouts, delayed order updates, and slow product lookup hinder operational throughput in fast-paced retail and distribution environments.",
    solution:
      "Engineered an intuitive UI with instant product search, real-time stock alert thresholds, and asynchronous REST Web API communication for order processing.",
    engineeringDecisions: [
      "Debounced real-time product search leveraging RxJS observables in Angular.",
      "Decoupled Web API service endpoints for high-frequency stock level queries.",
      "Responsive grid design ensuring seamless operation across desktop workstations and tablet devices.",
    ],
    challenges: [
      "Optimizing client-side product filtering for fast search feedback.",
      "Handling concurrent inventory update notifications cleanly in the interface.",
    ],
    outcome:
      "Delivered as a working system covering the core product search, order execution, and inventory alert workflows.",
    placeholderMockupType: "inventory",
    tooltipText: "Order & Inventory Logistics — Real-Time SKU Search & Logistics Engine",
  },
];
