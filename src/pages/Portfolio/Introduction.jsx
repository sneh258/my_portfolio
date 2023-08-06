import React from 'react';
import Header from '../../components/header/Header';
import About from '../../components/aboutUs/About';
import Contact from '../Contact/Contact';
import WorkEx from '../WorkEx/WorkEx';
import Resume from '../../components/Resume/Resume';

function Portfolio() {
  return (
    <div className=''>
      <div><Header/></div>
      <div><About/></div>
      <div><Contact/></div>
      <div><WorkEx/></div>
      <div className='mt-[150px] ml-6'><Resume/></div>
      <div className='h-6'></div>
    </div>
  );
}

export default Portfolio;