// SupportCenter.jsx
// ============================================================================
// Akin S. Sokpah – Support Center
// Purpose:
// - Allow supporters to fund development
// - Display bank & mobile money details
// - Build transparency & trust
// - Provide direct WhatsApp & Email contact
// ============================================================================

import React from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Banknote,
  Smartphone,
  Mail,
  ShieldCheck,
  MessageCircle,
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
// MAIN COMPONENT
// ============================================================================

export default function SupportCenter() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-6xl mx-auto"
      >
        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
          <HeartHandshake className="text-indigo-400" />
          Support Center
        </h1>
        <p className="text-gray-400 mb-12">
          Support the growth of technology, innovation, and digital solutions
          founded by Akin S. Sokpah.
        </p>

        {/* PURPOSE */}
        <section className="mb-16 bg-gray-950 p-6 rounded border border-gray-800">
          <h2 className="text-2xl font-semibold mb-3">
            Why Support This Work?
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Your support helps in building open platforms, maintaining servers,
            improving applications, and creating new technology solutions that
            benefit individuals, startups, and communities across Africa and
            beyond.
          </p>
        </section>

        {/* PAYMENT METHODS */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* BANK */}
          <div className="bg-gray-900 p-6 rounded border border-gray-800">
            <div className="flex items-center gap-2 mb-4 text-indigo-400">
              <Banknote />
              <h3 className="text-xl font-semibold">Bank Transfer</h3>
            </div>

            <p className="mb-2">
              <strong>Bank Name:</strong> United Bank of Africa (UBA) Liberia
            </p>
            <p className="mb-2">
              <strong>Account Number:</strong> 53020710015394
            </p>
            <p className="mb-2">
              <strong>Account Name:</strong> Akin Sokpah
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Use bank transfer if you are supporting large or international
              contributions.
            </p>
          </div>

          {/* MOMO */}
          <div className="bg-gray-900 p-6 rounded border border-gray-800">
            <div className="flex items-center gap-2 mb-4 text-green-400">
              <Smartphone />
              <h3 className="text-xl font-semibold">Mobile Money (MoMo)</h3>
            </div>

            <p className="mb-2">
              <strong>Number:</strong> 0889183557
            </p>
            <p className="mb-2">
              <strong>Name:</strong> Akin Sokpah
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Fast and easy support for local contributors in Liberia.
            </p>
          </div>
        </div>

        {/* TRANSPARENCY */}
        <section className="mb-16 bg-gray-950 p-6 rounded border border-gray-800">
          <div className="flex items-center gap-2 mb-3 text-indigo-400">
            <ShieldCheck />
            <h2 className="text-2xl font-semibold">Transparency & Trust</h2>
          </div>

          <p className="text-gray-400 leading-relaxed">
            All funds received through this support center are used strictly for
            development, maintenance, hosting, research, and expansion of
            digital products founded by Akin S. Sokpah. Supporters may request
            updates or reports at any time.
          </p>
        </section>

        {/* CONTACT */}
        <section className="bg-gray-900 p-6 rounded border border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Need Confirmation?</h2>

          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="mailto:sokpahakinsaye@gmail.com"
              className="flex items-center gap-2 text-indigo-400 hover:underline"
            >
              <Mail size={18} />
              sokpahakinsaye@gmail.com
            </a>

            <a
              href="mailto:sok1911@outlook.com"
              className="flex items-center gap-2 text-indigo-400 hover:underline"
            >
              <Mail size={18} />
              sok1911@outlook.com
            </a>

            <a
              href="https://wa.me/231777789356"
              target="_blank"
              className="flex items-center gap-2 text-green-400 hover:underline"
            >
              <MessageCircle size={18} />
              WhatsApp Support
            </a>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

// ============================================================================
// END OF FILE – SupportCenter.jsx
// ============================================================================
