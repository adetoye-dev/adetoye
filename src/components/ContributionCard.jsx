import "../styles/ContributionCard.css";

const ContributionCard = (props) => {
  return (
    <div className="contribution-card">
      <div className="contribution-project-logo">
        <img src={`/img/${props.img}`} alt="project-logo" />
      </div>
      <div className="contribution-project-data">
        <h5 className="contribution-project-title">{props.title}</h5>
        <p>{props.desc}</p>
      </div>
      <div className="project-links">
        <a href={props.github} className="project-link">
          <i className="fab fa-github"></i>
        </a>
        <a href={props.liveSite} className="project-link">
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
};

export default ContributionCard;
