const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiFetch = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': import.meta.env.VITE_API_KEY,
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

export const fetchProjects = () => apiFetch('/project');
export const fetchExperiences = () => apiFetch('/experience');
export const fetchAbout = () => apiFetch('/about');
export const getLatestResume = () => apiFetch('/resume/latest');

export default apiFetch;