import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black w-full mt-8 border-t border-white/10 footer ">
      <div className="max-w-7xl mx-auto w-full px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between w-full gap-8">
          <motion.div
            className="left-footer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="const-profile relative">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-3 w-3 rounded-full bg-emerald-400"
                />
                <code className="text-sm md:text-base font-mono text-white/80 hover:text-emerald-400 transition-colors">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-emerald-400">profile </span> = {"{"}
                </code>
              </div>

              <div className="ml-8 mt-4 space-y-2">
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-white/50">/*</span>
                  <span className="text-white/70 text-sm">
                    Crafted with passion
                  </span>
                  <span className="text-white/50">*/</span>
                </motion.div>

                <code className="block font-mono text-white/70 hover:text-white transition-colors">
                  <span className="text-purple-400">name</span>:{" "}
                  <span className="text-emerald-400">'Syed Abu-Talib'</span>,
                </code>
                <code className="block font-mono text-white/70 hover:text-white transition-colors">
                  <span className="text-purple-400">passion</span>:{" "}
                  <span className="text-emerald-400">
                    'Crafting Digital Experiences'
                  </span>
                  ,
                </code>
                <code className="block font-mono text-white/70 hover:text-white transition-colors">
                  <span className="text-purple-400">expertise</span>:{" "}
                  <span className="text-emerald-400">
                    'Full Stack Magic ✨'
                  </span>
                  ,
                </code>
                <code className="block font-mono text-white/70 hover:text-white transition-colors">
                  <span className="text-purple-400">Status</span>:{" "}
                  <span className="text-emerald-400">
                    'Building the Next Big Thing'
                  </span>
                </code>

                <code className="text-sm md:text-base font-mono text-white/80">
                  {"}"}
                </code>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="right-footer flex flex-col gap-6 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="code-block font-mono text-white/80">
              <div className="flex items-center">
                <span className="text-purple-400">function</span>{" "}
                <span className="text-emerald-400 ml-1">createAmazing</span>
                <span>() {"{"}</span>
              </div>
              <div className="ml-4">
                <span className="text-blue-400">return</span>{" "}
                <span className="text-amber-300">_</span>
              </div>
              <div>{"}"}</div>
              <div className="mt-4 text-emerald-400">
                $ npm run build-something-awesome
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent my-4"></div>

            <div className="text-white/70 text-sm md:text-base space-y-2">
              <p>ready for challenges and collaborations</p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <span className="text-emerald-400">🚀</span> Always Shipping
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 pt-6 border-t border-white/10 text-center text-white/50 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          © {new Date().getFullYear()} Made By 💖💖 Syed Abu-Talib.
        </motion.div>
      </div>
    </footer>
  );
}
