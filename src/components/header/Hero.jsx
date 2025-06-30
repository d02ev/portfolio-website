const Hero = () => {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden" id="home">
        <img
          src="/tracy-adams-YSkuPlvE4nc-unsplash.jpg"
          className="w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-100"
          alt="hero section image"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/90"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <div className="animate-fade-in space-y-6 max-w-4xl">
            <h1 className="text-slate-50 font-bold leading-tight text-4xl md:text-6xl lg:text-7xl">
              <span className="inline-block align-baseline mr-2 text-white" style={{fontFamily: 'Inter, sans-serif', fontWeight: 700}}>
                Hi, I&apos;m
              </span>
              <span className="inline-block align-baseline gradient-text font-majormono text-4xl md:text-6xl lg:text-7xl" style={{letterSpacing: '0.05em'}}>
                VIKRAMADITYA
              </span>
            </h1>
            <h2 className="text-cyan-400 text-2xl md:text-3xl font-semibold mt-4 mb-2 text-center mx-auto animate-fade-in">
              Building the Brains Behind the Cloud ☁️🤖
            </h2>
            <p className="text-slate-200 mt-2 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed text-center mx-auto">
              Crafting scalable backends, automating with AI, and architecting cloud solutions for tomorrow's web.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#about"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover-lift shadow-lg"
              >
                Learn More
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-slate-300 text-slate-200 font-semibold rounded-lg hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 hover-lift"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-slate-300 text-2xl"></i>
        </div>
      </section>
    </>
  );
};

export default Hero;