"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { personal, achievements } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d0d14] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 rounded-2xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/5">
              <Image
                src="/images/about.png"
                alt="Lethabo Anyanwu"
                width={400}
                height={500}
                className="object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14]/80 to-transparent" />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-[#111827]/90 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-2xl">
              <p className="text-2xl font-bold text-cyan-400">2+</p>
              <p className="text-xs text-gray-400">Years Experience</p>
            </div>
            <div className="absolute -top-6 -left-6 bg-[#111827]/90 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-2xl">
              <p className="text-2xl font-bold text-violet-400">10+</p>
              <p className="text-xs text-gray-400">Projects Built</p>
            </div>
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Building intelligent automations that{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              actually work
            </span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">{personal.summary}</p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              { label: "Location", value: "South Africa" },
              { label: "Email", value: "lethaboanyanwu2@gmail.com" },
              { label: "Degree", value: "BSc Hons IT (In Progress)" },
              { label: "Focus", value: "AI & RPA Automation" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/5 rounded-xl p-3 border border-white/5">
                <p className="text-xs text-gray-500 mb-1">{label}</p>
                <p className="text-sm text-gray-200 font-medium truncate">{value}</p>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div>
            <p className="text-sm font-semibold text-gray-300 mb-3">🏆 Achievements</p>
            <div className="space-y-2">
              {achievements.map((a) => (
                <div
                  key={a.title}
                  className="flex items-center gap-3 text-sm text-gray-400 bg-white/5 rounded-lg px-3 py-2 border border-white/5"
                >
                  <span>{a.icon}</span>
                  <span>{a.title}</span>
                  <span className="ml-auto text-xs text-gray-600">{a.year}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
