"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";

export default function TryForFreeButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [consentData, setConsentData] = useState(false);
  const [consentTerms, setConsentTerms] = useState(false);

  useEffect(() => {
    // Check if the user has already consented 
    const storedConsent = localStorage.getItem("mentoraAppConsent");
    if (storedConsent === "true") {
      setHasConsented(true);
    }
  }, []);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (hasConsented) {
      window.location.href = "https://app.mentoratanzania.co.tz/register";
    } else {
      setIsModalOpen(true);
    }
  };

  const handleProceed = () => {
    if (consentData && consentTerms) {
      localStorage.setItem("mentoraAppConsent", "true");
      setHasConsented(true);
      setIsModalOpen(false);
      window.location.href = "https://app.mentoratanzania.co.tz/register";
    }
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="px-8 py-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-bold tracking-wide hover:shadow-glow transition-all transform hover:-translate-y-1 inline-block focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2"
      >
        TRY FOR FREE
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200"
            >
              {/* Header Accent */}
              <div className="bg-gradient-to-r from-fuchsia-50 to-violet-50 px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-fuchsia-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-xl font-display">Data Privacy &amp; Consent</h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-1.5 rounded-full hover:bg-white focus:outline-none"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                  Before you access Mentora, we require your explicit consent regarding your data. To comply with the <strong className="text-slate-800">Tanzania Data Protection Act (2022)</strong> and global data privacy standards (such as GDPR), we need you to understand and agree to how we handle your information.
                </p>

                <div className="space-y-4">
                  {/* Checkbox 1 */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center mt-0.5">
                      <input
                        type="checkbox"
                        className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-1 checked:bg-fuchsia-600 checked:border-fuchsia-600 transition-colors cursor-pointer"
                        checked={consentData}
                        onChange={(e) => setConsentData(e.target.checked)}
                      />
                      <svg
                        className="absolute w-3.5 h-3.5 inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                      I consent to Mentora collecting my email address and account usage data for the purpose of creating my account, personalizing my experience, and providing the service.
                    </span>
                  </label>

                  {/* Checkbox 2 */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center mt-0.5">
                      <input
                        type="checkbox"
                        className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-1 checked:bg-fuchsia-600 checked:border-fuchsia-600 transition-colors cursor-pointer"
                        checked={consentTerms}
                        onChange={(e) => setConsentTerms(e.target.checked)}
                      />
                      <svg
                        className="absolute w-3.5 h-3.5 inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                      I have read and agree to the <a href="/terms" className="text-fuchsia-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">Terms and Conditions</a> and the <a href="/privacy" className="text-fuchsia-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                    </span>
                  </label>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-slate-50 p-6 border-t border-slate-100 flex flex-col-reverse sm:flex-row justify-end gap-3 rounded-b-2xl">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border-2 border-slate-200 text-slate-700 font-medium text-sm hover:bg-white hover:border-slate-300 transition-all focus:outline-none focus:ring-2 focus:ring-slate-200 font-sans"
                >
                  Cancel
                </button>
                <button
                  onClick={handleProceed}
                  disabled={!(consentData && consentTerms)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white font-medium text-sm shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 disabled:hover:shadow-none hover:shadow-glow font-sans flex items-center justify-center"
                >
                  Proceed to App
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
