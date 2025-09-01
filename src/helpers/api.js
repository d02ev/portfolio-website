import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Public API functions for fetching data (no authentication required)
export const fetchProjects = () => api.get('/project');
export const fetchExperiences = () => api.get('/experience');
export const fetchAbout = () => api.get('/about');
export const getLatestResume = () => api.get('/resume/latest');

export default api;