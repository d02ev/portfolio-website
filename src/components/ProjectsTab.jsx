import React, { useState } from 'react';
import { useProjectsActions } from '../hooks/useProjectsActions.js';

const ProjectsTab = () => {
  const {
    projects,
    addProject,
    updateProject,
    deleteProject,
    getProjects,
    error,
    setError,
  } = useProjectsActions();

  const [newProject, setNewProject] = useState({ name: '', description: '', languages: '', url: '', live: '' });
  const [editProjectId, setEditProjectId] = useState(null);
  const [editProject, setEditProject] = useState({});
  const [expandedProject, setExpandedProject] = useState(null);

  const handleAddProject = async (e) => {
    e.preventDefault();
    await addProject(newProject);
    setNewProject({ name: '', description: '', languages: '', url: '', live: '' });
    getProjects();
  };
  const handleUpdateProject = async (e) => {
    e.preventDefault();
    await updateProject(editProjectId, editProject);
    setEditProjectId(null);
    setEditProject({});
    getProjects();
  };
  const handleDeleteProject = async (id) => {
    await deleteProject(id);
    getProjects();
  };

  return (
    <section className="mb-12 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded font-mono break-all flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => { setError(null); getProjects(); }} className="ml-4 px-3 py-1 bg-cyan-600 text-white rounded">Retry</button>
        </div>
      )}
      <div className="flex flex-col md:flex-row md:space-x-8 justify-center">
        <div className="md:w-1/2">
          <div className="bg-slate-900 rounded-2xl shadow-xl p-6 mb-8 border border-slate-700/30">
            <form
              onSubmit={editProjectId !== null ? handleUpdateProject : handleAddProject}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="block text-slate-300 mb-1" htmlFor="project-name">Name</label>
                <input id="project-name" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Name" value={editProjectId !== null ? editProject.name : newProject.name} onChange={e => editProjectId !== null ? setEditProject(p => ({ ...p, name: e.target.value })) : setNewProject(p => ({ ...p, name: e.target.value }))} required />
              </div>
              <div>
                <label className="block text-slate-300 mb-1" htmlFor="project-description">Description</label>
                <input id="project-description" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Description" value={editProjectId !== null ? editProject.description : newProject.description} onChange={e => editProjectId !== null ? setEditProject(p => ({ ...p, description: e.target.value })) : setNewProject(p => ({ ...p, description: e.target.value }))} required />
              </div>
              <div>
                <label className="block text-slate-300 mb-1" htmlFor="project-languages">Languages</label>
                <input id="project-languages" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Languages" value={editProjectId !== null ? editProject.languages : newProject.languages} onChange={e => editProjectId !== null ? setEditProject(p => ({ ...p, languages: e.target.value })) : setNewProject(p => ({ ...p, languages: e.target.value }))} />
              </div>
              <div>
                <label className="block text-slate-300 mb-1" htmlFor="project-url">URL</label>
                <input id="project-url" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="URL" value={editProjectId !== null ? editProject.url : newProject.url} onChange={e => editProjectId !== null ? setEditProject(p => ({ ...p, url: e.target.value })) : setNewProject(p => ({ ...p, url: e.target.value }))} />
              </div>
              <div>
                <label className="block text-slate-300 mb-1" htmlFor="project-live">Live</label>
                <input id="project-live" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Live" value={editProjectId !== null ? editProject.live : newProject.live} onChange={e => editProjectId !== null ? setEditProject(p => ({ ...p, live: e.target.value })) : setNewProject(p => ({ ...p, live: e.target.value }))} />
              </div>
              <div className="flex gap-2 mt-2">
                <button className={`px-4 py-2 rounded text-white font-semibold transition ${editProjectId !== null ? 'bg-green-600 hover:bg-green-700' : 'bg-cyan-600 hover:bg-cyan-700'}`} type="submit">
                  {editProjectId !== null ? 'Update Project' : 'Add Project'}
                </button>
                {editProjectId !== null && (
                  <button type="button" className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white font-semibold transition" onClick={() => { setEditProjectId(null); setEditProject({}); }}>Cancel</button>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="md:w-1/2">
          <ul>
            {projects.map((project, idx) => {
              const isExpanded = expandedProject === (project.id || idx);
              return (
                <li key={project.id || idx} className="mb-4">
                  <div className="flex flex-col bg-slate-900 rounded-xl p-4 border border-slate-700/30 transition-all">
                    <div className="flex items-center gap-4 cursor-pointer" onClick={() => setExpandedProject(isExpanded ? null : (project.id || idx))}>
                      <div className="flex-1">
                        <span className="font-semibold block text-lg text-cyan-300">{project.name}</span>
                        <span className="text-slate-400 block text-sm">{project.description}</span>
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
                      <button className="bg-yellow-600 hover:bg-yellow-700 px-3 py-1 rounded text-white text-xs font-semibold transition" onClick={e => { e.stopPropagation(); setEditProjectId(project.id || idx); setEditProject(project); }}>Edit</button>
                      <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white text-xs font-semibold transition" onClick={e => { e.stopPropagation(); handleDeleteProject(project.id || idx); }}>Delete</button>
                    </div>
                    {isExpanded && (
                      <div className="mt-4 text-slate-200 text-sm space-y-1">
                        <div><span className="font-semibold">Languages:</span> {project.languages}</div>
                        <div><span className="font-semibold">URL:</span> <a href={project.url} className="text-cyan-400 underline break-all" target="_blank" rel="noopener noreferrer">{project.url}</a></div>
                        <div><span className="font-semibold">Live:</span> <a href={project.live} className="text-cyan-400 underline break-all" target="_blank" rel="noopener noreferrer">{project.live}</a></div>
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

export default ProjectsTab;