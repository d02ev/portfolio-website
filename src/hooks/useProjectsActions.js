import { useProjectsStore } from '../stores/projects.store.js';
import { fetchProjects } from '../helpers/api.js';
import { useCallback, useEffect, useState } from 'react';

export function useProjectsActions() {
  const { projects, setProjects } = useProjectsStore();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProjects = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetchProjects();
      setProjects(res.data);
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to fetch projects.');
    } finally {
      setLoading(false);
    }
  }, [setProjects]);

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    projects,
    getProjects,
    error,
    setError,
    loading,
  };
}