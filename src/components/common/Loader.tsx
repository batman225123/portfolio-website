"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techPhrases = [
  "Booting systems...",
  "Mounting components...",
  "Compiling assets...",
  "Establishing connection...",
  "Loading Website...",
  "Connecting to Website...",
  "// Ready for DEV_TALIB",
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [showName, setShowName] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
    // Immediately lock scroll to top
    window.scrollTo(0, 0);

    const phraseInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * techPhrases.length);
      setCurrentPhrase(techPhrases[randomIndex]);
    }, 100);

    const timer = setTimeout(() => {
      clearInterval(phraseInterval);
      setShowName(true);
    }, 2500);

    const completeTimer = setTimeout(() => {
      setExitAnimation(true);
      setTimeout(() => {
        document.body.style.overflow = "";
        onComplete();
      }, 1000); // Match this with exit animation duration
    }, 4000);

    return () => {
      clearInterval(phraseInterval);
      clearTimeout(timer);
      clearTimeout(completeTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exitAnimation && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{
            y: "-100vh",
            transition: {
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          <div className="text-center font-mono">
            <AnimatePresence mode="wait">
              {!showName ? (
                <motion.div
                  key="phrases"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-green-400 text-sm md:text-lg"
                >
                  {currentPhrase}
                  <span className="ml-1 animate-pulse">▋</span>
                </motion.div>
              ) : (
                <motion.div
                  key="name"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="text-green-400 text-3xl md:text-5xl font-bold"
                >
                  DEV_TALIB
                  <motion.div
                    className="h-1 bg-green-400 mt-2"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
