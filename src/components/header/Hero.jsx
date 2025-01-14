const Hero = () => {
  return (
    <>
      <section className="relative h-screen w-full" id="home">
        <img src="/tracy-adams-YSkuPlvE4nc-unsplash.jpg" className="w-full h-full object-cover" alt="hero section image"/>
        <div className="absolute inset-0 bg-slate-950 bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-slate-50 text-3xl md:text-5xl font-medium font-majormono">Hi, My name is Vikramaditya Pratap Singh</h1>
          <p className="text-slate-50 mt-4 text-base md:text-lg max-w-xl">
            I know that&apos;s a long name but you can call me <span className="font-semibold">Vicky</span> and yeah I am a <span className="font-semibold">Software Engineer</span> 👨‍💻
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;