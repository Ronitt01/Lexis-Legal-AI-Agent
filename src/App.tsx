import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LandingHero from "./components/LandingHero";
import InteractiveDemo from "./components/InteractiveDemo";
import FeaturesSection from "./components/FeaturesSection";
import AppWorkspace from "./components/AppWorkspace";

export default function App() {
  // Simple state machine supporting friction-free user walkthroughs
  const [currentView, setView] = useState<'landing' | 'app'>('landing');

  // Smooth scroll helper for landing section anchors
  const handleScrollToSection = (sectionId: string) => {
    setView('landing');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#080812] text-white selection:bg-purple-500/30 selection:text-white">
      {/* Universal Top Navigation */}
      <Navbar 
        currentView={currentView} 
        setView={setView} 
        onScrollTo={handleScrollToSection} 
      />

      {/* Main View Portals */}
      {currentView === 'landing' ? (
        <div id="landing-portal">
          {/* Full Screen High Impact Hero */}
          <LandingHero 
            setView={setView} 
            onScrollToDemo={() => handleScrollToSection('demo')} 
          />

          {/* Interactive Live Grounding Sandbox on Landing page */}
          <InteractiveDemo />

          {/* Product showcase, How it Works & Trust features */}
          <FeaturesSection setView={setView} />

          {/* Elegant SaaS Footer */}
          <footer className="bg-[#040409] border-t border-white/5 py-16 px-6 text-center text-slate-500 select-none">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base text-white">⚖ LexisAI</span>
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded font-mono uppercase text-slate-400">SOC2 Certified</span>
              </div>
              <div className="text-xs">
                © 2026 LexisAI Corp. All rights reserved. Built for accuracy.
              </div>
              <div className="flex gap-6 text-xs font-semibold text-slate-400">
                <a href="#hero" className="hover:text-white">Terms</a>
                <a href="#hero" className="hover:text-white">Privacy</a>
                <a href="#hero" className="hover:text-white">SOC3 Audit</a>
              </div>
            </div>
          </footer>
        </div>
      ) : (
        /* The Actual Contract Workspace Application */
        <div id="app-portal">
          <AppWorkspace />
        </div>
      )}
    </div>
  );
}
