import { Nav } from "../Assent/Data";
import "./footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        <h1>ch</h1>
        <p>
          handcraft drink and sanck made from the simplest highest quality
          indreient. coffee is at the heart of what we dohighest quality
          indreient. coffee is at the heart of whathandcraft drink and sanck
          made from the simplest highest quality indreient. coffee is at the
          heart of what we dohighest quality indreient.
        </p>
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
      </div>
      <div className="footer-links">
        <ul>
          {Nav.map((el) => {
            return (
              <li key={el.id}>
                <a href="/">{el.title}</a>
              </li>
            );
          })}
        </ul>
        <input type={"text"} placeholder="Email..." />
        <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
