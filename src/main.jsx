/* ============================================================
   File: src/main.jsx
   Project: Akin S. Sokpah – Official Website
   ============================================================ */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

/* ============================================================
   GLOBAL ERROR BOUNDARY
   ============================================================ */

class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorInfo: error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Global Error Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
          <h1>Something went wrong.</h1>
          <p>Please refresh the page or contact support via WhatsApp.</p>
          <a
            href="https://wa.me/231777789356"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 20px",
              background: "#25D366",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Contact Support
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

/* ============================================================
   SCROLL TO TOP ON ROUTE CHANGE
   ============================================================ */

function ScrollToTop() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

/* ============================================================
   PERFORMANCE LOGGER
   ============================================================ */

function logPerformance() {
  if (!window.performance) return;
  window.addEventListener("load", () => {
    const timing = window.performance.timing;
    const loadTime =
      timing.loadEventEnd - timing.navigationStart;
    console.log("Page Load Time:", loadTime, "ms");
  });
}
logPerformance();

/* ============================================================
   ROOT APP
   ============================================================ */

function RootApp() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <GlobalErrorBoundary>
          <ScrollToTop />
          <App />
        </GlobalErrorBoundary>
      </BrowserRouter>
    </React.StrictMode>
  );
}

/* ============================================================
   DOM MOUNT
   ============================================================ */

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container missing in index.html");
}

ReactDOM.createRoot(container).render(<RootApp />);

/* ============================================================
   UTILITIES (UNCHANGED, SAFE)
   ============================================================ */

export function isProduction() {
  return import.meta.env.MODE === "production";
}

export function isDevelopment() {
  return import.meta.env.MODE === "development";
}

export function formatDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function noop() {}
