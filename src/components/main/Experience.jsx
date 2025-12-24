import { useExperiencesStore } from '../../stores/experiences.store';
import { useExperiencesActions } from '../../hooks/useExperiencesActions.js';

const Experience = () => {
  const experiences = useExperiencesStore((state) => state.experiences);
  const { error, loading } = useExperiencesActions();

  return (
    <section className="py-24 bg-slate-900" id="experience">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 section-title">
            Experience
          </h2>
          <div className="w-12 h-0.5 bg-accent"></div>
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
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="animate-fade-in relative pl-6 border-l border-slate-800"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-2 h-2 -translate-x-[4.5px] rounded-full bg-slate-700"></div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm text-slate-500">
                      {exp.startDate} — {exp.endDate || 'Present'}
                    </span>
                    {!exp.endDate && (
                      <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {exp.jobTitle}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {exp.companyName} · {exp.location}
                  </p>

                  <ul className="pt-2 space-y-1.5">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-slate-600 mt-1.5 text-xs">●</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;