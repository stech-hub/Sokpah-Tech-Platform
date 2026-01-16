// Home.jsx
// ============================================================================
// Akin S. Sokpah – Official Home Page
// Sections:
// - Hero section
// - Founder introduction
// - Vision, Mission & Ambition
// - Core services
// - Call to action (WhatsApp)
// - Trust & credibility
// ============================================================================

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Code,
  Globe,
  LayoutDashboard,
  Users,
  HeartHandshake,
} from "lucide-react";

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-5xl text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Akin S. Sokpah
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Founder • Software Developer • AI Innovator • Tech Consultant
          </p>

          <p className="mt-6 text-gray-300 leading-relaxed">
            I build modern websites, applications, dashboards, and AI-powered
            systems that help individuals, startups, and businesses grow in
            Africa and globally.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/231777789356"
              target="_blank"
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded text-white flex items-center gap-2"
            >
              Book Me on WhatsApp <ArrowRight size={18} />
            </a>

            <a
              href="/projects"
              className="border border-gray-700 px-6 py-3 rounded hover:bg-gray-900"
            >
              View My Projects
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================================================================== */}
      {/* FOUNDER SECTION */}
      {/* ================================================================== */}
      <section className="py-20 px-6 bg-gray-950">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
          <p className="text-gray-300 leading-relaxed">
            My name is <strong>Akin S. Sokpah</strong>, a Liberian tech founder
            and developer passionate about building real-world digital solutions.
            I have founded and contributed to multiple platforms, websites, and
            applications focused on innovation, automation, and digital growth.
          </p>

          <p className="mt-4 text-gray-400">
            My work ranges from simple business websites to advanced dashboards,
            AI systems, and automation tools. I believe technology should solve
            problems, not complicate lives.
          </p>
        </motion.div>
      </section>

      {/* ================================================================== */}
      {/* VISION / MISSION / AMBITION */}
      {/* ================================================================== */}
      <section className="py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-semibold mb-3">Vision</h3>
            <p className="text-gray-400">
              To empower Africa and the world through accessible, innovative,
              and scalable technology solutions.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-semibold mb-3">Mission</h3>
            <p className="text-gray-400">
              To design and develop reliable digital platforms that help people,
              businesses, and startups succeed in the modern digital economy.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-semibold mb-3">Ambition</h3>
            <p className="text-gray-400">
              To become a globally recognized tech leader and founder originating
              from Liberia.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================================================================== */}
      {/* CORE SERVICES */}
      {/* ================================================================== */}
      <section className="py-20 px-6 bg-gray-950">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">
            What I Build
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Service icon={<Globe />} title="Websites" />
            <Service icon={<Code />} title="Web Applications" />
            <Service icon={<Cpu />} title="AI Systems" />
            <Service icon={<LayoutDashboard />} title="Dashboards" />
            <Service icon={<Users />} title="Startup Platforms" />
            <Service icon={<HeartHandshake />} title="Support & Consulting" />
          </div>
        </motion.div>
      </section>

      {/* ================================================================== */}
      {/* CALL TO ACTION */}
      {/* ================================================================== */}
      <section className="py-20 px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-gray-400 mb-6">
            Let’s turn your idea into a real digital product.
          </p>

          <a
            href="https://wa.me/231777789356"
            target="_blank"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded text-white text-lg"
          >
            Message Me on WhatsApp
          </a>
        </motion.div>
      </section>
    </div>
  );
}

// ============================================================================
// SERVICE CARD COMPONENT
// ============================================================================

function Service({ icon, title }) {
  return (
    <div className="bg-gray-900 p-6 rounded text-center hover:bg-gray-800 transition">
      <div className="mb-4 flex justify-center text-indigo-400">
        {icon}
      </div>
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}

// ============================================================================
// END OF FILE – Home.jsx
// ============================================================================
