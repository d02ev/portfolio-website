import { create } from 'zustand';

export const useProjectsStore = create((set) => ({
  projects: [],
  addProject: (project) => set((state) => ({ projects: [project, ...state.projects] })),
  setProjects: (projects) => set({ projects }),
}));