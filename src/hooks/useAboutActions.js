import { useAboutStore } from '../stores/about.store.js';
import { fetchAbout, updateAbout } from '../helpers/api.js';
import { useCallback, useEffect, useState } from 'react';

export function useAboutActions() {
  const { bio, techStack, funFact, profileImage } = useAboutStore();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAbout = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetchAbout();
      useAboutStore.setState(res.data.data);
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to fetch about info.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAbout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Optimistic update
  const updateAboutOptimistic = useCallback(async (id, aboutData) => {
    const prevState = useAboutStore.getState();
    useAboutStore.setState(aboutData); // Optimistically update
    try {
      const res = await updateAbout(id, aboutData);
      getAbout();
      return res.data;
    } catch (err) {
      useAboutStore.setState(prevState); // Rollback
      setError(err?.response?.data?.message || err?.message || 'Failed to update about info.');
      throw err;
    }
  }, [getAbout]);

  return {
    bio,
    techStack,
    funFact,
    profileImage,
    getAbout,
    updateAbout: updateAboutOptimistic,
    error,
    setError,
    loading,
  };
}