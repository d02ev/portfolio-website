const Navbar = () => {
  return (
    <>
      <nav className="glass fixed top-0 left-0 right-0 z-50 border-b border-slate-700/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img className="block h-12 w-auto hover-lift transition-transform duration-300" src="/logo.svg" alt="logo" />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-1">
                  <a
                    href="#"
                    className="rounded-lg px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-700/50 hover:text-white transition-all duration-300 hover-lift"
                    aria-current="page"
                    title="Home"
                  >
                    <i className="fa-solid fa-house"></i>
                  </a>
                  <a
                    href="#about"
                    className="rounded-lg px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-700/50 hover:text-white transition-all duration-300 hover-lift"
                    title="About"
                  >
                    <i className="fa-solid fa-user"></i>
                  </a>
                  <a
                    href="#experience"
                    className="rounded-lg px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-700/50 hover:text-white transition-all duration-300 hover-lift"
                    title="Experience"
                  >
                    <i className="fa-solid fa-briefcase"></i>
                  </a>
                  <a
                    href="#contact"
                    className="rounded-lg px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-700/50 hover:text-white transition-all duration-300 hover-lift"
                    title="Contact"
                  >
                    <i className="fa-solid fa-address-book"></i>
                  </a>
                  <a
                    href="#projects"
                    className="rounded-lg px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-700/50 hover:text-white transition-all duration-300 hover-lift"
                    title="Projects"
                  >
                    <i className="fa-solid fa-folder"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
};

export default Navbar;
