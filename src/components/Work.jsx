import React from "react";
import KHFOnlineMenu from "../assets/KHF-online-menu.png";
import PDFReader from "./PDFReader";
import ReactPDFReader from "../assets/React-PDF-Reader.png";
import ICUNSS1 from "../assets/ICUNS-1.png";
import ICUNSS2 from "../assets/ICUNS-2.png";
import UIReDesign from "../assets/MobileGame-UIDesign.png";
import ExperimentalStudy from "../assets/ExperimentalStudy.png";
import workingPerformanceCalculator from "../assets/workingPerformanceCalculator.png";

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
          {/* ICUNSS-1*/}
          {/* Grid Image*/}
          <div
            style={{ backgroundImage: `url(${ICUNSS1})` }}
            className="shadow-md shadow-[#E6E6E6] group container rounded-md flex justify-center items-center mx-auto work-content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-[#03010E] tracking-wider text-center">
                System Development
              </span>
              <span className="font-bold text-[#03010E] tracking-wider text-center">
                <p>
                  HTML, CSS, Javascript, Kendo UI, ASP.NET, JQuery and MySQL
                </p>
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <a
                      href="https://github.com/a253698/My-Web/files/8767511/ICU-NursingShiftSyetemReport-1.pdf"
                      target="_blank"
                    >
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

          {/* ICUNSS-2*/}
          {/* Grid Image*/}
          <div
            style={{ backgroundImage: `url(${ICUNSS2})` }}
            className="shadow-md shadow-[#E6E6E6] group container rounded-md flex justify-center items-center mx-auto work-content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100  text-center">
              <span className="text-2xl font-bold text-[#03010E] tracking-wider text-center">
                System Development
              </span>
              <span className="font-bold text-[#03010E] tracking-wider text-center">
                <p>
                  HTML, CSS, Javascript, Kendo UI, ASP.NET, JQuery, D3.js and
                  MySQL
                </p>
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <a
                      href="https://github.com/a253698/My-Web/files/8767586/ICU-NursingShiftSyetemReport-2.pdf"
                      target="_blank"
                    >
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

          {/* Experimental Study */}
          {/* Grid Image*/}
          <div
            style={{ backgroundImage: `url(${ExperimentalStudy})` }}
            className="shadow-md shadow-[#E6E6E6] group container rounded-md flex justify-center items-center mx-auto work-content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100  text-center">
              <span className="text-2xl font-bold text-[#03010E] tracking-wider text-center">
                Web Application of Experimental Study
              </span>
              <span className="font-bold text-[#03010E] tracking-wider text-center">
                <p>
                  HTML, CSS, Javascript, Bootstrap, JSON, D3.JS and Firebase
                </p>
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <a
                      href="https://class-design-study-experiments.web.app/index.html"
                      target="_blank"
                    >
                      DEMO
                    </a>
                  </button>
                </a>
                <a href="https://github.com/VisDesignStudies/assignment-four-experiments-or-cvos-chintseng">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* React PDFReader*/}
          {/* Grid Image*/}
          <div
            style={{ backgroundImage: `url(${ReactPDFReader})` }}
            className="shadow-md shadow-[#E6E6E6] group container rounded-md flex justify-center items-center mx-auto work-content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-[#03010E] tracking-wider text-center">
                React PDF Reader
              </span>
              <span className="font-bold text-[#03010E] tracking-wider text-center">
                <p>React, HTML, CSS, JavaScript, Bootstrap</p>
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/a253698/React-PDF" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* workingPerformanceCalculator*/}
          {/* Grid Image*/}
          <div
            style={{ backgroundImage: `url(${workingPerformanceCalculator})` }}
            className="shadow-md shadow-[#E6E6E6] group container rounded-md flex justify-center items-center mx-auto work-content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-[#03010E] tracking-wider text-center">
                Working Performance Calculator
              </span>
              <span className="font-bold text-[#03010E] tracking-wider text-center">
                <p>HTML, CSS, JavaScript</p>
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* UI Design*/}
          {/* Grid Image*/}
          <div
            style={{ backgroundImage: `url(${UIReDesign})` }}
            className="shadow-md shadow-[#E6E6E6] group container rounded-md flex justify-center items-center mx-auto work-content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-[#03010E] tracking-wider text-center">
                Recreate Phototype of Disney Mobile Game
              </span>
              <span className="font-bold text-[#03010E] tracking-wider text-center">
                <p>Photoshop and Marvel</p>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://user-images.githubusercontent.com/32476235/170174258-f3baaa7e-d1f1-4172-95bc-10a282ce07c5.png"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Flow Chart
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
