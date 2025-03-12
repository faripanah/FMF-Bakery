import { Link } from "react-router-dom";
import { FaFacebookF, FaPinterestP, FaWhatsapp, FaInstagram } from "react-icons/fa";
import logo from "../../assets/Images/bakerylogo.png";
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Top section with logo & social icons */}
      <div className="footer-top">
        <img src={logo} alt="Bakery Logo" className={styles.footer-logo} />
        <div className={styles.social-icons}>
          <p>Follow us</p>
          <div className="icons">
            <FaFacebookF />
            <FaPinterestP />
            <FaWhatsapp />
            <FaInstagram />
          </div>
        </div>
      </div>

      {/* Thin separator line */}
      <div className={styles.footer-line}></div>

      {/* Main Footer Content */}
      <div className={styles.footer-container}>
        <div className="footer-section">
          <h3>Contact us</h3>
          <p>(358) 789-12301</p>
          <p>info@bakery.co.uk</p>
          <p>South 13th Street</p>
          <p>Tampere, Finland</p>
        </div>

        <div className={styles.footer-section}>
          <h3>Explore</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Services</a></li>
          </ul>
        </div>

        <div className={styles.footer-section}>
          <h3>Find Store</h3>
          <ul>
            <li><a href="/">Career</a></li>
            <li><Link to="/user">My Account</Link></li>
            <li><a href="/">Order Online</a></li>
          </ul>
        </div>
      </div>

      <p className="footer-bottom-text">
        © 2024 Bake House. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
