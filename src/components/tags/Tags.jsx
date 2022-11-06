import "./Tags.css";

const Tag = ({ tagName }) => {
  return <div className={`tag ${tagName}`}>{tagName}</div>;
};

export default Tag;
