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
        <div className="project-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Cognitively-Driven Design*/}
          {/* Grid Image*/}
          <div className="h-auto border-2 shadow-md shadow-[#E6E6E6] group container rounded-md  justify-center items-center mx-auto work-content-div">
            <div className="h-[80%]">
              <header className="relative">
                {/* File icon*/}
                <ul className="project-top flex w-[100%] items-center m-2 p-2 h-[30%]">
                  <li className="absolute left-2 top-1">
                    <AiOutlineFolderOpen
                      className="text-[#b2fefd]"
                      size="2rem"
                    />
                  </li>
                  <li className="absolute right-2 top-1">
                    <AiFillGithub className="text-[#b2fefd]" size="2rem" />
                  </li>
                </ul>
              </header>
              <div className="mx-2 p-2">
                <h1 className="project-title m-2 text-3xl">
                  <a href="">Cognitively-Driven Design</a>
                </h1>

                <div className="project-discription m-2">
                  COMP790 Assignment-4 Cognitively-driven design is all about
                  using concrete experimentally-derived insight into how people
                  make sense of visualization to drive design.
                </div>
              </div>
            </div>
            <footer className="my-2 h-[6em]">
              <ul className="m-2 mb-4 text-[#959e9e] p-4 overflow-break-word">
                <li className="px-1 float-left">HTML</li>
                <li className="px-1 float-left">CSS</li>
                <li className="px-1 float-left">JavaScript</li>
                <li className="px-1 float-left">D3.js</li>
                <li className="px-1 float-left">Firebase</li>
              </ul>
            </footer>
          </div>

          {/* CDesign Study Lite*/}
          {/* Grid Image*/}
          <div className="h-auto border-2 shadow-md shadow-[#E6E6E6] group container rounded-md  justify-center items-center mx-auto work-content-div">
            <div className="h-[80%]">
              <header className="relative">
                {/* File icon*/}
                <ul className="project-top flex w-[100%] items-center m-2 p-2 h-[30%]">
                  <li className="absolute left-2 top-1">
                    <AiOutlineFolderOpen
                      className="text-[#b2fefd]"
                      size="2rem"
                    />
                  </li>
                  <li className="absolute right-2 top-1">
                    <AiFillGithub className="text-[#b2fefd]" size="2rem" />
                  </li>
                </ul>
              </header>
              <div className="mx-2 p-2">
                <h1 className="project-title m-2 text-3xl">
                  <a href="">Design Study Lite</a>
                </h1>

                <div className="project-discription m-2">
                  Design studies are intensive, longitudinal, collaborative
                  design activities. While they're a powerful tool in your
                  visualization development toolkit, they also take a bit more
                  energy than is reasonable for a module-sized assignment. To
                  get you some practice with the design study methodology,
                  you'll conduct a miniature design study with yourselves as
                  both the designer and stakeholder. Your goal will be to design
                  a visualization tool to support the following scenario.
                </div>
              </div>
            </div>
            <footer className="my-2 h-[6em]">
              <ul className="m-2 mb-4 text-[#959e9e] p-4 overflow-break-word">
                <li className="px-1 float-left">HTML</li>
                <li className="px-1 float-left">CSS</li>
                <li className="px-1 float-left">JavaScript</li>
                <li className="px-1 float-left">D3.js</li>
                <li className="px-1 float-left">Firebase</li>
              </ul>
            </footer>
          </div>

          {/* Dear Data Redux*/}
          {/* Grid Image*/}
          <div className="h-auto border-2 shadow-md shadow-[#E6E6E6] group container rounded-md  justify-center items-center mx-auto work-content-div">
            <div className="h-[80%]">
              <header className="relative">
                {/* File icon*/}
                <ul className="project-top flex w-[100%] items-center m-2 p-2 h-[30%]">
                  <li className="absolute left-2 top-1">
                    <AiOutlineFolderOpen
                      className="text-[#b2fefd]"
                      size="2rem"
                    />
                  </li>
                  <li className="absolute right-2 top-1">
                    <AiFillGithub className="text-[#b2fefd]" size="2rem" />
                  </li>
                </ul>
              </header>
              <div className="mx-2 p-2">
                <h1 className="project-title m-2 text-3xl">
                  <a href="">Dear Data Redux</a>
                </h1>

                <div className="project-discription m-2">
                  Data reflects the world around us. We generate data through
                  each action we take and each decision we make. However, most
                  of this data simply passes by and is never collected or used.
                  In this first module assignment, we explore patterns in data
                  about our daily lives and use different media to explore and
                  make sense of this data.
                </div>
              </div>
            </div>
            <footer className="my-2 h-[6em]">
              <ul className="m-2 mb-4 text-[#959e9e] p-4 overflow-break-word">
                <li className="px-1 float-left">HTML</li>
                <li className="px-1 float-left">CSS</li>
                <li className="px-1 float-left">JavaScript</li>
                <li className="px-1 float-left">D3.js</li>
                <li className="px-1 float-left">Firebase</li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlog;
