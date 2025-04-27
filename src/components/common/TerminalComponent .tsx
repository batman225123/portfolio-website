"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface TerminalProps {
  welcomeMessage?: string;
  height?: string;
  width?: string;
  projects?: Project[];
}

export const TerminalComponent = ({
  welcomeMessage = "Commands",
  height = "h-96",
  width = "w-full max-w-2xl",
  projects = [
    {
      name: "everyday-fits",
      description:
        "Everyday Fits kept growing and launching products as per the contemporary men’s fashion. With every passing year the wardrobe for men kept improving due to the untiring efforts of stylist designers and team absolute menswear brand of Pakistan.",
      technologies: [
        "REACT.JS",
        "LARAVEL 11",
        "MYSQL",
        "TAILWIND CSS",
        "BOOTSTRAP",
        "GSAP",
        "FRAMER MOTION",
      ],
      link: "https://everydayfits.com/",
    },
    {
      name: "creative-design-tech",
      description:
        "Creative Design Tech seems to be a great option for those seeking digital services that are customized to their needs. With a team of experienced designers, developers, and publishers,they aim to provide tailored solutions without the need for trial and error.",

      technologies: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "PHP",
        "MYSQL",
        "BOOTSTRAP",
        "GSAP",
      ],
      link: "https://creativedesigntech.com/",
    },
  ],
}: TerminalProps) => {
  const [commands, setCommands] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [viewingProject, setViewingProject] = useState<Project | null>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset terminal completely on clear
  const clearTerminal = () => {
    setCommands([]);
    setViewingProject(null);
    setInput("");
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newCommands = [...commands, `$ ${input}`];
    const [command, ...args] = input.toLowerCase().split(" ");

    switch (command) {
      case "clear":
        clearTerminal();
        return; // Skip adding to history
      case "help":
        newCommands.push(
          "Available commands:",
          "  help     - Show this help",
          "  clear    - Reset terminal",
          "  about    - About me",
          "  ls       - List projects",
          "  view [p] - View project details",
          "  contact  - Contact information"
        );
        break;
      case "about":
        newCommands.push(
          "I'm a full-stack developer who creates seamless, scalable, and visually stunning web and mobile applications:",
          "  - React/Next.js frontends",
          "  - Php/Laravel backends",
          "  - Wordpress/Elementor"
        );
        break;
      case "ls":
        newCommands.push("Available projects:", "Run view [slug]:");
        projects.forEach((project) => {
          newCommands.push(`  - ${project.name}`);
        });
        break;
      case "view":
        const projectName = args.join(" ");
        const project = projects.find((p) => p.name === projectName);
        if (project) {
          setViewingProject(project);
        } else {
          newCommands.push(`Project not found: ${projectName}`);
        }
        break;
      case "contact":
        newCommands.push(
          "Get in touch:",
          "  Email: baaliawg@gmail.com",
          "  Whatsapp: (+92) 3160104467",
          "  LinkedIn: linkedin.com/in/syed-abutalib-ba497b322"
        );
        break;
      default:
        newCommands.push(
          `Command not found: ${input}. Type 'help' for commands.`
        );
    }

    setCommands(newCommands);
    setInput("");
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [commands, viewingProject]);

  // Focus input on mount and after commands
  useEffect(() => {
    inputRef.current?.focus();
  }, [commands, viewingProject]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${width} mx-auto`}
    >
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg overflow-hidden shadow-2xl my-10">
        {/* Terminal Header */}
        <motion.div
          className="bg-gray-900/50 border-b border-gray-800 p-3 flex items-center"
          whileHover={{ backgroundColor: "rgba(17, 24, 39, 0.7)" }}
        >
          <Terminal className="h-4 w-4 text-green-400" />
          <span className="text-sm font-mono text-gray-300 ml-2">terminal</span>
          <div className="flex gap-2 ml-auto">
            <motion.div
              className="h-3 w-3 rounded-full bg-red-500 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={clearTerminal}
            />
            <motion.div
              className="h-3 w-3 rounded-full bg-yellow-500 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.div
              className="h-3 w-3 rounded-full bg-green-500 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </div>
        </motion.div>

        {/* Terminal Content */}
        <div
          className={`${height} overflow-y-auto font-mono text-sm p-4 flex flex-col bg-[#0a0a0a]/90`}
        >
          <AnimatePresence>
            {viewingProject ? (
              <motion.div
                key="project-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="mb-4"
              >
                <div className="text-green-400 text-lg mb-2">
                  {viewingProject.name}
                </div>
                <div className="text-gray-300 mb-2">
                  {viewingProject.description}
                </div>
                <div className="text-gray-400 mb-2">
                  <span className="text-green-400">Tech:</span>{" "}
                  {viewingProject.technologies.join(", ")}
                </div>
                {viewingProject.link && (
                  <a
                    href={viewingProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    View Project
                  </a>
                )}
                <motion.button
                  onClick={() => setViewingProject(null)}
                  className="mt-3 ms-3 text-gray-400 hover:text-gray-300 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  [back to terminal]
                </motion.button>
              </motion.div>
            ) : (
              <>
                {commands.length === 0 && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-green-500 mb-1 text-xl"
                    >
                      {welcomeMessage}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-400 mb-4 mt-3 text-2xl"
                    >
                      <span className="text-green-500 text-2xl">ls </span>-
                      unlock my featured projects
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-400 mb-4 mt-3 text-2xl"
                    >
                      <span className="text-green-500 text-2xl">
                        view [project-name]{" "}
                      </span>
                      - discover more about the project
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-400 mb-4 mt-3 text-2xl"
                    >
                      <span className="text-green-500 text-2xl">clear </span>-
                      clear terminal
                    </motion.div>
                  </>
                )}

                <div className="flex-1 space-y-1">
                  {commands.map((cmd, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={
                        cmd.startsWith("$")
                          ? "text-gray-300"
                          : cmd.startsWith("  -")
                          ? "text-gray-400 ml-4"
                          : cmd.startsWith("Available") ||
                            cmd.startsWith("Tech:")
                          ? "text-green-400"
                          : "text-gray-400"
                      }
                    >
                      {cmd}
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </AnimatePresence>

          {/* Input Area */}
          <motion.form
            onSubmit={handleCommand}
            className="sticky bottom-0 bg-[#0a0a0a] pb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <motion.span
                className="text-green-400"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                $
              </motion.span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 text-xl bg-transparent text-green-500 outline-none caret-green-400"
                autoFocus
                aria-label="Terminal input"
                spellCheck="false"
              />
            </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};
