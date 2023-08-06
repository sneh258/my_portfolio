import React from 'react';
import Typewriter from 'typewriter-effect';

function About() {
  return (
    <div className='h-[100vh] relative'>
      <div className='absolute right-[20px] text-[30px] font-Julius bg-gradient-to-r from-black via-white to-white bg-clip-text text-transparent'>
        <h2><Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Hi, I am Sneha Lall. Welcome to my blog!')
              .pauseFor(100)
              .deleteChars(19)
              .typeString('I am a Full Stack Developer...')
              .start();
          }}
        /></h2>
      </div>
      <div className='border-2 rounded-r-[400px] bg-white h-[300px] w-3/4 mt-[200px]'>
      </div>
      <div className='font-poiret text-9xl text-white'>
        BE CREATIVE
      </div>
    </div>
  );
}

export default About;