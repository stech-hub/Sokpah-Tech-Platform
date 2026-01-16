import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">AkinS<span>.</span></div>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && (
        <nav className="mobile-menu">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
          <Link href="/support" onClick={() => setOpen(false)}>Support Center</Link>

          <a
            href="https://wa.me/231777789356"
            className="whatsapp-btn"
            target="_blank"
          >
            Hire Me on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
