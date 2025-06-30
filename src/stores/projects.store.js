import { create } from 'zustand';

export const useProjectsStore = create((set) => ({
  projects: [
    {
      name: 'DSA Visualizer',
      description: 'Understand complex DSA concepts through visualisations and interactive demos.',
      languages: 'React, TypeScript, Prompt Engineering, Vibe Coding, Git',
      url: 'https://github.com/d02ev/dsa-visualizer',
      live: 'https://dsavisualise.netlify.app',
    },
    {
      name: 'Resume NPM Package',
      description: 'A npm package that displays my resume in well formatted and styled way to the CLI.',
      languages: 'JavaScript, Node.js, npm, Git',
      url: 'https://github.com/d02ev/resume-npm-package',
      live: 'https://www.npmjs.com/package/vikramaditya-pratap-singh',
    },
    {
      name: 'Git Initializer',
      description: 'A CLI tool that streamlines the process of initializing a git repository.',
      languages: 'C++, Git, Bash, CMake',
      url: 'https://github.com/d02ev/git-initializer',
      live: '',
    },
    {
      name: 'Portfolio',
      description: 'A portfolio website to showcase my projects and skills.',
      languages: 'React, TypeScript, Tailwind CSS, Git',
      url: 'https://github.com/d02ev/portfolio-website',
      live: 'https://d02ev.netlify.app',
    },
    {
      name: 'More Projects Coming Soon',
      description: 'I like building things. More on the way. Stay tuned!',
      languages: '',
      url: '',
      live: '',
    }
  ],
  addProject: (project) => set((state) => ({ projects: [project, ...state.projects] })),
  setProjects: (projects) => set({ projects }),
}));