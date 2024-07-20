import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Patrick Lima",
  initials: "PL",
  url: "https://patricklima.dev",
  location: "Curitiba, BR",
  locationLink: "https://www.google.com/maps/place/curitiba",
  description:
    "Software Engineer specialized in web development. Interested in design, artificial inteligence, linguistics and JavaScript frameworks.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Angular",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "#", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "patrickgdlima@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/patrickgdl",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/patrickgdl",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/opatrickgdl",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "C6 Bank",
      href: "https://c6bank.com.br",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/c6.png",
      start: "May 2022",
      end: null,
      description:
        "C6Bank is one of the largest digital banks in Brazil. I worked on the 'Web Banking' product, focused on companies. In teams responsible for Cards, Payments and Statement. Worked on backoffice products, dedicated to the support team too. Using React and Node.js with Express",
    },
    {
      company: "PicPay",
      badges: [],
      href: "https://picpay.com",
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/picpay.png",
      start: "November 2021",
      end: "May 2022",
      description:
        "PicPay is a fintech dedicated to money transfers, the Brazil's CashApp. I worked on the 'Web Banking' product, focused on companies. Participated in the team responsible for updating the application in accordance with Central Bank regulations. The web team worked with a Nx Monorepo with several products. Worked on maintaining and creating Design System components. The Design System was made in Web Components (Stencil) to work in any web framework (React and Angular).",
    },
    {
      company: "MadeiraMadeira",
      href: "https://madeiramadeira.com.br",
      badges: [],
      location: "Curitiba, BR",
      title: "Software Engineer | Tech Lead",
      logoUrl: "/madeira-madeira.jpg",
      start: "December 2020",
      end: "October 2021",
      description:
        "MadeiraMadeira is a homewares retail e-commerce. The Ikea of Brazil. Technically led a team of 5 people from the Checkout Team to migrate their legacy PHP platform to a Next.js application. Helped them build the platform and design system from scratch using React, Storybook and Radix Primitives.",
    },
    {
      company: "Corbion",
      href: "https://corbion.com",
      badges: [],
      location: "Curitiba, BR",
      title: "Software Analyst",
      logoUrl: "/corbion.png",
      start: "June 2016",
      end: "December 2020",
      description:
        "Architected and wrote the entire internal CRM admin using Angular, C#, TypeScript, and Oracle.",
    },
  ],
  education: [
    {
      school: "Unifacear",
      href: "https://www.unifacear.edu.br/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/unifacear.jpg",
      start: "2014",
      end: "2018",
    },
    {
      school: "Universidade Positivo",
      href: "https://www.up.edu.br",
      degree: "Graduate Degree of Data Science and Big Data",
      logoUrl: "/up.jpg",
      start: "2019",
      end: "2020",
    },
    {
      school: "Federal University of Technology - Parana",
      href: "https://www.utfpr.edu.br/",
      degree: "Graduate Degree of Data Science",
      logoUrl: "/utfpr.jpg",
      start: "2021",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Diário",
      href: "https://diariofin.com",
      dates: "Jan 2024 - Present",
      active: true,
      description: "The OS for your personal finances",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Supabase",
        "TailwindCSS",
        "shadcn/ui",
      ],
      links: [
        {
          type: "Website",
          href: "https://diariofin.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/patrickgdl/diariofin",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://diariofin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdashboard-page.3d385c68.png&w=1080&q=100",
      video: "",
    },
    {
      title: "Receitta",
      href: "https://receitta.com",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Generate custom recipes based on ingredients and utensils you have, using AI.",
      technologies: ["Next.js", "Typescript", "OpenAI", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://receitta.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/patrickgdl/receitta",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/read-cv/image/upload/c_limit,h_2048,w_2048/v1/1/profileItems/TjX28pa6DcNKhFmjvOxdQyewIjl1/KImVL5neFg2vsCaDdmYl/681ef4e7-f770-475a-9cb1-2cfec75e2620.png?_a=DATAdtAAZAA0",
      video: "",
    },
    {
      title: "Gramaticador",
      href: "https://github.com/patrickgdl/gramaticador",
      dates: "April 2023 - Current",
      active: true,
      description:
        "Gramaticador is a correction and proofreading Chrome extension, an alternative to Grammarly!",
      technologies: ["Chrome Extension", "Next.js", "OpenAI", "Typescript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/patrickgdl/gramaticador",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://github.com/patrickgdl/gramaticador/assets/22237558/cca73a23-9cd8-4b64-b217-2b68ba7aa2ff",
      video: "",
    },
  ],
} as const;
