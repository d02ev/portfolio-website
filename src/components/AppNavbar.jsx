import { useState, useRef, useEffect } from "react";

export const AppNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hamburgerMenuBtn = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 644)
        setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  const onHamburgerMenuBtnClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <h1 className="text-2xl font-bold text-slate-50">d02ev</h1>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <button type="button" ref={hamburgerMenuBtn} onClick={onHamburgerMenuBtnClick} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              </div>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-slate-50 hover:bg-slate-700" aria-current="page">Home</a>
                  <a href="#about" className="rounded-md px-3 py-2 text-sm font-medium text-slate-50 hover:bg-slate-700 hover:text-white">About</a>
                  <a href="#links" className="rounded-md px-3 py-2 text-sm font-medium text-slate-50 hover:bg-slate-700 hover:text-white">Links</a>
                  <a href="#projects" className="rounded-md px-3 py-2 text-sm font-medium text-slate-50 hover:bg-slate-700 hover:text-white">Projects</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">

            <a href="#" className="block rounded-md text-slate-50 hover:bg-slate-700 px-3 py-2 text-base font-medium" aria-current="page">Home</a>
            <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-slate-50 hover:bg-slate-700 hover:text-white">About</a>
            <a href="#links" className="block rounded-md px-3 py-2 text-base font-medium text-slate-50 hover:bg-slate-700 ">Links</a>
            <a href="#projects" className="block rounded-md px-3 py-2 text-base font-medium text-slate-50 hover:bg-slate-700 ">Projects</a>
          </div>
        </div>
      </nav>

    </>
  )
}
