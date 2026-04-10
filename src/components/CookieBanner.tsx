"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-50 max-w-sm md:max-w-md w-full"
        >
          <div className="bg-white/90 backdrop-blur-md border border-slate-200/50 shadow-2xl rounded-2xl p-5 md:p-6 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-violet-600/10 rounded-full blur-2xl -ml-8 -mb-8 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-fuchsia-50 text-fuchsia-600 rounded-xl">
                    <Cookie className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-800 text-lg font-display">We value your privacy</h3>
                </div>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 hover:bg-slate-100 p-1.5 rounded-full"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <p className="text-slate-600 text-sm mt-4 font-sans leading-relaxed">
                We use cookies to improve your experience, analyze traffic, and personalize content. By clicking "Accept", you consent to our use of cookies.
              </p>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleDecline}
                  className="flex-1 px-4 py-2.5 rounded-xl border-2 border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 hover:border-slate-300 transition-all focus:outline-none focus:ring-2 focus:ring-slate-200 font-sans"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white font-medium text-sm hover:from-fuchsia-700 hover:to-violet-700 shadow-glow transition-all focus:outline-none focus:ring-2 focus:ring-fuchsia-600 focus:ring-offset-2 active:scale-[0.98] font-sans"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
