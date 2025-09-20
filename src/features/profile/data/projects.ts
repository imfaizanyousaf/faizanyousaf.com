import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "hms",
    title: "Patient Management System",
    period: {
      start: "2024",
    },
    link: "https://demo-hms.bosonstudio.com/",
    skills: [
      "Pet Project",
      "Local Market",
      "Laravel",
      "Vue",
      "Inertia",
    ],
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
    skills: [
      "Laravel",
      "Vue",
      "Inertia",
    ],
    description: `- An online platform connecting customers with local service providers.`,
    logo: "/images/af-logo.jpg",
    isExpanded: false,
  },
];
