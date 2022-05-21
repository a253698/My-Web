import React from "react";
import { BsCaretRight } from "react-icons/bs";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#03010E] text-[#E6E6E6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline">
              <a className="text-[#b2fefd]">ii. </a>
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 place-items-center">
          <div className="">
            <img
              src="https://user-images.githubusercontent.com/32476235/169655815-8777731e-714f-4e2f-a8f3-dd9acab421d4.JPG"
              className="object-contain h-60 w-60 "
            ></img>
          </div>
          <div className="my-experience">
            <p>
              I am a Master of Professional Science student in health-related
              Information Science with experience developing systems and web
              application. I enjoying building things on website and loving
              finding insight and potential with data.
            </p>
            <p> My professtional experience includes:</p>
            <p>
              {" "}
              <ul>
                <li className="p-2 m-1 relative">
                  Building hospital systems in an MVC environment using ASP.NET,
                  C#.
                </li>

                <li className="p-2 m-1 relative">
                  Developing user interfaces with HTML/CSS/JavaScript and Kendo
                  UI JavaScript Component Libraries for jQuery.
                </li>

                <li className="p-2 m-1 relative">
                  Using Oracle/MsSQL as a database and performing SQL queries
                  for performance and patient data transformations.
                </li>

                <li className="p-2 m-1 relative">
                  Teaching Assistant of undergrad Bootcamp of Text Mining with
                  Python and Data Mining with R.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
