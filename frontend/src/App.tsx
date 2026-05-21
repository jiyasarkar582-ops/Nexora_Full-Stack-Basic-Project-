import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#08090A] text-slate-100 flex flex-col selection:bg-brand-indigo/35 selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
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
      </main>

      {/* Footer Branding & Social Links */}
      <Footer />
    </div>
  );
}

export default App;
