import React from 'react'

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-[#0a192f] text-gray-300 pl-7"
    >
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right pb-8 pl-4">
            <h2 className="text-4xl font-bold border-b-4 border-pink-600 inline">
              About
            </h2>
          </div>
          <div></div>
        </div>
        <div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div>
              <p className="sm:text-right font-bold text-4xl">
                I am a Self-taught Software Engineer and Full Stack Javascript
                Developer
              </p>
            </div>
            <div>
              <p>
                A multi-skilled full-stack javascript developer with great
                ambition and interest in developing, and cofounding tech
                startups by bringing together the vision, strategy, and
                execution in a totally unstructured and resource-constrained
                environment.
                <br /> In my one year of experience in tech, I've developed
                extensive knowledge in <br />
                <br /> Front-end development: ReactJS | Redux <br />
                <br /> Back-end development: Ruby on Rails
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About