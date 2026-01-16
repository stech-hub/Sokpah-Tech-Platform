// Dashboard.jsx // ============================================================ // Akin S. Sokpah – Client Dashboard // Founder Booking & Website Request System // ============================================================

import React, { useState, useEffect } from "react"; import { motion } from "framer-motion"; import { Button } from "@/components/ui/button"; import { Card, CardContent } from "@/components/ui/card";

// ============================================================ // CONSTANTS // ============================================================

const WHATSAPP_NUMBER = "231777789356"; const WHATSAPP_USERNAME = "akinssokpah007";

// ============================================================ // UTILITY FUNCTIONS // ============================================================

function openWhatsApp(message) { const encodedMessage = encodeURIComponent(message); const url = https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}; window.open(url, "_blank"); }

function generateRequestId() { return "REQ-" + Math.random().toString(36).substring(2, 10).toUpperCase(); }

// ============================================================ // FORM INITIAL STATE // ============================================================

const initialFormState = { fullName: "", email: "", projectType: "", budget: "", deadline: "", description: "", };

// ============================================================ // MAIN COMPONENT // ============================================================

export default function Dashboard() { const [formData, setFormData] = useState(initialFormState); const [requests, setRequests] = useState([]); const [submitted, setSubmitted] = useState(false);

// ======================================================== // HANDLE INPUT CHANGE // ========================================================

function handleChange(e) { const { name, value } = e.target; setFormData((prev) => ({ ...prev, [name]: value, })); }

// ======================================================== // HANDLE SUBMIT // ========================================================

function handleSubmit(e) { e.preventDefault();

const requestId = generateRequestId();

const newRequest = {
  id: requestId,
  ...formData,
  createdAt: new Date().toISOString(),
};

setRequests((prev) => [...prev, newRequest]);
setSubmitted(true);

const message = `

Hello Akin S. Sokpah,

I want to request a service.

Request ID: ${requestId} Name: ${formData.fullName} Email: ${formData.email} Project Type: ${formData.projectType} Budget: ${formData.budget} Deadline: ${formData.deadline} Description: ${formData.description}

Sent from your official website dashboard. `;

openWhatsApp(message);
setFormData(initialFormState);

}

// ======================================================== // EFFECTS // ========================================================

useEffect(() => { document.title = "Client Dashboard | Akin S. Sokpah"; }, []);

// ======================================================== // RENDER // ========================================================

return ( <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6"> {/* HEADER */} <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10" > <h1 className="text-4xl font-bold">Client Dashboard</h1> <p className="text-gray-400 mt-2"> Book Akin S. Sokpah or request a professional website, app, or AI system. </p> </motion.div>

{/* FORM CARD */}
  <Card className="bg-gray-800 border-gray-700">
    <CardContent className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Request a Service</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-900 border border-gray-700"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-900 border border-gray-700"
        />

        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-900 border border-gray-700"
        >
          <option value="">Select Project Type</option>
          <option value="Website">Website Development</option>
          <option value="WebApp">Web Application</option>
          <option value="MobileApp">Mobile App</option>
          <option value="AI">AI System</option>
          <option value="Consulting">Consulting</option>
        </select>

        <input
          type="text"
          name="budget"
          placeholder="Estimated Budget"
          value={formData.budget}
          onChange={handleChange}
          className="p-3 rounded bg-gray-900 border border-gray-700"
        />

        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="p-3 rounded bg-gray-900 border border-gray-700"
        />

        <textarea
          name="description"
          placeholder="Describe your project in detail"
          value={formData.description}
          onChange={handleChange}
          rows={5}
          className="p-3 rounded bg-gray-900 border border-gray-700 md:col-span-2"
        />

        <div className="md:col-span-2">
          <Button type="submit" className="w-full text-lg">
            Send Request via WhatsApp
          </Button>
        </div>
      </form>
    </CardContent>
  </Card>

  {/* SUBMISSION CONFIRMATION */}
  {submitted && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-6 p-4 bg-green-700 rounded"
    >
      Your request has been sent successfully via WhatsApp.
    </motion.div>
  )}

  {/* REQUEST HISTORY */}
  <div className="mt-12">
    <h2 className="text-2xl font-semibold mb-4">Your Requests</h2>

    {requests.length === 0 && (
      <p className="text-gray-400">No requests yet.</p>
    )}

    <div className="grid gap-4">
      {requests.map((req) => (
        <Card key={req.id} className="bg-gray-800 border-gray-700">
          <CardContent className="p-4">
            <h3 className="font-bold">{req.projectType}</h3>
            <p className="text-sm text-gray-400">ID: {req.id}</p>
            <p className="mt-2">{req.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>

  {/* FOOTER INFO */}
  <div className="mt-16 text-center text-gray-500 text-sm">
    <p>
      Founder: <strong>Akin S. Sokpah</strong>
    </p>
    <p>
      WhatsApp: {WHATSAPP_USERNAME} | Liberia
    </p>
  </div>
</div>

); }

// ============================================================ // END OF FILE (Dashboard.jsx) // ============================================================
