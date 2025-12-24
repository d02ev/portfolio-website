const Links = () => {
  const links = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vikramaditya-pratap-singh',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/d02ev',
      icon: 'fab fa-github'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/d02ev/',
      icon: 'fas fa-code'
    },
    {
      name: 'Email',
      url: 'mailto:vikramadityapratapsingh98@gmail.com',
      icon: 'fas fa-envelope'
    }
  ];

  return (
    <section className="py-24 bg-slate-900" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 section-title">
            Get in Touch
          </h2>
          <div className="w-12 h-0.5 bg-accent"></div>
          <p className="text-slate-400 mt-6">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 animate-fade-in">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith('mailto') ? undefined : '_blank'}
              rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-3 px-5 py-3 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-600 transition-all duration-200"
            >
              <i className={`${link.icon} text-lg`}></i>
              <span className="text-sm font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;