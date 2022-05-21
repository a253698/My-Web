import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Logo from "../assets/whitelogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#03010E] text-[#e8e8e8]">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>
      {/*navbar menu*/}
      <ul className="hidden md:flex items-center">
        <li>
          <a className="text-[#b2fefd]">i. </a>Home
        </li>
        <li>
          <a className="text-[#b2fefd]">ii. </a>About Me
        </li>
        <li>
          <a className="text-[#b2fefd]">iii. </a>Skills
        </li>
        <li>
          <a className="text-[#b2fefd]">ix. </a>Work
        </li>
        <li>
          <a className="text-[#b2fefd]">x. </a>Project & Blog
        </li>
        <li>
          <a className="text-[#b2fefd]">xi. </a>Contact
        </li>
        <li>
          <a className="text-[#b2fefd] group border-2 border-[#b2fefd] rounded-md px-2 py-1 flex items-center hover:bg-[#b2fefd24] hover:border-[#b2fefd]">
            Resume
          </a>
        </li>
      </ul>

      {/*hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#03010E] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About Me</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Blog</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/*social media*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between items-center w-full text-[#b2fefd]"
              href="/"
            >
              Linkedin <FaLinkedin size={30} className="text-[#e8e8e8]" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-[#b2fefd]"
              href="/"
            >
              Github <FaGithub size={30} className="text-[#e8e8e8]" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-[#b2fefd]"
              href="/"
            >
              Email <HiOutlineMail size={30} className="text-[#e8e8e8]" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-[#b2fefd]"
              href="/"
            >
              Resume{" "}
              <BsFillArrowDownCircleFill size={30} className="text-[#e8e8e8]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// “Question mark” operator in JavaScript is a ternary operator that has three operands. -> if else statement, pair with ":"
