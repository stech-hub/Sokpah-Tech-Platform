/* ============================================================
   File: pages/Dashboard.jsx
   Author: Akin S. Sokpah
   Description:
   Professional dashboard entry page
   ============================================================ */

const WHATSAPP_NUMBER = "231777789356";

/* ===================== UTILITIES ===================== */

function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, "_blank");
}

function generateRequestId() {
  return (
    "REQ-" +
    Math.random().toString(36).substring(2, 10).toUpperCase()
  );
}

/* ===================== COMPONENT ===================== */

export default function Dashboard() {
  const requestId = generateRequestId();

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>
        Welcome to your service dashboard. From here you can
        request development services, AI solutions, and technical
        consulting.
      </p>

      {/* SERVICE CARD */}
      <div className="form-card">
        <h2>Request a Service</h2>

        <label>Service Type</label>
        <select>
          <option>Web Development</option>
          <option>Web Application</option>
          <option>AI Solutions</option>
          <option>Dashboard System</option>
          <option>Consulting</option>
        </select>

        <label>Describe your request</label>
        <textarea placeholder="Explain what you want to build..." />

        <button
          className="btn-primary"
          onClick={() =>
            openWhatsApp(
              `Hello Akin, I want to request a service.\nRequest ID: ${requestId}`
            )
          }
        >
          Send Request on WhatsApp
        </button>
      </div>

      {/* INFO CARD */}
      <div className="payment-card">
        <h3>How it works</h3>
        <p>
          After sending your request, you’ll receive a response
          with pricing, timeline, and next steps.
        </p>
        <p className="payment-note">
          All projects are handled professionally with clear
          communication and transparency.
        </p>
      </div>
    </div>
  );
}
