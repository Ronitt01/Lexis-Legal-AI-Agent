import React from "react";
import { FileText, Play, BadgeAlert, ArrowUpRight, Check, Hash, AlertCircle, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SampleQuestion {
  text: string;
  answer: string;
  citation: string;
  page: number;
}

const DEMO_CONTRACTS = [
  {
    id: "nda",
    name: "Mutual_NDA_Standard.pdf",
    type: "NDA",
    content: `5. TERM AND TERMINATION. This Agreement shall remain in effect for a period of five (5) years from the Effective Date, provided that either party may terminate this Agreement immediately upon written notice of thirty (30) days. The obligations of confidentiality hereunder shall survive for a period of three (3) years following...`,
    questions: [
      {
        text: "What is the termination clause?",
        answer: "This agreement persists for five (5) years. Either party is permitted to terminate the contract in advance by issuing a written notice thirty (30) days prior.",
        citation: "provided that either party may terminate this Agreement immediately upon written notice of thirty (30) days.",
        page: 5
      },
      {
        text: "Which state's governing law applies?",
        answer: "The agreement is governed solely by the legislation and standard codes of the State of New York, utilizing exclusive binding arbitration under AAA rules.",
        citation: "This Agreement shall be governed by, and construed in accordance with, the laws of the State of New York...",
        page: 7
      }
    ]
  },
  {
    id: "sla",
    name: "SaaS_Service_Level_Agreement.pdf",
    type: "SLA",
    content: `3. SERVICE CREDITS. If Availability falls below 99.9% in some month, Customer gets a Service Credit. Monthly Uptime between 99.0% and 99.9%: standard credit equal to 10% of monthly platform rate. Monthly Uptime below 99.0%: credit equal to 25% of platform rate...`,
    questions: [
      {
        text: "What are the uptime credit metrics?",
        answer: "If monthly system service availability levels dip below 99.9%, customers claim a 10% credit. If availability falls below 99.0%, the credit increases to 25%.",
        citation: "Monthly Uptime between 99.0% and 99.9%: standard credit equal to 10% of monthly platform rate.",
        page: 3
      },
      {
        text: "How quickly must we report a claim?",
        answer: "The client must submit a written support ticket claiming credits within fifteen (15) service business days after the close of the corresponding month.",
        citation: "To claim a Service Credit, Customer must file a written ticket within fifteen (15) business daysafter the end of the month...",
        page: 3
      }
    ]
  },
  {
    id: "employment",
    name: "Executive_Employment_ Sarah_Jenkins.pdf",
    type: "Employment",
    content: `2. BASE COMPENSATION. Executive receives $280,000 base salary annually, payable half-monthly. Executive is eligible for a discretionary performance bonus up to 40% based on Compensation Committee targets. Severance: 6 months salary if terminated without Cause...`,
    questions: [
      {
        text: "What is the base salary and bonus?",
        answer: "Sarah Jenkins is awarded a steady annual base salary of $280,000. She remains eligible for an annual performance bonus of up to 40% based on Board Compensation metrics.",
        citation: "Executive receives $280,000 base salary annually... eligible for a discretionary performance bonus up to 40%",
        page: 2
      },
      {
        text: "What severance is due without Cause?",
        answer: "If terminated without Cause, she is entitled to six (6) full months of base salary paid out, plus continuing COBRA health support, and options state acceleration for 90 days.",
        citation: "In the event of termination without Cause... Executive is entitled to a lump-sum severance payment equal to six (6) months of base salary",
        page: 4
      }
    ]
  }
];

export default function InteractiveDemo() {
  const [activeDoc, setActiveDoc] = React.useState(DEMO_CONTRACTS[0]);
  const [selectedQuestion, setSelectedQuestion] = React.useState<SampleQuestion>(DEMO_CONTRACTS[0].questions[0]);
  const [isAnalyzing, setIsAnalyzing] = React.useState(false);
  const [analysisText, setAnalysisText] = React.useState(selectedQuestion.answer);
  const [citedText, setCitedText] = React.useState(selectedQuestion.citation);
  const [citedPage, setCitedPage] = React.useState(selectedQuestion.page);
  const [simStep, setSimStep] = React.useState("");

  const handleSelectDoc = (doc: typeof DEMO_CONTRACTS[0]) => {
    setActiveDoc(doc);
    handleSelectQuestion(doc.questions[0]);
  };

  const handleSelectQuestion = (q: SampleQuestion) => {
    setSelectedQuestion(q);
    setIsAnalyzing(true);
    setSimStep("Loading legal vector index...");
    
    setTimeout(() => {
      setSimStep("Scanning pages for relevant legal code...");
      setTimeout(() => {
        setSimStep("Cross-referencing citations & evaluating truth score...");
        setTimeout(() => {
          setIsAnalyzing(false);
          setAnalysisText(q.answer);
          setCitedText(q.citation);
          setCitedPage(q.page);
          setSimStep("");
        }, 600);
      }, 500);
    }, 450);
  };

  return (
    <section id="demo" className="py-24 px-6 bg-[#0a0a18] border-y border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#1d0e37,transparent_50%)] opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Witness Hallucination-Free Auditing
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Click on a sample legal brief below, toggle common inquiry templates, and watch real-time source pinning work.
          </p>
        </div>

        {/* Dashboard Frame Container */}
        <div className="bg-[#101026] rounded-2xl border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto min-h-[580px]">
          
          {/* LEFT: File Selection & Text Viewport (45%) */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10 p-6 flex flex-col justify-between bg-[#0d0d21]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase font-mono tracking-wider text-purple-400 font-bold">1. Document Vault</span>
                <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono uppercase font-bold">Local Cache Only</span>
              </div>

              {/* Upload Drag PDF Simulator box */}
              <div className="border border-dashed border-white/10 hover:border-purple-500/50 transition-colors rounded-xl p-4 text-center cursor-pointer mb-6 bg-white/[0.01]">
                <FileText className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                <span className="text-xs font-semibold text-slate-300 block">Drag & Drop Contracts Here</span>
                <span className="text-[10px] text-slate-500 block mt-1">Accepts PDF, TXT, MD up to 40MB</span>
              </div>

              <span className="text-[11px] uppercase font-mono text-slate-500 tracking-wider block mb-3">Or choose preset contract:</span>

              {/* Preset Contract Selectors */}
              <div className="flex flex-col gap-2.5">
                {DEMO_CONTRACTS.map((doc) => {
                  const isSelected = activeDoc.id === doc.id;
                  return (
                    <button
                      key={doc.id}
                      onClick={() => handleSelectDoc(doc)}
                      className={`flex items-start gap-3 text-left p-3 rounded-lg border transition-all cursor-pointer ${
                        isSelected 
                          ? "bg-purple-600/15 border-purple-500/60 text-white" 
                          : "bg-white/[0.02] border-white/5 text-slate-400 hover:bg-white/[0.04] hover:text-white"
                      }`}
                      id={`demo-doc-${doc.id}`}
                    >
                      <FileText className={`w-5 h-5 shrink-0 mt-0.5 ${isSelected ? 'text-purple-400' : 'text-slate-500'}`} />
                      <div className="overflow-hidden">
                        <div className="text-xs font-semibold tracking-tight truncate">{doc.name}</div>
                        <div className="text-[10px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                          <span className="bg-white/5 border border-white/10 px-1 py-0.2 rounded shrink-0">{doc.type}</span>
                          <span>Page citation supported</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Document preview snippet box */}
            <div className="mt-8 border-t border-white/5 pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-mono text-slate-500">Document Text Segment</span>
                <span className="text-[9px] text-purple-400 font-mono">Page {citedPage}</span>
              </div>
              <div className="bg-[#0b0b1a] p-3 rounded border border-white/5 text-[11px] text-slate-400 leading-relaxed font-mono relative overflow-hidden max-h-32">
                <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#0b0b1a] to-transparent pointer-events-none" />
                <span className="text-white bg-purple-500/20 px-1 py-0.5 rounded border border-purple-500/40 font-semibold">{activeDoc.content.slice(0, 50)}</span>
                {activeDoc.content.slice(50)}
              </div>
            </div>
          </div>

          {/* RIGHT: Grounded Question and Answer Viewport (55%) */}
          <div className="lg:col-span-7 p-6 flex flex-col justify-between bg-[#11112b]">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                <span className="text-xs uppercase font-mono tracking-wider text-blue-500 font-bold">2. Verified Inference</span>
                <div className="flex items-center gap-1 bg-blue-500/10 border border-blue-500/20 text-[10px] px-2 py-0.5 rounded text-blue-400 font-mono uppercase font-bold">
                  <span>Accuracy Secured</span>
                </div>
              </div>

              {/* Sample Questions Selector Box */}
              <div className="mb-6">
                <label className="text-[10px] uppercase font-mono text-slate-400 block mb-2 font-bold">Prompt Presets (Click to Ask):</label>
                <div className="flex flex-col gap-2">
                  {activeDoc.questions.map((q, idx) => {
                    const isSelected = selectedQuestion.text === q.text;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectQuestion(q)}
                        className={`text-left text-xs px-3 py-2 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                          isSelected 
                            ? "bg-blue-600/10 border-blue-500/50 text-blue-300 font-medium" 
                            : "bg-white/[0.01] border-white/5 text-slate-400 hover:bg-white/[0.03] hover:text-slate-200"
                        }`}
                        id={`demo-q-${idx}`}
                      >
                        <span className="truncate">{q.text}</span>
                        <Play className={`w-3 h-3 ${isSelected ? 'text-blue-400 fill-blue-500/30' : 'text-slate-500'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Conversation Response area */}
              <div className="bg-[#080816] rounded-xl p-4 border border-white/5 min-h-[190px] relative">
                <AnimatePresence mode="wait">
                  {isAnalyzing ? (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[#080816]/90 rounded-xl"
                    >
                      <RefreshCw className="w-8 h-8 text-purple-500 animate-spin mb-3" />
                      <span className="text-xs text-purple-400 font-mono tracking-wide animate-pulse text-center">{simStep}</span>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                {/* Question */}
                <div className="flex items-start gap-2.5 mb-4">
                  <div className="w-5 h-5 rounded bg-blue-500/20 text-blue-400 text-[10px] font-mono flex items-center justify-center font-bold">👤</div>
                  <div>
                    <h4 className="text-slate-500 text-[10px] font-mono leading-none">LEXISAI INQUIRY</h4>
                    <p className="text-slate-200 text-xs mt-1 font-semibold">{selectedQuestion.text}</p>
                  </div>
                </div>

                {/* Answer */}
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-purple-500/20 text-purple-400 text-[10px] font-mono flex items-center justify-center font-bold">⚖</div>
                  <div className="flex-1">
                    <h4 className="text-purple-400 text-[10px] font-mono leading-none font-bold">VERIFIED LAW MODEL RESPONSE</h4>
                    <p className="text-slate-200 text-xs mt-1.5 leading-relaxed pr-10">
                      {analysisText}
                    </p>

                    {/* Source Evidence block */}
                    <div className="mt-4 bg-white text-neutral-900 rounded-lg p-3.5 shadow-inner relative overflow-hidden font-serif border border-neutral-200">
                      <div className="absolute top-0 right-0 p-1 px-1.5 text-[8px] tracking-wider text-purple-600 font-sans font-bold bg-purple-50 border-l border-b border-purple-100 rounded-bl uppercase">
                        VERIFIED PROOF
                      </div>
                      <div className="flex items-center gap-1.5 text-neutral-450 text-[9px] font-sans mb-2 font-bold uppercase tracking-wider">
                        <Hash className="w-3 h-3 text-purple-500 shrink-0" />
                        <span>Source Citation [Page {citedPage}]</span>
                        <span className="text-emerald-600 border border-emerald-200 bg-emerald-50 px-1 py-0.2 rounded text-[8px]">100% matched</span>
                      </div>
                      <p className="text-[11px] text-neutral-800 italic leading-relaxed bg-neutral-50 p-2.5 rounded border border-neutral-100">
                        "{citedText}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Confidence metric bubble */}
                <div className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                  <span>CONFIDENCE: 98%</span>
                </div>
              </div>
            </div>

            {/* Micro value badge explaining why we differ from general chat */}
            <div className="mt-6 flex items-center gap-2 bg-purple-500/5 border border-purple-500/10 p-3 rounded-lg text-xs text-slate-400">
              <AlertCircle className="w-5 h-5 text-purple-400 shrink-0" />
              <span>
                Unlike standard chatbots which hallucinate answer clauses, LexisAI uses strict <strong>citation-anchored semantic correlation</strong> to prove every statement.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
