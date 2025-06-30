import { useExperiencesStore } from '../../stores/experiences.store';

const Experience = () => {
  const experiences = useExperiencesStore((state) => state.experiences);

  // Color mapping for timeline dots
  const colorMap = {
    cyan: 'from-cyan-500 to-blue-500',
    blue: 'from-blue-500 to-purple-500',
    purple: 'from-purple-500 to-pink-500',
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">💼 Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div className="relative animate-fade-in" key={idx}>
                  <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${colorMap[exp.color] || 'from-cyan-500 to-blue-500'} rounded-full border-4 border-slate-900 shadow-lg`}></div>
                  <div className="ml-16">
                    <div className="glass rounded-2xl p-8 shadow-xl border border-slate-700/30 hover-lift transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <p className={`text-sm font-medium mb-2 md:mb-0 ${exp.color === 'cyan' ? 'text-cyan-400' : exp.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`}>🗓 {exp.period}</p>
                        {idx === 0 && (
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full">Current</span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-slate-100 mb-2">{exp.icon} {exp.title}</h3>
                      <p className="text-slate-300 mb-4">🏢 {exp.company}{exp.location ? `, ${exp.location}` : ''}</p>
                      <ul className="space-y-3 text-slate-200">
                        {exp.description.map((item, i) => (
                          <li className="flex items-start space-x-3" key={i}>
                            <span className={`${exp.color === 'cyan' ? 'text-cyan-400' : exp.color === 'blue' ? 'text-blue-400' : 'text-purple-400'} mt-1`}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;