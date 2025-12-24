import { useAboutStore } from '../../stores/about.store.js';
import { useAboutActions } from '../../hooks/useAboutActions.js';

const About = () => {
  const { about } = useAboutStore();
  const { error, loading } = useAboutActions();

  return (
    <section className="py-24 bg-slate-950" id="about">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 section-title">
            About Me
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-fade-in">
            {/* Profile Image */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <img
                src={about?.profileImage?.src || '/pic1.jpg'}
                alt={about?.profileImage?.alt || about?.bio?.name || 'Profile'}
                className="w-48 h-48 object-cover rounded-lg"
              />
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {about?.bio?.name || 'Developer'}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {about?.bio?.intro} With over {about?.bio?.experience} at{' '}
                  <span className="text-white">{about?.bio?.company}</span>, I&apos;ve worked on:
                </p>
              </div>

              <ul className="space-y-2">
                {about?.bio?.highlights?.map((item, idx) => (
                  <li className="text-slate-400 flex items-start gap-2" key={idx}>
                    <span className="text-accent mt-1.5 text-xs">●</span>
                    <span>
                      {item.text}
                      {item.highlight && (
                        <span className="text-white">{item.highlight}</span>
                      )}
                    </span>
                  </li>
                )) || []}
              </ul>

              {/* Tech Stack */}
              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-4">
                  Tech Stack
                </h4>
                <div className="space-y-3 text-sm">
                  <p className="text-slate-400">
                    <span className="text-slate-300">Languages:</span>{' '}
                    {about?.techStack?.languages?.join(', ') || 'N/A'}
                  </p>
                  <p className="text-slate-400">
                    <span className="text-slate-300">Frameworks:</span>{' '}
                    {about?.techStack?.frameworksAndPlatforms?.join(', ') || 'N/A'}
                  </p>
                  <p className="text-slate-400">
                    <span className="text-slate-300">Databases:</span>{' '}
                    {about?.techStack?.databases?.join(', ') || 'N/A'}
                  </p>
                  <p className="text-slate-400">
                    <span className="text-slate-300">Cloud & DevOps:</span>{' '}
                    {about?.techStack?.cloudAndDevOps?.join(', ') || 'N/A'}
                  </p>
                </div>
              </div>

              {about?.funFact && (
                <p className="text-slate-500 text-sm italic pt-2">
                  {about.funFact}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;