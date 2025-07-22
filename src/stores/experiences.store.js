import { create } from 'zustand';

export const useExperiencesStore = create((set) => ({
  experiences: [],
  addExperience: (experience) => set((state) => ({ experiences: [experience, ...state.experiences] })),
  setExperiences: (experiences) => set({ experiences }),
}));