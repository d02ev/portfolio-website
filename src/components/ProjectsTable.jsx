import { useState } from "react";

export const ProjectsTable = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="max-w-full overflow-x-auto bg-[#020617] text-white rounded-lg shadow-md p-6">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-[#08132d]">
            <th className="p-4 text-left font-semibold border-b border-[#1e293b]">🖋️ Name</th>
            <th className="p-4 text-left font-semibold border-b border-[#1e293b]">📝 Description</th>
            <th className="p-4 text-left font-semibold border-b border-[#1e293b]">💻 Languages</th>
            <th className="p-4 text-left font-semibold border-b border-[#1e293b]">🍴 Forks</th>
            <th className="p-4 text-left font-semibold border-b border-[#1e293b]">⭐ Stars</th>
            <th className="p-4 text-left font-semibold border-b border-[#1e293b]">👀 Watchers</th>
            <th className="p-4 text-left font-semibold border-b border-[#1e293b]">🔗 Repo URL</th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.map((project, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-[#0b1123]" : "bg-[#0d1328]"
                } hover:bg-[#1e293b]`}
            >
              <td className="p-4 border-b border-[#1e293b]">{project.name}</td>
              <td className="p-4 border-b border-[#1e293b]">{project.description}</td>
              <td className="p-4 border-b border-[#1e293b]">
                {project.languages}
              </td>
              <td className="p-4 border-b border-[#1e293b]">{project.forks}</td>
              <td className="p-4 border-b border-[#1e293b]">{project.stars}</td>
              <td className="p-4 border-b border-[#1e293b]">{project.watchers}</td>
              <td className="p-4 border-b border-[#1e293b] text-blue-400 underline">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 px-6">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-6 py-2 rounded ${currentPage === 1
              ? "bg-[#0d1328] text-gray-400 cursor-not-allowed"
              : "bg-[#08132d] text-white hover:bg-[#1e293b]"
            }`}
        >
          Previous
        </button>
        <p className="text-gray-300">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-6 py-2 rounded ${currentPage === totalPages
              ? "bg-[#0d1328] text-gray-400 cursor-not-allowed"
              : "bg-[#08132d] text-white hover:bg-[#1e293b]"
            }`}
        >
          Next
        </button>
      </div>
    </div>

  );
};
