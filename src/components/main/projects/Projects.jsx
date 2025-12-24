import { useProjectsStore } from '../../../stores/projects.store';
import ProjectsGrid from './ProjectsGrid';
import { useProjectsActions } from '../../../hooks/useProjectsActions.js';

const Projects = () => {
  const projects = useProjectsStore((state) => state.projects);
  const { error, loading } = useProjectsActions();

  return (
    <section className="py-24 bg-slate-950" id="projects">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 section-title">
            Projects
          </h2>
          <div className="w-12 h-0.5 bg-accent"></div>
          <p className="text-slate-400 mt-6">
            A selection of recent projects and personal work.
          </p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-950/50 text-red-400 rounded-lg text-sm">
            Sorry, we couldn&apos;t load this section. Please try again later.
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-700 border-t-accent"></div>
          </div>
        ) : (
          <ProjectsGrid projects={projects} />
        )}
      </div>
    </section>
  );
};

export default Projects;