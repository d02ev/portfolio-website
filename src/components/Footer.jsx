export const Footer = () => {
  return (
    <>
      <footer className="bg-slate-950 text-gray-400 py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">🌐 Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  📂 Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  👤 About Me
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  ✉️ Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">🔗 Connect with Me</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/d02ev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a
                href="https://linkedin.com/in/vikramaditya-pratap-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a
                href="https://twitter.com/devvikramaditya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Made with ❤️ */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4">💌 Made With</h3>
            <p>
              Built with <span className="text-red-500">❤️</span> by Vikramaditya Pratap Singh
            </p>
          </div>
        </div>
      </footer>

    </>
  );
};