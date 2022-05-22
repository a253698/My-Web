import React from "react";
import { AiOutlineFolderOpen, AiFillGithub } from "react-icons/ai";

const ProjectBlog = () => {
  return (
    <div
      name="projectBlog"
      className="w-fill md:h-screen bg-[#03010E] text-[#E6E6E6]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">
            <a className="text-[#b2fefd]">ix. </a>
            Project &#38; Blog
          </p>
          <p className="py-6">
            Here are some of my courses project and blog I work on!
          </p>
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Work 1*/}
          {/* Grid Image*/}
          <div className="h-auto border-2 shadow-md shadow-[#E6E6E6] group container rounded-md  justify-center items-center mx-auto work-content-div">
            <header className="relative">
              {/* File icon*/}
              <ul className="project-top flex w-[100%] items-center m-2 p-2 h-[30%]">
                <li className="absolute left-2 top-1">
                  <AiOutlineFolderOpen className="text-[#b2fefd]" size="2rem" />
                </li>
                <li className="absolute right-2 top-1">
                  <AiFillGithub className="text-[#b2fefd]" size="2rem" />
                </li>
              </ul>
            </header>
            <div className="mx-2 p-2">
              <h1 className="project-title m-2 text-3xl">Dear Data Redux</h1>

              <div className="project-discription m-2">
                This is the place for discription
              </div>
            </div>
            <footer className="m-2 mb-4 text-[#959e9e] p-4 overflow-break-word">
              <ul className="">
                <li className="px-1 float-left">HTML</li>
                <li className="px-1 float-left">CSS</li>
                <li className="px-1 float-left">JavaScript</li>
                <li className="px-1 float-left">Firebase</li>
              </ul>
            </footer>

            {/* Hover Effect */}
          </div>

          {/* Work 1*/}
          {/* Grid Image*/}
          <div className="h-auto border-2 shadow-md shadow-[#E6E6E6] group container rounded-md  justify-center items-center mx-auto work-content-div">
            <header className="relative">
              {/* File icon*/}
              <ul className="project-top flex w-[100%] items-center m-2 p-2 h-[30%]">
                <li className="absolute left-2 top-1">
                  <AiOutlineFolderOpen className="text-[#b2fefd]" size="2rem" />
                </li>
                <li className="absolute right-2 top-1">
                  <AiFillGithub className="text-[#b2fefd]" size="2rem" />
                </li>
              </ul>
            </header>
            <div className="mx-2 p-2">
              <h1 className="project-title m-2 text-3xl">Dear Data Redux</h1>
              <div className="project-discription m-2">
                This is the place for discription
              </div>
            </div>
            <footer className="m-2 mb-4 text-[#959e9e] p-4 overflow-break-word">
              <ul className="">
                <li className="px-1 float-left">HTML</li>
                <li className="px-1 float-left">CSS</li>
                <li className="px-1 float-left">Firebase</li>
              </ul>
            </footer>

            {/* Hover Effect */}
          </div>

          {/* Work 1*/}
          {/* Grid Image*/}
          <div className="h-auto border-2 shadow-md shadow-[#E6E6E6] group container rounded-md  justify-center items-center mx-auto work-content-div">
            <header className="relative">
              {/* File icon*/}
              <ul className="project-top flex w-[100%] items-center m-2 p-2 h-[30%]">
                <li className="absolute left-2 top-1">
                  <AiOutlineFolderOpen className="text-[#b2fefd]" size="2rem" />
                </li>
                <li className="absolute right-2 top-1">
                  <AiFillGithub className="text-[#b2fefd]" size="2rem" />
                </li>
              </ul>
            </header>
            <div className="mx-2 p-2">
              <h1 className="project-title m-2 text-3xl">Dear Data Redux</h1>

              <div className="project-discription m-2">
                This is the place for discription
              </div>
            </div>
            <footer className="m-2 mb-4 text-[#959e9e] p-4 overflow-break-word">
              <ul className="">
                <li className="px-1 float-left">HTML</li>
                <li className="px-1 float-left">CSS</li>
                <li className="px-1 float-left">JavaScript</li>
                <li className="px-1 float-left">Firebase</li>
              </ul>
            </footer>

            {/* Hover Effect */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlog;
