"use client";
import { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Hero } from "./pages/Hero";
import { Portfolio } from "./pages/Portfolio";
import { Stack } from "./pages/Stack";
import Loader from "./components/Loader"; // Import the Loader component
import "./index.css"
export default function App() {
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide the loader after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div>
      {loading ? (
        <div className="preloader-container">
          <Loader />
        </div>
      ) : (
        <main className="fade-in">
          <Navbar />
          <Hero />
          <About />
          <Portfolio />
          <Stack />
          <Footer />
        </main>
      )}
    </div>
  );
}
