import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import SkillCard from "./components/SkillCard";
import SocialIcon from "./components/SocialIcon";
import ContactForm from "./components/ContactForm";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <section className="section about-me" id="about-me">
        <AboutMe />
      </section>
      <section className="section my-skills container">
        <div className="section-title">
          <h1>My Skills</h1>
        </div>
        <div className="skills-icon-container">
          <SkillCard icon="fa-brands fa-html5" name="HTML" />
          <SkillCard icon="fa-brands fa-css3-alt" name="CSS" />
          <SkillCard icon="fa-brands fa-js-square" name="JavaScript" />
          <SkillCard icon="fa-brands fa-react" name="React" />
          <SkillCard icon="fa-brands fa-php" name="php" />
          <SkillCard icon="fa-brands fa-git-alt" name="git" />
          <SkillCard icon="fa-brands fa-github" name="GitHub" />
        </div>
      </section>
      <section className="section recent-projects container">
        <div className="section-title">
          <h1>Recent Projects</h1>
        </div>
        <div className="projects-card-container">
          <ProjectCard
            img="amaduke.com.ng.jpeg"
            title="Amaduke Energy"
            desc="Business Service Page"
            liveSite="https://amaduke.com.ng/energy"
            github="https://amaduke.com.ng/energy"
            tags={["html", "css"]}
          />
          <ProjectCard
            img="arvotrade.com.jpeg"
            title="jldjkjfkdjkjdsklk"
            desc="Business Service Page"
            liveSite="https://amaduke.com.ng/energy"
            github="https://amaduke.com.ng/energy"
            tags={["html", "css", "react"]}
          />
          <ProjectCard
            img="amaduke.com.ng.jpeg"
            title="Amaduke Energy"
            desc="Business Service Page"
            liveSite="https://amaduke.com.ng/energy"
            github="https://amaduke.com.ng/energy"
            tags={["javascript", "react"]}
          />
          <ProjectCard
            img="amaduke.com.ng.jpeg"
            title="Amaduke Energy"
            desc="Business Service Page"
            liveSite="https://amaduke.com.ng/energy"
            github="https://amaduke.com.ng/energy"
            tags={["html", "css", "javascript"]}
          />
        </div>
      </section>
      <section className="section socials container">
        <div className="section-title">
          <h1>Let's Connect</h1>
        </div>
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
      </section>
      <section className="section contact-me container" id="contact-me">
        <div className="section-title">
          <h1>Get In Touch</h1>
        </div>
        <ContactForm />
      </section>
      <Modal />
      <Footer />
    </>
  );
}

export default App;
