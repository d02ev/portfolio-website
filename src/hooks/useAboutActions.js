import { useAboutStore } from '../stores/about.store.js';
import { fetchAbout } from '../helpers/api.js';
import { useCallback, useEffect, useState } from 'react';

export function useAboutActions() {
  const { about, setAbout } = useAboutStore();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAbout = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetchAbout();
      setAbout(res.data.data);
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to fetch about info.');
    } finally {
      setLoading(false);
    }
  }, [setAbout]);

  useEffect(() => {
    getAbout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    about,
    getAbout,
    error,
    setError,
    loading,
  };
}