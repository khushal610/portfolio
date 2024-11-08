import React from 'react';
import { NavLink } from 'react-router-dom';

function ProjectCard({ name, tech, image, navigateLink }) {
  return (
    <div className="project-img-container w-full sm:w-5/12 md:w-4/12 p-4 flex flex-col items-center">
      <div className="project-content flex flex-col items-center text-center mb-4">
        <h1 className="text-xl md:text-2xl font-semibold mb-2">{name}</h1>
        <p className="text-sm md:text-base mb-4">{tech}</p>
        <NavLink to={navigateLink} target="_blank" rel="noopener noreferrer">
          <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black rounded-md px-4 py-2 transition-colors duration-300">
            Visit Site
          </button>
        </NavLink>
      </div>
      <img src={image} alt={name} className="w-full h-auto rounded-md shadow-md" />
    </div>
  );
}

export default ProjectCard;
