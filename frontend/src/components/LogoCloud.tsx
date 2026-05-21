import { motion } from "framer-motion";

export default function LogoCloud() {
  const logos = [
    {
      name: "Stripe",
      svg: (
        <svg viewBox="0 0 80 24" className="h-6 w-auto fill-current">
          <path d="M4.2 10.3c0-1.8 1.4-2.8 3.8-2.8 1.8 0 3.3.4 4.3 1v-2c-1.1-.4-2.5-.7-3.9-.7-3.9 0-6.4 2-6.4 5.7 0 5.4 7.3 4.5 7.3 6.9 0 1-.9 1.6-2.5 1.6-2 0-3.8-.6-5.1-1.3v2c1.3.6 3.1.9 4.7.9 4.1 0 6.9-2 6.9-5.8 0-5.8-7.3-4.7-7.3-7.2zM21 7c-1.8 0-3 .7-3.6 1.7V2.3L13.7 3v17.2h3.6v-8.2c0-2 1.3-3.2 3.1-3.2 1.4 0 2.2.8 2.2 2.2v9.2h3.6v-9.7c0-3.3-1.8-4.5-5.2-4.5zM33.4 3.7c1.3 0 2.2-1 2.2-2.3 0-1.3-1-2.2-2.2-2.2-1.3 0-2.3 1-2.3 2.2 0 1.3 1.1 2.3 2.3 2.3zm-1.8 3.6h3.6v13.2h-3.6zM46.7 7.2c-1.8 0-3 .8-3.6 1.8V7.5H39.5v17.2l3.6-1V17c.7.9 1.8 1.7 3.5 1.7 3.2 0 5.8-2.6 5.8-5.8 0-3.3-2.6-5.7-5.7-5.7zm-.6 8.3c-1.6 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.2 2.8-2.8 2.8zM61.8 12.3c-2.3 0-3.6 1.2-3.6 3 0 2.2 2.6 2.4 4.3 2.8 1.4.3 2 .8 2 1.4 0 .8-1 1.2-2.3 1.2-2 0-3.8-.7-5.1-1.4v2.8c1.3.5 3 .8 4.7.8 3.8 0 6.2-1.8 6.2-4.8 0-3-2.8-3.5-4.9-3.9-1.3-.2-2-.6-2-1.1 0-.6.8-1 1.9-1s2.8.4 3.7.8v-2.7c-1-.4-2.3-.6-3.6-.6z" />
        </svg>
      ),
    },
    {
      name: "Vercel",
      svg: (
        <svg viewBox="0 0 116 26" className="h-5 w-auto fill-current">
          <path d="M12.8 2.2L25.6 24.4H0L12.8 2.2zM40.2 6h4l3.1 11.2L50.4 6h4l-5 15.6h-4.3L40.2 6zM61.3 6h11v3.2h-7.3v3h6.6v3.1h-6.6v3.3h7.6v3.2h-11.3V6zM78.6 6h6.6c3.3 0 5.1 1.6 5.1 4.2 0 2.1-1.2 3.5-3.1 3.9l3.5 7.5h-4.3l-3.1-6.8h-1.1v6.8h-3.6V6zm3.6 6.3h2.6c1.1 0 1.9-.4 1.9-1.5 0-1.1-.8-1.5-1.9-1.5h-2.6v3zM102.5 5.6c4.6 0 7.8 3.5 7.8 7.8s-3.2 7.8-7.8 7.8-7.9-3.5-7.9-7.8 3.3-7.8 7.9-7.8zm0 12.3c2.5 0 4.2-2 4.2-4.5s-1.7-4.5-4.2-4.5-4.2 2-4.2 4.5 1.7 4.5 4.2 4.5zM113.6 6h3.6v15.6h-3.6V6z" />
        </svg>
      ),
    },
    {
      name: "Supabase",
      svg: (
        <svg viewBox="0 0 120 24" className="h-5 w-auto fill-current">
          <path d="M11.6.4L1 12.5h8.8L8.4 23.6l10.6-12.1h-8.8L11.6.4zM27 9.8c0-1.8 1.4-2.8 3.8-2.8 1.8 0 3.3.4 4.3 1v-2c-1.1-.4-2.5-.7-3.9-.7-3.9 0-6.4 2-6.4 5.7 0 5.4 7.3 4.5 7.3 6.9 0 1-.9 1.6-2.5 1.6-2 0-3.8-.6-5.1-1.3v2c1.3.6 3.1.9 4.7.9 4.1 0 6.9-2 6.9-5.8 0-5.8-7.3-4.7-7.3-7.2zM43 7v10.2c0 2 1.3 3.2 3.1 3.2 1.4 0 2.2-.8 2.2-2.2V7H52v10.2c0 3.3-1.8 4.5-5.2 4.5-1.8 0-3-.7-3.6-1.7v1.5H39.5V7H43zM59.7 7.2c-1.8 0-3 .8-3.6 1.8V7.5H52.5v17.2l3.6-1V17c.7.9 1.8 1.7 3.5 1.7 3.2 0 5.8-2.6 5.8-5.8.1-3.3-2.5-5.7-5.7-5.7zm-.6 8.3c-1.6 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.2 2.8-2.8 2.8zM76 7.2c-3.1 0-5.8 2.5-5.8 5.8 0 3.3 2.6 5.8 5.8 5.8 1.8 0 3-.8 3.6-1.8v1.5h3.6V7.5H79.6V9c-.6-.9-1.8-1.8-3.6-1.8zm.6 8.3c-1.6 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.2 2.8-2.8 2.8zM92 7.2c3.2 0 5.7 2.4 5.7 5.8 0 3.3-2.5 5.8-5.7 5.8-1.8 0-3-.8-3.6-1.8v1.5H84.8V2.3l3.6-.8V9c.6-.9 1.8-1.8 3.6-1.8zm-.6 8.3c-1.6 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.2 2.8-2.8 2.8z" />
        </svg>
      ),
    },
    {
      name: "Figma",
      svg: (
        <svg viewBox="0 0 80 24" className="h-6 w-auto fill-current">
          <path d="M4.5 12a4.5 4.5 0 014.5-4.5h4.5v9H9a4.5 4.5 0 01-4.5-4.5zM18 7.5a4.5 4.5 0 00-4.5-4.5H9A4.5 4.5 0 004.5 7.5 4.5 4.5 0 009 12h4.5V7.5zM18 16.5A4.5 4.5 0 0013.5 12H9a4.5 4.5 0 00-4.5 4.5A4.5 4.5 0 009 21h4.5a4.5 4.5 0 004.5-4.5zM22.5 12a4.5 4.5 0 004.5-4.5h-4.5V12zM27 16.5a4.5 4.5 0 01-4.5 4.5v-9H27a4.5 4.5 0 010 9z" />
          <text x="32" y="17" className="font-bold font-sans text-xs tracking-wide">Figma</text>
        </svg>
      ),
    },
    {
      name: "Clerk",
      svg: (
        <svg viewBox="0 0 100 24" className="h-5 w-auto fill-current">
          <text x="0" y="17" className="font-bold font-sans text-sm tracking-wider">CLERK</text>
          <path d="M60.3 3.5h3.6v13.2h-3.6zm10 3.7c1.3 0 2.2-1 2.2-2.3 0-1.3-1-2.2-2.2-2.2-1.3 0-2.3 1-2.3 2.2 0 1.3 1.1 2.3 2.3 2.3zm-1.8 3.6h3.6v13.2h-3.6z" className="opacity-0" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative border-y border-white/5 bg-[#08090A] py-10 z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8"
        >
          Trusted by teams at the world's most innovative companies
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center text-slate-500"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="hover:text-slate-300 transition-colors duration-300 transition-opacity duration-300 opacity-50 hover:opacity-100 cursor-pointer"
            >
              {logo.svg}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
