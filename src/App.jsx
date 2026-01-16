import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Dashboard from "../pages/Dashboard";
import SupportCenter from "../pages/SupportCenter";
import Booking from "../pages/Booking";
import Payment from "../pages/Payment";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/support" element={<SupportCenter />} />
      </Routes>

      <Footer />
    </>
  );
}
