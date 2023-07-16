import "../styles/Hero.css";
import TypeWriterEffect from "react-typewriter-effect";
import resume from "../assets/My Resume.pdf";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero-container">
        <div className="hero-content-container">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm Adetoye! 👋🏽</h1>
            <TypeWriterEffect
              textStyle={{
                fontFamily: "inherit",
                color: "#ffffff",
                fontWeight: 500,
                fontSize: "1.65rem",
              }}
              multiTextLoop={true}
              startDelay={1000}
              cursorColor="#23b7f1"
              multiText={[
                "Front-End Developer",
                "Open Source Enthusiast",
                "Loves to code",
              ]}
              multiTextDelay={1000}
              typeSpeed={70}
            />
            <p className="hero-desc">
              Turning Code into Business Solutions, One Line at a Time.
            </p>
          </div>
          <div className="hero-cta-container">
            <a href="#contact-me" className="cta hire-me">
              Contact Me
            </a>
            <a href={resume} download={true} className="cta view-resume">
              View Resume
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <img className="hero-image" src="img/hero-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
