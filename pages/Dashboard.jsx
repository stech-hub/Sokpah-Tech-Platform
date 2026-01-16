const WHATSAPP_NUMBER = "231777789356";

function openWhatsApp(message) {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  window.open(url, "_blank");
}

export default function Dashboard() {
  return (
    <section className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>
          Manage your service requests and start new projects with
          confidence.
        </p>
      </header>

      {/* REQUEST CARD */}
      <div className="card">
        <h2>Request a Service</h2>

        <div className="form-group">
          <label>Service Type</label>
          <select>
            <option>Web Development</option>
            <option>Web Application</option>
            <option>AI Solutions</option>
            <option>Dashboard System</option>
            <option>Consulting</option>
            <option>Training</option>
          </select>
        </div>

        <div className="form-group">
          <label>Describe your request</label>
          <textarea placeholder="Tell me what you want to build..." />
        </div>

        <button
          className="btn-primary full"
          onClick={() =>
            openWhatsApp(
              "Hello Akin, I want to request a service."
            )
          }
        >
          Send Request via WhatsApp
        </button>
      </div>

      {/* INFO CARD */}
      <div className="card info">
        <h3>How it works</h3>
        <ul>
          <li>✔ Submit your request</li>
          <li>✔ Get pricing & timeline</li>
          <li>✔ Start your project</li>
        </ul>
      </div>
    </section>
  );
}
