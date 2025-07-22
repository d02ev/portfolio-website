import { useExperiencesStore } from '../stores/experiences.store.js';
import {
  fetchExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
} from '../helpers/api.js';
import { useCallback, useEffect, useState } from 'react';

export function useExperiencesActions() {
  const { experiences, setExperiences, addExperience } = useExperiencesStore();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all experiences from backend and update store
  const getExperiences = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetchExperiences();
      setExperiences(res.data);
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to fetch experiences.');
    } finally {
      setLoading(false);
    }
  }, [setExperiences]);

  useEffect(() => {
    getExperiences();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Optimistic add
  const addExperienceOptimistic = useCallback(async (experience) => {
    addExperience(experience); // Optimistically add
    try {
      const res = await createExperience(experience);
      getExperiences();
      return res.data;
    } catch (err) {
      getExperiences();
      setError(err?.response?.data?.message || err?.message || 'Failed to add experience.');
      throw err;
    }
  }, [addExperience, getExperiences]);

  // Optimistic update
  const updateExperienceOptimistic = useCallback(async (id, updatedData) => {
    const prevExperiences = [...experiences];
    setExperiences(
      experiences.map((e) => (e.id === id ? { ...e, ...updatedData } : e))
    );
    try {
      const res = await updateExperience(id, updatedData);
      getExperiences();
      return res.data;
    } catch (err) {
      setExperiences(prevExperiences); // Rollback
      setError(err?.response?.data?.message || err?.message || 'Failed to update experience.');
      throw err;
    }
  }, [experiences, setExperiences, getExperiences]);

  // Optimistic delete
  const deleteExperienceOptimistic = useCallback(async (id) => {
    const prevExperiences = [...experiences];
    setExperiences(experiences.filter((e) => e.id !== id));
    try {
      await deleteExperience(id);
      getExperiences();
    } catch (err) {
      setExperiences(prevExperiences); // Rollback
      setError(err?.response?.data?.message || err?.message || 'Failed to delete experience.');
      throw err;
    }
  }, [experiences, setExperiences, getExperiences]);

  return {
    experiences,
    getExperiences,
    addExperience: addExperienceOptimistic,
    updateExperience: updateExperienceOptimistic,
    deleteExperience: deleteExperienceOptimistic,
    error,
    setError,
    loading,
  };
}