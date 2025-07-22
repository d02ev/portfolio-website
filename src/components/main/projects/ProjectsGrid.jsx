import PropTypes from 'prop-types';

const ProjectsGrid = ({ projects }) => {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map(project => (
        <div
          key={project.id}
          className="glass rounded-2xl shadow-xl border border-slate-700/30 p-6 flex flex-col justify-between hover-lift transition-all duration-300 animate-fade-in"
        >
          <div>
            <h3 className="text-xl font-bold gradient-text mb-2 truncate">{project.displayName}</h3>
            <p className="text-slate-300 mb-4 min-h-[60px]">{project.description}</p>
            {project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((stack, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-xs font-medium"
                  >
                    {stack.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center justify-end mt-4 gap-3">
            {project.liveUrl && project.liveUrl.trim() && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow hover:from-green-500 hover:to-blue-600 transition-all duration-300 hover-lift flex items-center justify-center"
                title="Live Site"
              >
                <i className="fa-solid fa-globe"></i>
              </a>
            )}
            {project.repoUrl && project.repoUrl.trim() && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border-2 border-cyan-400 text-cyan-300 font-semibold shadow hover:bg-cyan-500 hover:text-white transition-all duration-300 hover-lift flex items-center justify-center"
                title="Repo"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

ProjectsGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      stackuages: PropTypes.string,
      url: PropTypes.string,
      live: PropTypes.string,
    })
  ).isRequired,
};

export default ProjectsGrid;