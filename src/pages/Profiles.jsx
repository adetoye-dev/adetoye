import React from "react";
import pfp from "../assets/pfp.jpg";

import profiles from "../content/profiles.json";

const Profiles = () => {
  return (
    <div className="bg-background w-full min-h-screen flex items-center justify-center">
      <div className="w-full px-5 py-20 max-w-2xl flex flex-col gap-2 items-center">
        <img
          className="w-40 h-40 rounded-full"
          width={150}
          height={150}
          src={pfp}
          alt="profile"
        />
        <h2 className="text-white font-bold text-3xl">Adetoye</h2>
        <p className="text-white mt-3 text-center text-base md:text-lg">
          Front-End Developer | Open-Source Ethusiast | Software Engineer |
          Solving modern business problems through code
        </p>
        <hr className="w-full border border-secondary mb-5" />
        <ul className="flex flex-col gap-3 w-full">
          {profiles.map((profile) => (
            <li key={profile.platform}>
              <a
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                className="border border-primary p-3 gap-3 rounded-full flex items-center text-white bg-black/20 hover:bg-primary transition-all"
              >
                <i className={`${profile.icon} text-2xl text-accent`}></i>
                {profile.platform}
                <span className="ml-auto">&gt;</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profiles;
