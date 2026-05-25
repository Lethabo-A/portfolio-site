"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

const categories = ["All", "RPA", "Python", "Web"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Things I&apos;ve{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Built
            </span>
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                  active === c
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((proj, i) => (
              <motion.div
                key={proj.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group bg-white/[0.03] rounded-2xl border border-white/5 p-6 hover:border-cyan-500/20 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${
                    proj.category === "RPA" ? "border-cyan-500/30 text-cyan-400 bg-cyan-500/5" :
                    proj.category === "Python" ? "border-yellow-500/30 text-yellow-400 bg-yellow-500/5" :
                    "border-violet-500/30 text-violet-400 bg-violet-500/5"
                  }`}>
                    {proj.category}
                  </span>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-cyan-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={16} />
                  </a>
                </div>

                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {proj.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{proj.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-500 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyan-400 transition-colors mt-auto"
                >
                  <ExternalLink size={12} /> View on GitHub
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
