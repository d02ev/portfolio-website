const Links = () => {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" id="contact">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">🌟 Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto">
              Feel free to reach out! I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a
              href="https://linkedin.com/in/vikramaditya-pratap-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden glass rounded-2xl p-8 text-center hover-lift transition-all duration-300 border border-slate-700/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  <i className="fab fa-linkedin"></i>
                </div>
                <span className="font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">LinkedIn</span>
              </div>
            </a>

            <a
              href="https://github.com/d02ev"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden glass rounded-2xl p-8 text-center hover-lift transition-all duration-300 border border-slate-700/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <i className="fab fa-github"></i>
                </div>
                <span className="font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">GitHub</span>
              </div>
            </a>

            <a
              href="https://leetcode.com/u/d02ev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden glass rounded-2xl p-8 text-center hover-lift transition-all duration-300 border border-slate-700/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-orange-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
                  <i className="fas fa-code"></i>
                </div>
                <span className="font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">LeetCode</span>
              </div>
            </a>

            <a
              href="mailto:vikramadityapratapsingh98@gmail.com"
              className="group relative overflow-hidden glass rounded-2xl p-8 text-center hover-lift transition-all duration-300 border border-slate-700/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-indigo-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                  <i className="fas fa-envelope"></i>
                </div>
                <span className="font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">Email</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Links;