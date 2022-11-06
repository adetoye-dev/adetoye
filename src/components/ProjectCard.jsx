import "./ProjectCard.css";
import Tag from "./tags/Tags";

const ProjectCard = (props) => {
  const renderTags =
    props.tags !== undefined
      ? props.tags.map((tag) => <Tag tagName={tag} key={tag} />)
      : "";
  return (
    <div className="project-card">
      <div className="project-card-img">
        <img src={`/img/${props.img}`} alt="project-thumbnail" />
      </div>
      {renderTags != "" && <div className="project-tags">{renderTags}</div>}
      <div className="project-card-text">
        <h4 className="project-card-title">{props.title}</h4>
        <p>{props.desc}</p>
        <div className="project-links">
          <a href={props.github} className="project-link">
            <i className="fab fa-github"></i>
          </a>
          <a href={props.liveSite} className="project-link">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
