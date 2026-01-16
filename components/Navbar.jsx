import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <a href="/" className="brand">
          Akin<span>S.</span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="navbar-links desktop">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/support">Support</a>
          <a href="/contact" className="hire">
            Hire Me
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <a onClick={() => setOpen(false)} href="/">Home</a>
          <a onClick={() => setOpen(false)} href="/about">About</a>
          <a onClick={() => setOpen(false)} href="/projects">Projects</a>
          <a onClick={() => setOpen(false)} href="/dashboard">Dashboard</a>
          <a onClick={() => setOpen(false)} href="/support">Support Center</a>
          <a
            onClick={() => setOpen(false)}
            href="https://wa.me/231777789356"
            className="mobile-hire"
          >
            Hire Me on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
