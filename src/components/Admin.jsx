import { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [tokens, setTokens] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTokens(null);
    try {
      const res = await axios.post('/api/auth/login', { username, password });
      setTokens({
        accessToken: res.token.accessToken,
        refreshToken: res.token.refreshToken,
      });
    } catch (err) {
      setError(
        err.response?.data?.message || 'Login failed. Please check your credentials.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-700/30"
      >
        <h2 className="text-2xl font-bold text-center text-cyan-400 mb-6">Admin Login</h2>
        <div className="mb-4">
          <label className="block text-slate-300 mb-2" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full px-4 py-2 rounded bg-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-slate-300 mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 rounded bg-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        {error && <div className="mb-4 text-red-400 text-center">{error}</div>}
        <button
          type="submit"
          className="w-full py-2 rounded bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {tokens && (
          <div className="mt-6 bg-slate-800 p-4 rounded text-green-400 text-sm">
            <div>Access Token: <span className="break-all">{tokens.access_token}</span></div>
            <div className="mt-2">Refresh Token: <span className="break-all">{tokens.refresh_token}</span></div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Admin;