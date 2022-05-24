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
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#03010E] text-[#e8e8e8]">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} onClick="" />
      </div>
      {/*navbar menu*/}
      <ul className="hidden md:flex items-center">
        <li>
          <Link to="home" smooth={true} duration={500}>
            <a className="text-[#b2fefd]">i. </a>Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            <a className="text-[#b2fefd]">ii. </a>About Me
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            <a className="text-[#b2fefd]">iii. </a>Skill
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            <a className="text-[#b2fefd]">ix. </a>Work
          </Link>
        </li>
        <li>
          <Link to="projectBlog" smooth={true} duration={500}>
            <a className="text-[#b2fefd]">x. </a>Project & Blog
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            <a className="text-[#b2fefd]">xi. </a>Contact
          </Link>
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
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            <a className="text-[#b2fefd]">i. </a>Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            <a className="text-[#b2fefd]">ii. </a>About Me
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            <a className="text-[#b2fefd]">iii. </a>Skill
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            <a className="text-[#b2fefd]">ix. </a>Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="projectblog"
            smooth={true}
            duration={500}
          >
            <a className="text-[#b2fefd]">x. </a>Project & Blog
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            <a className="text-[#b2fefd]">xi. </a>Contact
          </Link>
        </li>
      </ul>

      {/*social media button on the left*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ">
            <a
              className="flex justify-between items-center w-full text-[#b2fefd]"
              href="https://www.linkedin.com/in/chaochinliu/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} className="text-[#e8e8e8]" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-[#b2fefd]"
              href="https://github.com/a253698"
              target="_blank"
            >
              Github <FaGithub size={30} className="text-[#e8e8e8]" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-[#b2fefd]"
              href="mailto:cliu@unc.edu"
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
