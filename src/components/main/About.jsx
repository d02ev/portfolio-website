const About = () => {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" id="about">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="glass rounded-2xl p-8 shadow-xl border border-slate-700/30">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">👋 Hi, I'm Vikramaditya Pratap Singh!</h3>
                <p className="text-slate-200 text-lg leading-relaxed mb-6">
                  A passionate <span className="font-semibold text-yellow-400">Software Engineer</span> with a knack for building scalable backend systems and sleek frontend interfaces. With over 2+ years of professional experience at <span className="font-semibold text-green-400">Nagarro</span>, I've:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">💡</span>
                    <span className="text-slate-200">Engineered REST APIs serving <span className="font-semibold text-cyan-300">15,000+ active users</span>.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">⚡</span>
                    <span className="text-slate-200">Optimized SQL queries to reduce response times by <span className="font-semibold text-cyan-300">80%</span>.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1">📊</span>
                    <span className="text-slate-200">Designed custom data charts for advanced data visualization.</span>
                  </li>
                </ul>
              </div>

              <div className="glass rounded-2xl p-8 shadow-xl border border-slate-700/30">
                <h4 className="text-xl font-semibold text-purple-400 mb-4">💻 Tech Stack Highlights:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-slate-300"><span className="font-semibold text-slate-200">Languages:</span> C/C++, C#, Python, JavaScript, TypeScript, Bash, SQL</p>
                    <p className="text-slate-300"><span className="font-semibold text-slate-200">Frameworks:</span> ExpressJS, .NET Core, React</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-300"><span className="font-semibold text-slate-200">Databases:</span> MongoDB, PostgreSQL</p>
                    <p className="text-slate-300"><span className="font-semibold text-slate-200">Tools:</span> Docker, Azure Functions, Supabase, Git</p>
                    <p className="text-slate-300"><span className="font-semibold text-slate-200">Cloud:</span> Azure, AWS</p>
                    <p className="text-slate-300"><span className="font-semibold text-slate-200">AI:</span> Prompt Engineering, Vibe Coding</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 shadow-xl border border-slate-700/30">
                <p className="text-slate-200 text-lg leading-relaxed">
                  ✨ I love solving complex problems with algorithms and exploring innovative design patterns. Always curious, always learning and sometimes gaming 🎮 😉
                </p>
              </div>
            </div>

            <div className="flex justify-center animate-fade-in">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src="/pic1.jpg"
                  alt="Vikramaditya Pratap Singh"
                  className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl hover-lift transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;