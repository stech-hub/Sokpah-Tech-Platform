import { useState } from "react";

/* ============================================================
   CONFIG
   ============================================================ */

const WHATSAPP_NUMBER = "231777789356";

/* ============================================================
   UTILITY
   ============================================================ */

function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, "_blank");
}

/* ============================================================
   DASHBOARD PAGE
   ============================================================ */

export default function Dashboard() {
  const [service, setService] = useState("Website Development");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!message.trim()) {
      alert("Please describe your request.");
      return;
    }

    const finalMessage = `
SERVICE REQUEST
---------------------
Service: ${service}

Details:
${message}

From: Website Dashboard
    `;

    openWhatsApp(finalMessage);
  }

  return (
    <main className="page">
      {/* ================= HEADER ================= */}
      <section style={{ marginBottom: "40px" }}>
        <h1>Dashboard</h1>
        <p>
          Welcome to your service dashboard. From here you can request
          development services, explore products, and contact me directly.
        </p>
      </section>

      {/* ================= REQUEST SERVICE ================= */}
      <section className="form-card">
        <h2 style={{ marginBottom: "20px" }}>Request a Service</h2>

        <form onSubmit={handleSubmit}>
          <label>Service Type</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option>Website Development</option>
            <option>Web Application</option>
            <option>Mobile App Development</option>
            <option>AI Solutions</option>
            <option>Dashboard System</option>
            <option>Consulting</option>
          </select>

          <label>Describe your request</label>
          <textarea
            placeholder="Tell me what you want to build..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit" className="btn-primary">
            Send Request on WhatsApp
          </button>
        </form>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="form-card">
        <h2 style={{ marginBottom: "20px" }}>My Products</h2>

        <div style={{ display: "grid", gap: "20px" }}>
          {/* PRODUCT 1 */}
          <div className="payment-card">
            <h3>BioNurse App</h3>
            <p>
              A healthcare-focused mobile application designed to support
              nursing and medical workflows.
            </p>

            <a
              href="https://github.com/stech-hub/bionurseapk-website/releases/download/v1/myapp.apk"
              target="_blank"
              className="btn-outline"
            >
              Download APK
            </a>
          </div>

          {/* PRODUCT 2 */}
          <div className="payment-card">
            <h3>Full Task AI Platform</h3>
            <p>
              A web-based AI-powered task and productivity platform built for
              automation and efficiency.
            </p>

            <a
              href="https://full-task-ai.vercel.app/"
              target="_blank"
              className="btn-outline"
            >
              Visit Website
            </a>
          </div>

          {/* PRODUCT 3 */}
          <div className="payment-card">
            <h3>Custom Websites & Dashboards</h3>
            <p>
              I build modern websites, admin dashboards, and systems tailored
              to your business or startup.
            </p>

            <button
              className="btn-primary"
              onClick={() =>
                openWhatsApp(
                  "Hello Akin, I want to order a custom website or dashboard."
                )
              }
            >
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="form-card">
        <h2>How It Works</h2>
        <p>
          1. Submit your request through this dashboard.
          <br />
          2. You’ll receive a response on WhatsApp with pricing and timeline.
          <br />
          3. Development starts after agreement.
          <br />
          4. Delivery with support and revisions.
        </p>
      </section>
    </main>
  );
}
