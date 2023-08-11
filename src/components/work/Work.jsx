import React, { useState } from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import Typewriter from 'typewriter-effect';
import cms1 from './../../assets/cms1.png';
import cms2 from './../../assets/cms2.png';
import cms3 from './../../assets/cms3.png';
import cms4 from './../../assets/cms4.png';
import notepad from './../../assets/notepad.png';

function Work() {
  const array = [cms1, cms2, cms3, cms4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (direction) => {
    if (direction === 'right') {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % array.length);
    } else if (direction === 'left') {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? array.length - 1 : prevIndex - 1
      );
    }
  };
  return (
    <div className='text-white h-fit font-Julius border-2 border-white m-2'>
      <div className='mt-[20px] h-8 w-[200px] bg-yellow-500 ml-4 pl-8 pt-1 text-black'>Personal Projects</div>
      <div className='flex gap-4 mt-7'>
        <div className='flex justify-center gap-4 h-fit w-fit'>
          <span className='mt-[200px] cursor-pointer' onClick={() => handleImageChange('left')}>
            <BiSolidLeftArrow style={{ fontSize: '24px' }} />
          </span>
          <span className='h-[800px] w-[800px] pt-4'>
            <img src={array[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
          </span>
          <span className='mt-[200px] cursor-pointer' onClick={() => handleImageChange('right')}>
            <BiSolidRightArrow style={{ fontSize: '24px' }} />
          </span>
        </div>
        <div className='mt-20'>
          <h2><Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Independently developed a full stack CMS+ from scratch ')
                .pauseFor(100)
                .typeString('<br />')
                .typeString('within 36 hours.')
                .start();
            }}
          /></h2>
        </div>
      </div>
      <div className='flex h-fit'>
        <div className='flex h-fit w-1/2 mt-10 pl-4'>
          <h2><Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Developed a versatile notepad with folder and file organization.')
                .pauseFor(100)
                .typeString('<br />')
                .typeString('allowing users to create nested structures for efficient data management.')
                .start();
            }}
          /></h2>
        </div>
        <div className='flex h-fit w-fit flex justify-center m-4'>
          <img className='h-[400px]' src={notepad} alt='notepad' />
        </div>
      </div>
    </div>
  );
}

export default Work;