import React, { useState } from 'react';
import { useExperiencesActions } from '../hooks/useExperiencesActions.js';

const ExperiencesTab = () => {
  const {
    experiences,
    addExperience,
    updateExperience,
    deleteExperience,
    getExperiences,
    error,
    setError,
  } = useExperiencesActions();

  const [newExperience, setNewExperience] = useState({ title: '', company: '', location: '', period: '', description: [''], icon: '', color: '' });
  const [editExperienceId, setEditExperienceId] = useState(null);
  const [editExperience, setEditExperience] = useState({});
  const [expandedExperience, setExpandedExperience] = useState(null);

  const handleAddExperience = async (e) => {
    e.preventDefault();
    await addExperience(newExperience);
    setNewExperience({ title: '', company: '', location: '', period: '', description: [''], icon: '', color: '' });
    getExperiences();
  };
  const handleUpdateExperience = async (e) => {
    e.preventDefault();
    await updateExperience(editExperienceId, editExperience);
    setEditExperienceId(null);
    setEditExperience({});
    getExperiences();
  };
  const handleDeleteExperience = async (id) => {
    await deleteExperience(id);
    getExperiences();
  };

  return (
    <section className="mb-12 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Experiences</h2>
      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded font-mono break-all flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => { setError(null); getExperiences(); }} className="ml-4 px-3 py-1 bg-cyan-600 text-white rounded">Retry</button>
        </div>
      )}
      <div className="flex flex-col md:flex-row md:space-x-8 justify-center">
        <div className="md:w-1/2">
          <div className="bg-slate-900 rounded-2xl shadow-xl p-6 mb-8 border border-slate-700/30">
            <form
              onSubmit={editExperienceId !== null ? handleUpdateExperience : handleAddExperience}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="block text-slate-300 mb-1" htmlFor="exp-title">Title</label>
                <input id="exp-title" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Title" value={editExperienceId !== null ? editExperience.title : newExperience.title} onChange={e => editExperienceId !== null ? setEditExperience(p => ({ ...p, title: e.target.value })) : setNewExperience(p => ({ ...p, title: e.target.value }))} required />
              </div>
              <div>
                <label className="block text-slate-300 mb-1" htmlFor="exp-company">Company</label>
                <input id="exp-company" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Company" value={editExperienceId !== null ? editExperience.company : newExperience.company} onChange={e => editExperienceId !== null ? setEditExperience(p => ({ ...p, company: e.target.value })) : setNewExperience(p => ({ ...p, company: e.target.value }))} required />
              </div>
              <div>
                <label className="block text-slate-300 mb-1" htmlFor="exp-location">Location</label>
                <input id="exp-location" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Location" value={editExperienceId !== null ? editExperience.location : newExperience.location} onChange={e => editExperienceId !== null ? setEditExperience(p => ({ ...p, location: e.target.value })) : setNewExperience(p => ({ ...p, location: e.target.value }))} />
              </div>
              <div>
                <label className="block text-slate-300 mb-1" htmlFor="exp-period">Period</label>
                <input id="exp-period" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Period" value={editExperienceId !== null ? editExperience.period : newExperience.period} onChange={e => editExperienceId !== null ? setEditExperience(p => ({ ...p, period: e.target.value })) : setNewExperience(p => ({ ...p, period: e.target.value }))} />
              </div>
              <div>
                <label className="block text-slate-300 mb-1" htmlFor="exp-icon">Icon</label>
                <input id="exp-icon" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Icon" value={editExperienceId !== null ? editExperience.icon : newExperience.icon} onChange={e => editExperienceId !== null ? setEditExperience(p => ({ ...p, icon: e.target.value })) : setNewExperience(p => ({ ...p, icon: e.target.value }))} />
              </div>
              <div>
                <label className="block text-slate-300 mb-1" htmlFor="exp-color">Color</label>
                <input id="exp-color" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Color" value={editExperienceId !== null ? editExperience.color : newExperience.color} onChange={e => editExperienceId !== null ? setEditExperience(p => ({ ...p, color: e.target.value })) : setNewExperience(p => ({ ...p, color: e.target.value }))} />
              </div>
              <div>
                <label className="block text-slate-300 mb-1" htmlFor="exp-description">Description (comma separated)</label>
                <textarea id="exp-description" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Description (comma separated)" value={editExperienceId !== null ? (Array.isArray(editExperience.description) ? editExperience.description.join(',') : editExperience.description) : (Array.isArray(newExperience.description) ? newExperience.description.join(',') : newExperience.description)} onChange={e => editExperienceId !== null ? setEditExperience(p => ({ ...p, description: e.target.value.split(',') })) : setNewExperience(p => ({ ...p, description: e.target.value.split(',') }))} />
              </div>
              <div className="flex gap-2 mt-2">
                <button className={`px-4 py-2 rounded text-white font-semibold transition ${editExperienceId !== null ? 'bg-green-600 hover:bg-green-700' : 'bg-cyan-600 hover:bg-cyan-700'}`} type="submit">
                  {editExperienceId !== null ? 'Update Experience' : 'Add Experience'}
                </button>
                {editExperienceId !== null && (
                  <button type="button" className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white font-semibold transition" onClick={() => { setEditExperienceId(null); setEditExperience({}); }}>Cancel</button>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="md:w-1/2">
          <ul>
            {experiences.map((exp, idx) => {
              const isExpanded = expandedExperience === (exp.id || idx);
              return (
                <li key={exp.id || idx} className="mb-4">
                  <div className="flex flex-col bg-slate-900 rounded-xl p-4 border border-slate-700/30 transition-all">
                    <div className="flex items-center gap-4 cursor-pointer" onClick={() => setExpandedExperience(isExpanded ? null : (exp.id || idx))}>
                      <div className="flex-1">
                        <span className="font-semibold block text-lg text-cyan-300">{exp.title}</span>
                        <span className="text-slate-400 block text-sm">{exp.company}</span>
                      </div>
                      <button
                        type="button"
                        className="focus:outline-none"
                        tabIndex={-1}
                        aria-label={isExpanded ? 'Collapse' : 'Expand'}
                      >
                        <svg
                          className={`w-6 h-6 text-cyan-400 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <button className="bg-yellow-600 hover:bg-yellow-700 px-3 py-1 rounded text-white text-xs font-semibold transition" onClick={e => { e.stopPropagation(); setEditExperienceId(exp.id || idx); setEditExperience(exp); }}>Edit</button>
                      <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white text-xs font-semibold transition" onClick={e => { e.stopPropagation(); handleDeleteExperience(exp.id || idx); }}>Delete</button>
                    </div>
                    {isExpanded && (
                      <div className="mt-4 text-slate-200 text-sm space-y-1">
                        <div><span className="font-semibold">Location:</span> {exp.location}</div>
                        <div><span className="font-semibold">Period:</span> {exp.period}</div>
                        <div><span className="font-semibold">Icon:</span> {exp.icon}</div>
                        <div><span className="font-semibold">Color:</span> {exp.color}</div>
                        <div><span className="font-semibold">Description:</span>
                          <ul className="list-disc list-inside ml-4">
                            {Array.isArray(exp.description) ? exp.description.map((d, i) => <li key={i}>{d}</li>) : <li>{exp.description}</li>}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesTab;