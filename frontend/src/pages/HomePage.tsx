import "../HomePage.css";
import backgroundImageHoney from "../assets/backgroundImageHoney.jpg";

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
      </section>

      {/* PRODUCTS SECTION */}
      <section className="products-section">
        <h2 className="section-title">Produsele Noastre</h2>

        <div className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Honey Jar" />
            <h3>Miere Polifloră</h3>
            <p>Miere bogată și aromată, obținută din flori sălbatice.</p>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Honey Jar" />
            <h3>Miere de Salcâm</h3>
            <p>Miere delicată, cu note florale fine.</p>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Honey Jar" />
            <h3>Miere de Tei</h3>
            <p>Miere dulce și catifelată, din flori de tei.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
