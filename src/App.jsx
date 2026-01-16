/* ================================
   Akin S. Sokpah – Official Website
   File: src/App.jsx
   Author: Akin S. Sokpah
   Description:
   Main application controller
   ================================ */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

/* ================================
   CONSTANTS
   ================================ */

const WHATSAPP_LINK = "https://wa.me/231777789356";
const FACEBOOK_LINK =
  "https://www.facebook.com/profile.php?id=61583456361691";

/* ================================
   NAVBAR COMPONENT
   ================================ */

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">Akin S. Sokpah</Link>
        </h1>

        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-indigo-400">Home</Link>
          <Link to="/about" className="hover:text-indigo-400">About</Link>
          <Link to="/features" className="hover:text-indigo-400">Features</Link>
          <Link to="/dashboard" className="hover:text-indigo-400">Dashboard</Link>
          <Link to="/support" className="hover:text-indigo-400">Support</Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="bg-gray-800 md:hidden px-6 py-4 space-y-3">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/features" onClick={() => setMenuOpen(false)}>Features</Link>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link>
        </div>
      )}
    </nav>
  );
}

/* ================================
   FOOTER COMPONENT
   ================================ */

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-bold">Akin S. Sokpah</h3>
          <p className="text-sm mt-2">
            Founder • Developer • Innovator
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>
          <p className="text-sm mt-2">
            WhatsApp: <a href={WHATSAPP_LINK} className="underline">Message Me</a>
          </p>
          <p className="text-sm">
            Facebook: <a href={FACEBOOK_LINK} className="underline">Profile</a>
          </p>
        </div>
      </div>

      <div className="text-center text-sm pb-4">
        © {new Date().getFullYear()} Akin S. Sokpah. All rights reserved.
      </div>
    </footer>
  );
}

/* ================================
   HOME PAGE
   ================================ */

function Home() {
  return (
    <div className="pt-24">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Akin S. Sokpah
          </h1>
          <p className="mt-4 text-xl">
            Founder • Software Developer • AI Builder
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href={WHATSAPP_LINK}
              className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold"
            >
              Book Me on WhatsApp
            </a>

            <Link
              to="/dashboard"
              className="border border-white px-6 py-3 rounded-lg"
            >
              Request a Website
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================================
   ABOUT PAGE
   ================================ */

function About() {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="leading-relaxed mb-6">
        My name is Akin S. Sokpah, a Liberian tech founder and developer.
        I build websites, mobile apps, AI platforms, and digital systems
        that solve real problems.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Vision</h3>
          <p className="mt-2">
            Empower Africa through technology.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Mission</h3>
          <p className="mt-2">
            Build scalable and impactful digital solutions.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold">Ambition</h3>
          <p className="mt-2">
            Become a global tech leader from Liberia.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================================
   FEATURES PAGE
   ================================ */

function Features() {
  const featureList = [
    "Website Development",
    "Mobile App Development",
    "AI Platforms",
    "Client Dashboards",
    "Booking Systems",
    "E-commerce",
    "Branding",
    "UI/UX Design",
    "Hosting & Deployment",
    "Maintenance",
    "Open-source Projects",
    "Startup Consulting",
    "Tech Training",
    "Support Center",
    "Project Management",
  ];

  return (
    <div className="pt-24 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Main Features</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {featureList.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================
   DASHBOARD PAGE
   ================================ */

function Dashboard() {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-24 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Client Dashboard</h2>

      <textarea
        className="w-full border p-4 rounded-lg"
        rows="6"
        placeholder="Describe the website or project you want..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg"
      >
        Send Request on WhatsApp
      </button>
    </div>
  );
}

/* ================================
   SUPPORT PAGE
   ================================ */

function Support() {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Support Center</h2>

      <p className="mb-4">
        Support the vision and help build impactful technology.
      </p>

      <div className="border p-6 rounded-lg mb-6">
        <h3 className="font-semibold">Bank Transfer</h3>
        <p>United Bank Of Africa (UBA) Liberia</p>
        <p>Account: 53020710015394</p>
        <p>Name: Akin Sokpah</p>
      </div>

      <div className="border p-6 rounded-lg mb-6">
        <h3 className="font-semibold">Mobile Money</h3>
        <p>0889183557 — Akin Sokpah</p>
      </div>

      <a
        href={WHATSAPP_LINK}
        className="bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        Contact on WhatsApp
      </a>
    </div>
  );
}

/* ================================
   MAIN APP
   ================================ */

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      <Footer />
    </Router>
  );
}
