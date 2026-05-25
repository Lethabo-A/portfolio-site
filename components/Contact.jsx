"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";
import { Mail, Phone, Copy, Check, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { icon: <GithubIcon size={20} />, href: personal.links.github, label: "GitHub", color: "hover:border-gray-400/50 hover:text-gray-300" },
    { icon: <LinkedinIcon size={20} />, href: personal.links.linkedin, label: "LinkedIn", color: "hover:border-blue-400/50 hover:text-blue-400" },
    { icon: <InstagramIcon size={20} />, href: personal.links.instagram, label: "Instagram", color: "hover:border-pink-400/50 hover:text-pink-400" },
    { icon: <Award size={20} />, href: personal.links.accredible, label: "Certifications", color: "hover:border-yellow-400/50 hover:text-yellow-400" },
  ];

  return (
    <section id="contact" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Whether you&apos;re looking for an automation developer, have a project in mind, or just want to say hello — I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Email card */}
            <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6">
              <div className="flex items-center gap-3 mb-2">
                <Mail size={18} className="text-cyan-400" />
                <span className="text-sm font-medium text-gray-300">Email</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">{personal.email}</p>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-white/10 text-gray-400 hover:border-cyan-500/40 hover:text-cyan-400 transition-all"
                >
                  {copied ? <><Check size={12} /> Copied!</> : <><Copy size={12} /> Copy</>}
                </button>
              </div>
            </div>

            {/* Phone card */}
            <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6">
              <div className="flex items-center gap-3 mb-2">
                <Phone size={18} className="text-cyan-400" />
                <span className="text-sm font-medium text-gray-300">Phone</span>
              </div>
              <p className="text-sm text-gray-400">{personal.phone}</p>
            </div>

            {/* Social links */}
            <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6">
              <p className="text-sm font-medium text-gray-300 mb-4">Find me online</p>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map(({ icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border border-white/5 text-gray-500 text-sm transition-all duration-200 ${color}`}
                  >
                    {icon}
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${personal.email}`; }}
            className="bg-white/[0.03] rounded-2xl border border-white/5 p-6 space-y-4"
          >
            <h3 className="text-base font-semibold text-white mb-2">Send a message</h3>
            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Your Name</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Email Address</label>
              <input
                type="email"
                required
                placeholder="john@company.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Hi Lethabo, I'd like to discuss..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Send Message →
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
