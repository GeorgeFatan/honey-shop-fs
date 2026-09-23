import "../HomePage.css";
import miereSalcam from "../assets/miereSalcam.png";
import miereTei from "../assets/miereTei.png";
import mierePoliFlora from "../assets/mierePoliFlora.png";
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
            <img src={mierePoliFlora} alt="Miere Polifloră" />
            <h3>Miere Polifloră</h3>
            <p>Miere bogată și aromată, obținută din flori sălbatice.</p>
          </div>

          <div className="product-card">
            <img src={miereSalcam} alt="Miere de Salcâm" />
            <h3>Miere de Salcâm</h3>
            <p>Miere delicată, cu note florale fine.</p>
          </div>

          <div className="product-card">
            <img src={miereTei} alt="Miere de Tei" />
            <h3>Miere de Tei</h3>
            <p>Miere dulce și catifelată, din flori de tei.</p>
          </div>
        </div>
      </section>
    </div>
  );
}