export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: "Code2" | "Layout" | "Layers" | "Building2";
}

export const servicesData: ServiceItem[] = [
  {
    id: "frontend-dev",
    number: "01",
    title: "Frontend Development",
    description:
      "Angular-based responsive web applications engineered with modular architecture, strict TypeScript types, and reusable component libraries.",
    iconName: "Code2",
  },
  {
    id: "ui-engineering",
    number: "02",
    title: "UI Engineering",
    description:
      "Responsive, accessible, and high-performance interfaces focused on user experience, pixel-perfect alignment, and smooth micro-interactions.",
    iconName: "Layout",
  },
  {
    id: "api-integration",
    number: "03",
    title: "API Integration",
    description:
      "Reliable integration between front-end SPA applications and RESTful backend APIs (.NET Core / C#), featuring robust error handling and RxJS state management.",
    iconName: "Layers",
  },
  {
    id: "business-apps",
    number: "04",
    title: "Business Applications",
    description:
      "Enterprise-grade web systems for complex domain workflows including clinical management, human resources, payroll, and stock inventory logistics.",
    iconName: "Building2",
  },
];
