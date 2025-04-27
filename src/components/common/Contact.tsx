import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "@/components/common/ContactForm";

export default function Contact() {
  return (
    <div className="contact-section w-full min-h-screen mt-12 md:mt-16 lg:mt-24 relative overflow-hidden mb-8 md:mb-12">
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: [0, 0.15, 0],
          x: ["120%", "-20%", "-120%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
      >
        <div className="absolute top-1/4 left-0 w-[150%] h-[60%] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent shadow-[0_0_60px_20px_rgba(74,222,128,0.3)] transform -rotate-6 blur-xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center">
          <button className="rounded-4xl relative font-thin border border-lime-300 text-gray-400 text-sm bg-transparent hover:border-gray-400 transition-all cursor-text px-10 py-2">
            <span className="bg-lime-400 rounded-full w-2 h-2 absolute left-6 top-4 animate-pulse"></span>
            Open to Opportunities
          </button>
        </motion.div>

        <h3 className="mt-0 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text  text-center text-4xl font-semibold text-transparent md:text-7xl py-2">
          Let's create something
        </h3>

        <h3 className="mt-0 bg-gradient-to-br from-lime-300 to-green-500 text-center bg-clip-text text-4xl font-semibold py-2 text-transparent md:text-7xl">
          extraordinary together
        </h3>

        <p className="mt-0 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-sm font-semibold py-4 text-transparent md:text-lg">
          Ready to transform your ideas into reality? From concept to
          completion, let's build <br /> something that sets new standards and
          exceeds expectations.
        </p>

        <motion.div className="form mt-0 bg-gradient-to-br bg-clip-text">
          <div className="relative w-full max-w-7xl mx-auto border-0 antialiased">
            <div className="form-container flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 mt-8 md:mt-12">
              <div className="w-full lg:w-1/2">
                <ContactForm />
              </div>

              <motion.div
                className="right-form-details mt-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-foreground opacity-80 mb-8">
                  Let's Connect
                </h3>

                <div className="space-y-4">
                  <motion.a
                    href="https://linkedin.com/in/syed-abutalib-ba497b322"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-60 justify-between p-4 rounded-xl bg-[#101010] border border-white/10 hover:border-emerald-400/30 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-5">
                      <div className="p-3 rounded-lg bg-[#0077B5]/10 group-hover:bg-[#0077B5]/20 transition-all">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5 text-[#0077B5]"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </div>
                      <p className="text-foreground group-hover:text-white transition-colors text-sm">
                        in/syed-abutalib-ba497b322
                      </p>
                    </div>
                    <div className="hidden sm:block text-white/40 group-hover:text-emerald-400 transition-colors ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/+9203160104467"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-5 rounded-xl bg-[#101010] border border-white/10 hover:border-emerald-400/30 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-5">
                      <div className="p-3 rounded-lg bg-[#25D366]/10 group-hover:bg-[#25D366]/20 transition-all">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5 text-[#25D366]"
                        >
                          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-3.8 1.6z"></path>
                          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm5 0a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1z"></path>
                        </svg>
                      </div>
                      <p className="text-foreground group-hover:text-white transition-colors text-sm">
                        (+92) 3160104467
                      </p>
                    </div>
                    <div className="hidden sm:block text-white/40 group-hover:text-emerald-400 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </div>
                  </motion.a>

                  <h3 className="text-lg mt-12 font-semibold text-foreground opacity-80 mb-8">
                    Send Me a Message
                  </h3>
                  <motion.a
                    href="mailto:syedabutalib.dev@gmail.com"
                    className="group flex items-center justify-between p-5 rounded-xl bg-[#101010] border border-white/10 hover:border-emerald-400/30 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-5">
                      <div className="hidden sm:block p-3 rounded-lg bg-[#EA4335]/10 group-hover:bg-[#EA4335]/20 transition-all">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5 text-[#EA4335]"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <p className="text-foreground group-hover:text-white transition-colors text-sm">
                        syedabutalib.dev@gmail.com
                      </p>
                    </div>
                    <div className="hidden sm:block text-white/40 group-hover:text-emerald-400 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
