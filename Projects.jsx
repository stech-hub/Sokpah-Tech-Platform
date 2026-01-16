// Projects.jsx
// ============================================================================
// Akin S. Sokpah – Projects & Products Page
// Shows:
// - Websites founded
// - Applications (APK)
// - Live platforms
// - GitHub & deployment links
// ============================================================================

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Github,
  ExternalLink,
  Download,
} from "lucide-react";

// ============================================================================
// ANIMATION
// ============================================================================

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// ============================================================================
// PROJECT DATA
// ============================================================================

const projects = [
  {
    title: "BioNurse APK",
    type: "Mobile Application",
    description:
      "A healthcare-focused Android application built to support users with medical information and tools.",
    tech: ["Android", "WebView", "API"],
    live: null,
    download:
      "https://github.com/stech-hub/bionurseapk-website/releases/download/v1/myapp.apk",
  },
  {
    title: "Full Task AI",
    type: "AI Web Platform",
    description:
      "An AI-powered task and automation platform designed to assist users with productivity and intelligent workflows.",
    tech: ["React", "AI", "Automation"],
    live: "https://full-task-ai.vercel.app/",
    download: null,
  },
  {
    title: "Akin S. Sokpah Official Website",
    type: "Founder Platform",
    description:
      "Personal founder website showcasing projects, services, dashboard, and support center.",
    tech: ["React", "Tailwind", "GitHub Pages"],
    live: "/",
    download: null,
  },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Projects() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-6xl mx-auto"
      >
        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-4">Projects & Products</h1>
        <p className="text-gray-400 mb-12">
          Platforms, applications, and systems founded and built by Akin S.
          Sokpah.
        </p>

        {/* PROJECT LIST */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800"
            >
              {/* ICON */}
              <div className="mb-4 text-indigo-400">
                {project.type.includes("Mobile") ? (
                  <Smartphone size={32} />
                ) : (
                  <Globe size={32} />
                )}
              </div>

              {/* TITLE */}
              <h2 className="text-2xl font-semibold mb-2">
                {project.title}
              </h2>

              <p className="text-sm text-gray-500 mb-3">
                {project.type}
              </p>

              {/* DESCRIPTION */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-800 px-3 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-indigo-400 hover:underline"
                  >
                    <ExternalLink size={16} /> View Live
                  </a>
                )}

                {project.download && (
                  <a
                    href={project.download}
                    target="_blank"
                    className="flex items-center gap-2 text-green-400 hover:underline"
                  >
                    <Download size={16} /> Download APK
                  </a>
                )}

                <a
                  href="https://github.com"
                  target="_blank"
                  className="flex items-center gap-2 text-gray-400 hover:underline"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CREDIBILITY */}
        <div className="mt-20 bg-gray-950 p-8 rounded border border-gray-800">
          <h3 className="text-2xl font-bold mb-4">Founder Statement</h3>
          <p className="text-gray-400 leading-relaxed">
            Every project listed here was either fully founded, developed, or
            technically led by <strong>Akin S. Sokpah</strong>. My focus is on
            building real solutions with long-term impact, not just demos.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================================================
// END OF FILE – Projects.jsx
// ============================================================================
