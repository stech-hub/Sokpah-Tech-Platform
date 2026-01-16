// Navbar.jsx
// ============================================================================
// Akin S. Sokpah – Advanced Navigation Bar
// Features:
// - Responsive menu
// - 15+ real navigation links
// - Mobile drawer
// - WhatsApp CTA
// - Sticky behavior
// - Active link highlight
// ============================================================================

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  LayoutDashboard,
  Globe,
  User,
  Briefcase,
  HeartHandshake,
  Phone,
  BookOpen,
  Cpu,
  Code,
  ShoppingCart,
  GraduationCap,
  Users,
  Shield,
  LifeBuoy,
} from "lucide-react";

// ============================================================================
// MENU ITEMS (15+ REAL FEATURES)
// ============================================================================

const menuItems = [
  { name: "Home", path: "/", icon: <Globe size={18} /> },
  { name: "About Me", path: "/about", icon: <User size={18} /> },
  { name: "Projects", path: "/projects", icon: <Briefcase size={18} /> },
  { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={18} /> },
  { name: "Web Development", path: "/services/web", icon: <Code size={18} /> },
  { name: "AI Solutions", path: "/services/ai", icon: <Cpu size={18} /> },
  { name: "E-Commerce", path: "/services/ecommerce", icon: <ShoppingCart size={18} /> },
  { name: "Consulting", path: "/services/consulting", icon: <BookOpen size={18} /> },
  { name: "Training", path: "/training", icon: <GraduationCap size={18} /> },
  { name: "Community", path: "/community", icon: <Users size={18} /> },
  { name: "Security", path: "/security", icon: <Shield size={18} /> },
  { name: "Support Center", path: "/support", icon: <HeartHandshake size={18} /> },
  { name: "Help Desk", path: "/help", icon: <LifeBuoy size={18} /> },
  { name: "Contact", path: "/contact", icon: <Phone size={18} /> },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --------------------------------------------------------------------------
  // SCROLL EFFECT
  // --------------------------------------------------------------------------

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --------------------------------------------------------------------------
  // STYLES
  // --------------------------------------------------------------------------

  const navClass = scrolled
    ? "fixed top-0 left-0 w-full bg-black/90 backdrop-blur border-b border-gray-800 z-50"
    : "fixed top-0 left-0 w-full bg-transparent z-50";

  // --------------------------------------------------------------------------
  // RENDER
  // --------------------------------------------------------------------------

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <NavLink to="/" className="text-xl font-bold text-white">
          Akin<span className="text-indigo-500">S.</span>
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-1 text-sm transition ${
                  isActive ? "text-indigo-400" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}

          {/* WHATSAPP CTA */}
          <a
            href="https://wa.me/231777789356"
            target="_blank"
            className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm"
          >
            Hire Me
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            className="lg:hidden bg-black border-t border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              ))}

              <a
                href="https://wa.me/231777789356"
                target="_blank"
                className="mt-4 bg-indigo-600 text-center py-3 rounded text-white"
              >
                Book Akin S. Sokpah
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ============================================================================
// END OF FILE – Navbar.jsx
// ============================================================================
