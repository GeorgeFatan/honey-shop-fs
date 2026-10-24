import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Orar from "./pages/Orar";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById("backToTop");
      if (window.scrollY > 300) {
        btn?.classList.add("show");
      } else {
        btn?.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/orar" element={<Orar />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />

      <button id="backToTop" onClick={scrollToTop}>↑</button>
    </div>
  );
}

export default App;
