import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-[#08090A]/80 border-b border-white/10 py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="p-2 bg-gradient-to-tr from-brand-indigo to-brand-violet rounded-xl shadow-lg shadow-brand-indigo/30">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-sans">
            Nex<span className="text-brand-indigo">ora</span>
          </span>
        </div>

        {/* Desktop Navigation Link Items */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "About", "FAQ", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-xl px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-brand-indigo to-brand-violet text-white hover:opacity-90 shadow-md shadow-brand-indigo/25 hover:shadow-brand-indigo/40 transition-all duration-300 cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-400 hover:text-white p-2 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#08090A] border-b border-white/10 py-6 px-6 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-5">
            {["Features", "About", "FAQ", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-base font-medium text-slate-400 hover:text-white transition-colors py-2 cursor-pointer"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full text-center rounded-xl py-3 text-sm font-medium bg-gradient-to-r from-brand-indigo to-brand-violet text-white shadow-md shadow-brand-indigo/20 cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
