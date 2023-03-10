import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="section-title">
        <h1>About Me</h1>
      </div>
      <div className="about-me-text">
        <p>
          I'm a creative front-end developer focused on creating functional and reusable web components using the ReactJs framework, as well as developing and integrating REST APIs for real-time data fetching and rendering to the user.
        </p>
        <p>
          I'm an active team player, and I always do my best to engage the team with my work progress at every stage of development. 
        </p>
        <p>
          The most exciting project I worked on was a component builder app, which I built at Chingu alongside other developers on my team. This web app allows users to drag and drop essential web components to the page and generates ready-to-use HTML code, which enables users with little to no coding knowledge to create simple, static websites. 
        </p>
        <p>
        I'm passionate about open-source projects and contribute to open-source projects in my spare time.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
