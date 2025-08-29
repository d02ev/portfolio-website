import { useExperiencesStore } from '../stores/experiences.store.js';
import { fetchExperiences } from '../helpers/api.js';
import { useCallback, useEffect, useState } from 'react';

export function useExperiencesActions() {
  const { experiences, setExperiences } = useExperiencesStore();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all experiences from backend and update store
  const getExperiences = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetchExperiences();
      setExperiences(res.data.data);
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

  return {
    experiences,
    getExperiences,
    error,
    setError,
    loading,
  };
}