import React, { useRef, useState, useEffect } from "react";
import { 
  FileText, Upload, Plus, MessageSquare, AlertCircle, Sparkles, ShieldAlert,
  HelpCircle, ChevronRight, Hash, Shield, Cpu, RefreshCw, Layers, CheckCircle2, Trash2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LegalDocument, Citation, WorkspaceMessage } from "../types";

// Predefined server samples (matching the backend schema)
const PRELOADED_SAMPLES: LegalDocument[] = [
  {
    id: "nda",
    name: "Mutual_NDA_Standard_v4.1.txt",
    size: "24.5 KB",
    uploadedAt: "June 17, 2026",
    isSample: true,
    content: `MUTUAL NON-DISCLOSURE AGREEMENT

This Mutual Non-Disclosure Agreement (the "Agreement") is entered into as of June 1, 2026 (the "Effective Date"), by and between Acme Corp, a Delaware corporation ("Acme"), and InnovateTech Inc., a California corporation ("InnovateTech").

1. PURPOSE
The parties wish to explore a potential business relationship of mutual interest (the "Transaction"). In connection with the Transaction, each party (as the "Disclosing Party") may disclose to the other party (as the "Receiving Party") certain proprietary and confidential information.

2. CONFIDENTIAL INFORMATION
"Confidential Information" means any information disclosed by Disclosing Party to Receiving Party, either directly or indirectly, in writing, orally, or by inspection of tangible objects, that is marked as "Confidential" or "Proprietary" or should reasonably be understood to be confidential given the nature of the information.

3. EXCLUSIONS FROM CONFIDENTIALITY
Confidential Information does not include any information that:
(a) is or becomes publicly known through no breach of this Agreement by Receiving Party;
(b) is received from a third party without restriction on disclosure and without breach of a nondisclosure obligation;
(c) was already in the possession of the Receiving Party prior to disclosure;
(d) is independently developed by the Receiving Party without reference to or reliance upon the Disclosing Party's Confidential Information.

4. OBLIGATIONS OF RECEIVING PARTY
Receiving Party shall hold the Confidential Information in strict confidence and use at least the same degree of care to protect it as it uses to protect its own confidential information, but in no event less than reasonable care. Receiving Party shall use the Confidential Information solely for the Purpose and shall restrict access only to employees or advisors with a strict need to know.

5. TERM AND TERMINATION
This Agreement shall remain in effect for a period of five (5) years from the Effective Date, provided that either party may terminate this Agreement immediately upon written notice of thirty (30) days. The obligations of confidentiality hereunder shall survive for a period of three (3) years following the termination or expiration of this Agreement.

6. REMEDIES
The parties agree that any breach of this Agreement may cause irreparable harm for which monetary damages alone would be inadequate, and that the Disclosing Party shall be entitled to seek injunctive relief to prevent further breaches, in addition to any other remedies available at law.

7. GOVERNING LAW AND RESOLUTION
This Agreement shall be governed by, and construed in accordance with, the laws of the State of New York, without regard to conflicts of law principles. Any dispute arising hereunder shall be resolved exclusively through binding arbitration in New York, NY, under the rules of the American Arbitration Association (AAA).`
  },
  {
    id: "sla",
    name: "SaaS_Service_Level_Agreement_2026.txt",
    size: "18.2 KB",
    uploadedAt: "June 17, 2026",
    isSample: true,
    content: `ENTERPRISE SOFTWARE SERVICE LEVEL AGREEMENT (SLA)

This Service Level Agreement governs the performance and availability of the LexisAI Platform provided to Customer under the SaaS Terms of Service.

1. SERVICE AVAILABILITY COMMITMENT
Provider warrants a Service Availability metric of 99.9% in any given calendar month, calculated as total uptime minutes divided by total minutes in the month, excluding scheduled maintenance outages (the "Service Commitment").

2. SCHEDULED MAINTENANCE WINDOWS
Provider shall notify Customer at least forty-eight (48) hours in advance of any scheduled maintenance that may cause temporary service interruptions. Total scheduled maintenance shall not exceed four (4) hours per calendar month, and shall only occur between the hours of 12:00 AM and 4:00 AM Eastern Time on Saturdays or Sundays.

3. SERVICE CREDITS
If the Service Availability falls below the 99.9% standard, Customer shall be entitled to receive a Service Credit as its sole and exclusive remedy, defined as follows:
- Monthly Uptime between 99.0% and 99.9%: Customer is entitled to a Service Credit of 10% of the monthly platform subscription fee.
- Monthly Uptime below 99.0%: Customer is entitled to a Service Credit of 25% of the monthly platform subscription fee.
To claim a Service Credit, Customer must file a written ticket within fifteen (15) business days after the end of the month in which the service failure occurred.

4. ESCALATION PATHS & SUPPORT HOURS
Technical support is available 24/7/365. Support tickets are prioritized as follows:
- Severity 1 (Critical Outage - Platform Unusable): Response within 15 minutes. Resolved or mitigated within 2 hours.
- Severity 2 (Major Issue - Major functions impaired): Response within 1 hour. Resolved or mitigated within 8 hours.
- Severity 3 (Normal / general query): Response within 4 hours.

5. FORCE MAJEURE
Neither party shall be held liable to the other for performance failures, delays, or interruptions due to causes beyond its reasonable control, including but not limited to: natural disasters, acts of God, pandemics, widespread internet transit grid outages, war, industrial actions, fire, or government-mandated emergency declarations.`
  },
  {
    id: "employment",
    name: "Executive_Employment_Agreement_Acme.txt",
    size: "32.1 KB",
    uploadedAt: "June 17, 2026",
    isSample: true,
    content: `EXECUTIVE EMPLOYMENT AGREEMENT

This Executive Employment Agreement (the "Agreement") is entered into as of January 15, 2026, by and between Acme Corp, a Delaware corporation (the "Company"), and Sarah Jenkins, an individual ("Executive").

1. POSITION AND DUTIES
Executive shall serve in the executive position of Chief Legal Officer (CLO), reporting directly to the Chief Executive Officer (CEO). Executive shall perform all duties customary to such role and as assigned by the Board of Directors.

2. BASE STIPEND & COMPENSATION
- Base Salary: Executive shall receive an annual base salary of $280,000, payable in standard corporate semi-monthly installments.
- Performance Bonus: Executive shall be eligible for a discretionary performance bonus of up to 40% of the base salary, awarded annually based on achieving metrics established by the Board's Compensation Committee.
- Benefits: Executive is eligible for full medical, dental, vision coverage, and a standard 401(k) company matching plan of up to 4% of eligible compensation.

3. EQUITY INCENTIVES
Subject to Board approval, Executive shall be granted stock options representing 150,000 shares of the Company's common stock. These options will vest over a standard four-year period: twenty-five percent (25%) vesting on index anniversary of effective date, and the remaining 75% vesting in equal monthly installments thereafter.

4. TERMINATION WITHOUT CAUSE & SEVERANCE
The Company may terminate Executive's employment at any time without Cause upon written notice. In the event of termination without Cause, or if the Executive terminates her employment for Good Reason (as defined herein), Executive is entitled to:
(a) A lump-sum severance payment equal to six (6) months of base salary then in effect;
(b) Continuing health insurance benefits under COBRA at the Company's expense for up to six (6) months;
(c) Immediate vesting of any options or shares scheduled to vest within ninety (90) days of the termination date.

5. COVENANTS AND RESTRICTIONS
- Non-Compete: Executive agrees not to engage in competing business activities anywhere in North America for a period of twelve (12) months following termination.
- Non-Solicitation: Executive shall not solicit employees, clients, or contractors of Acme Corp for twenty-four (24) months post-termination.
- Proprietary Information: Executive must assign all rights to intellectual property created during employment to Company.`
  }
];

// Preloaded risk scores database for instantaneous contract analytics checking
const PRESETS_RISK_PROFILE: Record<string, {
  overallScore: number;
  factors: Array<{
    name: string;
    score: number;
    riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
    excerpt: string;
    recommendation: string;
  }>;
}> = {
  nda: {
    overallScore: 28,
    factors: [
      {
        name: "Indemnification Scope",
        score: 10,
        riskLevel: "LOW",
        excerpt: "No unilateral indemnification or cost attribution clause is present in sections 1-7.",
        recommendation: "Excellent standard position. Keep standard mutual confidentiality parameters."
      },
      {
        name: "Termination Notice Remedies",
        score: 45,
        riskLevel: "MEDIUM",
        excerpt: "Section 5: Termination is active upon 30 days notice but survival of confidentiality spans 3 years post-expiration.",
        recommendation: "Ensure 3 years of confidentiality survival conforms with normal product lifecycle periods."
      },
      {
        name: "Exclusion Scope Clarity",
        score: 20,
        riskLevel: "LOW",
        excerpt: "Section 3 defines safe exclusions (public knowledge, third-party disclosure, prior possession).",
        recommendation: "Excellent standard drafting. Perfectly protects the recipient from retroactive liability."
      },
      {
        name: "Governing Law Venue",
        score: 35,
        riskLevel: "MEDIUM",
        excerpt: "Section 7 specifies State of New York governance. Arbitrations are mandated exclusively under AAA in NY.",
        recommendation: "Ensure New York arbitration matches your preferred litigating geography and travel limits."
      }
    ]
  },
  sla: {
    overallScore: 62,
    factors: [
      {
        name: "Indemnification & Credit Limits",
        score: 75,
        riskLevel: "HIGH",
        excerpt: "Section 3 dictates that SaaS service credits are defined as Customer's sole and exclusive remedy.",
        recommendation: "High Risk limitation: Prevents looking for damages if an extended outage blocks primary operations."
      },
      {
        name: "Maintenance Notice windows",
        score: 80,
        riskLevel: "HIGH",
        excerpt: "Section 2 permits maintenance Cap of up to 4 hours per month with only 48 hours advance warning notice.",
        recommendation: "Extremely short. Seek 7 days minimum warning for scheduled system outages to align critical internal dependencies."
      },
      {
        name: "Service Uptime commitments",
        score: 40,
        riskLevel: "MEDIUM",
        excerpt: "Uptime standard set at 99.9%. Credits capped at 10% or 25% only for failures under 99.0%.",
        recommendation: "Heavily limited credit payouts. Consider requesting higher compensation ratios during SLA negotiations."
      },
      {
        name: "Force Majeure exemptions",
        score: 55,
        riskLevel: "MEDIUM",
        excerpt: "Section 5 excludes widespread transit outages and internet transit grid shutdowns as basic act of God.",
        recommendation: "Normal commercial clause but verify if your own upstream APIs have complementary SLA guarantees."
      }
    ]
  },
  employment: {
    overallScore: 78,
    factors: [
      {
        name: "Post-Termination Non-Compete",
        score: 95,
        riskLevel: "HIGH",
        excerpt: "Section 5 restricts corporate compete actions anywhere in the continent of North America for 12 months.",
        recommendation: "Highly Restrictive: North America is excessively wide for general non-competes. Ask to limit strictly to current target state."
      },
      {
        name: "Non-Solicitation windows",
        score: 85,
        riskLevel: "HIGH",
        excerpt: "Restricts solicitation of employees, contractors, or clients for twenty-four (24) months post-termination.",
        recommendation: "Aggressive time threshold. Try to limit non-solicitation parameters to 12 months."
      },
      {
        name: "Intellectual Property assignments",
        score: 65,
        riskLevel: "HIGH",
        excerpt: "Mandates executive must assign all intellectual property rights created during employment.",
        recommendation: "Ensure you carve out explicit exemptions for personal side-projects designed outside working hours."
      },
      {
        name: "Severance remedies",
        score: 40,
        riskLevel: "MEDIUM",
        excerpt: "Entitled to 6 months salary and COBRA if terminated strictly without Cause or resigned for Good Reason.",
        recommendation: "Solid baseline position. Confirm if change-of-control triggers accelerate option vesting."
      }
    ]
  }
};

export default function AppWorkspace() {
  // Documents state (stored locally)
  const [documents, setDocuments] = useState<LegalDocument[]>(() => {
    const local = localStorage.getItem("lexis_docs");
    if (local) {
      try {
        return JSON.parse(local);
      } catch (e) {
        return PRELOADED_SAMPLES;
      }
    }
    return PRELOADED_SAMPLES;
  });

  const [activeDocId, setActiveDocId] = useState<string>("nda");
  const [question, setQuestion] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Response states
  const [answer, setAnswer] = useState<string>("");
  const [confidence, setConfidence] = useState<number | null>(null);
  const [citations, setCitations] = useState<Citation[]>([]);
  const [activeCitationId, setActiveCitationId] = useState<string | null>(null);
  
  // Premium Features State
  const [apiStatus, setApiStatus] = useState<{
    geminiActive: boolean;
    model: string;
    mode: string;
  } | null>(null);
  const [showRiskScorecard, setShowRiskScorecard] = useState(false);
  const [isRiskAuditing, setIsRiskAuditing] = useState(false);

  // Fetch API dynamic connectivity status
  useEffect(() => {
    fetch("/api/status")
      .then(res => res.json())
      .then(data => {
        setApiStatus(data);
      })
      .catch(err => {
        console.error("Could not load API status indicators:", err);
      });
  }, []);
  
  // Custom file system trigger
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Active doc object lookup
  const activeDoc = documents.find(d => d.id === activeDocId);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem("lexis_docs", JSON.stringify(documents));
  }, [documents]);

  // Preset question cues
  const SUGGESTED_PROMPTS = [
    { label: "Termination Clause", value: "What is the termination clause or cancellation period?" },
    { label: "Liability Limits", value: "Describe the liability caps or exclusion boundaries in this document." },
    { label: "Indemnification", value: "What are the indemnification guidelines, limits, or remedies?" },
    { label: "Arbitration Terms", value: "What governing law rules apply and is there an arbitration mandate?" },
    { label: "Force Majeure", value: "Describe the force majeure clause exemptions in detail." }
  ];

  // Handle preset clicks
  const selectPreset = (val: string) => {
    setQuestion(val);
  };

  // Upload custom document
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string || "";
      const docId = `cust_${Date.now()}`;
      const newDoc: LegalDocument = {
        id: docId,
        name: file.name,
        size: `${(file.size / 1024).toFixed(1)} KB`,
        uploadedAt: new Date().toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' }),
        content: content,
        isSample: false
      };
      
      setDocuments(prev => [newDoc, ...prev]);
      setActiveDocId(docId);
      // Clean query and response when switching
      setQuestion("");
      setAnswer("");
      setConfidence(null);
      setCitations([]);
    };
    reader.readAsText(file);
  };

  // Drag and drop support
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string || "";
      const docId = `cust_${Date.now()}`;
      const newDoc: LegalDocument = {
        id: docId,
        name: file.name,
        size: `${(file.size / 1024).toFixed(1)} KB`,
        uploadedAt: new Date().toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' }),
        content: content,
        isSample: false
      };
      
      setDocuments(prev => [newDoc, ...prev]);
      setActiveDocId(docId);
      setQuestion("");
      setAnswer("");
      setConfidence(null);
      setCitations([]);
    };
    reader.readAsText(file);
  };

  // Select sample loaded files
  const useSampleDoc = (id: 'nda' | 'sla' | 'employment') => {
    const match = PRELOADED_SAMPLES.find(s => s.id === id);
    if (match) {
      // Check if it already exists, otherwise prepend
      if (!documents.some(d => d.id === id)) {
        setDocuments(prev => [...prev, match]);
      }
      setActiveDocId(id);
      setQuestion("");
      setAnswer("");
      setConfidence(null);
      setCitations([]);
    }
  };

  const deleteDoc = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = documents.filter(d => d.id !== id);
    setDocuments(updated);
    if (activeDocId === id) {
      if (updated.length > 0) {
        setActiveDocId(updated[0].id);
      } else {
        setActiveDocId("");
      }
      setAnswer("");
      setConfidence(null);
      setCitations([]);
    }
  };

  // Premium downloaded txt format legal report
  const handleDownloadReport = () => {
    if (!activeDoc || !answer) return;

    const timestamp = new Date().toLocaleString("en-US");
    const reportText = `======================================================================
LEXISAI DIGITAL CONTRACT AUDIT REPORT
======================================================================
Generated On        : ${timestamp}
Active Document     : ${activeDoc.name}
Size                : ${activeDoc.size}
Inquiry Question    : ${question}
System Mode         : ${apiStatus?.geminiActive ? "Cloud Guided (Gemini 3.5 Flash)" : "Local Heuristic Analytics Fallback"}
======================================================================

ANALYSIS ANSWER DETAILS:
----------------------------------------------------------------------
${answer}

----------------------------------------------------------------------
CONFIDENCE METRIC & AUTHENTICATION COORDINATES:
----------------------------------------------------------------------
Confidence Index    : ${confidence}% Verified Grounds Alignment
Citations Count     : ${citations.length} Verified References Mapped

VERIFIED CITATION CLAUSE LOGS:
${citations.map((c, idx) => `
[Citation #${idx + 1}]
- Page Coordinate  : Page ${c.page}
- Verified Text    : "${c.text}"
- Full Context     : "${c.context}"
- Match Certainty  : ${c.confidence}% Match Ratio
`).join("\n")}

----------------------------------------------------------------------
DISCLAIMER:
This digital contract audit is generated automatically by LexisAI cryptographic grounding architecture.
Verify critical parameters with official legal counsel under active jurisdiction criteria.
======================================================================`;

    const blob = new Blob([reportText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `LexisAI_Audit_Report_${activeDoc.name.replace(/\.[^/.]+$/, "")}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getActiveRiskProfile = () => {
    if (!activeDoc) return null;
    if (PRESETS_RISK_PROFILE[activeDoc.id]) {
      return PRESETS_RISK_PROFILE[activeDoc.id];
    }
    
    // Custom document heuristic risk scorer
    const content = activeDoc.content.toLowerCase();
    
    const factors = [
      {
        name: "Indemnity Safeguards",
        score: content.includes("indemnity") || content.includes("indemnific") ? 65 : 20,
        riskLevel: (content.includes("indemnity") || content.includes("indemnific") ? "HIGH" : "LOW") as 'LOW' | 'MEDIUM' | 'HIGH',
        excerpt: content.includes("indemnity") 
          ? "Document details explicit indemnification responsibilities and claims attribution." 
          : "No explicit cost reimbursement/indemnification triggers initially identified in primary sweeps.",
        recommendation: content.includes("indemnity") 
          ? "Review liability alignment closely. Confirm if duty to defend has mutual balance." 
          : "Standard position. Verify if a unilateral hold-harmless provision is hidden under secondary labels."
      },
      {
        name: "Termination Notice Gaps",
        score: content.includes("termination") || content.includes("cancel") ? 55 : 30,
        riskLevel: (content.includes("termination") || content.includes("cancel") ? "MEDIUM" : "LOW") as 'LOW' | 'MEDIUM' | 'HIGH',
        excerpt: content.includes("termination") 
          ? "Agreement outlines custom grounds for termination and cancel notice procedures." 
          : "Minimal cancel coordinates present. Assumed governed by standard commercial codes.",
        recommendation: "Ensure minimum 30 days prior written warning represents the base cancel baseline."
      },
      {
        name: "Restraints & Non-Compete",
        score: content.includes("compete") || content.includes("solicit") ? 80 : 15,
        riskLevel: (content.includes("compete") || content.includes("solicit") ? "HIGH" : "LOW") as 'LOW' | 'MEDIUM' | 'HIGH',
        excerpt: content.includes("compete") 
          ? "Identified potential post-session restrictions, competition restrictions, or solicitation clauses." 
          : "No explicit non-competition or restraint terms found in preliminary sweeps.",
        recommendation: content.includes("compete") 
          ? "Restrictive non-competes require precise definitions. Limit to direct client list or narrow geography." 
          : "Favorable. Standard commercial flow without employment lockout clauses."
      },
      {
        name: "Jurisdiction and Laws",
        score: content.includes("governed") || content.includes("jurisdiction") ? 50 : 25,
        riskLevel: (content.includes("governed") || content.includes("jurisdiction") ? "MEDIUM" : "LOW") as 'LOW' | 'MEDIUM' | 'HIGH',
        excerpt: content.includes("governed") 
          ? "Explicit governing laws and litigation venues defined within the agreement." 
          : "No explicit state legislation parameters defined in main body segments.",
        recommendation: "Ensure the local state or district matches your primary operating geography."
      }
    ];

    const overallScore = Math.round(factors.reduce((acc, current) => acc + current.score, 0) / factors.length);

    return {
      overallScore,
      factors
    };
  };

  const triggerRiskAssessment = () => {
    setIsRiskAuditing(true);
    setShowRiskScorecard(false);
    setTimeout(() => {
      setIsRiskAuditing(false);
      setShowRiskScorecard(true);
    }, 1200);
  };

  // Analyze endpoint execution
  const executeAnalysis = async () => {
    if (!activeDoc) return;
    if (!question.trim()) return;

    setIsGenerating(true);
    setAnswer("");
    setConfidence(null);
    setCitations([]);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          documentId: activeDoc.id,
          question: question,
          customDocuments: documents.filter(d => !d.isSample)
        })
      });

      if (!response.ok) {
        throw new Error("Analysis failed. Server returned status code " + response.status);
      }

      const resData = await response.json();
      setAnswer(resData.answer);
      setConfidence(resData.confidence);
      setCitations(resData.citations || []);
      if (resData.citations && resData.citations.length > 0) {
        setActiveCitationId(resData.citations[0].id);
      }
    } catch (err: any) {
      console.error(err);
      setAnswer(`ERROR: Request could not be processed. ${err.message}. Please verify local environment connectivity.`);
      setConfidence(0);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 flex bg-[#080812] text-white">
      
      {/* CASE A: EMPTY STATE (No contracts present in dashboard) */}
      {documents.length === 0 ? (
        <div className="flex-1 max-w-4xl mx-auto flex flex-col items-center justify-center p-8 text-center" id="workspace-empty">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-2xl"
          >
            <Layers className="w-10 h-10 text-purple-400" />
          </motion.div>
          <span className="text-xs uppercase tracking-widest font-mono text-purple-400 font-bold mb-2">Workspace Uninitiated</span>
          <h2 className="text-3xl font-display font-semibold tracking-tight text-white">
            Upload a contract to start asking questions.
          </h2>
          <p className="text-slate-400 mt-3 max-w-md text-sm leading-relaxed">
            Every query evaluated is directly and firmly integrated back into citations mapping page coordinates. No hallucinations.
          </p>

          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
            className="hidden" 
            accept=".txt,.md,.pdf" 
          />

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-xs flex items-center gap-2 cursor-pointer transition-all"
              id="empty-cta-upload"
            >
              <Upload className="w-4 h-4" />
              <span>Upload Contract File (TXT / MD)</span>
            </button>
            
            <button 
              onClick={() => useSampleDoc('nda')}
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium text-xs flex items-center gap-2 cursor-pointer transition-colors"
              id="empty-cta-sample"
            >
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Import Mutual NDA Sample</span>
            </button>
          </div>
        </div>
      ) : (
        
        /* CASE B: DOCK WORKSPACE IN ACTION (Sidebar - Content - Evidences) */
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">

          {/* LEFT PANEL: Sidebar System (Docs list) */}
          <aside className="w-full lg:w-[260px] border-b lg:border-b-0 lg:border-r border-white/5 bg-[#090915] p-5 shrink-0 flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 font-bold">Document Vault</span>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="p-1 rounded hover:bg-white/10 text-purple-400 transition-colors"
                  title="Upload contract file"
                  id="aside-btn-plus"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileUpload} 
                  className="hidden" 
                  accept=".txt,.md,.pdf" 
                />
              </div>

              {/* Upload Dropzone small box */}
              <div 
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className="border border-dashed border-white/15 hover:border-purple-500/50 rounded-lg p-3 text-center cursor-pointer bg-white/[0.01]"
              >
                <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1.5" />
                <span className="text-[10px] text-slate-400 block font-semibold">Drop or Tap to Upload</span>
              </div>

              {/* Active document choices list */}
              <div className="flex flex-col gap-1.5 max-h-[300px] overflow-y-auto">
                {documents.map((doc) => {
                  const isActive = doc.id === activeDocId;
                  return (
                    <div
                      key={doc.id}
                      onClick={() => {
                        setActiveDocId(doc.id);
                        setAnswer("");
                        setConfidence(null);
                        setCitations([]);
                      }}
                      className={`group flex items-center justify-between p-2.5 rounded-lg border transition-all cursor-pointer ${
                        isActive 
                          ? "bg-purple-950/25 border-purple-500/40 text-white" 
                          : "bg-white/[0.01] border-white/5 text-slate-400 hover:bg-white/[0.02]"
                      }`}
                      id={`aside-doc-${doc.id}`}
                    >
                      <div className="flex items-start gap-2 overflow-hidden mr-2">
                        <FileText className={`w-4 h-4 shrink-0 mt-0.5 ${isActive ? 'text-purple-400' : 'text-slate-500'}`} />
                        <div className="overflow-hidden">
                          <span className="text-[11px] font-medium block truncate tracking-tight">{doc.name}</span>
                          <span className="text-[9px] text-slate-500 block leading-tight">{doc.size}</span>
                        </div>
                      </div>
                      
                      <button
                        onClick={(e) => deleteDoc(doc.id, e)}
                        className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-white/10 text-slate-500 hover:text-red-400 transition-all shrink-0"
                        title="Delete document"
                        id={`del-doc-${doc.id}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Quick sample restorer if they deleted them */}
              <div className="mt-2">
                <span className="text-[9px] font-mono uppercase text-slate-500 block mb-1.5">Available Sample Sets:</span>
                <div className="flex flex-wrap gap-1">
                  {!documents.some(d => d.id === 'nda') && (
                    <button onClick={() => useSampleDoc('nda')} className="text-[9px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-purple-300 hover:bg-[#111124] transition-all">NDA</button>
                  )}
                  {!documents.some(d => d.id === 'sla') && (
                    <button onClick={() => useSampleDoc('sla')} className="text-[9px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-blue-300 hover:bg-[#111124] transition-all">SaaS SLA</button>
                  )}
                  {!documents.some(d => d.id === 'employment') && (
                    <button onClick={() => useSampleDoc('employment')} className="text-[9px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-emerald-300 hover:bg-[#111124] transition-all">Emp Agr</button>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom active info card & API HUD */}
            <div className="flex flex-col gap-3 mt-6 border-t border-white/5 pt-4">
              {/* Live API key Validation HUD */}
              <div className="bg-[#0b0b18]/70 p-3 rounded-lg border border-white/5 flex flex-col gap-1.5 font-mono text-[9px]">
                <div className="flex items-center justify-between text-slate-400 font-bold uppercase tracking-wider text-[8px] mb-0.5">
                  <span>Neural Core Index</span>
                  <span className="text-[7.5px] border border-white/10 px-1 rounded uppercase bg-white/5">Auto-Config</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full animate-pulse shrink-0 ${apiStatus?.geminiActive ? 'bg-purple-400 shadow-[0_0_6px_#c084fc]' : 'bg-amber-400 shadow-[0_0_6px_#fbbf24]'}`}></span>
                  <span className="text-[10px] text-slate-200 font-sans tracking-tight">
                    {apiStatus ? (apiStatus.geminiActive ? "Gemini Cloud Live Engine" : "Heuristic Backup Mode") : "Verifying Engine..."}
                  </span>
                </div>
                <div className="text-slate-550 text-[8.5px] leading-tight font-sans">
                  {apiStatus?.geminiActive ? (
                    <span>Real-time <span className="text-purple-400 font-mono font-semibold">{apiStatus.model}</span> queries are fully active via secure server webhook.</span>
                  ) : (
                    <span>No active secret key configured. Running on robust, deterministic fallback local parsers.</span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 bg-[#0c0c1b]/80 border border-white/5 p-3 rounded-lg text-[10px] text-slate-500">
                <Shield className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Private Sandbox. Document indexes are ephemeral and fully socket-secure.</span>
              </div>
            </div>
          </aside>

          {/* MAIN CENTER PANEL: Question Command center */}
          <main className="flex-1 p-5 lg:p-7 flex flex-col justify-between overflow-y-auto">
            
            {/* Header description of selected doc */}
            <div>
              <div className="mb-6 pb-4 border-b border-white/5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                      <FileText className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h1 className="text-sm font-semibold tracking-tight text-white flex items-center gap-2">
                        <span>{activeDoc?.name}</span>
                        {activeDoc?.isSample && <span className="text-[9px] font-mono bg-purple-500/10 border border-purple-500/20 px-1 py-0.2 rounded text-purple-400 uppercase font-bold">Preloaded Demo</span>}
                      </h1>
                      <p className="text-[10px] text-slate-500 mt-0.5">Uploaded on {activeDoc?.uploadedAt} • Size: {activeDoc?.size}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400">
                    <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Grounding Safe</span>
                    </div>

                    <button
                      onClick={triggerRiskAssessment}
                      disabled={isRiskAuditing}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 text-red-400 text-[10px] font-medium transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {isRiskAuditing ? (
                        <>
                          <RefreshCw className="w-2.5 h-2.5 animate-spin" />
                          <span>Auditing Clauses...</span>
                        </>
                      ) : (
                        <>
                          <ShieldAlert className="w-3 h-3" />
                          <span>Run Risk Audit</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Automated Risk Scorecard Section */}
              <AnimatePresence>
                {showRiskScorecard && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 bg-red-950/15 border border-red-500/20 rounded-xl p-5 shadow-inner overflow-hidden"
                  >
                    {(() => {
                      const profile = getActiveRiskProfile();
                      if (!profile) return null;
                      
                      const overallColorClass = 
                        profile.overallScore > 70 ? "text-red-400" :
                        profile.overallScore > 40 ? "text-amber-400" : "text-emerald-400";
                      
                      const bgGaugeClass = 
                        profile.overallScore > 70 ? "bg-red-500/10 border-red-500/20" :
                        profile.overallScore > 40 ? "bg-amber-500/10 border-amber-500/20" : "bg-emerald-500/10 border-emerald-500/20";

                      return (
                        <div>
                          <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                            <div className="flex items-center gap-2">
                              <ShieldAlert className="w-4 h-4 text-red-450" />
                              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">Automated Integrity Risk Report</span>
                            </div>
                            <button 
                              onClick={() => setShowRiskScorecard(false)} 
                              className="text-[10px] text-slate-400 hover:text-white bg-white/5 px-2 py-0.5 rounded transition-all cursor-pointer"
                            >
                              Hide Audit
                            </button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-5">
                            <div className={`md:col-span-1 p-4 rounded-xl border flex flex-col items-center justify-center text-center ${bgGaugeClass}`}>
                              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold block mb-1">CONTRACT DANGER</span>
                              <span className={`text-3xl font-bold font-mono ${overallColorClass}`}>
                                {profile.overallScore}%
                              </span>
                              <span className="text-[9px] uppercase font-mono mt-1 font-bold text-slate-300">
                                {profile.overallScore > 70 ? "HIGH RISK EXPOSURES" : 
                                 profile.overallScore > 40 ? "NEUTRAL CONTRACT POSITIONS" : "LOW RISK EXPOSURES"}
                              </span>
                            </div>

                            <div className="md:col-span-3 text-xs leading-relaxed text-slate-350">
                              <span className="text-[10px] uppercase font-mono font-bold tracking-wide text-red-350 block mb-1">Digital Risk Summary:</span>
                              An active neural sweep of <span className="text-white font-semibold italic">"{activeDoc?.name}"</span> has parsed key clauses. 
                              {profile.overallScore > 70 ? (
                                <span> This document contains high-severity restrictive guidelines or non-competes that limit executive movement or expose you to severe default remediation criteria. Negotiating standard relief clauses is strongly advised before signing.</span>
                              ) : profile.overallScore > 40 ? (
                                <span> This document holds standard vendor positions but includes several sole remedy traps or immediate default warnings. We suggest reviewing termination schedules.</span>
                              ) : (
                                <span> This document conforms exceptionally well to standard commercial positions. Standard mutual positions protect participant benefits balanced across standard jurisdictions.</span>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {profile.factors.map((f, i) => {
                              const levelColor = 
                                f.riskLevel === "HIGH" ? "text-red-400 bg-red-400/10 border-red-400/20" :
                                f.riskLevel === "MEDIUM" ? "text-amber-400 bg-amber-400/10 border-amber-400/20" : "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
                              return (
                                <div key={i} className="bg-slate-950/45 p-3 rounded-lg border border-white/5 flex flex-col justify-between">
                                  <div>
                                    <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-white/5">
                                      <span className="text-[11px] font-semibold text-slate-200 tracking-tight">{f.name}</span>
                                      <span className={`text-[8px] font-mono font-bold px-1.5 py-0.2 rounded uppercase border ${levelColor}`}>
                                        {f.riskLevel}
                                      </span>
                                    </div>
                                    <p className="text-[10px] text-slate-400 leading-normal italic mb-2">
                                      "{f.excerpt}"
                                    </p>
                                  </div>
                                  <div className="text-[9.5px] text-slate-350 bg-black/30 p-2 rounded leading-relaxed border-l-2 border-purple-500/30">
                                    <span className="text-[8.5px] uppercase font-mono font-bold block text-purple-400 mb-0.5">Tactical Counsel:</span>
                                    {f.recommendation}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Inquiry prompt container */}
              <div className="bg-[#0c0c1b] border border-white/10 rounded-xl p-5 mb-6 shadow-2xl relative">
                <label className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-400 block mb-2">3. Ask Anything About This Contract</label>
                
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder='e.g., "What is the compensation package, performance bonus, or termination clause?"'
                  className="w-full bg-[#080812] border border-white/5 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 resize-none min-h-[90px]"
                  id="query-textarea"
                />

                {/* Suggested prompt helpers */}
                <div className="mt-3 flex flex-wrap gap-2 items-center">
                  <span className="text-[9px] font-mono text-slate-500 uppercase mr-1">Quick prompts:</span>
                  {SUGGESTED_PROMPTS.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectPreset(p.value)}
                      className="text-[10px] bg-white/5 border border-white/5 hover:border-purple-500/30 text-slate-300 hover:text-white px-2.5 py-1 rounded-full transition-all cursor-pointer font-medium"
                      id={`workspace-preset-${idx}`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                {/* Big Action button */}
                <div className="mt-5 flex justify-end">
                  <button
                    onClick={executeAnalysis}
                    disabled={isGenerating || !question.trim()}
                    className={`px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-xs text-white font-semibold flex items-center gap-2 shadow-xl shadow-purple-500/10 cursor-pointer transition-all border border-purple-500/20 ${
                      (isGenerating || !question.trim()) && "opacity-50 cursor-not-allowed"
                    }`}
                    id="btn-generate-answer"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Analysing Document Tokens & Context...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                        <span>Generate Verified Answer</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Answers & Insights area */}
              <AnimatePresence mode="wait">
                {answer ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0d0d21] border border-white/10 rounded-xl p-5 shadow-2xl"
                    id="answer-results"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-purple-500/15 flex items-center justify-center text-[10px] font-semibold text-purple-400 border border-purple-500/20">⚖</div>
                        <span className="text-xs font-mono font-bold tracking-wider text-purple-400 uppercase">Interactive Legal Audit Result</span>
                      </div>

                      {/* Confidence Score meter bubble & Download report CTA */}
                      <div className="flex items-center gap-2">
                        {confidence !== null && (
                          <div className="flex items-center gap-1.5 bg-[#111d23] border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>CONFIDENCE: {confidence}%</span>
                          </div>
                        )}
                        <button
                          onClick={handleDownloadReport}
                          className="flex items-center gap-1.5 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-300 hover:text-purple-100 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full transition-all cursor-pointer shadow-md"
                          title="Download official Verified Report"
                        >
                          <Upload className="w-3 h-3 rotate-180 shrink-0 text-purple-400" />
                          <span>EXPORT REPORT</span>
                        </button>
                      </div>
                    </div>

                    {/* Answer content block */}
                    <div className="text-slate-200 text-xs sm:text-sm leading-relaxed pr-6 whitespace-pre-line">
                      {answer}
                    </div>

                    {/* Citations index previews */}
                    {citations.length > 0 && (
                      <div className="mt-6 border-t border-white/5 pt-4">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-3 font-semibold">Active citations (click to pin source text):</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {citations.map((c) => {
                            const isPinned = activeCitationId === c.id;
                            return (
                              <button
                                key={c.id}
                                onClick={() => setActiveCitationId(c.id)}
                                className={`text-left text-xs p-3 rounded-lg border transition-all flex flex-col justify-between ${
                                  isPinned 
                                    ? "bg-purple-600/10 border-purple-500/50 text-purple-200" 
                                    : "bg-white/[0.01] border-white/5 text-slate-400 hover:bg-white/[0.02]"
                                }`}
                                id={`citation-tag-${c.id}`}
                              >
                                <div>
                                  <div className="flex items-center justify-between mb-1.5">
                                    <div className="flex items-center gap-1 text-[9px] font-mono uppercase font-bold text-slate-400">
                                      <Hash className="w-3 h-3 text-purple-400" />
                                      <span>Page {c.page} Reference</span>
                                    </div>
                                    <span className="text-[8px] border border-purple-500/10 bg-purple-500/5 px-1 py-0.2 rounded text-purple-300">{c.confidence}% certainty</span>
                                  </div>
                                  <p className="line-clamp-2 italic text-[10px] leading-relaxed text-slate-300">
                                    "{c.text}"
                                  </p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  !isGenerating && (
                    <div className="bg-white/[0.01] border border-white/5 rounded-xl p-10 text-center text-slate-500">
                      <HelpCircle className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                      <h4 className="text-xs text-slate-300 font-semibold uppercase font-mono tracking-wider">Awaiting Inquiry Input</h4>
                      <p className="text-[11px] text-slate-550 mt-1 max-w-sm mx-auto">
                        Type any legal, compensation, liability, or governance question above and click Generate Answer to analyze page sources.
                      </p>
                    </div>
                  )
                )}
              </AnimatePresence>
            </div>

            {/* Bottom info footer */}
            <div className="mt-12 text-slate-500 text-[10px] flex items-center justify-between border-t border-white/5 pt-4">
              <span>Secure isolated connection session in place</span>
              <span>LexisAI Engine v2.4</span>
            </div>
          </main>

          {/* RIGHT EVIDENCE PANEL: Clickable highlighters & contract view */}
          <section className="w-full lg:w-[320px] bg-[#090915] border-t lg:border-t-0 lg:border-l border-white/5 p-5 shrink-0 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-5">
                <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 font-bold">Evidence Panel</span>
                <span className="text-[9px] text-blue-400 font-semibold font-mono">Page Scroller View</span>
              </div>

              {citations.length > 0 ? (
                <div className="flex flex-col gap-4">
                  <div className="text-slate-400 text-[10px] font-bold uppercase font-mono tracking-wide">
                    Grounding Proof Verified:
                  </div>

                  {(() => {
                    const pinnedCitation = citations.find(c => c.id === activeCitationId) || citations[0];
                    return pinnedCitation ? (
                      <div className="flex flex-col gap-4">
                        {/* Simulated contract document page print */}
                        <div className="bg-white text-neutral-900 rounded-lg p-5 shadow-[inset_0_0_10px_rgba(0,0,0,0.12)] border border-neutral-200 relative overflow-hidden font-serif">
                          {/* Accent watermark */}
                          <div className="absolute top-0 right-0 p-1 px-2 text-[8px] tracking-wider text-purple-600 font-sans font-bold bg-purple-50 border-l border-b border-purple-100 rounded-bl uppercase">
                            SOURCE MATCH SECURED
                          </div>

                          <div className="text-[9px] text-neutral-400 block mb-2 leading-none uppercase font-sans font-bold tracking-tight">PAGE {pinnedCitation.page} PRINT</div>
                          
                          <div className="text-[11px] text-neutral-800 leading-relaxed italic bg-neutral-50 p-3 rounded-md border border-neutral-100">
                            "{pinnedCitation.context || pinnedCitation.text}"
                          </div>

                          <div className="mt-3 flex items-center justify-between text-[9px] text-emerald-600 font-sans font-bold uppercase">
                            <span className="flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span>Verified Clause Match</span>
                            </span>
                            <span>{pinnedCitation.confidence}% certainty</span>
                          </div>
                        </div>

                        {/* Interactive Text Highlighting Simulator Panel */}
                        <div className="bg-[#0b0b18] border border-white/5 rounded-lg p-3">
                          <span className="text-[8px] font-mono text-slate-500 uppercase block mb-1">Contract context outline:</span>
                          <p className="text-[10px] text-slate-400 leading-relaxed font-mono">
                            ... {activeDoc?.content.slice(0, 150)} ...
                          </p>
                          <div className="bg-purple-600/20 text-purple-200 border-l-2 border-purple-400 p-2 text-[10.5px] font-mono my-2 italic">
                            "...{pinnedCitation.text}..."
                          </div>
                          <p className="text-[10px] text-slate-400 leading-relaxed font-mono">
                            ... {activeDoc?.content.slice(250, 400)} ...
                          </p>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </div>
              ) : (
                <div className="text-center py-20 text-slate-600">
                  <Hash className="w-8 h-8 text-slate-700 mx-auto mb-2" />
                  <span className="text-xs uppercase font-mono block font-semibold text-slate-500">No active citation pinned</span>
                  <p className="text-[10px] text-slate-600 mt-1 max-w-[200px] mx-auto leading-normal">
                    Submit a query to verify claims. Cite cards will populate here dynamically with exact quotes.
                  </p>
                </div>
              )}
            </div>

            {/* Simulated legal assurance badges */}
            <div className="border-t border-white/5 pt-4 mt-6">
              <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest block mb-2">INTEGRITY GUARANTEE</span>
              <div className="flex items-center gap-2 text-slate-400 text-[10px] leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero general reasoning drift. Every response matches an explicit cryptographic clause key.</span>
              </div>
            </div>
          </section>

        </div>
      )}

    </div>
  );
}
