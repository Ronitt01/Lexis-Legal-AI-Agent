import React from "react";
import { Scale, ArrowRight, ShieldCheck, Globe, Menu, X } from "lucide-react";
import { motion } from "motion/react";

interface NavbarProps {
  currentView: 'landing' | 'app';
  setView: (view: 'landing' | 'app') => void;
  onScrollTo: (sectionId: string) => void;
}

export default function Navbar({ currentView, setView, onScrollTo }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080812]/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => setView('landing')}
          className="flex items-center gap-3 cursor-pointer group"
          id="nav-logo"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
            <Scale className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              LexisAI
            </span>
            <div className="text-[10px] text-purple-400 font-mono tracking-widest leading-none uppercase">
              Legal Intel
            </div>
          </div>
        </div>

        {/* Center Page Navs (Only applicable on Landing page) */}
        {currentView === 'landing' ? (
          <div className="hidden md:flex items-center gap-8 text-sm">
            <button 
              onClick={() => onScrollTo('hero')} 
              className="text-slate-400 hover:text-white hover:scale-105 transition-all cursor-pointer font-medium"
              id="nav-link-features"
            >
              Overview
            </button>
            <button 
              onClick={() => onScrollTo('demo')} 
              className="text-slate-400 hover:text-white hover:scale-105 transition-all cursor-pointer font-medium"
              id="nav-link-demo"
            >
              Live Playground
            </button>
            <button 
              onClick={() => onScrollTo('how-it-works')} 
              className="text-slate-400 hover:text-white hover:scale-105 transition-all cursor-pointer font-medium"
              id="nav-link-how"
            >
              How It Works
            </button>
            <button 
              onClick={() => onScrollTo('security')} 
              className="text-slate-400 hover:text-white hover:scale-105 transition-all cursor-pointer font-medium"
              id="nav-link-security"
            >
              Security
            </button>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-2 text-xs bg-white/5 px-3 py-1.5 rounded-full border border-white/5 text-slate-300 font-mono">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>Sandbox Mode Enabled — No Account Required</span>
          </div>
        )}

        {/* CTA Elements */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setView('landing')}
            className={`text-sm px-4 py-2 font-medium transition-colors cursor-pointer ${
              currentView === 'landing' ? 'text-slate-400 hover:text-white' : 'text-slate-300 hover:text-white bg-white/5 border border-white/10 rounded-lg'
            }`}
            id="nav-btn-home"
          >
            {currentView === 'landing' ? 'Features' : 'Back to Home'}
          </button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setView('app')}
            className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-5 py-2.5 rounded-lg shadow-lg shadow-purple-500/10 flex items-center gap-2 cursor-pointer transition-all border border-purple-500/20"
            id="nav-btn-action"
          >
            <span>{currentView === 'app' ? 'Active Workspace' : 'Try Free'}</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          id="nav-mobile-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-[#0c0c1b] border-b border-white/10 py-6 px-6 flex flex-col gap-4 shadow-xl"
        >
          {currentView === 'landing' && (
            <>
              <button 
                onClick={() => { onScrollTo('hero'); setMobileMenuOpen(false); }}
                className="text-left text-slate-300 hover:text-white text-base py-2 font-medium"
              >
                Overview
              </button>
              <button 
                onClick={() => { onScrollTo('demo'); setMobileMenuOpen(false); }}
                className="text-left text-slate-300 hover:text-white text-base py-2 font-medium"
              >
                Live Playground
              </button>
              <button 
                onClick={() => { onScrollTo('how-it-works'); setMobileMenuOpen(false); }}
                className="text-left text-slate-300 hover:text-white text-base py-2 font-medium"
              >
                How It Works
              </button>
              <button 
                onClick={() => { onScrollTo('security'); setMobileMenuOpen(false); }}
                className="text-left text-slate-300 hover:text-white text-base py-2 font-medium"
              >
                Security
              </button>
            </>
          )}

          <div className="h-px bg-white/5 my-2"></div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={() => { setView('landing'); setMobileMenuOpen(false); }}
              className="w-full text-center text-sm text-slate-400 hover:text-white py-2.5 font-medium border border-white/5 rounded-lg bg-white/5"
            >
              Back to Home
            </button>
            <button 
              onClick={() => { setView('app'); setMobileMenuOpen(false); }}
              className="w-full text-center text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Launch App</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
