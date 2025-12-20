import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const context = `# Faizan Yousaf - Profile Summary

## Personal Information
- **Name**: Faizan Yousaf
- **Display Name**: Faizan Yousaf
- **Username**: imfaizanyousaf
- **Gender**: Male
- **Pronouns**: He/Him
- **Bio**: Clean design. Seamless code.
- **Location**: Phalia, M.B.DIN, Pakistan
- **Job Title**: Web Developer
- **Website**: https://faizanyousaf.com
- **Other Websites**: bosonstudio.com
- **Email**: yousafmughal477@gmail.com (decoded from base64)
- **Phone Number**: +923028548392 (decoded from base64, E.164 format)
- **Keywords**: imfaizanyousaf, faizanyousaf, faizan yousaf, faizan.usaf, yousaf, bosonstudio, فیضان یوسف
- **Date Created**: 2025-08-05

## About
Hello, World! I am Faizan Yousaf — a Full-Stack Web Developer and UI/UX enthusiast passionate about crafting high-performance, intuitive, and visually minimal digital experiences.

With years of hands-on experience, I specialize in building scalable, user-focused web applications. My work bridges robust backend systems with sleek, engaging interfaces, ensuring both reliability and delight for end-users.

Beyond client work, I enjoy experimenting with new tools, optimizing workflows, and pushing creative boundaries through personal projects.

Let's connect and turn bold ideas into powerful, user-friendly solutions!

## Tech Stack
Faizan specializes in the following technologies:
- **Frameworks**: Laravel, Next.js, Tailwind CSS, shadcn/ui
- **Libraries**: Vue, Inertia, React, Radix UI, Motion
- **Languages**: JavaScript, PHP
- **UI Libraries**: Vue, React
- **Databases**: MySQL
- **Version Control**: Git
- **Design Tools**: Figma, Adobe Photoshop
- **AI Tools**: ChatGPT
- **Component Libraries**: shadcn/ui, Radix UI
- **Animation**: Motion

## Experience
### Web Developer at DMN Technology (2025 - Present, Full-time)
Skills: Laravel, Vue, React, Inertia.js

- AuftragNow - an online platform connecting customers with local service providers.
- Appforce Pro - Streaming app for Samsung TV using Tizen Studio & React.

### Junior Web Developer at Boson Studio (2024 - Present, Part-time)
Skills: Laravel, Vue, React, Inertia.js

- In-house project: Patient Management System
- A web-based application for hospitals to manage patients and staff more efficiently.

### UI/UX Designer at Nybblex (2022 - 2024, Part-time)
Skills: UI/UX, Figma, Adobe Photoshop, Adobe Illustrator

- Designed landing pages and web apps.
- Created wireframes and prototypes in Figma.
- Improved layouts, colors, and typography.
- Prepared graphics in Photoshop and Illustrator.
- Practiced responsive design for web and mobile.
- Worked with developers on design handoff.

### Graphic Designer at Nybblex (2020 - 2022, Part-time)
Skills: Adobe Photoshop, Adobe Illustrator

- Designed banners, icons, and product graphics.
- Created layouts for web pages and promotions.
- Assisted in building brand visuals and identity.
- Edited images for online store and marketing use.
- Supported team in website design and updates.

## Projects
### Patient Management System (2024 - Present)
Skills: Pet Project, Local Market, Laravel, Vue, Inertia

- A web-based application for hospitals to manage patients and staff more efficiently.
- Try Demo - Username: admin, Password: password
- Multi-tenant
- Role-based access control
- Patient, staff, payments and other management modules
- Modern UI with shadcn/vue

Project URL: https://demo-hms.bosonstudio.com/

### AuftragNow (2024 - Present)
Skills: Laravel, Vue, Inertia

- An online platform connecting customers with local service providers.

Project URL: https://auftragnow.com/

## Awards
No awards listed.

## Certifications
No certifications listed.

## Social Links
- LinkedIn: faizan-yousaf (https://www.linkedin.com/in/faizan-yousaf-951b45199/)
- GitHub: imfaizanyousaf (https://github.com/imfaizanyousaf)

## Interests and Additional Details
Faizan is a UI/UX enthusiast with a focus on clean design and seamless code. He enjoys experimenting with new tools, optimizing workflows, and developing personal projects. His portfolio website (faizanyousaf.com) is built with Next.js 15, Tailwind CSS v4, and shadcn/ui, featuring clean design, light/dark theme support, vCard integration, SEO optimization, AI-friendly llms.txt, spam-protected email, and PWA capabilities. He has a pronunciation audio file for his name and uses keywords for discoverability. His work emphasizes full-stack development, bridging backend reliability with engaging interfaces.
`;

export async function POST(request: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY not set");
      return Response.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const { message }: { message: string } = await request.json();

    if (!message || typeof message !== "string") {
      return Response.json({ error: "Invalid message" }, { status: 400 });
    }

    const contents = `You are "My AI Ghost", an AI chatbot representing Faizan Yousaf. Answer questions about Faizan based on the following information. Be helpful, friendly, and engaging. If the question is not related to Faizan or his work, politely redirect to topics about him.

${context}

User: ${message}

Assistant:`;

    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
    });

    return Response.json({ response: response.text });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
