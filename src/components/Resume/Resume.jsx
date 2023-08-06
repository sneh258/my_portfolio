import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineFileText } from 'react-icons/ai';

function Resume() {
  return (
    <>
      <div className='text-white flex w-[450px] font-Julius border-2 border-white-300'>
        <div>
          <div className='mt-[20px] h-8 w-[200px] bg-yellow-500 ml-[300px] pl-8 pt-1 text-black'>Contact me</div>
          <ul className='resume'>
            <li><a href='https://shorturl.at/fizX5' target='_blank' rel="noreferrer"><AiOutlineFileText style={{ fontSize: '24px' }} /></a> Resume</li>
            <li><a href='http://www.linkedin.com/in/snehalall258' target='_blank' rel="noreferrer"><FaLinkedin style={{ fontSize: '24px' }} /></a>LinkedIn</li>
            <li><a href='https://github.com/sneh258' target='_blank' rel="noreferrer"><FaGithub style={{ fontSize: '24px' }} /></a>Github</li>
            <li><a href='snehalall.sneha@gmail.com' target='_blank' rel="noreferrer"><FiMail style={{ fontSize: '24px' }} /></a>Mail</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Resume;