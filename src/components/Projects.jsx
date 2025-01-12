import { useState, useEffect } from "react";
import { fetchRepoList } from "../utils/api.util";
import { ProjectsTable } from "./ProjectsTable";

export const Projects = () => {
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
      <section className="bg-slate-950 text-slate-50 py-12">
        <h2 className="text-center text-3xl font-bold mb-8">📁 My Projects</h2>
        <ProjectsTable projects={projects} />
      </section>
    </>
  );
};