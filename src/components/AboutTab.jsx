import React, { useState } from 'react';
import { useAboutActions } from '../hooks/useAboutActions.js';

const AboutTab = () => {
  const { bio, techStack, funFact, profileImage, updateAbout, getAbout, error, setError } = useAboutActions();
  const [aboutEdit, setAboutEdit] = useState({
    bio: { ...bio },
    techStack: { ...techStack },
    funFact,
    profileImage: { ...profileImage },
  });

  const handleUpdateAbout = async (e) => {
    e.preventDefault();
    await updateAbout(1, aboutEdit);
    getAbout();
  };

  return (
    <section className="mb-12 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">About</h2>
      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded font-mono break-all flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => { setError(null); getAbout(); }} className="ml-4 px-3 py-1 bg-cyan-600 text-white rounded">Retry</button>
        </div>
      )}
      <div className="bg-slate-900 rounded-2xl shadow-xl p-6 border border-slate-700/30">
        <form onSubmit={handleUpdateAbout} className="flex flex-col gap-4">
          <div>
            <label className="block text-slate-300 mb-1" htmlFor="about-name">Name</label>
            <input id="about-name" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Name" value={aboutEdit.bio.name} onChange={e => setAboutEdit(a => ({ ...a, bio: { ...a.bio, name: e.target.value } }))} />
          </div>
          <div>
            <label className="block text-slate-300 mb-1" htmlFor="about-intro">Intro</label>
            <input id="about-intro" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Intro" value={aboutEdit.bio.intro} onChange={e => setAboutEdit(a => ({ ...a, bio: { ...a.bio, intro: e.target.value } }))} />
          </div>
          <div>
            <label className="block text-slate-300 mb-1" htmlFor="about-experience">Experience</label>
            <input id="about-experience" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Experience" value={aboutEdit.bio.experience} onChange={e => setAboutEdit(a => ({ ...a, bio: { ...a.bio, experience: e.target.value } }))} />
          </div>
          <div>
            <label className="block text-slate-300 mb-1" htmlFor="about-company">Company</label>
            <input id="about-company" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Company" value={aboutEdit.bio.company} onChange={e => setAboutEdit(a => ({ ...a, bio: { ...a.bio, company: e.target.value } }))} />
          </div>
          <div>
            <label className="block text-slate-300 mb-1" htmlFor="about-funfact">Fun Fact</label>
            <textarea id="about-funfact" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Fun Fact" value={aboutEdit.funFact} onChange={e => setAboutEdit(a => ({ ...a, funFact: e.target.value }))} />
          </div>
          <div>
            <label className="block text-slate-300 mb-1" htmlFor="about-img-src">Profile Image Src</label>
            <input id="about-img-src" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Profile Image Src" value={aboutEdit.profileImage.src} onChange={e => setAboutEdit(a => ({ ...a, profileImage: { ...a.profileImage, src: e.target.value } }))} />
          </div>
          <div>
            <label className="block text-slate-300 mb-1" htmlFor="about-img-alt">Profile Image Alt</label>
            <input id="about-img-alt" className="w-full p-2 rounded bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Profile Image Alt" value={aboutEdit.profileImage.alt} onChange={e => setAboutEdit(a => ({ ...a, profileImage: { ...a.profileImage, alt: e.target.value } }))} />
          </div>
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-semibold mt-2 transition" type="submit">Update About</button>
        </form>
      </div>
    </section>
  );
};

export default AboutTab;