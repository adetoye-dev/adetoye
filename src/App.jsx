import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import SkillCard from "./components/SkillCard";
import ContactForm from "./components/ContactForm";
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
          <SkillCard icon="fa-brands fa-react" name="React" />
          <SkillCard icon="fa-brands fa-js-square" name="JavaScript" />
          <SkillCard icon="devicon-tailwindcss-plain" name="Tailwind" />
          <SkillCard icon="devicon-nodejs-plain" name="NodeJs" />
          <SkillCard icon="fa-brands fa-git-alt" name="Git" />
          <SkillCard icon="devicon-figma-plain" name="Figma" />
        </div>
      </section>
      <section className="section recent-projects container">
        <div className="section-title">
          <h1>Recent Projects</h1>
        </div>
        <div className="projects-card-container">
          <ProjectCard
            img="what2wear.png"
            title="What2Wear App (Beta Testing)"
            desc="This is a weather app that recommends you what to wear based on the current weather in your location or a location of your choice."
            liveSite="https://what2wear.vercel.app/"
            github="https://github.com/adetoye-dev/weathrr-app"
            tags={["react", "node", "express", "mysql"]}
          />
          <ProjectCard
            img="multi-step-form.jpeg"
            title="Plan Subscription App"
            desc="This is a simple service subscription app with email validation using an API and live payment integration"
            liveSite="https://plan-subscription.vercel.app/"
            github="https://github.com/adetoye-dev/plan-subscription-app"
            tags={["react", "tailwind", "api"]}
          />
          <ProjectCard
            img="country-search-app.jpeg"
            title="Country Search App"
            desc="A search app where users can search for and learn about the different countries in the world using data from an API."
            liveSite="https://world-countries-search.vercel.app/"
            github="https://github.com/adetoye-dev/rest-countries-api"
            tags={["react", "css", "api"]}
          />
          <ProjectCard
            img="ip-address-tracker.jpeg"
            title="Ip Address Tracker"
            desc="A tracker app that displays user's location on the map with ip address search"
            liveSite="https://ip-address-tracker-1y6t.vercel.app/"
            github="https://github.com/adetoye-dev/ip-address-tracker"
            tags={["react", "css", "api"]}
          />
          <ProjectCard
            img="quizzical.png"
            title="Quizzical"
            desc="A Quiz App that fetches and renders quiz questions from an API, and also keeps track of the user's selection for each question and checks if it's correct or not."
            liveSite="https://quizzical-nqu9.vercel.app/"
            github="https://github.com/adetoye-dev/quizzical"
            tags={["react", "css", "api"]}
          />
          <ProjectCard
            img="shortly.jpeg"
            title="URL Shortener App"
            desc="A web app that allows users to enter long URLs and converts it to shorter forms using an API"
            liveSite="https://shortly-umber-one.vercel.app/"
            github="https://github.com/adetoye-dev/shortly"
            tags={["html", "css", "javascript", "api"]}
          />
        </div>
        <div className="view-more">
          <a href="https://github.com/adetoye-dev" className="view-more-btn">
            <i className="fab fa-github"></i> View More on GitHub
          </a>
        </div>
      </section>
      <section className="section contact-me container" id="contact-me">
        <div className="section-title">
          <h1>Get In Touch</h1>
        </div>
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}

export default App;
