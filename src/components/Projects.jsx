import React from "react";
import vespa from "../assets/Vespa.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="bg-[#0a192f] w-full md:h-screen text-gray-300 pl-12"
    >
      <div className="max-w-[1000px] p-4 h-full w-full flex flex-col ">
        <div className="pb-8">
          <h2 className="text-4xl inline border-b-4 border-pink-600 font-bold">
            Projects
          </h2>
          <p className="py-6">Checkout some of my recent projects</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${vespa})` }}
            className="shadow-lg shadow-[#040a61] container group rounded-md flex justify-center items-center mx-auto project-card"
          >
            <div className=" opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white font-bold tracking-wider flex items-center sm:text-lg">
                Rails React project Vespa
              </span>
              <div className="pt-8 text-center">
                <a href="https://thriving-chebakia-dd687f.netlify.app/">
                  <button className="text-lg bg-white rounded-lg text-gray-700 font-bold px-4 py-3 mx-2 ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/basem909/appointment-diary-front-end">
                  <button className="text-lg bg-white rounded-lg text-gray-700 font-bold px-4 py-3 mx-2 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${vespa})` }}
            className="shadow-lg shadow-[#040a61] container group rounded-md flex justify-center items-center mx-auto project-card"
          >
            <div className=" opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white font-bold tracking-wider flex items-center sm:text-lg">
                Rails React project Vespa
              </span>
              <div className="pt-8 text-center">
                <a href="https://thriving-chebakia-dd687f.netlify.app/">
                  <button className="text-lg bg-white rounded-lg text-gray-700 font-bold px-4 py-3 mx-2 ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/basem909/appointment-diary-front-end">
                  <button className="text-lg bg-white rounded-lg text-gray-700 font-bold px-4 py-3 mx-2 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${vespa})` }}
            className="shadow-lg shadow-[#040a61] container group rounded-md flex justify-center items-center mx-auto project-card"
          >
            <div className=" opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white font-bold tracking-wider flex items-center sm:text-lg">
                Rails React project Vespa
              </span>
              <div className="pt-8 text-center">
                <a href="https://thriving-chebakia-dd687f.netlify.app/">
                  <button className="text-lg bg-white rounded-lg text-gray-700 font-bold px-4 py-3 mx-2 ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/basem909/appointment-diary-front-end">
                  <button className="text-lg bg-white rounded-lg text-gray-700 font-bold px-4 py-3 mx-2 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
