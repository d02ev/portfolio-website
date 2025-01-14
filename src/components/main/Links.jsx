const Links = () => {
  return (
    <>
      <section className="bg-slate-950 text-slate-50 py-12" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-8">🌟 Let&apos;s Connect</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          
            <a
              href="https://linkedin.com/in/vikramaditya-pratap-singh"
              target="_blank"
              className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              <div className="text-4xl mb-3">
                <i className="fab fa-linkedin"></i>
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a
              href="https://github.com/d02ev"
              target="_blank"
              className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              <div className="text-4xl mb-3">
                <i className="fab fa-github"></i>
              </div>
              <span className="font-medium">GitHub</span>
            </a>
           
            <a
              href="https://leetcode.com/u/d02ev/"
              target="_blank"
              className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg hover:bg-orange-500 transition duration-300"
            >
              <div className="text-4xl mb-3">
                <i className="fas fa-code"></i>
              </div>
              <span className="font-medium">Leetcode</span>
            </a>
           
            <a
              href="mailto:vikramadityapratapsingh98@gmail.com"
              className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg hover:bg-indigo-600 transition duration-300"
            >
              <div className="text-4xl mb-3">
                <i className="fas fa-envelope"></i>
              </div>
              <span className="font-medium">Email</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Links;