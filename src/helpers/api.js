import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL_DEV,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export const fetchProjects = () => api.get('/projects');
export const createProject = (projectData) => api.post('/projects', projectData);
export const updateProject = (id, projectData) => api.patch(`/projects/update/${id}`, projectData);
export const deleteProject = (id) => api.delete(`/projects/delete/${id}`);

export const fetchExperiences = () => api.get('/experiences');
export const createExperience = (experienceData) => api.post('/experiences', experienceData);
export const updateExperience = (id, experienceData) => api.patch(`/experiences/update/${id}`, experienceData);
export const deleteExperience = (id) => api.delete(`/experiences/delete/${id}`);

export const fetchAbout = () => api.get('/about');
export const updateAbout = (id, aboutData) => api.patch(`/about/${id}`, aboutData);

export default api;