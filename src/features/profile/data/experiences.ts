import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "dmn",
    companyName: "DMN Technology",
    companyLogo: "/images/dmn-logo.svg",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Web Developer",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description:
          ` - [AuftragNow](https://auftragnow.com/) -an online platform connecting customers with local service providers.  
            \n - [Appforce Pro](https://appforcepro.com/) -Streaming app for Samsung TV using Tizen Studio & React.
          `,
        skills: [
          "Laravel",
          "Vue",
          "React",
          "Inertia.js",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "boson",
    companyName: "Boson Studio",
    companyLogo: "/images/boson-studio-logo.svg",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Junior Web Developer",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Part-time",
        icon: "code",
        description:
          ` - In-house project: [Patient Management System](https://demo-hms.bosonstudio.com/)
            \n - A web-based application for hospitals to manage patients and staff more efficiently.
          `,
        skills: [
          "Laravel",
          "Vue",
          "React",
          "Inertia.js",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "nybblex",
    companyName: "Nybblex",
    companyLogo: "/images/nybblex-logo.svg",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "UI/UX Designer",
        employmentPeriod: {
          start: "2022",
          end: "2024",
        },
        employmentType: "Part-time",
        icon: "design",
        description:
          ` - Designed landing pages and web apps.
            - Created wireframes and prototypes in Figma.
            - Improved layouts, colors, and typography.
            - Prepared graphics in Photoshop and Illustrator.
            - Practiced responsive design for web and mobile.
            - Worked with developers on design handoff.
          `,
        skills: [
          "UI/UX",
          "Figma",
          "Adobe Photoshop",
          "Adobe Illustrator"
        ],
        isExpanded: false,
      },
      {
        id: "7586afb2-40e8-49c4-8983-2254c9446540",
        title: "Graphic Designer",
        employmentPeriod: {
          start: "2020",
          end: "2022",
        },
        employmentType: "Part-time",
        icon: "design",
        description:
          ` - Designed banners, icons, and product graphics.  
            - Created layouts for web pages and promotions.  
            - Assisted in building brand visuals and identity.  
            - Edited images for online store and marketing use.  
            - Supported team in website design and updates.  
        `,
        skills: [
          "Adobe Photoshop",
          "Adobe Illustrator"
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },


];
