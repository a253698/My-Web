import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#03010E]'>
    {/*container text*/}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#b2fefd]'>Hi my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#e2eeee]'>Chao-Chin, Liu</h1>
        <h3 className='text-4xl sm:text-7xl font-bold text-[#959e9e]'>I'm a Front-End Developer + Data-Analyst</h3>
        <p className='text-[#E6E6E6] py-4 max-w-[700px]'>
          I’m a <a className='text-[#b2fefd]'>full-stack developer</a> specializing and passion in building website. 
          <p>Falling in love with data, discovering <a className='text-[#b2fefd]'>insight</a> and explor the  <a className='text-[#b2fefd]'>power of data</a> can bring to us!</p> 
        <p>Ready to be hire today!</p>
        </p>
    {/*container buttom - see more*/}
        <div><button className='text-[#b2fefd] group border-2 border-[#b2fefd] rounded-md px-6 py-3 my-2 flex items-center hover:bg-[#b2fefd24] hover:border-[#b2fefd]'>
            See more of my work 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
            </button>
            </div>
    </div>


    </div>
  )
}

export default Home