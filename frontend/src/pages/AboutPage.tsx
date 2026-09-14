import backgroundImageHoney from "../assets/backgroundImageBuna.png";
import "../AboutPage.css";

export default function AboutPage() {
  return (
    <div
      className="about-container"
      style={{
        backgroundImage: `url(${backgroundImageHoney})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="about-card">
        <h1 className="about-title">Povestea Noastră</h1>

        <p className="about-subtitle">
          Pasiune pentru apicultură în inima Mărginimii Sibiului
        </p>

        <div className="about-text">
          <p>
            Fondată din dragoste pentru natură și respect pentru albine,{" "}
            <strong>Bogdan Miere</strong> este o afacere de familie dedicată
            producției de miere 100% naturală și pură.
          </p>

          <p>
            Stupinele noastre sunt amplasate în zone nepoluate din Mărginimea
            Sibiului, unde albinele culeg nectar din flori sălbatice, salcâm și
            tei. Ne mândrim cu faptul că mierea noastră este extrasă la rece,
            neprocesată termic și fără aditivi, păstrându-și toate proprietățile
            nutritive și gustul autentic.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <span>🐝</span>
              <strong>100% Naturală</strong>
              <small>Fără adaos de zahăr sau chimicale</small>
            </div>

            <div className="highlight-item">
              <span>🏔️</span>
              <strong>Zona Sibiu</strong>
              <small>Recoltată din flora Mărginimii Sibiului</small>
            </div>

            <div className="highlight-item">
              <span>💛</span>
              <strong>Tradiție</strong>
              <small>Grija pentru albine și calitatea produsului</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
