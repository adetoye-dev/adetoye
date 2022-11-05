import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-text">Thanks for Scrolling</p>
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
