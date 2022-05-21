import React from 'react';
import HTML from '../assets/html.png'
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';
import Python from '../assets/python.png';
import D3JS from '../assets/d3js.png'
import Firebase from '../assets/firebase.png';
import JAVA from '../assets/java.png';
import PowerBI from '../assets/powerbi.png';
import Tableau from '../assets/tableau.png';
import AspdotNet from '../assets/apsdotnet.png';
import Oracle from '../assets/oracle.png';
import MySQL from '../assets/mysql.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen  bg-[#03010E] text-[#E6E6E6]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
                          <p className='text-4xl font-bold inline'>
              <a className='text-[#b2fefd]'>iii. </a> 
             Skills
            </p>
              <p className='py-4'>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#b2fefd] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20 object-contain py-2' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#b2fefd] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20 object-contain py-2' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#b2fefd] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20 object-contain py-2' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#b2fefd] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20 object-contain py-2' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#b2fefd] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20 object-contain py-2' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#b2fefd] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20 object-contain py-2' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#b2fefd] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20 object-contain py-2' src={Bootstrap} alt="HTML icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md shadow-[#b2fefd] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20 object-contain py-2' src={Firebase} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
              <div className='shadow-md shadow-[#b2fefd] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20 object-contain py-2' src={JAVA} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#b2fefd] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20 object-contain py-2' src={AspdotNet} alt="HTML icon" />
                  <p className='my-4'>ASP.NET</p>
              </div>
              <div className='shadow-md shadow-[#b2fefd] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20 object-contain py-2' src={Oracle} alt="HTML icon" />
                  <p className='my-4'>ORACLE</p>
              </div>
                <div className='shadow-md shadow-[#b2fefd] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20 object-contain py-2' src={MySQL} alt="HTML icon" />
                  <p className='my-4'>MYSQL</p>
              </div>

          </div>
 <div>
              <p className='py-4'>These are the data analyst I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#b2fefd] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20 object-contain py-2' src={D3JS} alt="HTML icon" />
                  <p className='my-4'>D3JS</p>
              </div>
              <div className='shadow-md shadow-[#b2fefd] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20 object-contain py-2' src={Python} alt="HTML icon" />
                  <p className='my-4'>PYTHON</p>
              </div>
              <div className='shadow-md shadow-[#b2fefd] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20 object-contain py-2' src={PowerBI} alt="HTML icon" />
                  <p className='my-4'>POWERBI</p>
              </div>
              <div className='shadow-md shadow-[#b2fefd] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto h-20 object-contain py-2' src={Tableau} alt="HTML icon" />
                  <p className='my-4'>TABLEAU</p>
              </div>
          </div>



          
      </div>
    </div>
  );
};

export default Skills;
