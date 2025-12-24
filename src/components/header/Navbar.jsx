const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="flex items-center">
            <img className="h-8 w-auto" src="/logo.svg" alt="logo" />
          </a>
          <div className="hidden sm:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
