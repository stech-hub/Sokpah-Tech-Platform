import { useState } from "react";

export default function Booking() {
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const whatsappNumber = "231777789356";

  const handleBooking = () => {
    const text = `
Hello Akin S. Sokpah,

I want to book a service.

Service: ${service}
Budget: ${budget}

Message:
${message}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="page">
      <h1>Book a Service</h1>
      <p>
        Request a website, app, dashboard, AI solution, or consultation.
      </p>

      <div className="form-card">
        <label>Service Type</label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select a service</option>
          <option>Website Development</option>
          <option>Mobile App Development</option>
          <option>AI / Automation</option>
          <option>Dashboard System</option>
          <option>Consultation</option>
        </select>

        <label>Estimated Budget</label>
        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        >
          <option value="">Select budget</option>
          <option>$50 – $100</option>
          <option>$100 – $300</option>
          <option>$300 – $500</option>
          <option>$500+</option>
        </select>

        <label>Project Details</label>
        <textarea
          placeholder="Describe what you want..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="btn-primary" onClick={handleBooking}>
          Send Booking Request
        </button>
      </div>
    </div>
  );
}
