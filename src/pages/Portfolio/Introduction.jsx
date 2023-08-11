import React from 'react';
import Header from '../../components/header/Header';
import About from '../../components/aboutUs/About';
import Contact from '../Contact/Contact';
import WorkEx from '../WorkEx/WorkEx';
import Companies from '../../components/Companies/Companies';
import Resume from '../../components/Resume/Resume';

function Portfolio() {
  return (
    <div className=''>
      <div><Header/></div>
      <div><About/></div>
      <div className='mt-[150px]'><Contact/></div>
      <div className='border-2 border-white-200'><Companies/></div>
      <div className='mt-[50px]'><WorkEx/></div>
      <div className='mt-[150px] ml-6 bg-slate-800'><Resume/></div>
      <div className='h-6'></div>
    </div>
  );
}

export default Portfolio;