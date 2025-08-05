import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "zadark",
    title: "ZaDark",
    period: {
      start: "01.2022",
    },
    link: "https://zadark.com",
    skills: [
      "Pet Project",
      "Open Source",
      "Browser Extension",
      "CLI",
      "Docusaurus 3",
    ],
    description: `ZaDark adds Dark Mode, anti-peeking, customizable fonts, backgrounds, and more to Zalo Web and PC.
- Earned 10M+ VND in net sales from a paid Safari Extension.
- 80,000+ downloads on SourceForge (awarded Community Leader badge by SourceForge)
- 15,000+ active users via Chrome Web Store
- Bronze Medal — 10th Design, Manufacturing, and Application Award 2022`,
    logo: "https://assets.chanhdai.com/images/project-logos/zadark.svg",
    isExpanded: true,
  },
  {
    id: "qabox",
    title: "QABox",
    period: {
      start: "07.2023",
      end: "07.2023",
    },
    link: "https://github.com/ncdai/qabox",
    skills: [
      "University Project",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
    description:
      "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/qabox",
  }];
