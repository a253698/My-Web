import React from "react";
import KHFOnlineMenu from "../assets/KHF-online-menu.png";
import ICUNSS from "../assets/ICUNS.png";
import PDFReader from "./PDFReader";

const Work = () => {
  return (
    <div name="work" className="w-fill md:h-screen bg-[#03010E] text-[#E6E6E6]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">
            <a className="text-[#b2fefd]">ix. </a>
            Work
          </p>
          <p className="py-6">Here are some of my work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* KHFOnlineMenu */}
          {/* Grid Image*/}
          <div
            style={{ backgroundImage: `url(${KHFOnlineMenu})` }}
            className="shadow-md shadow-[#E6E6E6] group container rounded-md flex justify-center items-center mx-auto work-content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#03010E] tracking-wider text-center">
                <p>Web Application</p>
              </span>
              <span className="font-bold text-[#03010E] tracking-wider text-center">
                <p>HTML, CSS, JavaScript, Bootstrap and Firebase</p>
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* ICUNSS*/}
          {/* Grid Image*/}
          <div
            style={{ backgroundImage: `url(${ICUNSS})` }}
            className="shadow-md shadow-[#E6E6E6] group container rounded-md flex justify-center items-center mx-auto work-content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#03010E] tracking-wider">
                Web Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <a href="/pdfreader" target="_blank">
                      Project Report
                    </a>
                  </button>
                </a>
                <a href="https://github.com/cutebaby0630/ICUsystem">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Work 3*/}
          {/* Grid Image*/}
          <div
            style={{ backgroundImage: `url(${KHFOnlineMenu})` }}
            className="shadow-md shadow-[#E6E6E6] group container rounded-md flex justify-center items-center mx-auto work-content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#03010E] tracking-wider">
                Web Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
