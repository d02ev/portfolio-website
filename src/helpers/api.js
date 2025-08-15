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

export const fetchProjects = () => api.get('/project');
export const createProject = (projectData) => api.post('/project', projectData);
export const updateProject = (id, projectData) => api.patch(`/project/update/${id}`, projectData);
export const deleteProject = (id) => api.delete(`/project/delete/${id}`);

export const fetchExperiences = () => api.get('/experience');
export const createExperience = (experienceData) => api.post('/experience', experienceData);
export const updateExperience = (id, experienceData) => api.patch(`/experience/update/${id}`, experienceData);
export const deleteExperience = (id) => api.delete(`/experience/delete/${id}`);

export const fetchAbout = () => api.get('/about');
export const updateAbout = (id, aboutData) => api.patch(`/about/${id}`, aboutData);

export default api;