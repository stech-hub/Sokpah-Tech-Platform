/* ============================================================
   File: src/main.jsx
   Project: Akin S. Sokpah – Official Website
   Author: Akin S. Sokpah
   Description:
   Entry point of the application.
   Handles app mounting, global helpers,
   performance checks, and GitHub Pages safety.
   ============================================================ */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* ============================================================
   GLOBAL CSS IMPORT
   ============================================================ */

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
          <p>
            Please refresh the page or contact support via WhatsApp.
          </p>
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
   SCROLL TO TOP ON ROUTE CHANGE (STATIC VERSION)
   ============================================================ */

function ScrollToTop() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

/* ============================================================
   PERFORMANCE LOGGER (OPTIONAL)
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
   GITHUB PAGES SAFETY CHECK
   ============================================================ */

function githubPagesFix() {
  if (window.location.pathname.includes("/404")) {
    window.location.replace("/");
  }
}

githubPagesFix();

/* ============================================================
   APP WRAPPER
   ============================================================ */

function RootApp() {
  return (
    <React.StrictMode>
      <GlobalErrorBoundary>
        <ScrollToTop />
        <App />
      </GlobalErrorBoundary>
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

const root = ReactDOM.createRoot(container);

/* ============================================================
   RENDER APPLICATION
   ============================================================ */

root.render(<RootApp />);

/* ============================================================
   BELOW ARE FUTURE-READY UTILITIES
   (Prepared for large-scale expansion)
   ============================================================ */

/* ---------- ENVIRONMENT CHECK ---------- */

export function isProduction() {
  return import.meta.env.MODE === "production";
}

export function isDevelopment() {
  return import.meta.env.MODE === "development";
}

/* ---------- NETWORK STATUS ---------- */

export function useNetworkStatus() {
  const [online, setOnline] = React.useState(navigator.onLine);

  React.useEffect(() => {
    const onOnline = () => setOnline(true);
    const onOffline = () => setOnline(false);

    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);

    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
    };
  }, []);

  return online;
}

/* ---------- LOCAL STORAGE HELPERS ---------- */

export function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Storage save failed:", e);
  }
}

export function loadFromStorage(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (e) {
    return fallback;
  }
}

/* ---------- SESSION HELPERS ---------- */

export function saveSession(key, value) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Session save failed:", e);
  }
}

export function loadSession(key, fallback = null) {
  try {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (e) {
    return fallback;
  }
}

/* ---------- FORMAT HELPERS ---------- */

export function formatDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function formatCurrency(amount, currency = "LRD") {
  return new Intl.NumberFormat("en-LR", {
    style: "currency",
    currency,
  }).format(amount);
}

/* ---------- SAFE WINDOW ACCESS ---------- */

export function safeWindow() {
  if (typeof window !== "undefined") {
    return window;
  }
  return null;
}

/* ---------- SAFE DOCUMENT ACCESS ---------- */

export function safeDocument() {
  if (typeof document !== "undefined") {
    return document;
  }
  return null;
}

/* ---------- NO-OP PLACEHOLDER ---------- */

export function noop() {}

/* ============================================================
   END OF FILE
   ============================================================ */
