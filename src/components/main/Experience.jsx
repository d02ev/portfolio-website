import { useExperiencesStore } from '../../stores/experiences.store';
import { useExperiencesActions } from '../../hooks/useExperiencesActions.js';

const Experience = () => {
  const experiences = useExperiencesStore((state) => state.experiences);
  const { error, loading } = useExperiencesActions();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">💼 Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        {error && (
          <div className="mb-8 p-4 bg-red-100 text-red-700 rounded text-center">
            Sorry, we couldn&apos;t load this section. Please try again later.
          </div>
        )}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500"></div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>

              {/* Experience items */}
              <div className="space-y-12">
                {experiences.map(exp => (
                  <div className="relative animate-fade-in" key={exp.id}>
                    <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 shadow-lg"></div>
                    <div className="ml-16">
                      <div className="glass rounded-2xl p-8 shadow-xl border border-slate-700/30 hover-lift transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <p className="text-sm font-medium mb-2 md:mb-0 text-blue-400">🗓 {exp.startDate} - {exp.endDate ? exp.endDate : 'Present'}</p>
                          {exp.endDate === null && (
                            <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full">Current</span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-slate-100 mb-2">💻 {exp.jobTitle}</h3>
                        <div className="flex justify-between items-center">
                          <div className="text-left">
                            <p className="text-slate-300 mb-4">{exp.companyName}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-slate-300 mb-4">{exp.location}</p>
                          </div>
                        </div>
                        <ul className="list-disc list-inside text-slate-400 space-y-2">
                          {exp.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;