"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { education, certifications } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0d0d14] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Academic{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Background
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-6">Degrees</h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/[0.03] rounded-2xl border border-white/5 p-5 hover:border-white/10 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-1">{edu.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white mb-1">{edu.degree}</h4>
                      <p className="text-xs text-cyan-400 mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{edu.period}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          edu.status === "In Progress"
                            ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                            : "bg-green-500/10 text-green-400 border border-green-500/20"
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Graduation image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 rounded-2xl overflow-hidden border border-white/5 relative h-48"
            >
              <Image
                src="/images/graduation.png"
                alt="Graduation"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14]/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-semibold text-white">North-West University</p>
                <p className="text-xs text-cyan-400">BSc Information Technology · Class of 2024</p>
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 bg-white/[0.03] rounded-2xl border border-white/5 p-5 hover:border-cyan-500/20 transition-all group cursor-pointer"
                >
                  <span className="text-2xl shrink-0">{cert.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{cert.year}</p>
                  </div>
                  <ExternalLink size={14} className="text-gray-600 group-hover:text-cyan-400 transition-colors shrink-0" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
