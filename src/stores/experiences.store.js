import { create } from 'zustand';

export const useExperiencesStore = create((set) => ({
  experiences: [
    {
      title: 'Software Engineer',
      company: 'Nagarro',
      location: 'Pune, India',
      period: 'Jan 2024 - Present',
      description: [
        'Engineered a scalable backend REST API using Azure Functions, C#, and .NET Core to support 15,000+ active users.',
        'Enhanced data retrieval queries for SQL Server, reducing API response time by 80% and improving user experience.',
        'Successfully launched a feature ensuring seamless functionality for 700+ concurrent users.'
      ],
      icon: '👨‍💻',
      color: 'cyan',
    },
    {
      title: 'Associate Software Engineer',
      company: 'Nagarro',
      location: 'Pune, India',
      period: 'Jan 2023 - Jan 2024',
      description: [
        'Designed and created frontend web components for an analytical platform using Bootstrap, VueBootstrap, and VueJS.',
        'Increased development efficiency by 30% through efficient software design patterns.',
        'Optimized CosmosDB queries, reducing response time by 50%.',
        'Merged custom data charts using ChartJS, enhancing data visualization capabilities.',
        'Developed backend REST APIs using .NET Core, C#, and Uber H3 Grid for geospatial data.',
        'Boosted website performance by 100% with algorithms for real-time data calculation and chart rendering.'
      ],
      icon: '💻',
      color: 'blue',
    },
    {
      title: 'Software Engineering Trainee',
      company: 'Nagarro',
      location: 'Pune, India',
      period: 'Oct 2022 - Jan 2023',
      description: [
        'Developed foundational skills in .NET Core, Angular, C#, and JavaScript/TypeScript.',
        'Built small web application projects using .NET for the backend, Angular for the frontend, and SQL Server for the database.',
        'Integrated features like an admin dashboard, role-based authorization, and user authentication.'
      ],
      icon: '👾',
      color: 'purple',
    },
  ],
  addExperience: (experience) => set((state) => ({ experiences: [experience, ...state.experiences] })),
  setExperiences: (experiences) => set({ experiences }),
}));