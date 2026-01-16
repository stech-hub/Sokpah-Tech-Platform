import { useState } from "react";

const WHATSAPP_NUMBER = "231777789356";

export default function Dashboard() {
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");

  function openWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, "_blank");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const requestId =
      "REQ-" + Math.random().toString(36).substring(2, 10).toUpperCase();

    const message = `
Hello Akin Sokpah 👋

📌 Request ID: ${requestId}
🛠 Service: ${service}
📝 Details: ${details}

Please respond when available.
`;

    openWhatsApp(message);
  }

  return (
    <section className="dashboard">
      <h1>Client Dashboard</h1>
      <p>Request a website, app, or consultation</p>

      <form onSubmit={handleSubmit} className="dashboard-form">
        <input
          type="text"
          placeholder="Service needed (Website, App, AI, etc.)"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        />

        <textarea
          placeholder="Describe your project..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        />

        <button type="submit">Send Request via WhatsApp</button>
      </form>
    </section>
  );
}
