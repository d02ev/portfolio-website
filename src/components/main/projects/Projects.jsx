import { useProjectsStore } from '../../../stores/projects.store';
import ProjectsGrid from './ProjectsGrid';

const Projects = () => {
  const projects = useProjectsStore((state) => state.projects);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" id="projects">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">📁 My Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects. Each one represents a unique challenge and learning experience.
            </p>
          </div>
          <ProjectsGrid projects={projects} />
        </div>
      </section>
    </>
  );
};

export default Projects;