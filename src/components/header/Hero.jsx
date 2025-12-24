const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 pt-14" id="home">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="animate-fade-in space-y-6">
          <p className="text-slate-400 text-sm tracking-wide uppercase">
            Backend Developer & Cloud Architect
          </p>
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
            Hi, I&apos;m{' '}
            <span className="text-accent">Vikramaditya</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Building scalable backends, automating with AI, and architecting cloud solutions for tomorrow&apos;s web.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="px-6 py-3 bg-accent text-slate-900 font-medium rounded-lg hover:opacity-90 transition-opacity duration-200"
            >
              Learn More
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-slate-700 text-slate-300 font-medium rounded-lg hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;