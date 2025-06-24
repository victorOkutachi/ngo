// src/components/Footer.jsx
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Footer.css";
import {
  RiLinkedinFill,
  RiInstagramFill,
  RiFacebookFill,
} from "react-icons/ri";

const footerLinks = [
  { to: "hero",    label: "Home" },
  { to: "about",   label: "About Us" },
  { to: "projects",label: "Our Projects" },
  { to: "mission", label: "Mission" },
  { to: "socials", label: "Socials" },
];

const Footer = () => {
  return (
    <div className="flex flex-col py-[30px] md:py-[60px] items-center overflow-hidden">
      {/* Logo / “floating” image */}
      <div
        className="w-[100px] h-[100px] mb-4 rounded-full bg-center bg-cover bg-no-repeat floating"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/mosco.PNG)`,
          backgroundSize: "contain",
        }}
      />

      <div className="flex flex-col items-center">
        {/* Section links */}
        <ul className="flex gap-4 mt-4">
          {footerLinks.map(({ to, label }) => (
            <li key={to} className="text-[12px] lg:text-[16px] opacity-60 font-medium">
              <ScrollLink
                to={to}
                smooth={true}
                duration={500}
                offset={-80}          // same offset you used in Navbar
                className="cursor-pointer hover:underline"
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <div className="flex items-center justify-center my-4">
          <a href='https://www.instagram.com/artistic_luxembourgers?igsh=MW95ZDMzdTh2dXgweA==' target='blank'>
          <RiInstagramFill
            className="mx-3 icon-animate hover:scale-125 duration-200 opacity-60"
            size={30}
          />
          </a>
          
        </div>

        {/* Sponsor logo */}
        <div
          className="lg:w-[500px] w-[250px] h-[100px] mb-4 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/funded.png)`,
            backgroundSize: "contain",
          }}
        />

        <p className="text-[14px] py-1 opacity-60">
          copyright © 2025 Arts For Change. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
