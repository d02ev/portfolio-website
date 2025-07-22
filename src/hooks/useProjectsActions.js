import { useProjectsStore } from '../stores/projects.store.js';
import {
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../helpers/api.js';
import { useCallback, useEffect, useState } from 'react';

export function useProjectsActions() {
  const { projects, setProjects, addProject } = useProjectsStore();
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

  // Optimistic add
  const addProjectOptimistic = useCallback(async (project) => {
    addProject(project); // Optimistically add
    try {
      const res = await createProject(project);
      getProjects();
      return res.data;
    } catch (err) {
      getProjects();
      setError(err?.response?.data?.message || err?.message || 'Failed to add project.');
      throw err;
    }
  }, [addProject, getProjects]);

  // Optimistic update
  const updateProjectOptimistic = useCallback(async (id, updatedData) => {
    const prevProjects = [...projects];
    setProjects(
      projects.map((p) => (p.id === id ? { ...p, ...updatedData } : p))
    );
    try {
      const res = await updateProject(id, updatedData);
      getProjects();
      return res.data;
    } catch (err) {
      setProjects(prevProjects); // Rollback
      setError(err?.response?.data?.message || err?.message || 'Failed to update project.');
      throw err;
    }
  }, [projects, setProjects, getProjects]);

  // Optimistic delete
  const deleteProjectOptimistic = useCallback(async (id) => {
    const prevProjects = [...projects];
    setProjects(projects.filter((p) => p.id !== id));
    try {
      await deleteProject(id);
      getProjects();
    } catch (err) {
      setProjects(prevProjects); // Rollback
      setError(err?.response?.data?.message || err?.message || 'Failed to delete project.');
      throw err;
    }
  }, [projects, setProjects, getProjects]);

  return {
    projects,
    getProjects,
    addProject: addProjectOptimistic,
    updateProject: updateProjectOptimistic,
    deleteProject: deleteProjectOptimistic,
    error,
    setError,
    loading,
  };
}