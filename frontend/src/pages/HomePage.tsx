import "../HomePage.css";
import miereSalcam35 from "../assets/miereSalcam35.avif";
import miereNuca1 from "../assets/miereNuca1.avif";
import miereNuca35 from "../assets/miereNuca35.avif";
import mierePoliflora from "../assets/mierePoliflora1.avif";
import mierePoliflora35 from "../assets/mierePoliflora35.avif";
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
           <span className="natural-badge"
             title="Miere naturală, fără aditivi sau conservanți, obținută direct din stupii noștri.">
            🍯 100% Natural 1Kg</span>
            <img src={mierePoliflora} alt="Miere Polifloră" loading="eager"/>
            <h3>Miere Polifloră</h3>
            <p>Miere bogată și aromată, obținută din flori sălbatice.</p>

            <a className="quick-order-button"
            href="https://wa.me/40712345678?text=Salut! Doresc să comand un borcan de miere poliflora 1kg."
            target="_blank"
            rel ="noopener noreferrer"> 
            
             Comandă la telefon
            
            </a>

          </div>

          <div className="product-card">
            <span className="natural-badge"
             title="Miere naturală, fără aditivi sau conservanți, obținută direct din stupii noștri.">
            🍯 100% Natural 350g</span>
            <img src={mierePoliflora35} alt="Miere Polifloră" loading="eager"/>
            <h3>Miere Polifloră</h3>
            <p>Miere bogată și aromată, obținută din flori sălbatice.</p>
             <a className="quick-order-button"
            href="https://wa.me/40712345678?text=Salut! Doresc să comand un borcan de miere poliflora de 350g."
            target="_blank"
            rel ="noopener noreferrer"> 
            
             Comandă la telefon
            
            </a>
          </div>

          <div className="product-card">
           <span className="natural-badge"
             title="Miere naturală, fără aditivi sau conservanți, obținută direct din stupii noștri.">
            🍯 100% Natural 350g</span>
            <img src={miereSalcam35} alt="Miere de Salcâm" loading="eager"/>
            <h3>Miere de Salcâm</h3>
            <p>Miere delicată, cu note florale fine.</p>
             <a className="quick-order-button"
            href="https://wa.me/40712345678?text=Salut! Doresc să comand un borcan de miere de salcam de 350g."
            target="_blank"
            rel ="noopener noreferrer"> 
            
             Comandă la telefon
            
            </a>
          </div>

          <div className="product-card">
            <span className="natural-badge"
             title="Miere naturală, fără aditivi sau conservanți, obținută direct din stupii noștri.">
            🍯 100% Natural 1kg</span>
            <img src={miereNuca1} alt="Miere cu nucă" loading="eager"/>
            <h3>Miere cu nucă</h3>
            <p>Miere dulce și catifelată, cu un adaos gustos de nucă.</p>
             <a className="quick-order-button"
            href="https://wa.me/40712345678?text=Salut! Doresc să comand un borcan de miere cu nuca de 1kg."
            target="_blank"
            rel ="noopener noreferrer"> 
            
             Comandă la telefon
            
            </a>
          </div>

          <div className="product-card">
            <span className="natural-badge"
             title="Miere naturală, fără aditivi sau conservanți, obținută direct din stupii noștri.">
            🍯 100% Natural 350g</span>
            <img src={miereNuca35} alt="Miere cu nucă" loading="eager"/>
            <h3>Miere cu nucă</h3>
            <p>Miere dulce și catifelată, cu un adaos gustos de nucă.</p>
             <a className="quick-order-button"
            href="https://wa.me/40712345678?text=Salut! Doresc să comand un borcan de miere cu nuca de 350g."
            target="_blank"
            rel ="noopener noreferrer"> 
            
             Comandă la telefon
            
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}