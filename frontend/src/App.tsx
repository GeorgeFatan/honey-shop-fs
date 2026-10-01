import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Orar from "./pages/Orar";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
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
    </div>
  );
}

export default App;
