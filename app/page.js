"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

const Hero       = dynamic(() => import("@/components/Hero"),       { ssr: false });
const About      = dynamic(() => import("@/components/About"),      { ssr: false });
const Skills     = dynamic(() => import("@/components/Skills"),     { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Projects   = dynamic(() => import("@/components/Projects"),   { ssr: false });
const Education  = dynamic(() => import("@/components/Education"),  { ssr: false });
const Contact    = dynamic(() => import("@/components/Contact"),    { ssr: false });
const Footer     = dynamic(() => import("@/components/Footer"),     { ssr: false });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
