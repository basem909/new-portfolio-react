import React from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import ruby from "../assets/ruby.png";
import rails from "../assets/rails.svg";
import react from "../assets/react.svg";
import postgresql from "../assets/postgresql.svg";
import git from "../assets/git.svg";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full bg-[#0a192f] text-gray-300 pl-12 py-32 ">
      <div className="max-w-[1000px] mx-auto flex flex-col p-4 justify-center w-full h-full ">
        <div>
          <p className="text-4xl inline border-b-4 border-pink-600 font-bold">Skills</p>
          <p className="py-4">
            These are the Techs and skills that I work with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-around">
            <img src={html} alt='HTML' className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-around">
            <img src={css} alt='CSS' className="w-20 mx-auto pt-7" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-around">
            <img src={js} alt='JavaScript' className="w-20 mx-auto pt-7" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-around">
            <img src={git} alt='GIT' className="w-[17vw] mx-auto pt-7" />
            <p className="my-4">Git Cli</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-around">
            <img src={react} alt='React' className="w-20 mx-auto pt-7" />
            <p className="my-4">React and Redux</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-around">
            <img src={ruby} alt='Ruby' className="w-20 mx-auto pt-7" />
            <p className="my-4">Ruby</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-around">
            <img src={rails} alt='Rails' className="w-[18vw] mx-auto pt-7" />
            <p className="my-4">Rails</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col justify-around">
            <img src={postgresql} alt='Postgresql' className="w-20 mx-auto pt-7" />
            <p className="my-4">Postgresql</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
