export const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6 bg-slate-950">
        
        <div className="flex justify-center">
          <img
            src="../../public/pic1.jpg"
            alt="Your Image"
            className="w-64 h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        
        <div>
          <h2 className="text-2xl font-bold mb-4 text-slate-50">About Me</h2>
          <p className="text-slate-200 leading-relaxed">
            I am <span className="font-bold">Vikramaditya Pratap Singh</span>, an Engineer from <span className="font-bold">India</span> 🇮🇳. I am an experienced <span className="font-bold">Software Engineer</span> 👨‍💻 with a total experience of <span className="font-bold">2 years</span>.
            I have worked on a wide range of project, mainly as a <span className="font-bold">Backend Developer</span> 🛠️. I like to <span className="font-bold">Engineer</span> things from scratch, getting my hands dirty. My professional experience includes <span className="font-bold">C# </span>
          </p>
        </div>
      </div>

    </>
  );
}