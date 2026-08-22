export interface TechNodeItem {
  id: string;
  name: string;
  category: "primary" | "secondary" | "tooling";
  description: string;
  connections: string[];
}

export const skillsData: TechNodeItem[] = [
  // Primary cluster
  {
    id: "angular",
    name: "Angular",
    category: "primary",
    description: "Component architecture, reactive forms, RxJS, dynamic routing, and enterprise UI patterns.",
    connections: ["typescript", "javascript", "html", "css", "rest-api"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "primary",
    description: "Strict typing, interface definitions, scalable application architecture, and developer tooling.",
    connections: ["angular", "javascript", "dotnet-api"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "primary",
    description: "ES6+, async/await, DOM manipulation, functional patterns, and web standards.",
    connections: ["angular", "typescript", "html", "css"],
  },
  {
    id: "html",
    name: "HTML",
    category: "primary",
    description: "Semantic markup, accessibility (a11y) standards, and SEO structural hierarchy.",
    connections: ["angular", "javascript", "css"],
  },
  {
    id: "css",
    name: "CSS",
    category: "primary",
    description: "Vanilla CSS, modern grid/flexbox, custom properties, responsive layout, and clean transitions.",
    connections: ["html", "angular"],
  },

  // Secondary cluster
  {
    id: "aspnet-core",
    name: "ASP.NET Core",
    category: "secondary",
    description: "RESTful Web APIs, middleware configuration, dependency injection, and backend logic.",
    connections: ["csharp", "dotnet-api", "entity-framework", "sql-server"],
  },
  {
    id: "dotnet-api",
    name: ".NET Web API",
    category: "secondary",
    description: "High-performance API endpoints, DTO contracts, and JSON payload serialization.",
    connections: ["aspnet-core", "angular", "csharp", "sql-server"],
  },
  {
    id: "csharp",
    name: "C#",
    category: "secondary",
    description: "Object-oriented backend development, LINQ queries, and asynchronous programming.",
    connections: ["aspnet-core", "dotnet-api", "entity-framework"],
  },
  {
    id: "sql-server",
    name: "SQL Server",
    category: "secondary",
    description: "Relational database design, T-SQL queries, indexing, and data persistence.",
    connections: ["entity-framework", "aspnet-core", "dotnet-api"],
  },
  {
    id: "entity-framework",
    name: "Entity Framework",
    category: "secondary",
    description: "ORM data modeling, migration management, and database query optimization.",
    connections: ["csharp", "sql-server", "aspnet-core"],
  },

  // Workflow / Tooling cluster
  {
    id: "azure-devops",
    name: "Azure DevOps",
    category: "tooling",
    description: "CI/CD pipelines, source control management, work item tracking, and release management.",
    connections: ["github", "aws"],
  },
  {
    id: "github",
    name: "GitHub",
    category: "tooling",
    description: "Git version control, pull requests, collaboration, and repository maintenance.",
    connections: ["azure-devops", "vscode"],
  },
  {
    id: "aws",
    name: "AWS",
    category: "tooling",
    description: "Ubuntu EC2 server maintenance, cloud hosting, and basic cloud deployment operations.",
    connections: ["azure-devops"],
  },
  {
    id: "visual-studio",
    name: "Visual Studio",
    category: "tooling",
    description: "IDE environment for C#, ASP.NET Core, and database schema management.",
    connections: ["vscode", "aspnet-core"],
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tooling",
    description: "Primary editor for Angular, TypeScript, HTML, CSS, and web stack engineering.",
    connections: ["typescript", "angular", "github"],
  },
];
