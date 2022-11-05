import "./Hero.css";
import TypeWriterEffect from "react-typewriter-effect";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-image-container">
        <img className="hero-image" src="img/hero-img.png" alt="" />
      </div>
      <div className="hero-content-container">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm Adetoye! 👋🏽</h1>
            <TypeWriterEffect
              textStyle={{
                fontFamily: "inherit",
                color: "#ffffff",
                fontWeight: 500,
                fontSize: "1.5em",
              }}
              startDelay={2000}
              cursorColor="#23b7f1"
              multiText={[
                "Front-End Developer",
                "Open Source Enthusiast",
                "Loves to code",
              ]}
              multiTextDelay={1000}
              typeSpeed={30}
            />
          </div>
          <div className="hero-cta-container">
            <a href="#contact-me" className="cta hire-me">
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/17jfxvOmbIVkaiT1gqwe-qQk91aLL7rkw/view?usp=sharing"
              className="cta view-resume"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
