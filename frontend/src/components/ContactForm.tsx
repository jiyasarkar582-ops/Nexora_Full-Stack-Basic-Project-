import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm, type ContactData } from "../services/api";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean; message?: boolean }>({});
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");

  // Email format regex pattern (RFC 5322)
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "name") {
      if (!value.trim()) {
        error = "Name is required.";
      } else if (value.trim().length < 2) {
        error = "Name must be at least 2 characters.";
      }
    } else if (name === "email") {
      if (!value.trim()) {
        error = "Email address is required.";
      } else if (!emailRegex.test(value)) {
        error = "Please enter a valid email address.";
      }
    } else if (name === "message") {
      if (!value.trim()) {
        error = "Message is required.";
      } else if (value.trim().length < 10) {
        error = "Message must be at least 10 characters.";
      }
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof typeof touched]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields before submission
    const nameError = validateField("name", formData.name);
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);

    if (nameError || emailError || messageError) {
      setErrors({ name: nameError, email: emailError, message: messageError });
      setTouched({ name: true, email: true, message: messageError ? true : false });
      return;
    }

    setLoading(true);

    try {
      // API request to the backend server endpoint
      const response = await submitContactForm(formData);
      
      setToastType("success");
      setToastMessage(response || "Form submitted successfully!");
      setShowToast(true);
      
      // Clear form inputs on success
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setTouched({});
    } catch (err: any) {
      console.error("Submission failed:", err);
      setToastType("error");
      setToastMessage("Server connection error. Make sure backend is running on port 8080.");
      setShowToast(true);
    } finally {
      setLoading(false);
      // Auto-hide toast notification after 5 seconds
      setTimeout(() => setShowToast(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0D0E10] relative">
      {/* Background Radial Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] radial-glow pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Toast Notification Banner */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-2xl px-5 py-4 shadow-xl border w-full max-w-md bg-[#08090A] border-emerald-500/30 text-white"
            >
              {toastType === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              )}
              <div className="text-sm font-medium flex-1 text-left">
                {toastMessage}
              </div>
              <button 
                onClick={() => setShowToast(false)} 
                className="text-slate-400 hover:text-white text-xs font-semibold cursor-pointer px-2 py-1 rounded hover:bg-white/5"
              >
                Dismiss
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-indigo mb-3">
            Contact Us
          </h2>
          <p className="text-3xl font-bold tracking-tight text-white mb-4 font-sans">
            Get in touch with Nexora
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have questions about our APIs or need custom integration help? Fill out the form below, and our developer team will reach out directly.
          </p>
        </div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 shadow-xl shadow-black/20"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="flex flex-col text-left">
                <label htmlFor="name" className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={loading}
                  placeholder="Jane Doe"
                  className={`rounded-xl bg-black/40 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                    errors.name && touched.name
                      ? "border-red-500/50 focus:ring-red-500"
                      : "focus:ring-brand-indigo"
                  }`}
                />
                {errors.name && touched.name && (
                  <span className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col text-left">
                <label htmlFor="email" className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={loading}
                  placeholder="jane@example.com"
                  className={`rounded-xl bg-black/40 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                    errors.email && touched.email
                      ? "border-red-500/50 focus:ring-red-500"
                      : "focus:ring-brand-indigo"
                  }`}
                />
                {errors.email && touched.email && (
                  <span className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col text-left">
              <label htmlFor="message" className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={loading}
                placeholder="Describe your request..."
                className={`rounded-xl bg-black/40 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none ${
                  errors.message && touched.message
                    ? "border-red-500/50 focus:ring-red-500"
                    : "focus:ring-brand-indigo"
                }`}
              />
              {errors.message && touched.message && (
                <span className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`rounded-xl py-4 px-6 text-sm font-semibold bg-gradient-to-r from-brand-indigo to-brand-violet text-white hover:opacity-95 shadow-md shadow-brand-indigo/25 hover:shadow-brand-indigo/40 transition-all duration-300 flex items-center justify-center gap-2 mt-2 cursor-pointer ${
                loading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting request...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
