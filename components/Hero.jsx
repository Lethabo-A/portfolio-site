"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { personal } from "@/data/portfolio";
import { Download, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";

const roles = ["AI & Automation Developer", "UiPath RPA Developer", "Power Platform Builder", "Process Automation Engineer"];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-cyan-400 font-medium mb-4 h-7"
          >
            <RoleCycler roles={roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg"
          >
            {personal.summary.split(".").slice(0, 2).join(".")}. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              View Projects
            </button>
            <a
              href="/portfolio-site/LethabolAnyanwu_CV_2026.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-gray-300 font-medium text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
            >
              <Download size={15} /> Download CV
            </a>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-full border border-cyan-500/30 text-cyan-400 font-medium text-sm hover:bg-cyan-500/10 transition-all duration-300"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4"
          >
            {[
              { icon: <GithubIcon size={18} />, href: personal.links.github, label: "GitHub" },
                      { icon: <LinkedinIcon size={18} />, href: personal.links.linkedin, label: "LinkedIn" },
                      { icon: <InstagramIcon size={18} />, href: personal.links.instagram, label: "Instagram" },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 blur-2xl scale-110" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-cyan-500/20 ring-4 ring-cyan-500/5">
              <Image
                src="/images/hero.png"
                alt="Lethabo Anyanwu"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-[#111827] border border-cyan-500/30 rounded-xl px-4 py-2 text-xs text-cyan-400 shadow-xl"
            >
              🤖 UiPath Certified
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -left-6 bg-[#111827] border border-violet-500/30 rounded-xl px-4 py-2 text-xs text-violet-400 shadow-xl"
            >
              ⚡ AI Automation
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function RoleCycler({ roles }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2500);
    return () => clearInterval(t);
  }, [roles.length]);
  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="block"
    >
      {roles[index]}
    </motion.span>
  );
}
