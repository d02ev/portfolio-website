const Experience = () => {
  return (
    <section className="bg-slate-900 text-slate-50 p-6">
      <h2 className="text-3xl font-bold text-slate-50 mb-8 text-center">💼 Work Experience</h2>
      <div className="relative border-l border-gray-700">
        
        <div className="mb-10 ml-6">
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 border border-slate-950"></div>
          <p className="text-sm font-medium text-slate-400">🗓 Jan 2024 - Present</p>
          <h3 className="text-lg font-semibold text-slate-50">👨‍💻 Software Engineer</h3>
          <p className="text-slate-300">🏢 Nagarro, Pune, India</p>
          <ul className="mt-2 text-sm text-slate-200 list-disc list-inside space-y-1">
            <li>🛠️ Engineered a scalable backend REST API using Azure Functions, C#, and .NET Core to support 15,000+ active users.</li>
            <li>⚡ Enhanced data retrieval queries for SQL Server, reducing API response time by 80% and improving user experience.</li>
            <li>🚀 Successfully launched a feature ensuring seamless functionality for 700+ concurrent users.</li>
          </ul>
        </div>
        <div className="mb-10 ml-6">
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 border border-slate-950"></div>
          <p className="text-sm font-medium text-slate-400">🗓 Jan 2023 - Jan 2024</p>
          <h3 className="text-lg font-semibold text-slate-50">💻 Associate Software Engineer</h3>
          <p className="text-slate-300">🏢 Nagarro, Pune, India</p>
          <ul className="mt-2 text-sm text-slate-200 list-disc list-inside space-y-1">
            <li>🎨 Designed and created frontend web components for an analytical platform using Bootstrap, VueBootstrap, and VueJS.</li>
            <li>⚡ Increased development efficiency by 30% through efficient software design patterns.</li>
            <li>📈 Optimized CosmosDB queries, reducing response time by 50%.</li>
            <li>📊 Merged custom data charts using ChartJS, enhancing data visualization capabilities.</li>
            <li>🛠️ Developed backend REST APIs using .NET Core, C#, and Uber H3 Grid for geospatial data.</li>
            <li>🚀 Boosted website performance by 100% with algorithms for real-time data calculation and chart rendering.</li>
          </ul>
        </div>


        <div className="mb-10 ml-6">
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 border border-slate-950"></div>
          <p className="text-sm font-medium text-slate-400">🗓 Oct 2022 - Jan 2023</p>
          <h3 className="text-lg font-semibold text-slate-50">👾 Software Engineering Trainee</h3>
          <p className="text-slate-300">🏢 Nagarro, Pune, India</p>
          <ul className="mt-2 text-sm text-slate-200 list-disc list-inside space-y-1">
            <li>📚 Developed foundational skills in .NET Core, Angular, C#, and JavaScript/TypeScript.</li>
            <li>🛠️ Built small web application projects using .NET for the backend, Angular for the frontend, and SQL Server for the database.</li>
            <li>🔒 Integrated features like an admin dashboard, role-based authorization, and user authentication.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;