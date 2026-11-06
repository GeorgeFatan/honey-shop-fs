import { useState } from "react";
import "../Navbar.css";
import logoBogdan from "../assets/LogoBogdan.png";
import {NavLink} from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO + TITLU */}
        <div className="navbar-left">
          <div className="navbar-brand">
            <NavLink to="/">
              <img
                src={logoBogdan}
                alt="Bogdan Miere Logo"
                className="navbar-logo"
                
              />
            </NavLink>
            <span
              style={{ marginRight: "10px" }}
              className="navbar-title"
            ></span>
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
        <div className="navbar-right">
          <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
            <NavLink to="/orar" className={({ isActive }) => isActive ? "active-link" : ""}>
              Programul Nostru
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>
              Contacteză-ne
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>
              Despre Noi
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
