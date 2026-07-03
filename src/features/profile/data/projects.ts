import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "hms",
    title: "Patient Management System",
    period: {
      start: "2024",
    },
    link: "https://demo-hms.bosonstudio.com/",
    skills: ["Pet Project", "Local Market", "Laravel", "Vue", "Inertia"],
    description: `- A web-based application for hospitals to manage patients and staff more efficiently.
    - Try [Demo](https://demo-hms.bosonstudio.com/) -Username: admin, Password: password 
    - Multi-tenant  
    - Role-based access control  
    - Patient, staff, payments and other management modules  
    - Modern UI with [shadcn/vue](https://www.shadcn-vue.com/)`,
    logo: "/images/boson-studio-logo.svg",
    isExpanded: false,
  },
  {
    id: "auftrag",
    title: "AuftragNow",
    period: {
      start: "2024",
    },
    link: "https://auftragnow.com/",
    skills: ["Laravel", "Vue", "Inertia"],
    description: `- An online platform connecting customers with local service providers.`,
    logo: "/images/af-logo.jpg",
    isExpanded: false,
  },
  {
    id: "tripvlog",
    title: "TripVlog",
    period: {
      start: "2024",
      end: "2025",
    },
    link: "https://tripvlog.com/",
    skills: ["Laravel", "Nuxt"],
    description: `- A tiktok style travel blogging platform where users can share their travel experiences using videos and can book hotels.`,
    logo: "/images/tripvlog.png",
    isExpanded: false,
  },
  {
    id: "donorcloud",
    title: "DonorCloud",
    period: {
      start: "2026",
    },
    link: "https://www.donorcloud.co.uk/",
    skills: ["Laravel", "Nuxt UI", "Vue", "Inertia"],
    description: `- Run campaigns, events, and Gift Aid in one fundraising platform built for UK charities; designed to maximise every donation.`,
    logo: "/images/dc.svg",
    isExpanded: false,
  },
];
