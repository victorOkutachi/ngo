// src/components/Navbar.jsx
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { listItems } from '../data';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="relative w-full bg-[#55A697] shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/mosco.PNG)`,
            backgroundSize: 'contain',
          }}
          className="h-[50px] w-[50px] md:h-[70px] md:w-[70px] rounded-full"
        />

        {/* Desktop Links */}
        <ul className="hidden md:flex md:space-x-6">
          {listItems.map((item) => (
            <li key={item.desc}>
              <Link
                to={item.path}
                smooth
                duration={500}
                className="relative pb-1 text-[14px] text-white font-medium uppercase tracking-wide cursor-pointer group"
              >
                {item.desc}
                <span className="absolute left-0 bottom-0 block h-[2px] w-full bg-[#E88E5E] scale-x-0 transition-transform group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger (only when menu is closed) */}
        {!menuOpen && (
          <button
            onClick={toggleMenu}
            className="block md:hidden z-10 focus:outline-none"
            aria-label="Open menu"
          >
            <HiOutlineMenuAlt2 size={24} color="white" />
          </button>
        )}
      </div>

      {/* FULL‑SCREEN MOBILE MENU OVERLAY */}
      <div
        className={`
          fixed inset-0 z-50 flex flex-col items-center justify-center bg-white
          transform transition-transform duration-500 ease-in-out
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo Top‑Left */}
        <div className="absolute top-6 left-6 z-60">
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/mosco.png)`,
              backgroundSize: 'contain',
            }}
            className="h-[50px] w-[50px] md:h-[70px] md:w-[70px] rounded-full"
          />
        </div>

        {/* Close Button Top‑Right */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 z-60 focus:outline-none"
          aria-label="Close menu"
        >
          <AiOutlineClose size={28} color="#008024" />
        </button>

        {/* Mobile Links */}
        <ul className="space-y-6 uppercase text-[#008024] text-xl">
          {[
            ['home', 'Home'],
            ['about', 'About Us'],
            ['projects', 'Projects'],
            ['mission', 'Our Mission'],
            ['socials', 'Socials'],
          ].map(([to, label]) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={500}
                onClick={toggleMenu}
                className="cursor-pointer"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
