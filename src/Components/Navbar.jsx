import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black sticky top-0 z-50 bg-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      {/* b */}
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-white ease-in-out duration-500  shadow-gray-600' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        <li className='p-4 border-b border-gray-600 hover:text-[#00df9a]'>Home</li>
        <li className='p-4 border-b border-gray-600 hover:text-[#00df9a]'>Company</li>
        <li className='p-4 border-b border-gray-600 hover:text-[#00df9a]'>Resources</li>
        <li className='p-4 border-b border-gray-600 hover:text-[#00df9a]'>About</li>
        <li className='p-4 hover:text-[#00df9a]'>Contact</li>
      </ul>
      <style jsx>{`
        .p-4:hover {
          color: #00df9a !important;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
