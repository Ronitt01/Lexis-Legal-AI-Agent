import { Upload, HelpCircle, FileCheck, Shield, CheckCircle2, Cpu, Eye, Lock, ArrowRight, Layers } from "lucide-react";
import { motion } from "motion/react";

interface FeaturesSectionProps {
  setView: (view: 'landing' | 'app') => void;
}

export default function FeaturesSection({ setView }: FeaturesSectionProps) {
  const steps = [
    {
      num: "01",
      title: "Upload Contracts.",
      desc: "Drag and drop any standard PDF, legal TXT or MD contract text directly into your secure workspace browser stack instantly.",
      icon: <Upload className="w-5 h-5 text-purple-400" />
    },
    {
      num: "02",
      title: "Ask In Plain English.",
      desc: "Query liability limits, non-compete periods, or indemnification guidelines without writing custom legal Boolean expressions.",
      icon: <HelpCircle className="w-5 h-5 text-blue-400" />
    },
    {
      num: "03",
      title: "Get Verified Answers.",
      desc: "Receive clean summaries backed instantly by highlighted verbatim citation quotes. Click to view exactly where they reside.",
      icon: <FileCheck className="w-5 h-5 text-emerald-400" />
    }
  ];

  const features = [
    {
      title: "Hallucination Protection",
      desc: "Strictly grounds analysis vectors exclusively in your target document. No general web extrapolation, guaranteed.",
      icon: <Shield className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Tactile Source Citations",
      desc: "Our source panel maps exact quotes to specific pages. Click on any citation reference to scroll directly to the sentence.",
      icon: <CheckCircle2 className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Confidence Scoring",
      desc: "Calculates mathematical verification confidence metrics for every paragraph output, illustrating certainty levels.",
      icon: <Cpu className="w-6 h-6 text-emerald-400 text-glow" />
    },
    {
      title: "Comprehensive Audit Trail",
      desc: "Audit the precise legal lineage showing how sentences are constructed. Perfect for compliance records.",
      icon: <Eye className="w-6 h-6 text-indigo-400" />
    },
    {
      title: "Enterprise Grade Security",
      desc: "AES-256 data rest encryption, SOC2 isolation, and private ephemeral instances. Your text never feeds generic standard models.",
      icon: <Lock className="w-6 h-6 text-pink-400" />
    }
  ];

  return (
    <div className="bg-[#080812] relative overflow-hidden">
      
      {/* 1. HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="absolute top-10 right-1/3 w-[300px] h-[300px] glow-blur-purple pointer-events-none" />
        
        <div className="text-center mb-20">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">Three Steps to Truth</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mt-2">
            Accelerate Diligence. Minimize Exposure.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white/[0.01] border border-white/5 p-8 rounded-2xl flex flex-col justify-between relative group hover:border-purple-500/35 transition-all"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-4xl text-white/10 leading-none group-hover:text-purple-400/20 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mt-6">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-3">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. TRUST / FEATURES SECTION */}
      <section id="security" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] glow-blur-blue pointer-events-none" />
        
        <div className="text-center mb-20">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">Rigorous Protocols</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mt-2">
            Built For Legal Accuracy.
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-lg mx-auto">
            Engineered exclusively with deterministic grounding guardrails to eliminate typical generative hallucinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:border-blue-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 mb-6">
                  {feat.icon}
                </div>
                <h3 className="font-display font-semibold text-base text-white">
                  {feat.title}
                </h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Special CTA Feature Card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-tr from-purple-900/40 to-blue-900/30 p-6 rounded-2xl border border-purple-500/20 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 mb-6">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-semibold text-base text-white">
                Ready to Experience LexisAI?
              </h3>
              <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                Connect your documents instantly and test questions in Sandbox Mode with zero risk or setup friction.
              </p>
            </div>
            <button
              onClick={() => setView('app')}
              className="mt-6 flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-white transition-colors cursor-pointer group"
            >
              <span>Launch Sandbox Workspace</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 3. PRODUCT SHOWCASE SECTION (Premium MacBook CSS Model) */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold font-semibold">User Experience</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mt-2">
            The Ultimate Legal Workspace
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-md mx-auto">
            High Density. Distraction Free. A premium interface designed alongside corporate attorneys.
          </p>
        </div>

        {/* MacBook Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Ambient Glow behind MacBook */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-[90px] pointer-events-none" />

          {/* Screen Shell */}
          <div className="bg-[#121214] rounded-2xl border-[5px] border-[#2e2e30] shadow-2xl overflow-hidden aspect-[16/10] relative">
            
            {/* Camera dot */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-900 z-20" />

            {/* Simulated UI Content */}
            <div className="w-full h-full text-white overflow-hidden flex flex-col text-[10px] bg-[#080812]">
              
              {/* Fake Menu bar */}
              <div className="bg-[#0d0d16] border-b border-white/5 px-4 py-2.5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/50 block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50 block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/50 block"></span>
                  </div>
                  <span className="text-[#64748b] ml-1.5 text-[8px] font-mono select-none">⚖ LexisAI — Active Workspace</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] bg-purple-500/10 px-2 py-0.5 rounded text-purple-400 font-mono tracking-wide uppercase">Confidence High</span>
                </div>
              </div>

              {/* Main Workspace split */}
              <div className="flex-1 overflow-hidden flex">
                
                {/* Fake Left Sidebar (25%) */}
                <div className="w-1/4 border-r border-white/5 bg-[#0b0b14] p-3 flex flex-col gap-3 justify-between shrink-0">
                  <div className="flex flex-col gap-2.5">
                    <span className="text-[7px] text-slate-500 font-mono uppercase tracking-wider block">CONTRACT FILES</span>
                    <div className="bg-purple-950/20 border border-purple-500/30 rounded p-1.5 flex items-center gap-1.5 text-slate-200">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span className="truncate leading-none">Mutual_NDA_Acme.txt</span>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 rounded p-1.5 flex items-center gap-1.5 text-slate-500">
                      <div className="w-1.5 h-1.5 bg-slate-700 rounded-full"></div>
                      <span className="truncate leading-none">SaaS_Tier_V_SLA.txt</span>
                    </div>
                  </div>
                  
                  {/* Fake micro profile */}
                  <div className="border-t border-white/5 pt-2 flex items-center gap-2 text-slate-400">
                    <div className="w-4 h-4 bg-purple-600 rounded text-[8px] flex items-center justify-center font-bold text-white">S</div>
                    <span className="truncate">Sarah J. (CLO)</span>
                  </div>
                </div>

                {/* Fake Center Area (45%) */}
                <div className="w-5/12 p-3 flex flex-col justify-between gap-3 border-r border-white/5">
                  <div className="flex flex-col gap-3">
                    <span className="text-[7px] text-slate-500 font-mono uppercase tracking-wider">ACTIVE INQUIRY</span>
                    
                    <div className="bg-[#12122b] border border-white/10 rounded-lg p-2">
                      <p className="text-slate-300 select-none">What are the consequences of late termination requests?</p>
                    </div>

                    <div className="bg-[#0c0c16] rounded-lg p-2.5 border border-white/5 flex flex-col gap-2">
                      <span className="text-[7px] text-purple-400 font-mono">LEXISAI LOGS</span>
                      <p className="text-slate-400 text-[8px] leading-relaxed">
                        Either party can terminate with a 30-day prior written document. Standard confidentiality parameters survive for an additional three (3) years post termination...
                      </p>
                    </div>
                  </div>

                  {/* Prompt entry */}
                  <div className="bg-white/[0.02] border border-white/10 rounded-lg p-2 flex items-center justify-between">
                    <span className="text-slate-500">Enter query...</span>
                    <span className="bg-purple-500 p-1 rounded text-white text-[8px]">ASK</span>
                  </div>
                </div>

                {/* Fake Right Citation panel (30%) */}
                <div className="w-1/3 bg-[#0c0c1b] p-3 flex flex-col gap-2 overflow-y-auto">
                  <span className="text-[7px] text-slate-500 font-mono uppercase tracking-wider">CITATION EVIDENCE [PAGE 12]</span>
                  <div className="bg-[#1a1333] border border-purple-500/20 p-2 rounded">
                    <span className="text-[7px] text-purple-300 font-mono font-bold uppercase block mb-1">SECTION 5 — SURVIVAL</span>
                    <p className="text-purple-200 text-[8.5px] italic leading-normal">
                      "...obligations of confidentiality hereunder shall survive for a period of three (3) years following the termination or expiration..."
                    </p>
                  </div>
                  <div className="bg-emerald-900/10 border border-emerald-500/10 p-2 rounded">
                    <span className="text-emerald-400 text-[6.5px] font-mono uppercase font-bold block mb-0.5">VERIFIED</span>
                    <span className="text-[#8ca2b0] text-[8px] leading-relaxed block">Correlated with Paragraph 5.2 (Term & Expiry limits).</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* MacBook Keyboard/Base reflection */}
          <div className="bg-[#242426] h-3 w-[106%] -ml-[3%] rounded-b-xl relative z-10 border-t border-white/15">
            <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-16 h-1 rounded-sm bg-slate-900" />
          </div>
        </div>

        {/* Button to let people jump in directly */}
        <div className="text-center mt-12">
          <button
            onClick={() => setView('app')}
            className="px-6 py-3.5 rounded-lg bg-white text-black hover:bg-slate-200 font-medium text-sm flex items-center gap-2 mx-auto cursor-pointer"
            id="showcase-cta"
          >
            <span>Launch Active Document Workspace Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
