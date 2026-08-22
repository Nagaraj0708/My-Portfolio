export interface ProcessStepItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStepItem[] = [
  {
    id: "understand",
    number: "01",
    title: "Understand",
    description:
      "Thorough client requirement analysis, business domain mapping, user workflow identification, and technical scope alignment.",
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    description:
      "Defining component boundaries, data models, state flows, and REST API contracts before writing production code.",
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    description:
      "Clean, modular Angular application development using TypeScript, RxJS observables, dynamic reactive forms, and responsive styling.",
  },
  {
    id: "refine",
    number: "04",
    title: "Refine",
    description:
      "End-to-end integration testing, performance profiling, cross-browser validation, and deployment pipeline configuration.",
  },
];
