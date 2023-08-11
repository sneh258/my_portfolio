import React from 'react';
import bg from './../../assets/background.png';
import Typewriter from 'typewriter-effect';

function About() {
  return (
    <>
      <div className='h-fit'>
        <div className='top-[50px] left-[20px] text-[30px] font-Julius text-white text-transparent'>
          <h2><Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Hi, I am Sneha Lall. Welcome to my portfolio!')
                .pauseFor(100)
                .deleteChars(25)
                .typeString(' I am a Full Stack Developer.')
                .typeString('<br/>')
                .typeString(' I build things for the web and try to')
                .pauseFor(100)
                .start();
            }}
          /></h2>
        </div>
        <div className='font-poiret text-9xl text-white'>
          BE CREATIVE
        </div>
        <div className='border-2 rounded-r-[400px] bg-white h-[300px] flex text-black w-3/4 mt-[200px] static'>
          <img className='h-[280px]' src={bg} />
          <p className='mt-[170px] font-Julius '><b>Computers will never fully replace humans until they learn to laugh at the boss&apos;s jokes</b></p>
        </div>
      </div>
    </>
  );
}

export default About;