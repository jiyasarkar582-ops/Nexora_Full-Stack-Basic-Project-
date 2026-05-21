import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Activity, Server, ShieldCheck, Check, Copy } from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"axios" | "curl">("axios");
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    axios: `import axios from 'axios';

const submitForm = async () => {
  const response = await axios.post(
    'http://localhost:8080/contact',
    {
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hello Nexora!'
    }
  );
  console.log(response.data);
};`,
    curl: `curl -X POST http://localhost:8080/contact \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "message": "Hello Nexora!"
  }'`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#08090A]">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] radial-glow pointer-events-none z-0" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] radial-glow-cyan pointer-events-none z-0" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Version Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold bg-brand-indigo/10 border border-brand-indigo/30 text-brand-indigo mb-6"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-indigo animate-pulse" />
              v1.0.0 Now Live
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1] font-sans"
            >
              Build & Scale Your <br />
              <span className="text-gradient-purple">Developer Workflow</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed max-w-xl"
            >
              A premium, API-first form processor and metrics engine built for modern full-stack developers. 
              Connect your contact forms in seconds, validate inputs, and monitor server logs on a sleek realtime dashboard.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold bg-gradient-to-r from-brand-indigo to-brand-violet text-white hover:opacity-95 shadow-lg shadow-brand-indigo/35 hover:shadow-brand-indigo/50 transition-all duration-300 cursor-pointer"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
              >
                Explore Features
              </a>
            </motion.div>

            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-xs text-slate-500 border-t border-white/5 pt-8 w-full"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                <span>Secure Endpoints</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-brand-indigo" />
                <span>Spring Boot 3.x Backend</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-brand-violet" />
                <span>Realtime Log Processing</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Dashboard Mockup */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl border border-white/10 bg-[#0D0E10]/70 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden"
            >
              {/* Dashboard Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/15 bg-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-mono text-slate-400">nexora-analytics-dashboard</div>
                <div className="w-12" /> {/* spacer */}
              </div>

              {/* Dashboard Layout */}
              <div className="grid grid-cols-12 md:h-80">
                {/* Dashboard Sidebar */}
                <div className="col-span-3 border-r border-white/10 p-3 hidden md:flex flex-col gap-2.5 bg-white/[0.02]">
                  <div className="px-2 py-1 text-[10px] uppercase font-bold text-slate-500 tracking-wider">Workspace</div>
                  <div className="flex items-center gap-2 rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-white">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Prod Server</span>
                  </div>
                  <div className="px-2 py-1 text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-2">Services</div>
                  <div className="flex items-center gap-2 px-2.5 py-1 text-xs text-slate-400 hover:text-white cursor-pointer transition-colors">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Metrics</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 text-xs text-slate-400 hover:text-white cursor-pointer transition-colors">
                    <Code className="w-3.5 h-3.5 text-brand-indigo" />
                    <span>API Logs</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 text-xs text-slate-400 hover:text-white cursor-pointer transition-colors">
                    <Server className="w-3.5 h-3.5 text-brand-violet" />
                    <span>Settings</span>
                  </div>
                </div>

                {/* Dashboard Core Panel */}
                <div className="col-span-12 md:col-span-9 p-4 flex flex-col justify-between">
                  {/* Top Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Total API Calls</div>
                      <div className="text-base font-bold text-white font-mono">148,290</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Avg Latency</div>
                      <div className="text-base font-bold text-emerald-400 font-mono">14.2ms</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Success Rate</div>
                      <div className="text-base font-bold text-brand-cyan font-mono">99.98%</div>
                    </div>
                  </div>

                  {/* SVG Chart Representing Form Ingest Event Traffic */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex-grow flex flex-col justify-between h-36">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-semibold text-slate-400">Ingest Traffic (24h)</span>
                      <span className="text-[10px] text-brand-indigo flex items-center gap-1 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-ping" />
                        Live Ingestion Running
                      </span>
                    </div>
                    
                    {/* SVG Chart Area */}
                    <div className="w-full h-20 flex items-end">
                      <svg viewBox="0 0 300 70" className="w-full h-full text-brand-indigo">
                        <defs>
                          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Area */}
                        <path
                          d="M0,60 Q20,30 40,45 T80,15 T120,40 T160,25 T200,50 T240,10 T280,20 T300,5 L300,70 L0,70 Z"
                          fill="url(#gradient)"
                        />
                        {/* Path Line */}
                        <path
                          d="M0,60 Q20,30 40,45 T80,15 T120,40 T160,25 T200,50 T240,10 T280,20 T300,5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        />
                        {/* Highlights */}
                        <circle cx="80" cy="15" r="4" fill="#06B6D4" className="animate-pulse" />
                        <circle cx="240" cy="10" r="4" fill="#8B5CF6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippets Section (Axios vs cURL Tabs) */}
              <div className="border-t border-white/10 bg-black/40">
                <div className="flex items-center justify-between px-4 border-b border-white/10 bg-white/[0.02]">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveTab("axios")}
                      className={`px-3 py-2 text-xs font-mono border-b-2 transition-all cursor-pointer ${
                        activeTab === "axios"
                          ? "border-brand-indigo text-white font-semibold"
                          : "border-transparent text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      axios.post()
                    </button>
                    <button
                      onClick={() => setActiveTab("curl")}
                      className={`px-3 py-2 text-xs font-mono border-b-2 transition-all cursor-pointer ${
                        activeTab === "curl"
                          ? "border-brand-indigo text-white font-semibold"
                          : "border-transparent text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      curl
                    </button>
                  </div>

                  {/* Copy Code Button */}
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white transition-colors py-1 px-2 rounded hover:bg-white/5 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 overflow-x-auto max-h-48 scrollbar-thin">
                  <pre className="text-left text-xs font-mono text-slate-300 leading-relaxed">
                    <code>{codeSnippets[activeTab]}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
