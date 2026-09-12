import { useState } from "react";
import "../Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO + TITLU */}
        <div className="navbar-left">
          <div className="navbar-brand">
            <img
              src="/logo.png"
              alt="Bogdan Miere Logo"
              className="navbar-logo"
            />
            <span style={{ marginRight: "10px" }} className="navbar-title">
              <a href="/">Bogdan Miere</a>
            </span>
          </div>
        </div>

        {/* BUTON HAMBURGER (pentru mobil) */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* LINKURI */}
        <div className="navbar-dreapta">
          <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
            <a href="/orar">Programul Nostru</a>
            <a href="/contact">Contact Us</a>
            <a href="/about">About Us</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
