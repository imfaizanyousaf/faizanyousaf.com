import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "nybblex",
    companyName: "Nybblex",
    companyLogo: "https://assets.chanhdai.com/images/companies/quaric.svg",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "UI/UX Designer",
        employmentPeriod: {
          start: "03.2020",
          end: "03.2024",
        },
        employmentType: "Part-time",
        icon: "code",
        description: `In-house Project: [Quaric Website](https://quaric.com)
          - Integrated VNPAY-QR for secure transactions.
          - Registered the e-commerce site with [online.gov.vn](http://online.gov.vn/website/chi-tiet-115855) for compliance.
          - Developed online ordering to streamline purchases.
          
          `,
        skills: [
          "UI/UX",
          "Figma",
          "Adobe Photoshop",
          "Adobe Illustrator"
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
];
