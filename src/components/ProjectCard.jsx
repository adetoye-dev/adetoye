import React from "react";
import Tag from "./tags/Tags";
import useMediaQuery from "../hooks/useMediaQuery";
import Slider from "./Slider";

const ProjectCard = (props) => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  const renderTags =
    props.tags !== undefined
      ? props.tags.map((tag) => <Tag tagName={tag} key={tag} />)
      : "";

  return (
    <div className="w-full border flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-2/5">
        <h2 className="text-2xl font-bold mb-2">{props.title}</h2>
        {renderTags !== "" && <div className="flex gap-2">{renderTags}</div>}
        <p className="my-6">{props.desc}</p>
        <div className="project-links flex gap-5">
          <a
            href={props.github}
            className="project-link py-2 px-4 border rounded-md flex items-center gap-2"
          >
            <i className="fab fa-github"></i>
            <span>Source Code</span>
          </a>
          <a
            href={props.liveSite}
            className="project-link py-2 px-4 border rounded-md flex items-center gap-2"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            <span>Visit Site</span>
          </a>
        </div>
      </div>
      <div className="w-full md:w-3/5 h-[500px]">
        {/*create custom slider component that takes in an array of images and render them in a slide, on mobile use mobile images array, and on desktop use desktop images*/}
        {isDesktop ? (
          <Slider sliderImages={props.desktopSlides} />
        ) : (
          <Slider sliderImages={props.mobileSlides} />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
