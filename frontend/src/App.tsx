import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Orar from "./pages/Orar";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/orar" element={<Orar />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
