import React from 'react';
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram, FaLaptopCode, FaCode } from "react-icons/fa";
import AboutCard from '../templates/AboutCard';
import './about.css';
import ProjectCard from '../templates/ProjectCard';

function About() {
  return (
    <>
      {/* --------------------first class-------------------- */}
      {/* <div className="about-first-class flex flex-col md:flex-row items-center justify-center py-10 px-4">
        <div className="md:w-5/12 lg:w-4/12 flex items-center justify-center relative mb-6 md:mb-0">
          <div className="shape bg-black h-16 md:h-32 absolute top-2 md:top-5 right-5 md:right-10 w-5 md:w-10"></div>
          <img src="Images/rdj1.png" alt="Profile" className="p-3 border-2 border-black w-3/4 md:w-5/6 lg:w-3/4" />
          <div className="shape h-16 md:h-32 absolute bottom-2 md:bottom-5 left-5 md:left-10 w-5 md:w-10 border-2 border-black bg-gray-50"></div>
        </div>
        <div className="about-content-container w-full md:w-7/12 lg:w-8/12 px-4 md:px-10 lg:px-16 flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl">About Me</h1>
          <p className="text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tenetur, provident ad delectus fuga repellendus error obcaecati est pariatur similique hic quia iusto sint, atque, quo suscipit corrupti illum voluptatibus libero! Quo quos cupiditate odit fuga qui corporis molestiae ab.
          </p>
          <div className="btn-container flex justify-center md:justify-start gap-2 md:gap-3">
            <button className="flex items-center gap-2 text-lg md:text-2xl border-2 border-gray-700 p-2 rounded-md">
              <FaWhatsapp />
            </button>
            <button className="flex items-center gap-2 text-lg md:text-2xl border-2 border-gray-700 p-2 rounded-md">
              <FaGithub />
            </button>
            <button className="flex items-center gap-2 text-lg md:text-2xl border-2 border-gray-700 p-2 rounded-md">
              <FaLinkedin />
            </button>
            <button className="flex items-center gap-2 text-lg md:text-2xl border-2 border-gray-700 p-2 rounded-md">
              <FaInstagram />
            </button>
          </div>
        </div>
      </div> */}
    <div className="about-first-class flex flex-col md:flex-row items-center justify-center py-10 px-4">
      <div className="md:w-5/12 lg:w-4/12 flex items-center justify-center relative mb-6 md:mb-0">
        <div className="shape bg-black h-16 lg:right-8 lg:w-10 md:h-32 md:right-3 md:w-10 absolute top-2 md:top-5 right-10 w-6 "></div>
        <img
          src="Images/rdj1.png"
          alt="Profile"
          className="p-3 border-2 border-black w-3/4 md:w-5/6 lg:w-3/4 relative"
        />
        <div className="shape h-16 lg:left-7 lg:w-10 md:h-32 md:left-3 absolute bottom-2 md:bottom-5 left-10 w-6 md:w-10 border-2 border-black bg-gray-50"></div>
      </div>
      <div className="about-content-container w-full md:w-7/12 lg:w-8/12 px-4 md:px-10 lg:px-16 flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl">About Me</h1>
        <p className="text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
          tenetur, provident ad delectus fuga repellendus error obcaecati est
          pariatur similique hic quia iusto sint, atque, quo suscipit corrupti
          illum voluptatibus libero! Quo quos cupiditate odit fuga qui corporis
          molestiae ab.
        </p>
        <div className="btn-container flex justify-center md:justify-start gap-2 md:gap-3">
          <button className="flex items-center gap-2 text-lg md:text-2xl border-2 border-gray-700 p-2 rounded-md">
            <FaWhatsapp />
          </button>
          <button className="flex items-center gap-2 text-lg md:text-2xl border-2 border-gray-700 p-2 rounded-md">
            <FaGithub />
          </button>
          <button className="flex items-center gap-2 text-lg md:text-2xl border-2 border-gray-700 p-2 rounded-md">
            <FaLinkedin />
          </button>
          <button className="flex items-center gap-2 text-lg md:text-2xl border-2 border-gray-700 p-2 rounded-md">
            <FaInstagram />
          </button>
        </div>
      </div>
    </div>


      {/* --------------------second class------------------- */}
      <div className="about-second-class flex flex-wrap items-center justify-evenly py-8 md:py-16 bg-gray-100 px-4 md:px-0">
        <AboutCard icon={<FaLaptopCode className="text-center text-gray-400 text-4xl md:text-6xl" />} title="Web Design" />
        <AboutCard icon={<FaCode className="text-center text-gray-400 text-4xl md:text-6xl" />} title="Web Development" />
        <AboutCard icon={<FaLaptopCode className="text-center text-gray-400 text-4xl md:text-6xl" />} title="Web Design" />
        <AboutCard icon={<FaCode className="text-center text-gray-400 text-4xl md:text-6xl" />} title="Web Development" />
      </div>

      {/* ------------------------third class------------------ */}
      <div className="about-third-class flex flex-wrap items-center justify-evenly py-8 md:py-10 px-4 md:px-0">
        <h1 className='text-4xl w-full text-center mb-6 md:mb-8'>Projects</h1>

        {/* <div className='project-part-1 w-full'>
          <h1 className='text-2xl text-center mb-4'>Hard Level</h1>
          <div className="flex flex-wrap justify-evenly gap-4">
              <ProjectCard 
                name="Ajay-modi-travel" 
                tech="Developed using Bootstrap" 
                image="Images/p6.png" 
                navigateLink="https://khushal610.github.io/Ajay-modi-travels/" 
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              />
              <ProjectCard 
                name="University-site" 
                tech="Developed using HTML, CSS, JAVASCRIPT" 
                image="Images/p3.png" 
                navigateLink="https://khushal610.github.io/Ajay-modi-travels/" 
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              />
          </div>
        </div> */}

        <div className='project-part-1 w-full'>
          <h1 className='text-2xl text-center mb-4'>Medium Level</h1>
          <div className="flex flex-wrap justify-evenly gap-4">
              <ProjectCard 
                name="Spotify-clone" 
                tech="Developed using React" 
                image="Images/p1.png" 
                navigateLink="https://spotify-clone-khushal610.netlify.app/" 
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              />
              <ProjectCard 
                name="Ajay-modi-travel" 
                tech="Developed using Bootstrap" 
                image="Images/p6.png" 
                navigateLink="https://khushal610.github.io/Ajay-modi-travels/" 
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              />
              <ProjectCard 
                name="University-site" 
                tech="Developed using HTML, CSS, JAVASCRIPT" 
                image="Images/p3.png" 
                navigateLink="https://khushal610.github.io/Ajay-modi-travels/" 
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              />
          </div>
        </div>

        <div className='project-part-1 w-full'>
          <h1 className='text-2xl text-center mb-4'>Easy Level</h1>
          <div className="flex flex-wrap justify-evenly gap-4">
              <ProjectCard 
                name="Simple-Calculator" 
                tech="Developed using HTML,CSS,JAVASCRIPT" 
                image="Images/p8.png" 
                navigateLink="https://khushal610.github.io/calc/" 
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              />
              <ProjectCard 
                name="Simple-Number-Gussing-Game" 
                tech="Developed using HTML,CSS,JAVASCRIPT" 
                image="Images/p9.png" 
                navigateLink="https://khushal610.github.io/game/" 
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              />
          </div>
        </div>
      </div>

    </>
  );
}

export default About;
