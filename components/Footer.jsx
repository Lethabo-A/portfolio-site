"use client";
import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";
import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Footer() {
  const links = [
    { icon: <GithubIcon size={18} />, href: personal.links.github, label: "GitHub" },
    { icon: <LinkedinIcon size={18} />, href: personal.links.linkedin, label: "LinkedIn" },
    { icon: <InstagramIcon size={18} />, href: personal.links.instagram, label: "Instagram" },
  ];

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
            Lethabo Anyanwu
          </p>
          <p className="text-xs text-gray-600">AI & Automation Developer · South Africa</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-3"
        >
          {links.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-gray-600 flex items-center gap-1"
        >
          Built with <Heart size={12} className="text-red-500 fill-red-500" /> in South Africa · {new Date().getFullYear()}
        </motion.p>
      </div>
    </footer>
  );
}
