import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "quaric",
    companyName: "Quaric Co., Ltd.",
    companyLogo: "https://assets.chanhdai.com/images/companies/quaric.svg",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Software Engineer",
        employmentPeriod: {
          start: "03.2024",
        },
        employmentType: "Part-time",
        icon: "code",
        description: `In-house Project: [Quaric Website](https://quaric.com)
- Integrated VNPAY-QR for secure transactions.
- Registered the e-commerce site with [online.gov.vn](http://online.gov.vn/website/chi-tiet-115855) for compliance.
- Developed online ordering to streamline purchases.

In-house Project: [ZaDark](https://zadark.com)
- Build and maintain ZaDark.com with Docusaurus, integrating AdSense.
- Develop and maintain the ZaDark extension for Zalo Web on Chrome, Safari, Edge, and Firefox — with 15,000+ active users via Chrome Web Store.`,
        skills: [
          "Next.js",
          "Strapi",
          "Auth0",
          "VNPAY-QR",
          "Docker",
          "NGINX",
          "Google Cloud",
          "Docusaurus",
          "Extension",
          "Research",
          "Project Management",
        ],
        isExpanded: true,
      },
      {
        id: "7586afb2-40e8-49c4-8983-2254c9446540",
        title: "Product Designer",
        employmentPeriod: {
          start: "03.2024",
        },
        employmentType: "Part-time",
        icon: "design",
        description: `- Design UI/UX for Quaric Website with a seamless experience.
- Develop a Design System for consistency and efficiency.
- Create Quaric's brand identity, including logo and guidelines.`,
        skills: [
          "UI/UX Design",
          "UX Writing",
          "Design System",
          "Brand Design",
          "Figma",
        ],
      },
      {
        id: "991692c4-7d02-4666-8d31-933c4831768d",
        title: "Founder & Director",
        employmentPeriod: {
          start: "03.2024",
        },
        employmentType: "Part-time",
        icon: "idea",
        description: `- Lead and manage the company's strategy.
- Oversee technical teams and product development.
- Manage relationships with customers and partners.`,
        skills: ["Business Ownership", "Business Law", "Business Tax"],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "tungtung",
    companyName: "Tung Tung JSC",
    companyLogo: "https://assets.chanhdai.com/images/companies/tungtung.webp",
    positions: [
      {
        id: "3e831244-8d8c-41e2-b2ce-7f3946956afd",
        title: "Web Developer",
        employmentPeriod: {
          start: "2020",
          end: "2022",
        },
        employmentType: "Full-time",
        description: `- Built a scalable design system for consistency and efficiency.
- Built a complex rich-text editor based on ProseMirror and Slate for customizable content creation.
- Integrated APIs with the Backend Team to enhance functionality.`,
        icon: "code",
        skills: [
          "React",
          "Redux",
          "Storybook",
          "Lerna",
          "Agile",
          "Teamwork",
          "Research",
        ],
        isExpanded: true,
      },
      {
        id: "13bd34c3-db84-4fad-8132-a6c89a42957e",
        title: "Mobile Developer",
        employmentPeriod: {
          start: "2019",
          end: "2020",
        },
        employmentType: "Full-time",
        description: `- Rebuilt the app with React Native for better UX and performance.
- Integrated MoMo and in-app purchases for seamless payments.
- Optimized deployment for staging and production.
- Published on App Store and Google Play, ensuring compliance.`,
        icon: "code",
        skills: [
          "React Native",
          "Redux",
          "MoMo Payment API",
          "App Store",
          "Google Play Store",
          "App Center",
          "Agile",
          "Teamwork",
          "Research",
        ],
        isExpanded: true,
      },
      {
        id: "73151add-7adf-4035-a237-b5803ceb5478",
        title: "UI/UX Designer",
        employmentPeriod: {
          start: "2018",
          end: "2019",
        },
        employmentType: "Full-time",
        description: `- Designed a Landing Page for enterprise clients.
- Redesigned the Online Quiz Platform for a modern look on web and mobile.
- Redesigned the Pricing interface for individual customers.
- Enhanced UX by improving usability, navigation, and user flow.`,
        icon: "design",
        skills: ["UI/UX Design", "Sketch"],
        isExpanded: true,
      },
    ],
  },
];
