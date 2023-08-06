import React from 'react';

function ContactUs() {
  return (
    <div className='h-screen flex font-Julius'>
      <div className='h-[300px] w-1/2 border-2 border-white-600 text-white'>
        <div className='mt-[20px] h-8 w-[200px] bg-yellow-500 ml-[650px] pl-2 pt-1 text-black'>Know about my skills</div>
        <div className='p-5'>
          <ul>
            <li>Languages: C/C++, HTML/CSS, JS, Terraform</li>
            <li>FrameworksandLibraries: React,Redux,Highcharts,Tailwind</li>
            <li>Frontend Tools: Figma, eslint , Jest , PostmanAPI</li>
            <li>Backend Technologies: Node.js, Express, PostgreSQL, Sequelize, Terraform, Docker, AWS VersionControl: Git&Github</li>
          </ul>
        </div>
      </div>
      <div className='border-2 border-white-600 h-[500px] w-[400px] bg-black m-32'>
        <div className='mt-[20px] h-8 w-1/2 bg-yellow-500 ml-[250px] pl-2 pt-1'>
          DISCOVER ABOUT ME
        </div>
        <div className='h-fit mt-[50px] text-white p-4'>
          I am Sneha Lall.<br />
          I have done my internship from Mckinsey & Company
          Where I gained valuable knowledge
          in full stack technologies
          <br /><br />
          Prior to that,
          I had the opportunity to intern at Highradius Corporations.
          <br /><br />
          I am a results-driven full stack developer skilled in
          designing, developing, and deploying end-to-end web applications.
          Proficient in both frontend and backend technologies
          with a strong understanding of database management.
        </div>
      </div>
    </div>
  );
}

export default ContactUs;