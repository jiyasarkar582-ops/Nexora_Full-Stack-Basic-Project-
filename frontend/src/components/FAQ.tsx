import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How do I connect my React form to the Spring Boot endpoint?",
      answer: "You can send an HTTP POST request using Axios or Fetch to `http://localhost:8080/contact`. Send a JSON payload containing the `name`, `email`, and `message` strings. The Spring Boot backend controller maps this payload to a Java DTO automatically.",
    },
    {
      question: "What is CORS and why is it configured on the backend controller?",
      answer: "Cross-Origin Resource Sharing (CORS) is a browser security mechanism that blocks scripts from querying endpoints on a different port or host. The backend controller is annotated with `@CrossOrigin(origins = 'http://localhost:5173')` to explicitly allow the React development server to communicate with port `8080` safely.",
    },
    {
      question: "Where do the form submissions go once sent?",
      answer: "For this stage of development (Task 1), submissions are logged directly to the local Spring Boot console terminal using `System.out.println` and standard SLF4J loggers. Database persistence and email notifications are slated for upcoming phases.",
    },
    {
      question: "What client-side form validation checks are implemented?",
      answer: "We validate that the Name and Email fields are not empty, that the Email follows a standard regex pattern (`^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$`), and that the Message meets a minimum character length, avoiding unnecessary network traffic for invalid submissions.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#08090A] relative">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] radial-glow-cyan pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-indigo mb-3">
            FAQ
          </h2>
          <p className="text-3xl font-bold tracking-tight text-white mb-4 font-sans">
            Frequently Asked Questions
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Find answers to common questions about Nexora's full-stack integration, endpoints, and CORS configurations.
          </p>
        </div>

        {/* Accordions List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-colors hover:border-white/20"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-white font-medium hover:text-brand-indigo transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-indigo shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {/* Animated Drawer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-white/5 bg-black/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
