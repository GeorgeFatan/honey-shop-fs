import "../HomePage.css";
import backgroundImageHoney from "../assets/backgroundImageBuna.png";
//import { Link } from "react-router-dom"; // 1. Importăm Link care ne ajuta sa adaugam butoane pe pagina.
import miereSalcam from "../assets/miereSalcam.png";
import miereTei from "../assets/miereTei.png";
import mierePoliFlora from "../assets/mierePoliFlora.png";

export default function HomePage() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImageHoney})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* HERO SECTION */}
      <section className="hero-section">
        <h1 className="hero-title">
          Bogdan Miere – Miere proaspata din Mărginimea Sibiului
        </h1>
        <p className="hero-description">
          Miere naturală, direct din stupii noștri, produsă cu grijă în inima
          Sibiului.
        </p>

        {/* 2. Adăugăm link-ul către pagina de orar */}
        {/* {/* 2. Adăugăm link-ul către pagina de orar 
        <Link to="/orar" className="orar-link-button">
          Vezi Orarul de Funcționare
        </Link>*/}
      </section>

      {/* PRODUCTS SECTION */}
      <section className="products-section">
        <h2 className="section-title">Produsele Noastre</h2>

        <div className="product-grid">
          <div className="product-card">
            <img src={mierePoliFlora} alt="Honey Jar" />
            <h3>Miere Polifloră</h3>
            <p>Miere bogată și aromată, obținută din flori sălbatice.</p>
          </div>

          <div className="product-card">
            <img src={miereSalcam} alt="Honey Jar" />
            <h3>Miere de Salcâm</h3>
            <p>Miere delicată, cu note florale fine.</p>
          </div>

          <div className="product-card">
            <img src={miereTei} alt="Honey Jar" />
            <h3>Miere de Tei</h3>
            <p>Miere dulce și catifelată, din flori de tei.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
