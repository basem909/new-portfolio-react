import React from 'react'

const home = () => {
  return (
    <div name="" className="w-full h-screen bg-[#0a192f] pl-10">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center">
        <p className="text-pink-600">My name is</p>
        <h1 className="text-4xl sm:text-7xl text-[#ccd6f6] font-bold">
          Bassem Abdelrahman
        </h1>
        <h2 className="text-4xl sm:text-5xl text-[#8892b0] font-bold">
          I am a full-stack web developer
        </h2>
        <p className=" text-[#8892b0] py-4 max-w-[700px]">
          I can help you build a product, feature or website. Take a look of my
          works. If you like what you see and have a project you need coded, do
          not hesitate and contact me.
        </p>
        <div>
          <a href='/contact' className='text-white px-6 border-2 py-3 my-3 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-md hover:transition-shadow duration-300 max-w-[200px]'>Start collaboration</a>
        </div>
      </div>
    </div>
  );
}

export default home