const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img className="block h-20 w-auto" src="/logo.svg" alt="logo" />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-slate-50 hover:bg-slate-700" aria-current="page" title="Home"><i className="fa-solid fa-house"></i></a>
                  <a href="#about" className="rounded-md px-3 py-2 text-sm font-medium text-slate-50 hover:bg-slate-700 hover:text-white" title="About"><i className="fa-solid fa-user"></i></a>
                  <a href="#experience" className="rounded-md px-3 py-2 text-sm font-medium text-slate-50 hover:bg-slate-700 hover:text-white" title="Experience"><i className="fa-solid fa-briefcase"></i></a>
                  <a href="#contact" className="rounded-md px-3 py-2 text-sm font-medium text-slate-50 hover:bg-slate-700 hover:text-white" title="Contact"><i className="fa-solid fa-address-book"></i></a>
                  <a href="#projects" className="rounded-md px-3 py-2 text-sm font-medium text-slate-50 hover:bg-slate-700 hover:text-white" title="Projects"><i className="fa-solid fa-folder"></i></a>
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
