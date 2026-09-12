import React from "react";
import backgroundImageHoney from "../assets/backgroundImageHoney.jpg";
import "../ContactUs.css";

interface ContactItem {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtext: string;
  link: string | null;
}

export default function ContactPage() {
  const contactItems: ContactItem[] = [
    {
      // Logo WhatsApp SVG (Verde oficial #25D366)
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="#25D366">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.285-.143-1.689-.833-1.95-.928-.261-.095-.451-.143-.641.143-.19.285-.736.928-.902 1.118-.166.19-.332.214-.617.071-.285-.143-1.204-.444-2.293-1.415-.847-.756-1.419-1.689-1.585-1.974-.166-.285-.018-.439.125-.581.128-.127.285-.332.427-.499.143-.166.19-.285.285-.475.095-.19.048-.356-.024-.499-.071-.143-.641-1.544-.878-2.114-.231-.555-.466-.48-.641-.489l-.547-.01c-.19 0-.499.071-.76.356-.261.285-.998.975-.998 2.38 0 1.403 1.022 2.758 1.165 2.948.143.19 2.012 3.073 4.873 4.308.681.293 1.212.469 1.626.601.684.218 1.307.187 1.799.114.548-.081 1.689-.689 1.926-1.355.237-.665.237-1.236.166-1.355-.071-.119-.261-.19-.546-.333z" />
        </svg>
      ),
      title: "WhatsApp",
      value: "+40 712 345 678",
      subtext: "Luni - Vineri: 08:00 - 16:00",
      link: "https://wa.me/40712345678", // Deschide chat direct pe WhatsApp
    },
    {
      // Logo Gmail SVG (Roșu oficial #EA4335)
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="#EA4335">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5h16zm0 10H4V10l8 5 8-5v8z" />
        </svg>
      ),
      title: "Gmail",
      value: "contact@bogdanmiere.ro",
      subtext: "Îți răspundem în maxim 24 ore",
      link: "mailto:contact@bogdanmiere.ro",
    },
    {
      icon: "📍",
      title: "Locație & Stupină",
      value: "Mărginimea Sibiului",
      subtext: "Județul Sibiu, România",
      link: "https://maps.google.com",
    },
    {
      icon: "🕒",
      title: "Program Magazin",
      value: "Luni - Vineri: 08:00 - 16:00",
      subtext: "Sâmbătă & Duminică: Închis",
      link: null,
    },
    {
      // Logo Instagram SVG
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E1306C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      title: "Instagram",
      value: "@bogdan.miere",
      subtext: "Poze și noutăți din stupină",
      link: "https://instagram.com",
    },
    {
      // Logo Facebook SVG
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      title: "Facebook",
      value: "Bogdan Miere Sibiu",
      subtext: "Fii la curent cu ultimele recoltări",
      link: "https://facebook.com",
    },
  ];

  return (
    <div
      className="contact-container"
      style={{ backgroundImage: `url(${backgroundImageHoney})` }}
    >
      {/* Antet Titlu */}
      <div className="contact-header">
        <h1 className="contact-title">Contactează-ne</h1>
        <p className="contact-subtitle">
          Suntem aici pentru orice întrebări despre mierea noastră naturală!
        </p>
      </div>

      {/* Grilă Carduri */}
      <div className="contact-grid">
        {contactItems.map((item, index) => {
          const cardContent = (
            <div className="contact-card">
              <div className="contact-icon-wrapper">{item.icon}</div>
              <h3 className="contact-card-title">{item.title}</h3>
              <p className="contact-card-value">{item.value}</p>
              <small className="contact-card-subtext">{item.subtext}</small>
            </div>
          );

          if (item.link) {
            return (
              <a
                key={index}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className="contact-card-link"
              >
                {cardContent}
              </a>
            );
          }

          return <div key={index}>{cardContent}</div>;
        })}
      </div>
    </div>
  );
}