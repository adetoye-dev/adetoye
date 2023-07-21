import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import SkillCard from "./components/SkillCard";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import projects from "./content/Projects.json";

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
          <h1 className="text-3xl font-bold">My Skills</h1>
        </div>
        <div className="skills-icon-container">
          <SkillCard icon="fa-brands fa-react" name="React" />
          <SkillCard icon="devicon-nodejs-plain" name="NodeJs" />
          <SkillCard icon="devicon-express-original" name="Express.Js" />
          <SkillCard icon="fa-brands fa-js-square" name="JavaScript" />
          <SkillCard icon="devicon-mysql-plain" name="MySQL" />
          <SkillCard icon="devicon-tailwindcss-plain" name="Tailwind" />
          <SkillCard icon="devicon-mongodb-plain" name="MongoDB" />
          <SkillCard icon="fa-brands fa-git-alt" name="Git" />
          <SkillCard icon="devicon-figma-plain" name="Figma" />
        </div>
      </section>
      <section className="section recent-projects container">
        <div className="section-title">
          <h1 className="text-3xl font-bold">Recent Projects</h1>
        </div>
        <div className="max-w-[912px] mx-auto flex flex-col gap-10 mt-5">
          {projects.map((project) => {
            return <ProjectCard {...project} />;
          })}
        </div>
        <div className="view-more">
          <a href="https://github.com/adetoye-dev" className="view-more-btn">
            <i className="fab fa-github"></i> View More on GitHub
          </a>
        </div>
      </section>
      <section className="section contact-me container" id="contact-me">
        <div className="section-title">
          <h1 className="text-3xl font-bold">Get In Touch</h1>
        </div>
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}

export default App;
