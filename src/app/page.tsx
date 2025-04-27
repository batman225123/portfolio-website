"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Loader from "@/components/common/Loader";
import Footer from "@/components/common/Footer";
import Contact from "@/components/common/Contact";
import Nav from "@/components/common/Nav";
import HeroSection from "@/components/common/HeriSection";
import ShowTerminal from "@/components/common/ShowTerminal";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="bg-black">
      <Loader onComplete={() => setIsLoaded(false)} />
      {!isLoaded && (
        <>
          <motion.section
            className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-6"
            style={{
              backgroundSize: "45px 45px",
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.1) 0.2px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 0.2px, transparent 1px)
              `,
            }}
          >
            <div className="max-w-7xl mx-auto">
              <Nav />
              <HeroSection />
              <ShowTerminal />
            </div>
            <Contact />
          </motion.section>
          <Footer />
        </>
      )}
    </main>
  );
}
