import "../HomePage.css";
import miereSalcam35 from "../assets/miereSalcam35.png";
import miereNuca1 from "../assets/miereNuca1.png";
import miereNuca35 from "../assets/miereNuca35.png";
import mierePoliflora from "../assets/mierePoliflora1.png";
import mierePoliflora35 from "../assets/mierePoliflora35.png";
import "../ContactUs.css";

export default function HomePage() {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="title-wrapper">
<h1 className="hero-title">
          Bogdan Miere – Miere proaspata din Mărginimea Sibiului
        </h1>
        <p className="hero-description">
          Miere naturală, direct din stupii noștri, produsă cu grijă în inima Sibiului.
        </p>
        </div>
  
      </section>

      {/* PRODUCTS SECTION */}
      <section className="products-section">

        <div className="subtitle-wrapper">
          <h2 className="section-title">Produsele Noastre</h2>
        </div>
      
        <div className="product-grid">
          <div className="product-card">
            <img src={mierePoliflora} alt="Miere Polifloră" />
            <h3>Miere Polifloră 1Kg</h3>
            <p>Miere bogată și aromată, obținută din flori sălbatice.</p>
          </div>

          <div className="product-card">
            <img src={mierePoliflora35} alt="Miere Polifloră" />
            <h3>Miere Polifloră 350g</h3>
            <p>Miere bogată și aromată, obținută din flori sălbatice.</p>
          </div>

          <div className="product-card">
            <img src={miereSalcam35} alt="Miere de Salcâm" />
            <h3>Miere de Salcâm 350g</h3>
            <p>Miere delicată, cu note florale fine.</p>
          </div>

          <div className="product-card">
            <img src={miereNuca1} alt="Miere cu nucă" />
            <h3>Miere cu nucă 1Kg</h3>
            <p>Miere dulce și catifelată, cu un adaos gustos de nucă.</p>
          </div>

          <div className="product-card">
            <img src={miereNuca35} alt="Miere cu nucă" />
            <h3>Miere cu nucă 350g</h3>
            <p>Miere dulce și catifelată, cu un adaos gustos de nucă.</p>
          </div>
        </div>
      </section>
    </div>
  );
}