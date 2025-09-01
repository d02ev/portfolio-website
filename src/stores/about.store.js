import { create } from 'zustand';

export const useAboutStore = create((set) => ({
  about: {},
  setAbout: (about) => set({ about }),
}));