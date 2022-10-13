import React from "react";

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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[#040a61] container group rounded-md flex justify-center items-center mx-auto project-card">
            <div>
              <span></span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
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
