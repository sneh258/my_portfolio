import React from 'react';

function Header() {
  return (
    <div className='h-16 text-white'>
      <div>
        <ul className='flex gap-5 justify-end p-[20px]'>
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;