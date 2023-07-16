import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="section-title">
        <h1>About Me</h1>
      </div>
      <div className="about-me-text">
        <p>
          I'm a full-stack developer, with a soft spot for the front end. In
          simple terms, I transform business problems into neat code solutions,
          one line at a time. Over the past three years, I've been putting this
          into practice, working with all kinds of remote teams.
        </p>

        <p>
          My toolkit includes but is not limited to, React, Typescript, NodeJs,
          ExpressJs, MySQL REST APIs, Nextjs, JavaScript, and MongoDB. I love
          expanding my knowledge and skill set by learning about new
          technologies as they come along.
        </p>

        <p>
          I spend most of my free time on volunteer work and open-source
          projects, expanding my knowledge base and fueling my passion for
          software solutions.
        </p>

        <p>
          Feel like we could create something amazing together? Please feel free
          to{" "}
          <a className="about-cta" href="#contact-me">
            reach out
          </a>{" "}
          for a chat. I look forward to speaking with you! 😁
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
