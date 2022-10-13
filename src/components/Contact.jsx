import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-fit bg-[#0a192f] text-gray-300 pl-12 py-5 flex justify-center items-center"
    >
      <form
        action="https://getform.io/f/21505d27-cdd4-4a89-9a27-954f270d40cb"
        method="POST"
        className="flex flex-col items-center justify-start max-w-[600px] w-full rounded-sm"
      >
        <div className="pb-8 flex flex-col w-full">
          <h2 className="text-4xl w-fit font-bold border-b-4 border-pink-600 inline">
            Contact
          </h2>
          <p className="text-gray-300 py-4">
            Submit this form or send me an email to Basemshams30@gmail.com
          </p>
        </div>
        <input
          type="text"
          name="name"
          className="bg-[#ccd6f6] p-2 w-full"
          placeholder="Name..."
          required
        ></input>

        <input
          type="email"
          name="email"
          className="bg-[#ccd6f6] my-2 p-2 w-full"
          placeholder="E-mail..."
          required
        ></input>
        <textarea
          className="bg-[#ccd6f6] my-2 p-2 w-full text-black"
          rows={10}
          name="message"
          placeholder="Message..."
          required
        ></textarea>
        <button className="text-white px-6 border-2 py-3 my-3 flex justify-center items-center hover:bg-pink-600 hover:border-pink-600 rounded-md hover:transition-shadow duration-300 w-[20vw]">
          Let's collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
