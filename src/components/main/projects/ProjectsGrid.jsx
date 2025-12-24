import PropTypes from 'prop-types';

const ProjectsGrid = ({ projects }) => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
      {projects.map(project => (
        <div
          key={project.id}
          className="p-6 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors duration-200 animate-fade-in"
        >
          <h3 className="text-lg font-semibold text-white mb-2">
            {project.displayName}
          </h3>
          <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            {project.shortDescription}
          </p>

          {project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((stack, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-slate-800/50 text-slate-400 rounded"
                >
                  {stack.trim()}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3 pt-2">
            {project.liveUrl && project.liveUrl.trim() && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
              >
                <i className="fa-solid fa-globe text-xs"></i>
                Live
              </a>
            )}
            {project.repoUrl && project.repoUrl.trim() && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
              >
                <i className="fa-brands fa-github text-xs"></i>
                Code
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
      displayName: PropTypes.string.isRequired,
      shortDescription: PropTypes.string,
      techStack: PropTypes.array,
      repoUrl: PropTypes.string,
      liveUrl: PropTypes.string,
    })
  ).isRequired,
};

export default ProjectsGrid;