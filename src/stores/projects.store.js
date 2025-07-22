import { create } from 'zustand';

export const useProjectsStore = create((set) => ({
  projects: [
    {
      displayName: 'DSA Visualizer',
      description: 'Understand complex DSA concepts through visualisations and interactive demos.',
      techStack: 'React, TypeScript, Prompt Engineering, Vibe Coding, Git',
      repoUrl: 'https://github.com/d02ev/dsa-visualizer',
      liveUrl: 'https://dsavisualise.netlify.app',
    },
    {
      displayName: 'Resume NPM Package',
      description: 'A npm package that displays my resume in well formatted and styled way to the CLI.',
      techStack: 'JavaScript, Node.js, npm, Git',
      repoUrl: 'https://github.com/d02ev/resume-npm-package',
      liveUrl: 'https://www.npmjs.com/package/vikramaditya-pratap-singh',
    },
    {
      displayName: 'Git Initializer',
      description: 'A CLI tool that streamlines the process of initializing a git repository.',
      techStack: 'C++, Git, Bash, CMake',
      repoUrl: 'https://github.com/d02ev/git-initializer',
      liveUrl: '',
    },
    {
      displayName: 'Portfolio',
      description: 'A portfolio website to showcase my projects and skills.',
      techStack: 'React, TypeScript, Tailwind CSS, Git',
      repoUrl: 'https://github.com/d02ev/portfolio-website',
      liveUrl: 'https://d02ev.netlify.app',
    },
    {
      displayName: 'More Projects Coming Soon',
      description: 'I like building things. More on the way. Stay tuned!',
      techStack: '',
      repoUrl: '',
      liveUrl: '',
    }
  ],
  addProject: (project) => set((state) => ({ projects: [project, ...state.projects] })),
  setProjects: (projects) => set({ projects }),
}));