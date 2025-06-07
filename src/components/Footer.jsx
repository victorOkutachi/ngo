import React from "react";
import "./Footer.css";
import {
  RiLinkedinFill,
  RiInstagramFill,
  RiFacebookFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex flex-col py-[30px] md:py-[60px] items-center overflow-hidden">
      {/* Logo / “floating” image */}
      <div
        className="w-[100px] h-[100px] mb-4 rounded-full bg-center bg-cover bg-no-repeat floating"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/mosco.PNG)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="flex flex-col items-center">
        <ul className="flex gap-4 mt-4">
          <li className="text-[12px] lg:text-[16px] opacity-60 font-medium">Home</li>
          <li className="text-[12px] lg:text-[16px]  opacity-60 font-medium">About Us</li>
          <li className="text-[12px] lg:text-[16px]  opacity-60 font-medium">Our Projects</li>
          <li className="text-[12px] lg:text-[16px]  opacity-60 font-medium">Mission</li>
          <li className="text-[12px] lg:text-[16px]  opacity-60 font-medium">Contact</li>
        </ul>

        <div className="flex items-center justify-center my-4">
          <RiInstagramFill
            className="mx-3 icon-animate hover:scale-125 duration-200 opacity-60"
            size={30}
          />
          <RiLinkedinFill
            className="mx-3 icon-animate hover:scale-125 duration-200 opacity-60"
            size={30}
          />
          <RiFacebookFill
            className="mx-3 icon-animate hover:scale-125 duration-200 opacity-60"
            size={30}
          />
        </div>

        <div
          className="lg:w-[500px] w-[250px] h-[100px] mb-4 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/funded.png)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Reduce bottom margin here (remove md:my-6 and shrink py) */}
        <p className="text-[14px] py-1 opacity-60">
         copyright © 2025 Arts For Change. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
