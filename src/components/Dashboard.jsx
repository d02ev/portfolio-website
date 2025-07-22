import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectsTab from './ProjectsTab.jsx';
import ExperiencesTab from './ExperiencesTab.jsx';
import AboutTab from './AboutTab.jsx';

const TABS = [
  { key: 'projects', label: 'Projects' },
  { key: 'experiences', label: 'Experiences' },
  { key: 'about', label: 'About' },
];

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabFromUrl && TABS.some(t => t.key === tabFromUrl) ? tabFromUrl : 'projects');

  useEffect(() => {
    if (tabFromUrl && TABS.some(t => t.key === tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const handleTabChange = (key) => {
    setActiveTab(key);
    setSearchParams({ tab: key });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-cyan-400">Admin Dashboard</h1>
      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-slate-700">
        {TABS.map(tab => (
          <button
            key={tab.key}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors duration-200 focus:outline-none ${activeTab === tab.key
              ? 'border-cyan-400 text-cyan-400'
              : 'border-transparent text-slate-400 hover:text-cyan-300'
              }`}
            onClick={() => handleTabChange(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      {activeTab === 'projects' && <ProjectsTab />}
      {activeTab === 'experiences' && <ExperiencesTab />}
      {activeTab === 'about' && <AboutTab />}
    </div>
  );
};

export default Dashboard;