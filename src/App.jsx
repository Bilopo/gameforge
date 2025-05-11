import React from "react";

import geminiCardImg from './assets/gemini-card.png';
import { useState } from 'react';

function FeatureCarousel() {
  const features = [
    {
      title: 'AI-Powered Worlds',
      img: geminiCardImg,
      desc: 'Build, explore, and expand dynamic universes powered by next-gen AI agents. Every world evolves, adapts, and surprises.'
    },
    {
      title: 'Real-Time Collaboration',
      img: geminiCardImg,
      desc: 'Co-create with friends or AI companions. Shape environments, invent rules, and experience seamless multiplayer creativity.'
    },
    {
      title: 'Infinite Customization',
      img: geminiCardImg,
      desc: 'Personalize every element. Design assets, craft narratives, and tweak the physics of your own NEXUS worlds.'
    }
  ];
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((idx - 1 + features.length) % features.length);
  const next = () => setIdx((idx + 1) % features.length);
  return (
    <div className="relative flex flex-col items-center mt-4 mb-16 select-none">
      <div className="relative flex items-center justify-center max-w-2xl w-full">
        <button
          aria-label="Previous feature"
          className="absolute left-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-black/40 hover:bg-white/10 border border-white/10 shadow-lg transition-all -translate-x-1/2"
          onClick={prev}
          style={{top:'50%',transform:'translateY(-50%) translateX(-50%)'}}
        >
          <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2"><path d="M14 5l-6 6 6 6"/></svg>
        </button>
        <div className="bg-[#181b20] bg-opacity-95 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center px-9 py-8 gap-7 w-full border border-white/10 relative transition-all duration-500" style={{backdropFilter:'blur(10px)'}}>
          <img src={features[idx].img} alt={features[idx].title} className="w-[120px] h-[68px] rounded-2xl object-cover bg-[#222] border border-white/10 shadow-md" />
          <div className="flex flex-col flex-1 min-w-0 items-center md:items-start">
            <span className="text-blue-400 text-sm font-medium mb-1 tracking-widest uppercase">Technologies</span>
            <span className="text-white text-2xl font-bold leading-tight mb-1 text-center md:text-left">{features[idx].title}</span>
            <span className="text-white/80 text-base mt-1 mb-1 text-center md:text-left" style={{maxWidth:'370px'}}>{features[idx].desc}</span>
          </div>
        </div>
        <button
          aria-label="Next feature"
          className="absolute right-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-black/40 hover:bg-white/10 border border-white/10 shadow-lg transition-all translate-x-1/2"
          onClick={next}
          style={{top:'50%',transform:'translateY(-50%) translateX(50%)'}}
        >
          <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2"><path d="M8 5l6 6-6 6"/></svg>
        </button>
      </div>
      {/* Pagination dots */}
      <div className="flex gap-2 mt-5">
        {features.map((_, i) => (
          <span key={i} className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === idx ? 'bg-white/90 scale-110' : 'bg-white/30'}`}></span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-bg space-bg star-bg min-h-screen text-white font-sans relative overflow-x-hidden flex flex-col">
      {/* HEADER Gameforge Gemini-style */}
      <header className="w-full flex items-center justify-between px-12 pt-7 pb-3 z-30 backdrop-blur-md bg-black/40 border-b border-white/10 sticky top-0">
        <div className="flex items-center gap-8">
          {/* Gameforge Logo */}
          <span className="flex items-center gap-3 select-none">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><circle cx="19" cy="19" r="19" fill="#2563eb"/><text x="50%" y="53%" textAnchor="middle" fill="#fff" fontSize="15" fontFamily="Arial" dy=".3em">GF</text></svg>
            <span className="text-white text-xl font-bold tracking-widest">GAMEFORGE</span>
          </span>
        </div>
        <nav className="flex gap-10 text-[17px] font-medium mx-auto">
          <a href="#home" className="px-3 py-1 rounded transition hover:bg-white/10">Home</a>
          <a href="#technologies" className="px-3 py-1 rounded transition hover:bg-white/10">Technologies</a>
          <a href="#community" className="px-3 py-1 rounded transition hover:bg-white/10">Community</a>
          <a href="#support" className="px-3 py-1 rounded transition hover:bg-white/10">Support</a>
        </nav>
        <div className="flex items-center gap-3">
          {/* Search */}
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all">
            <svg width="18" height="18" fill="none" viewBox="0 0 20 20" stroke="white" strokeWidth="2"><circle cx="9" cy="9" r="7"/><path d="M15.5 15.5L18 18"/></svg>
          </button>
          {/* Star */}
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2"><path d="M12 3l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01z"/></svg>
          </button>
        </div>
      </header>

      {/* HERO Gemini */}
      <main className="flex-1 flex flex-col items-center justify-center text-center relative z-10 pb-0">
        <div className="pt-24 pb-10 w-full flex flex-col items-center justify-center">
          <h1 className="font-extrabold text-white mx-auto text-center" style={{fontSize:'clamp(3.5rem,10vw,5.2rem)', letterSpacing:'-0.01em', lineHeight:'1.07', maxWidth:'900px'}}>Unleash Intelligence.<br/>Forge the Future.</h1>
          <p className="mt-7 mb-14 text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light tracking-wide" style={{fontWeight:400, maxWidth:'560px'}}>Explore and create <span className="text-blue-400 font-semibold">infinite worlds</span> in the <span className="text-white font-bold">NEXUS</span>.</p>
          <div className="w-full flex flex-row gap-6 justify-center items-center mt-2">
            <a href="#" className="gem-btn gem-btn-primary">Play Now</a>
            <a href="#" className="gem-btn gem-btn-secondary">Watch Demo</a>
          </div>
        </div>
        {/* Gameforge Feature Carousel */}
        <FeatureCarousel />
      </main>

      {/* FOOTER Gemini */}
      <footer className="w-full flex flex-col items-center justify-center py-8 mt-auto text-white/70 text-sm border-t border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mb-2">© {new Date().getFullYear()} Google DeepMind. All rights reserved.</div>
        <div className="flex gap-6 mt-1">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
        </div>
      </footer>
    </div>
  );
}
