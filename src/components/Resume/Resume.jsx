import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineFileText } from 'react-icons/ai';

function Resume() {
  return (
    <>
      <div className='text-white flex w-full font-Julius justify-around'>
        <div>
          <ul className='resume flex'>
            <li><a href='https://shorturl.at/fizX5' target='_blank' rel="noreferrer"><AiOutlineFileText style={{ fontSize: '24px' }} /></a> Resume</li>
            <li><a href='http://www.linkedin.com/in/snehalall258' target='_blank' rel="noreferrer"><FaLinkedin style={{ fontSize: '24px' }} /></a>LinkedIn</li>
            <li><a href='https://github.com/sneh258' target='_blank' rel="noreferrer"><FaGithub style={{ fontSize: '24px' }} /></a>Github</li>
            <li><a href='snehalall.sneha@gmail.com' target='_blank' rel="noreferrer" onClick={() => window.location = 'mailto:snehalall.sneha@gmail.com'}><FiMail style={{ fontSize: '24px' }} /></a>Mail</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Resume;