const Footer = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-sm">
              Built by <span className="text-white">Vikramaditya Pratap Singh</span>
            </p>
            <p className="text-slate-500 text-xs mt-1">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/d02ev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/vikramaditya-pratap-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/devvikramaditya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;