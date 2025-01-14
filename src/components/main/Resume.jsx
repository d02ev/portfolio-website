const Resume = () => {
  return (
    <>
      <section className="bg-slate-950 text-white py-10 px-6" id="resume">
        <h2 className="text-center text-3xl font-bold mb-6">📄 Download My Resume</h2>
        <p className="text-center text-gray-300 mb-6">
          Interested in working together? Grab a copy of my resume below! 💼
        </p>
        <div className="flex justify-center">
          <a
            href="/Vikramaditya Pratap Singh-Software Engineer.pdf"
            download="Vikramaditya Pratap Singh-Software Engineer.pdf"
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16v-8m0 8l4-4m-4 4l-4-4m8 4H8m6-16H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </section>
    </>
  );
};

export default Resume;