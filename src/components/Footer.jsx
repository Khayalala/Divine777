import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="mystic-footer">
      <div className="footer-content">
        <p className="footer-text">
          🌟 Khayala's Celestial Insights &copy; {new Date().getFullYear()} 🌟
        </p>
        <p className="footer-quote">
          "Trust the whispers of the universe — your angels are always
          speaking."
        </p>
        <div className="footer-links">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
