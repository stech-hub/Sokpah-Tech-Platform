export default function Home() {
  return (
    <main className="home">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Akin S. Sokpah
            <span>Founder • Developer • AI Innovator</span>
          </h1>

          <p>
            I build modern websites, dashboards, and AI-powered systems that
            help individuals, startups, and businesses grow in Africa and
            globally.
          </p>

          <div className="hero-actions">
            <a
              href="https://wa.me/231777789356"
              target="_blank"
              className="btn-primary"
            >
              Book Me on WhatsApp
            </a>

            <a href="/projects" className="btn-outline">
              View My Projects
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section">
        <h2>Who I Am</h2>
        <p>
          My name is Akin S. Sokpah, a Liberian tech founder and developer
          passionate about building real-world digital solutions.
        </p>

        <p>
          I design everything from simple business websites to advanced
          dashboards, AI systems, and automation tools. My belief is simple:
          technology should solve problems, not complicate lives.
        </p>
      </section>

      {/* ================= VISION / MISSION ================= */}
      <section className="section grid-3">
        <div className="card">
          <h3>Vision</h3>
          <p>
            To empower Africa and the world through accessible, innovative,
            and scalable technology solutions.
          </p>
        </div>

        <div className="card">
          <h3>Mission</h3>
          <p>
            To design and develop reliable digital platforms that help people,
            businesses, and startups succeed in the digital economy.
          </p>
        </div>

        <div className="card">
          <h3>Ambition</h3>
          <p>
            To become a globally recognized tech leader and founder originating
            from Liberia.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section">
        <h2>What I Build</h2>

        <div className="grid-3">
          <div className="card">Websites</div>
          <div className="card">Web Applications</div>
          <div className="card">AI Systems</div>
          <div className="card">Dashboards</div>
          <div className="card">Startup Platforms</div>
          <div className="card">Support & Consulting</div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <h2>Ready to Build Something Great?</h2>
        <p>Let’s turn your idea into a real digital product.</p>

        <a
          href="https://wa.me/231777789356"
          target="_blank"
          className="btn-primary large"
        >
          Message Me on WhatsApp
        </a>
      </section>
    </main>
  );
}
