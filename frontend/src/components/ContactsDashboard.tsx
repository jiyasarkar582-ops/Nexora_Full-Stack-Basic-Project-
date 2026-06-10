import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Trash2, RefreshCw, Download, User, Mail, 
  FileText, Database, CheckCircle2, AlertTriangle, ArrowLeft, Copy, Check, UserPlus
} from "lucide-react";
import { getContacts, deleteContact, seedContacts, clearContacts, type Contact } from "../services/api";

export default function ContactsDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDbOnline, setIsDbOnline] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  
  // Notification Toast State
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const fetchContactsData = async (silent = false) => {
    if (!silent) setLoading(true);
    setIsRefreshing(true);
    
    // Quick delay for smooth UX feeling
    const start = Date.now();
    try {
      const data = await getContacts();
      
      // Check if data is coming from DB or localStorage by trying to hit the live endpoint
      // We already know if getContacts succeeds it hit the backend
      // Let's do a simple check. If we got elements and they don't have local timestamps,
      // or we can test if the server port 8080 is reachable.
      const response = await fetch("http://localhost:8080/contacts", { method: "GET" })
        .then(r => r.ok)
        .catch(() => false);

      setIsDbOnline(response);
      setContacts(data);
    } catch (err) {
      console.error(err);
      setIsDbOnline(false);
      showToast("Error connecting to database. Running in offline/local storage fallback.", "error");
    } finally {
      const elapsed = Date.now() - start;
      const delay = Math.max(0, 600 - elapsed); // Ensure animation feels deliberate
      setTimeout(() => {
        setLoading(false);
        setIsRefreshing(false);
      }, delay);
    }
  };

  useEffect(() => {
    fetchContactsData();
  }, []);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this contact submission?")) {
      try {
        const success = await deleteContact(id);
        if (success) {
          setContacts(prev => prev.filter(c => c.id !== id));
          showToast("Contact submission deleted successfully.", "success");
        } else {
          showToast("Failed to delete contact.", "error");
        }
      } catch (err) {
        showToast("Error deleting contact.", "error");
      }
    }
  };

  const handleSeed = async () => {
    setActionLoading(true);
    showToast("Generating 1,000 mock user inquiries...", "success");
    try {
      const success = await seedContacts();
      if (success) {
        showToast("Successfully loaded 1,000 mock users into dashboard!", "success");
        await fetchContactsData(true);
      } else {
        showToast("Failed to seed mock contacts.", "error");
      }
    } catch (err) {
      showToast("Error seeding contacts.", "error");
    } finally {
      setActionLoading(false);
    }
  };

  const handleClear = async () => {
    if (window.confirm("Are you sure you want to permanently clear ALL contact submissions? This action cannot be undone.")) {
      setActionLoading(true);
      try {
        const success = await clearContacts();
        if (success) {
          setContacts([]);
          showToast("Cleared all submissions.", "success");
        } else {
          showToast("Failed to clear submissions.", "error");
        }
      } catch (err) {
        showToast("Error clearing submissions.", "error");
      } finally {
        setActionLoading(false);
      }
    }
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(key);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter contacts based on query
  const filteredContacts = contacts.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Stats calculations
  const totalSubmissions = contacts.length;
  const filteredSubmissions = filteredContacts.length;
  
  // Calculate today's submissions count
  const todaysCount = contacts.filter(c => {
    if (c.timestamp) {
      const date = new Date(c.timestamp);
      const today = new Date();
      return date.getDate() === today.getDate() &&
             date.getMonth() === today.getMonth() &&
             date.getFullYear() === today.getFullYear();
    }
    // For backend DB records, ID auto-increment can serve as proxy or they don't have timestamp. 
    // We will just count entries created with ID >= 1 for stats purposes if timestamp is missing.
    return false;
  }).length;

  const exportToCSV = () => {
    if (filteredContacts.length === 0) {
      showToast("No data to export.", "error");
      return;
    }
    
    const headers = ["ID", "Name", "Email", "Message", "Timestamp"];
    const rows = filteredContacts.map(c => [
      c.id,
      `"${c.name.replace(/"/g, '""')}"`,
      `"${c.email.replace(/"/g, '""')}"`,
      `"${c.message.replace(/"/g, '""')}"`,
      c.timestamp || "N/A"
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
      
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `nexora_contacts_export_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Exported filtered contacts to CSV file.", "success");
  };

  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
      
      {/* Background Radial Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] radial-glow pointer-events-none -z-10" />

      {/* Floating Action/Notification Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-2xl px-5 py-4 border w-full max-w-md shadow-2xl bg-[#08090A] ${
              toast.type === "success" ? "border-brand-indigo/35 text-white" : "border-red-500/30 text-white"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-brand-indigo shrink-0" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
            )}
            <div className="text-sm font-medium flex-1 text-left">
              {toast.message}
            </div>
            <button 
              onClick={() => setToast(null)} 
              className="text-slate-400 hover:text-white text-xs font-semibold cursor-pointer px-2 py-1 rounded hover:bg-white/5"
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="text-left">
          <button 
            onClick={() => window.location.hash = ""} 
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors duration-200 uppercase tracking-widest mb-4 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </button>
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2 font-sans">
            Inquiries <span className="text-gradient-purple">Dashboard</span>
          </h1>
          <p className="text-slate-400 text-sm">
            Manage, filter, and inspect client leads submitted through the developer form.
          </p>
        </div>

        {/* Global Toolbar */}
        <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
          <button
            onClick={handleSeed}
            disabled={actionLoading || isRefreshing}
            className="rounded-xl px-4 py-3 bg-[#121316] border border-brand-indigo/30 text-brand-indigo hover:text-white hover:bg-brand-indigo/10 transition-all text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            title="Generate 1,000 mock submissions to test performance"
          >
            <UserPlus className="w-3.5 h-3.5" />
            Seed 1k Contacts
          </button>
          
          <button
            onClick={handleClear}
            disabled={actionLoading || isRefreshing}
            className="rounded-xl px-4 py-3 bg-[#121316] border border-red-500/20 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            title="Delete all contact entries"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear All
          </button>

          <button
            onClick={() => fetchContactsData(false)}
            disabled={actionLoading || isRefreshing}
            className="rounded-xl px-4 py-3 bg-[#121316] border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-all text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin text-brand-indigo" : ""}`} />
            Refresh
          </button>
          
          <button
            onClick={exportToCSV}
            disabled={actionLoading || isRefreshing}
            className="rounded-xl px-4 py-3 bg-gradient-to-r from-brand-indigo to-brand-violet text-white font-semibold transition-all hover:opacity-95 text-xs flex items-center gap-2 cursor-pointer shadow-md shadow-brand-indigo/15 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Analytics Summary Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        
        {/* Metric 1 */}
        <div className="rounded-2xl border border-white/5 bg-[#121316]/50 backdrop-blur-xl p-5 text-left shadow-lg">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
              Total Inquiries
            </span>
            <div className="p-2 bg-white/5 rounded-lg">
              <FileText className="w-4 h-4 text-slate-300" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">{totalSubmissions}</div>
          <p className="text-[11px] text-slate-500 mt-1">Total entries in active list</p>
        </div>

        {/* Metric 2 */}
        <div className="rounded-2xl border border-white/5 bg-[#121316]/50 backdrop-blur-xl p-5 text-left shadow-lg">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
              Database Connectivity
            </span>
            <div className="p-2 bg-white/5 rounded-lg">
              <Database className="w-4 h-4 text-slate-300" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${isDbOnline ? "bg-brand-indigo animate-pulse" : "bg-amber-400 animate-pulse"}`} />
            <span className="text-lg font-bold text-white">
              {isDbOnline ? "MySQL Live" : "Offline Fallback"}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1.5">
            {isDbOnline ? "Directly synced to remote database" : "Reading offline submissions storage"}
          </p>
        </div>

        {/* Metric 3 */}
        <div className="rounded-2xl border border-white/5 bg-[#121316]/50 backdrop-blur-xl p-5 text-left shadow-lg">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
              Today's Submissions
            </span>
            <div className="p-2 bg-white/5 rounded-lg">
              <User className="w-4 h-4 text-slate-300" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white">{todaysCount}</div>
          <p className="text-[11px] text-slate-500 mt-1">Submitted in the current calendar date</p>
        </div>

      </div>

      {/* Main Table Card Area */}
      <div className="rounded-2xl border border-white/10 bg-[#121316]/60 backdrop-blur-xl overflow-hidden shadow-xl">
        
        {/* Search and Filters Header */}
        <div className="p-5 border-b border-white/5 bg-[#0e0f12]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by name, email domain, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-indigo transition-all"
            />
          </div>
          
          <div className="text-xs text-slate-400 font-mono self-end sm:self-auto">
            Showing {filteredSubmissions} of {totalSubmissions} records
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          {loading ? (
            // Skeleton Loader States
            <div className="p-8 space-y-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex gap-4 animate-pulse">
                  <div className="h-10 bg-white/5 rounded-lg w-12" />
                  <div className="h-10 bg-white/5 rounded-lg flex-1" />
                  <div className="h-10 bg-white/5 rounded-lg flex-1" />
                  <div className="h-10 bg-white/5 rounded-lg flex-[2]" />
                  <div className="h-10 bg-white/5 rounded-lg w-12" />
                </div>
              ))}
            </div>
          ) : filteredSubmissions === 0 ? (
            // Empty State
            <div className="py-20 px-4 text-center">
              <FileText className="w-12 h-12 mx-auto mb-4 text-slate-600" />
              <h3 className="text-sm font-semibold text-white mb-1">No contact submissions found</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                {searchQuery ? "Try refining your search query to locate the record." : "Submit an inquiry via the main landing page form to test database insertions."}
              </p>
            </div>
          ) : (
            // Data Table
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-black/35 border-b border-white/10">
                  <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono w-16">
                    ID
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono w-48">
                    Sender Info
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                    Message Copy
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono w-24 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map(c => (
                  <tr 
                    key={c.id} 
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-150"
                  >
                    {/* ID */}
                    <td className="py-4 px-6 font-mono font-semibold text-brand-indigo">
                      #{c.id}
                    </td>

                    {/* Sender Info */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col gap-1.5 align-left text-left">
                        <div className="font-semibold text-white flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span>{c.name}</span>
                        </div>
                        <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                          <Mail className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                          <span className="truncate max-w-[200px]">{c.email}</span>
                          <button 
                            onClick={() => handleCopy(c.email, `e-${c.id}`)}
                            className="p-1 hover:bg-white/10 rounded text-slate-500 hover:text-white transition-colors cursor-pointer"
                          >
                            {copiedId === `e-${c.id}` ? <Check className="w-3 h-3 text-brand-indigo" /> : <Copy className="w-3 h-3" />}
                          </button>
                        </div>
                      </div>
                    </td>

                    {/* Message Copy */}
                    <td className="py-4 px-6 text-left max-w-lg">
                      <div className="flex gap-2 items-start text-slate-300 leading-relaxed text-xs sm:text-sm">
                        <FileText className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                        <div className="break-all whitespace-pre-wrap flex-1">{c.message}</div>
                        <button 
                          onClick={() => handleCopy(c.message, `m-${c.id}`)}
                          className="p-1 hover:bg-white/10 rounded text-slate-500 hover:text-white transition-colors cursor-pointer shrink-0"
                          title="Copy message to clipboard"
                        >
                          {copiedId === `m-${c.id}` ? <Check className="w-3.5 h-3.5 text-brand-indigo" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => handleDelete(c.id)}
                        className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors cursor-pointer shadow-sm"
                        title="Delete inquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>

    </section>
  );
}
