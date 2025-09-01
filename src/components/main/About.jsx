import { useAboutStore } from '../../stores/about.store.js';
import { useAboutActions } from '../../hooks/useAboutActions.js';

const About = () => {
  const { about } = useAboutStore();
  const { error, loading } = useAboutActions();
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" id="about">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="glass rounded-2xl p-8 shadow-xl border border-slate-700/30">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">👋 Hi, I&apos;m {about?.bio?.name || 'Developer'}!</h3>
                  <p className="text-slate-200 text-lg leading-relaxed mb-6">
                    {about?.bio?.intro} With over {about?.bio?.experience} at <span className="font-semibold text-green-400">{about?.bio?.company}</span>, I&apos;ve:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {about?.bio?.highlights?.map((item, idx) => (
                      <li className="flex items-start space-x-3" key={idx}>
                        <span className="text-cyan-400 mt-1">{item.icon}</span>
                        <span className="text-slate-200">
                          {item.text}
                          {item.highlight && (
                            <span className="font-semibold text-cyan-300">{item.highlight}</span>
                          )}
                        </span>
                      </li>
                    )) || []}
                  </ul>
                </div>

                <div className="glass rounded-2xl p-8 shadow-xl border border-slate-700/30">
                  <h4 className="text-xl font-semibold text-purple-400 mb-4">💻 Tech Stack Highlights:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-slate-300"><span className="font-semibold text-slate-200">Languages:</span> {about?.techStack?.languages?.join(', ') || 'N/A'}</p>
                      <p className="text-slate-300"><span className="font-semibold text-slate-200">Frameworks:</span> {about?.techStack?.frameworks?.join(', ') || 'N/A'}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-slate-300"><span className="font-semibold text-slate-200">Databases:</span> {about?.techStack?.databases?.join(', ') || 'N/A'}</p>
                      <p className="text-slate-300"><span className="font-semibold text-slate-200">Tools:</span> {about?.techStack?.tools?.join(', ') || 'N/A'}</p>
                      <p className="text-slate-300"><span className="font-semibold text-slate-200">Cloud:</span> {about?.techStack?.cloud?.join(', ') || 'N/A'}</p>
                      <p className="text-slate-300"><span className="font-semibold text-slate-200">AI:</span> {about?.techStack?.ai?.join(', ') || 'N/A'}</p>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-8 shadow-xl border border-slate-700/30">
                  <p className="text-slate-200 text-lg leading-relaxed">
                    {about?.funFact || 'Always learning and exploring new technologies!'}
                  </p>
                </div>
              </div>

              <div className="flex justify-center animate-fade-in">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <img
                    src={about?.profileImage?.src || '/pic1.jpg'}
                    alt={about?.profileImage?.alt || about?.bio?.name || 'Profile'}
                    className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl hover-lift transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default About;