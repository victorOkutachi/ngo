import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { listItems } from '../data';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className='flex w-full h-12 items-center justify-between p-10 bg-[#55A697] shadow-sm'>
<div style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/mosco.png)`, backgroundSize: 'contain',}} className='h-[50px] w-[50px] md:h-[70px] md:w-[70px] rounded-full ' id='image div'></div>

      <ul className='hidden grid-cols-5 col-span-4 items-center md:flex'>
        {listItems.map((item) => (
          <li key={item.desc} className='px-2 text-[8px]'>
            <Link
              to={item.path}
              smooth={true}
              duration={500}
              className='text-[14px] text-white font-medium uppercase tracking-widest cursor-pointer relative group'
            >
              {item.desc}
              <div className='absolute w-full h-0.5 bg-[#E88E5E] scale-x-0 group-hover:scale-x-100 transition-transform'></div>
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={handleMenu} className='block md:hidden z-10'>
        {menu ? <AiOutlineClose color='black' size={20} /> : <HiOutlineMenuAlt2 size={20} color='white'/>}
      </div>

      <div
        className={
          menu
            ? 'absolute left-0 top-0 w-full h-screen flex flex-col items-center justify-center bg-white ease-in-out duration-500 text-[#008024]'
            : 'fixed left-[-100%]'
        }
      >
        <div>
        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/mosco.png)`, backgroundSize: 'contain',}} className='h-[50px] w-[50px] md:h-[70px] md:w-[70px] rounded-full ' id='image div'></div>
        </div>
        <ul className='uppercase p-4'>
          <li className='py-2 text-xl font-medium'>
            <Link to='home' smooth={true} duration={500} onClick={handleMenu}>
              Home
            </Link>
          </li>
          <li className='py-2 text-xl font-medium'>
            <Link to='about' smooth={true} duration={500} onClick={handleMenu}>
              About Us
            </Link>
          </li>
          <li className='py-2 text-xl font-medium'>
            <Link to='projects' smooth={true} duration={500} onClick={handleMenu}>
              Projects
            </Link>
          </li>
          <li className='py-2 text-xl font-medium'>
            <Link to='mission' smooth={true} duration={500} onClick={handleMenu}>
                Our Mission
            </Link>
          </li>
           <li className='py-2 text-xl font-medium'>
            <Link to='socials' smooth={true} duration={500} onClick={handleMenu}>
                Socials
            </Link>
           </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
