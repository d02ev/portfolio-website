import { useState, useEffect } from "react";
import { fetchRepoList } from "../../../utils/api.util";
import ProjectsTable  from "./ProjectsTable";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await fetchRepoList();
      setProjects(projects);
    };
    fetchProjects();
  }, [])


  return (
    <>
      <section className="bg-slate-900 text-slate-50 py-12" id="projects">
        <h2 className="text-center text-3xl font-bold mb-8">📁 My Projects</h2>
        <ProjectsTable projects={projects} />
      </section>
    </>
  );
};

export default Projects;