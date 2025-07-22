import { create } from 'zustand';

const initialState = {
  bio: {
    name: "Vikramaditya Pratap Singh",
    intro: "A passionate Software Engineer with a knack for building scalable backend systems and sleek frontend interfaces.",
    experience: "2+ years of professional experience",
    company: "Nagarro",
    highlights: [
      {
        icon: "💡",
        text: "Engineered REST APIs serving ",
        highlight: "15,000+ active users",
      },
      {
        icon: "⚡",
        text: "Optimized SQL queries to reduce response times by ",
        highlight: "80%",
      },
      {
        icon: "📊",
        text: "Designed custom data charts for advanced data visualization.",
        highlight: null,
      },
    ],
  },
  techStack: {
    languages: ["C/C++", "C#", "Python", "JavaScript", "TypeScript", "Bash", "SQL"],
    frameworks: ["ExpressJS", ".NET Core", "React"],
    databases: ["MongoDB", "PostgreSQL"],
    tools: ["Docker", "Azure Functions", "Supabase", "Git"],
    cloud: ["Azure", "AWS"],
    ai: ["Prompt Engineering", "Vibe Coding"],
  },
  funFact: "✨ I love solving complex problems with algorithms and exploring innovative design patterns. Always curious, always learning and sometimes gaming 🎮 😉",
  profileImage: {
    src: "/pic1.jpg",
    alt: "Vikramaditya Pratap Singh",
  },
};

export const useAboutStore = create(() => initialState);