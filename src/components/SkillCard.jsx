import "./SkillCard.css";

const SkillCard = ({ icon, name }) => {
  return (
    <div className="skills-card">
      <i className={icon}></i>
      <span>{name}</span>
    </div>
  );
};

export default SkillCard;
