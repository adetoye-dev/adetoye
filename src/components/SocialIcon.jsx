import "../styles/SocialIcon.css";

const SocialIcon = (props) => {
  return (
    <a href={props.link} className="social-icon-link">
      <div className="social-icon">
        <i className={props.icon}></i>
      </div>
    </a>
  );
};

export default SocialIcon;
