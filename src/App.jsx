import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import SkillCard from "./components/SkillCard";
import SocialIcon from "./components/SocialIcon";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import ContributionCard from "./components/ContributionCard";

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
          <SkillCard icon="fa-brands fa-js-square" name="JavaScript" />
          <SkillCard icon="fa-brands fa-react" name="React" />
          <SkillCard icon="fa-brands fa-git-alt" name="Git" />
          <SkillCard icon="devicon-tailwindcss-plain" name="Tailwind" />
          <SkillCard icon="devicon-figma-plain" name="Figma" />
          <SkillCard icon="devicon-nodejs-plain" name="NodeJs" />
        </div>
      </section>
      <section className="section recent-projects container">
        <div className="section-title">
          <h1>Recent Projects</h1>
        </div>
        <div className="projects-card-container">
          <ProjectCard
            img="country-search-app.jpeg"
            title="Country Search App"
            desc="A search app where users can search for and learn about the different countries in the world using data from an API."
            liveSite="https://world-countries-search.vercel.app/"
            github="https://github.com/adetoye-dev/rest-countries-api"
            tags={["react", "css", "api"]}
          />
          <ProjectCard
            img="multi-step-form.jpeg"
            title="Multi Step Form"
            desc="A multi-step product purchase form with email validation using an API, and using state management to track user entries for each step."
            liveSite="https://multi-step-form-rho.vercel.app/"
            github="https://github.com/adetoye-dev/multi-step-form"
            tags={["react", "tailwind", "api"]}
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
      <section className="section recent-projects container">
        <div className="section-title">
          <h1>Contributions (Open Source)</h1>
        </div>
        <div className="contributions-card-container">
          <ContributionCard
            img="code-magic.jpeg"
            title="Code Magic"
            desc="A website to help you get short css code you can use in your applications with html and css"
            github="https://github.com/Dun-sin/Code-Magic"
            liveSite="https://code-magic.vercel.app/"
          />
          <ContributionCard
            img="cardit.jpeg"
            title="Cardit"
            desc="Cardit is a web-app where you can create your own GitHub profile card."
            github="https://github.com/pushkaraj2007/Cardit"
            liveSite="https://cardit.vercel.app/"
          />
          <ContributionCard
            img="astro-reactive.jpeg"
            title="Astro Reactive Library"
            desc="Lets your data build your UI with native Astro components and architecture"
            github="https://github.com/ayoayco/astro-reactive-library"
            liveSite="https://astro-reactive.dev/"
          />
        </div>
      </section>
      <section className="section contact-me container" id="contact-me">
        <div className="section-title">
          <h1>Get In Touch</h1>
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
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}

export default App;
