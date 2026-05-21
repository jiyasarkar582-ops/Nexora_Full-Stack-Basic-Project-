import { motion } from "framer-motion";
import { Terminal, Zap, Lock, Globe } from "lucide-react";

export default function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="features" className="py-24 md:py-32 bg-[#08090A] relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-indigo mb-3">
            API Platform
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 font-sans">
            Built for developers. Styled for startups.
          </p>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Stop setting up boilerplate email scripts and relational database servers just to collect contact requests. 
            Ingest form variables directly to your Spring Boot service using modern, CORS-configured API methods.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Endpoints (Col span 2) */}
          <motion.div
            variants={itemVariants}
            className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:col-span-2 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col md:flex-row gap-8 justify-between items-start h-full">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="p-3 bg-brand-indigo/10 text-brand-indigo rounded-xl w-fit mb-6">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Cross-Origin Rest APIs</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Fully CORS-configured endpoint (`http://localhost:8080/contact`) designed specifically for direct Axios/Fetch POST execution from React web browser environments.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                  <span>Method: POST</span>
                  <span>Payload: JSON</span>
                  <span>Port: 8080</span>
                </div>
              </div>

              {/* Endpoint visual representation */}
              <div className="w-full md:w-60 bg-black/45 rounded-xl border border-white/10 p-4 font-mono text-[11px] text-left">
                <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 mb-2 text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-red-500/60" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <span className="w-2 h-2 rounded-full bg-green-500/60" />
                  <span className="ml-1 text-[10px]">rest-endpoint-check</span>
                </div>
                <div className="text-slate-400 mb-1">POST /contact HTTP/1.1</div>
                <div className="text-slate-400 mb-2">Host: localhost:8080</div>
                <div className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded w-fit mb-3 text-[10px]">
                  200 OK
                </div>
                <div className="text-slate-500">Response Payload:</div>
                <div className="text-slate-300 bg-white/5 p-2 rounded mt-1 border border-white/5 font-sans">
                  "Form submitted successfully!"
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Speed/Performance (Col span 1) */}
          <motion.div
            variants={itemVariants}
            className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="p-3 bg-brand-cyan/10 text-brand-cyan rounded-xl w-fit mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Sub-2s Responses</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Asynchronous thread execution processes form ingest details quickly. Get guaranteed local responses under 15ms.
                </p>
              </div>
              
              {/* Graphic element */}
              <div className="mt-8 flex items-baseline gap-2 font-mono">
                <span className="text-3xl font-extrabold text-white">14.2</span>
                <span className="text-xs text-emerald-400 font-bold uppercase">ms latency</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Live Logs (Col span 1) */}
          <motion.div
            variants={itemVariants}
            className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="p-3 bg-brand-violet/10 text-brand-violet rounded-xl w-fit mb-6">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Terminal Logs</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Logs submitted names, emails, and message contents directly to the Spring Boot console for instant debug transparency.
                </p>
              </div>
              
              {/* Terminal mock log snippet */}
              <div className="mt-8 bg-black/50 rounded-xl p-3 border border-white/10 font-mono text-[9px] text-slate-400 text-left">
                <div className="text-brand-violet">[INFO] Contact Controller</div>
                <div className="text-white">Name: John Doe</div>
                <div className="text-white">Email: john@gmail.com</div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Validation (Col span 2) */}
          <motion.div
            variants={itemVariants}
            className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:col-span-2 overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col md:flex-row gap-8 justify-between items-start h-full">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit mb-6">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Form Validation Engine</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Client-side validation rejects invalid email syntaxes and empty inputs, reducing network load and maintaining high submission data standards.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                  <span>Name Regex</span>
                  <span>RFC 5322 Email Check</span>
                  <span>Min-Length Limits</span>
                </div>
              </div>

              {/* Validation checklist GUI visual */}
              <div className="w-full md:w-60 bg-[#0D0E10] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono">
                  <span>Name: John Doe</span>
                  <span className="font-bold text-[10px]">VALIDATED</span>
                </div>
                <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono">
                  <span>Email: john@mail.com</span>
                  <span className="font-bold text-[10px]">VALIDATED</span>
                </div>
                <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 font-mono">
                  <span>Message: [Empty]</span>
                  <span className="font-bold text-[10px]">MISSING</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
