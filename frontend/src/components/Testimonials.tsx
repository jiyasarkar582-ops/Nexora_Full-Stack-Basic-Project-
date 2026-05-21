import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "Lead Frontend Engineer",
      company: "Acme Analytics",
      initials: "AR",
      text: "Integrating forms used to require writing custom server-side handlers or spinning up third-party microservices. With Nexora, we connected our React contact form to Spring Boot in minutes. It just works.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      company: "Scribe DevTools",
      initials: "SC",
      text: "The developer experience is top-notch. I love the transparent CORS annotation implementation on the backend controller, and the response times are consistently under 15ms. Absolutely amazing.",
      rating: 5,
    },
    {
      name: "Marcus Vance",
      role: "Full Stack Developer",
      company: "Loom Engineering",
      initials: "MV",
      text: "Implementing client-side regex checks along with Spring Boot's controller request mappings saved us a ton of validation work. The terminal logs make testing submissions in the IDE incredibly simple.",
      rating: 5,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0D0E10] relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-indigo mb-3">
            Testimonials
          </h2>
          <p className="text-3xl font-bold tracking-tight text-white mb-4 font-sans">
            Loved by developers, trusted by leads
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Read how full-stack developers and engineering leads are saving hours of integration time using Nexora.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Review Text */}
              <div className="mb-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-3.5 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-violet flex items-center justify-center font-bold text-xs text-white">
                  {review.initials}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">{review.name}</div>
                  <div className="text-[11px] text-slate-500">
                    {review.role} · <span className="text-slate-400">{review.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
