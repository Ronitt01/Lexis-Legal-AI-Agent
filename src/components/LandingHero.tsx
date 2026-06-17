import { ArrowRight, Play, CheckCircle, Star } from "lucide-react";
import { motion } from "motion/react";

interface LandingHeroProps {
  setView: (view: 'landing' | 'app') => void;
  onScrollToDemo: () => void;
}

export default function LandingHero({ setView, onScrollToDemo }: LandingHeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 overflow-hidden grid-bg">
      {/* Background Ambient Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] glow-blur-purple -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] glow-blur-blue translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Decorative Accent Badges */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full text-xs text-purple-300 font-mono"
        id="hero-badge"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
        <span>Version 2.0 Live — Driven by Gemini 3.5 AI Core</span>
      </motion.div>

      {/* Giant Display Headline */}
      <h1 className="max-w-5xl mx-auto text-center font-display font-bold text-4xl sm:text-5xl md:text-[68px] leading-tight text-white tracking-tight" id="hero-headline">
        Stop Reading 300-Page Contracts. <br />
        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-white bg-clip-text text-transparent">
          Get Verified Answers In Seconds.
        </span>
      </h1>

      {/* Structured Subheadline */}
      <p className="max-w-2xl mx-auto text-center mt-6 text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed" id="hero-subheadline">
        Upload legal documents and ask questions in plain English. <br />
        Every answer is backed by source citations. <br />
        <span className="text-white font-medium">No hallucinations. No guessing.</span>
      </p>

      {/* Main Form Call to Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 z-10">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setView('app')}
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium shadow-xl shadow-purple-500/20 flex items-center justify-center gap-2 cursor-pointer border border-purple-400/20"
          id="hero-cta-try"
        >
          <span>Try It Free</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onScrollToDemo}
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors"
          id="hero-cta-demo"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Interactive Demo</span>
        </motion.button>
      </div>

      {/* Trust Marks & Enterprise Validation */}
      <div className="mt-20 text-center z-10">
        <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">
          Trusted by top legal teams, startups & compliance officers
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mt-5 text-slate-400 font-display text-sm font-semibold opacity-75">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-purple-400 fill-purple-400" />
            <span>ALEXANDRIA LEGAL</span>
          </div>
          <span className="text-white/10 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-xs tracking-tighter bg-white/10 px-2 py-0.5 rounded text-white font-bold">V</span>
            <span>VENTURE CAPITAL PARNERS</span>
          </div>
          <span className="text-white/10 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-blue-400" />
            <span>Acme Global Compliance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
