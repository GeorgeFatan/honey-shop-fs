import { Link } from "react-router-dom";
import backgroundImageHoney from "../assets/backgroundImageHoney.jpg";
import "../Orar.css"; // Importăm fișierul de stiluri

export default function Orar() {
  return (
    <div
      className="orar-container"
      style={{
        backgroundImage: `url(${backgroundImageHoney})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        minHeight: "100vh", // Asigură că imaginea acoperă tot ecranul (100% din înălțimea vizibilă)
        display: "flex",
        justifyContent: "center", // Centrează orizontal
        alignItems: "center", // Centrează vertical
      }}
    >
      <div className="orar-content">
        <h1>Orar de lucru</h1>
        
        <ul className="orar-list">
          <li><strong>Luni:</strong> 08:00 - 16:00</li>
          <li><strong>Marți:</strong> 08:00 - 16:00</li>
          <li><strong>Miercuri:</strong> 08:00 - 16:00</li>
          <li><strong>Joi:</strong> 08:00 - 16:00</li>
          <li><strong>Vineri:</strong> 08:00 - 16:00</li>
          <li className="inchis"><strong>Sâmbătă:</strong> Închis</li>
          <li className="inchis"><strong>Duminică:</strong> Închis</li>
        </ul>

        {/* Butonul de întoarcere la pagina principală 
        <Link to="/" className="back-link-button">
          Înapoi la Pagina Principală
        </Link>*/}
      </div>
    </div>
  );
}