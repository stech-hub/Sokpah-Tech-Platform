// Footer.jsx
// ============================================================================
// Akin S. Sokpah – Global Footer Component
// Contains:
// - Branding
// - Social links
// - WhatsApp CTA
// - Copyright
// - Trust statement
// ============================================================================

import React from "react";
import {
  Facebook,
  MessageCircle,
  Mail,
  ShieldCheck,
} from "lucide-react";

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Akin S. Sokpah
            </h3>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Founder, software developer, and AI innovator building real-world
              digital solutions from Liberia to the global market.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/projects" className="hover:underline">Projects</a></li>
              <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
              <li><a href="/support" className="hover:underline">Support Center</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-white mb-3">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                sokpahakinsaye@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} />
                <a
                  href="https://wa.me/231777789356"
                  target="_blank"
                  className="hover:underline"
                >
                  WhatsApp: 231777789356
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook size={16} />
                <a
                  href="https://www.facebook.com/profile.php?id=61583456361691"
                  target="_blank"
                  className="hover:underline"
                >
                  Facebook Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 my-8" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Akin S. Sokpah. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <ShieldCheck size={16} />
            <span>
              Built with transparency, security, and innovation.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// END OF FILE – Footer.jsx
// ============================================================================
