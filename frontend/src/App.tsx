import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ContactsDashboard from "./components/ContactsDashboard";

function App() {
  const [view, setView] = useState<"landing" | "contacts">("landing");

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#contacts" || window.location.hash === "#admin") {
        setView("contacts");
        window.scrollTo({ top: 0, behavior: "instant" as any });
      } else {
        setView("landing");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // run initial check

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#08090A] text-slate-100 flex flex-col selection:bg-brand-indigo/35 selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {view === "contacts" ? (
          /* Admin Contacts Dashboard Section */
          <ContactsDashboard />
        ) : (
          /* Landing Page Sections */
          <>
            {/* Hero Section */}
            <Hero />

            {/* Brand/Trusted logos */}
            <LogoCloud />

            {/* Platform Features Grid */}
            <Features />

            {/* Customer Reviews/Testimonials */}
            <Testimonials />

            {/* Accordion FAQ */}
            <FAQ />

            {/* Contact Form Card Container */}
            <ContactForm />
          </>
        )}
      </main>

      {/* Footer Branding & Social Links */}
      <Footer />
    </div>
  );
}

export default App;
