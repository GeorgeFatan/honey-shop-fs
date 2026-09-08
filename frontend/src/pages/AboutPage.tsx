import "../HomePage.css";
import backgroundImageHoney from "../assets/backgroundImageHoney.jpg";

export default function AboutPage() {
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
      <div className="about-content">
        <h1 className="about-message">TEMPLATE DE MESAJ PENTRU ABOUT</h1>
        <p className="about-description">
          DADASDASDASDASDASDASDASDASDASDASDASD
        </p>
        <p className="about-signature">– Bogdan Miere</p>
      </div>
    </div>
  );
}
