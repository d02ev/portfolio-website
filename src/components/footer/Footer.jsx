const Footer = () => {
  return (
    <>
      <footer className="py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-700/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Quick Links */}
            <div className="text-center md:text-left animate-fade-in">
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center justify-center md:justify-start">
                <span className="mr-2">🌐</span> Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#projects"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center justify-center md:justify-start group"
                  >
                    <span className="mr-2">📂</span> Projects
                    <i className="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center justify-center md:justify-start group"
                  >
                    <span className="mr-2">👤</span> About Me
                    <i className="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center justify-center md:justify-start group"
                  >
                    <span className="mr-2">✉️</span> Contact
                    <i className="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="text-center animate-fade-in">
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center justify-center">
                <span className="mr-2">🔗</span> Connect with Me
              </h3>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/d02ev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-600 text-slate-300 hover:from-slate-600 hover:to-slate-500 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover-lift shadow-lg"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
                <a
                  href="https://linkedin.com/in/vikramaditya-pratap-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover-lift shadow-lg"
                >
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
                <a
                  href="https://twitter.com/devvikramaditya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:from-sky-400 hover:to-sky-500 rounded-xl flex items-center justify-center transition-all duration-300 hover-lift shadow-lg"
                >
                  <i className="fab fa-twitter text-lg"></i>
                </a>
              </div>
            </div>

            {/* Made With */}
            <div className="text-center md:text-right animate-fade-in">
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center justify-center md:justify-end">
                <span className="mr-2">💌</span> Made With
              </h3>
              <div className="space-y-3">
                <p className="text-slate-300">
                  Built with <span className="text-red-500 animate-pulse">❤️</span> by
                </p>
                <p className="text-cyan-400 font-semibold text-lg">Vikramaditya Pratap Singh</p>
                <p className="text-slate-400 text-sm">
                  © {new Date().getFullYear()} All rights reserved
                </p>
              </div>
            </div>
          </div>

          {/* Bottom border */}
          <div className="mt-12 pt-8 border-t border-slate-700/30">
            <p className="text-center text-slate-400 text-sm">
              Thanks for visiting my portfolio! 🚀
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;