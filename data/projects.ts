// data/projects.ts
export interface Project {
  slug: string;
  title: string;
  description: string;
  date?: string;
  published: boolean;
}

export const projects: Project[] = [
  {
    slug: "riposte",
    title: "Riposte",
    description:
      "A smart, AI-powered social media scheduling app designed to help users streamline content creation and post management across platforms like Bluesky and X",
    date: "2025-04-06",
    published: true,
  },
  {
    slug: "sarimax",
    title: "Sentiment-Driven Stock Price Prediction",
    description:
      "A script that analyzes stock sentiment and forecast's stock prices using SARIMAX model and utilizing 6 exogenous features derived from financial metrics.",
    date: "2024-08-07",
    published: true,
  },
  {
    slug: "bankist",
    title: "Bankist",
    description:
      "Bankist is a modern banking web application designed for seamless user-to-user transactions, balance tracking, and loan management.",
    date: "2023-11-20",
    published: true,
  },
  {
    slug: "DBMS",
    title: "Hospital Maneagement Sysytem",
    description:
      "FullStack management system tailored for small hospitals and clinics providing easy access to information about doctors, patients, insurance and equipment and the links between each by ward and specialization.",
    date: "2024-12-10",
    published: false,
  },
  {
    slug: "Forkify",
    title: "Forkify",
    description: "A advanced static frontend website using HTML and sass.",
    date: "2024-09-10",
    published: false,
  },
];
