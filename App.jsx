// App.jsx // ============================================================================ // Akin S. Sokpah – Official Website Application Root // ============================================================================ // This file controls: // - Global layout // - Routing // - Page structure // - Scroll behavior // - App-level animations // - Future authentication hooks // ============================================================================

import React, { useEffect } from "react"; import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import { motion, AnimatePresence } from "framer-motion";

// ============================================================================ // IMPORT PAGES // ============================================================================

import Home from "./pages/Home"; import Dashboard from "./pages/Dashboard"; import SupportCenter from "./pages/SupportCenter"; import Projects from "./pages/Projects"; import About from "./pages/About"; import Contact from "./pages/Contact"; import NotFound from "./pages/NotFound";

// ============================================================================ // IMPORT COMPONENTS // ============================================================================

import Navbar from "./components/Navbar"; import Footer from "./components/Footer";

// ============================================================================ // GLOBAL ANIMATION VARIANTS // ============================================================================

const pageVariants = { initial: { opacity: 0, y: 20, }, animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", }, }, exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn", }, }, };

// ============================================================================ // SCROLL TO TOP COMPONENT // ============================================================================

function ScrollToTop() { useEffect(() => { window.scrollTo(0, 0); }, []);

return null; }

// ============================================================================ // APP WRAPPER COMPONENT // ============================================================================

export default function App() { useEffect(() => { console.log("Akin S. Sokpah Official Website Loaded"); document.title = "Akin S. Sokpah | Founder • Developer • Innovator"; }, []);

return ( <Router> <ScrollToTop />

{/* ============================================================ */}
  {/* NAVIGATION BAR */}
  {/* ============================================================ */}
  <Navbar />

  {/* ============================================================ */}
  {/* PAGE CONTENT */}
  {/* ============================================================ */}
  <AnimatePresence mode="wait">
    <Routes>
      {/* -------------------------------------------------------- */}
      {/* HOME */}
      {/* -------------------------------------------------------- */}
      <Route
        path="/"
        element={
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Home />
          </motion.div>
        }
      />

      {/* -------------------------------------------------------- */}
      {/* ABOUT */}
      {/* -------------------------------------------------------- */}
      <Route
        path="/about"
        element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <About />
          </motion.div>
        }
      />

      {/* -------------------------------------------------------- */}
      {/* PROJECTS */}
      {/* -------------------------------------------------------- */}
      <Route
        path="/projects"
        element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <Projects />
          </motion.div>
        }
      />

      {/* -------------------------------------------------------- */}
      {/* DASHBOARD */}
      {/* -------------------------------------------------------- */}
      <Route
        path="/dashboard"
        element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <Dashboard />
          </motion.div>
        }
      />

      {/* -------------------------------------------------------- */}
      {/* SUPPORT CENTER */}
      {/* -------------------------------------------------------- */}
      <Route
        path="/support"
        element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <SupportCenter />
          </motion.div>
        }
      />

      {/* -------------------------------------------------------- */}
      {/* CONTACT */}
      {/* -------------------------------------------------------- */}
      <Route
        path="/contact"
        element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <Contact />
          </motion.div>
        }
      />

      {/* -------------------------------------------------------- */}
      {/* 404 NOT FOUND */}
      {/* -------------------------------------------------------- */}
      <Route
        path="*"
        element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <NotFound />
          </motion.div>
        }
      />
    </Routes>
  </AnimatePresence>

  {/* ============================================================ */}
  {/* FOOTER */}
  {/* ============================================================ */}
  <Footer />
</Router>

); }

// ============================================================================ // FUTURE EXTENSIONS (PLANNED) // ============================================================================ // - Authentication (Admin & Client Login) // - Role-based routing // - Protected dashboard routes // - CMS integration // - API layer // - Analytics // - Payment gateway integration // - Notification system // - Multilingual support // - PWA support // ============================================================================

// ============================================================================ // END OF FILE – App.jsx // ============================================================================
