import React, { useState } from "react";
import logo from "../assets/1.png";
import {
  FaAddressCard,
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [popUp, setPopUp] = useState(false);
  const clickHandler = () => setPopUp(!popUp);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-md">
      <div>
        <img src={logo} alt="logo" style={{ width: "60px" }} />
      </div>
      <ul className="hidden md:flex  ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {/* burger icon */}
      <div className=" md:hidden z-10 cursor-pointer" onClick={clickHandler}>
        {!popUp ? <FaBars size={25} /> : <FaTimes size={30} />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !popUp
            ? "hidden"
            : "absolute top-0 left-0 bg-[#0a192f] w-full h-screen flex flex-col justify-center items-center md:hidden"
        }
      >
        <li className="py-10 text-4xl">
          <Link onClick={clickHandler} to="/">Home</Link>
        </li>
        <li className="py-10 text-4xl">
          <Link onClick={clickHandler} to="/about">About</Link>
        </li>
        <li className="py-10 text-4xl">
          <Link onClick={clickHandler} to="/skills">Skills</Link>
        </li>
        <li className="py-10 text-4xl">
          <Link onClick={clickHandler} to="/projects">Projects</Link>
        </li>
        <li className="py-10 text-4xl">
          <Link onClick={clickHandler} to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hidden md:flex flex-col fixed left-0 top-[35%]">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-md ">
            <a
              className="w-full flex justify-between items-center text-gray-300"
              href="https://www.linkedin.com/in/bassem-shams/"
            >
              Linked-in <FaLinkedin size={25} />
            </a>
          </li>
          <li className="rounded-md w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
            <a
              className="w-full flex justify-between items-center text-gray-300"
              href="https://github.com/basem909"
            >
              Github <FaGithub size={25} />
            </a>
          </li>
          <li className="rounded-md w-[160px] h-[60px] flex justify-between items-center bg-red-500 ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="w-full text-white flex justify-between items-center"
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMScbVfqBWrznqZXmqBlGGLPMDGwnwLwRJThvjptmwjFzVQlDBzlwMSHMRNBWVWDlchNTTn"
            >
              Email <SiGmail size={25} />
            </a>
          </li>
          <li className="rounded-md w-[160px] h-[60px] bg-gray-700 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="w-full flex justify-between items-center text-gray-300"
              href="https://docs.google.com/document/d/1hdp1Cg11wKgD45-LuoY43GkNlQqbsl4r4EdPfbius0g/edit?usp=sharing"
            >
              Resume <FaAddressCard size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
