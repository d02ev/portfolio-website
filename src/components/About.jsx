export const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6 bg-slate-950" id="about-section">
        <div className="bg-[#020617] text-gray-100 px-6 py-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-teal-400 mb-4">👋 Hi, I&apos;m Vikramaditya Pratap Singh!</h1>
          <p className="text-lg mb-6">
            🚀 A passionate <span className="font-semibold text-yellow-400">Software Engineer</span> with a knack for building scalable backend systems and sleek frontend interfaces. With over 2 years of professional experience at <span className="font-semibold text-green-400">Nagarro</span>, I&apos;ve:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>💡 Engineered REST APIs serving <span className="font-semibold">15,000+ active users</span>.</li>
            <li>⚡ Optimized SQL queries to reduce response times by <span className="font-semibold">80%</span>.</li>
            <li>📊 Designed custom data charts for advanced data visualization.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">💻 Tech Stack Highlights:</h2>
          <ul className="grid grid-cols-2 gap-4 mb-6">
            <li>Languages: <span className="font-semibold">JavaScript, TypeScript, C++, C#, SQL</span></li>
            <li>Frameworks: <span className="font-semibold">ExpressJS, .NET Core, VueJS, Angular</span></li>
            <li>Databases: <span className="font-semibold">MongoDB, PostgreSQL, SQL Server</span></li>
            <li>Tools: <span className="font-semibold">Docker, Azure Functions, Supabase</span></li>
          </ul>
          <p className="text-lg mb-6">
            ✨ I love solving complex problems with algorithms and exploring innovative design patterns. Always curious, always learning and sometimes gaming 🎮 😉
          </p>
          <h2 className="text-2xl font-semibold text-indigo-400 mb-4">🌐 Let&apos;s Connect:</h2>
          <ul className="space-y-2">
            <li>📧 <a href="mailto:vikramadityapratapsingh98@gmail.com" className="text-teal-300 hover:underline">vikramadityapratapsingh98@gmail.com</a></li>
            <li>💼 <a href="https://linkedin.com/in/vikramaditya-pratap-singh" className="text-teal-300 hover:underline">LinkedIn</a></li>
            <li>🖥️ <a href="https://github.com/d02ev" className="text-teal-300 hover:underline">GitHub</a></li>
          </ul>
        </div>


        <div className="flex justify-center">
          <img
            src="/pic1.jpg"
            alt="Your Image"
            className="w-81 h-81 object-cover rounded-lg shadow-md"
          />
        </div>

      </div>

    </>
  );
}