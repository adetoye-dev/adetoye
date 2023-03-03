import "./Footer.css";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="attribution-and-social-links">
          <p className="footer-text">Copyright &copy; 2023, Adetoye</p>
          <div className="social-icons-container">
            <SocialIcon
              icon="fab fa-github"
              link="https://github.com/adetoye-dev"
            />
            <SocialIcon
              icon="fab fa-instagram"
              link="https://instagram.com/adetoye_dev"
            />
            <SocialIcon
              icon="fab fa-twitter"
              link="https://twitter.com/adetoye_dev"
            />
            <SocialIcon
              icon="fab fa-linkedin-in"
              link="https://linkedin.com/in/adetoye-dev"
            />
          </div>
        </div>

        <div
          className="go-to-top-btn"
          id="go-to-top"
          onClick={() => window.scroll(0, 0)}
        >
          <i className="fas fa-long-arrow-up"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
