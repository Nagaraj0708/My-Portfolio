export interface MetricItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

export const metricsData: MetricItem[] = [
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Client satisfaction across multiple freelance projects",
  },
  {
    value: 40,
    suffix: "%",
    label: "Faster Deployment",
    description: "Reduced deployment time through improved DevOps processes",
  },
  {
    prefix: "$",
    value: 20,
    suffix: "K",
    label: "Efficiency Gains",
    description: "Efficiency gains from production-line improvement at Foxconn",
  },
];
