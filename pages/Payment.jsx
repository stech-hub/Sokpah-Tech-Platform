import { useState } from "react";

export default function Payment() {
  const [copied, setCopied] = useState("");

  const copyText = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="page">
      <h1>Payments & Support</h1>
      <p>
        Support my work or pay for services using Mobile Money or Bank Transfer.
        All contributions help build better technology.
      </p>

      {/* Mobile Money */}
      <div className="payment-card">
        <h2>📱 Mobile Money (MoMo)</h2>
        <p><strong>Number:</strong> 0889183557</p>
        <p><strong>Name:</strong> Akin Sokpah</p>

        <button
          className="btn-outline"
          onClick={() => copyText("0889183557", "momo")}
        >
          {copied === "momo" ? "Copied ✓" : "Copy MoMo Number"}
        </button>
      </div>

      {/* Bank */}
      <div className="payment-card">
        <h2>🏦 Bank Transfer</h2>
        <p><strong>Bank:</strong> United Bank of Africa (UBA) Liberia</p>
        <p><strong>Account Number:</strong> 53020710015394</p>
        <p><strong>Account Name:</strong> Akin Sokpah</p>

        <button
          className="btn-outline"
          onClick={() =>
            copyText("53020710015394", "bank")
          }
        >
          {copied === "bank" ? "Copied ✓" : "Copy Account Number"}
        </button>
      </div>

      {/* Contact */}
      <div className="payment-note">
        <p>
          After payment, please confirm via WhatsApp for faster processing.
        </p>

        <a
          className="btn-primary"
          href="https://wa.me/231777789356"
          target="_blank"
        >
          Confirm on WhatsApp
        </a>
      </div>
    </div>
  );
}
