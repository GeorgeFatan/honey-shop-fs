import "../Footer.css";


export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer-brand">
                <div className="footer-logo">
                    <span className="logo-circle">🍯</span>
                    <h2>Bogdan - Miere din Marginimea Sibiului</h2>
                </div>
                <p className="tagline">
                    Miere naturala din Marginimea Sibilui - pura, locala si facuta cu grija.
                </p>

                <div className="social-icons">
                    <a href="#" aria-label="Facebook" className="icon facebook">f</a>
                    <a href="#" aria-label="Instagram" className="icon instagram">I</a>
                </div>
            </div>
        

            {/*Link to page components*/}
            <div className="footer-links">
                <div className="column">
                    <h3>Produse</h3>
                    <ul>
                        <li><a href="/">Produsele Noastre</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Vrei sa ne contactezi?</h3>
                    <ul>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Istoria Noastra</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                    </ul>
                </div>
            </div>
          {/*copyright section of footer*/}
          <div className="footer-bottom">
            <p>@ 2026 Bogdan Miere.</p>
          </div>

        </footer>
    );
}