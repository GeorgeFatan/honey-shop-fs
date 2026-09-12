import backgroundImageHoney from "../assets/backgroundImageHoney.jpg";

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        boxSizing: "border-box",
        backgroundImage: `url(${backgroundImageHoney})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Cardul ALB SOLID - fara nicio transparenta, ca sa nu mai treaca fondul inchis prin el */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
          maxWidth: "650px",
          width: "100%",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            color: "#111111",
            marginTop: 0,
            marginBottom: "8px",
            fontSize: "2.2rem",
            fontWeight: "bold",
          }}
        >
          Povestea Noastră
        </h1>

        <p
          style={{
            color: "#d4af37",
            fontWeight: "600",
            marginTop: 0,
            marginBottom: "24px",
            fontSize: "1.1rem",
          }}
        >
          Pasiune pentru apicultură în inima Mărginimii Sibiului
        </p>

        <div
          style={{
            textAlign: "justify",
            color: "#333333",
            fontSize: "1.05rem",
            lineHeight: "1.7",
          }}
        >
          <p style={{ marginBottom: "16px" }}>
            Fondată din dragoste pentru natură și respect pentru albine,{" "}
            <strong style={{ color: "#111111" }}>Bogdan Miere</strong> este o
            afacere de familie dedicată producției de miere 100% naturală și
            pură.
          </p>

          <p style={{ marginBottom: "24px" }}>
            Stupinele noastre sunt amplasate în zone nepoluate din Mărginimea
            Sibiului, unde albinele culeg nectar din flori sălbatice, salcâm și
            tei. Ne mândrim cu faptul că mierea noastră este extrasă la rece,
            neprocesată termic și fără aditivi, păstrându-și toate proprietățile
            nutritive și gustul autentic.
          </p>

          {/* Cele 3 casete deschise la culoare */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "15px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#fffdf0",
                border: "1px solid #f2e3b6",
                padding: "15px 10px",
                borderRadius: "12px",
                flex: "1 1 150px",
              }}
            >
              <span style={{ fontSize: "1.8rem", marginBottom: "8px" }}>
                🐝
              </span>
              <strong
                style={{
                  color: "#222222",
                  fontSize: "0.95rem",
                  marginBottom: "4px",
                }}
              >
                100% Naturală
              </strong>
              <small style={{ color: "#666666", fontSize: "0.8rem" }}>
                Fără adaos de zahăr sau chimicale
              </small>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#fffdf0",
                border: "1px solid #f2e3b6",
                padding: "15px 10px",
                borderRadius: "12px",
                flex: "1 1 150px",
              }}
            >
              <span style={{ fontSize: "1.8rem", marginBottom: "8px" }}>
                🏔️
              </span>
              <strong
                style={{
                  color: "#222222",
                  fontSize: "0.95rem",
                  marginBottom: "4px",
                }}
              >
                Zona Sibiu
              </strong>
              <small style={{ color: "#666666", fontSize: "0.8rem" }}>
                Recoltată din flora Mărginimii Sibiului
              </small>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#fffdf0",
                border: "1px solid #f2e3b6",
                padding: "15px 10px",
                borderRadius: "12px",
                flex: "1 1 150px",
              }}
            >
              <span style={{ fontSize: "1.8rem", marginBottom: "8px" }}>
                💛
              </span>
              <strong
                style={{
                  color: "#222222",
                  fontSize: "0.95rem",
                  marginBottom: "4px",
                }}
              >
                Tradiție
              </strong>
              <small style={{ color: "#666666", fontSize: "0.8rem" }}>
                Grija pentru albine și calitatea produsului
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}