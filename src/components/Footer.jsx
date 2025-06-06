import React from 'react'
import {RiLinkedinFill, RiInstagramFill, RiFacebookFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='flex flex-col py-[50px] md:py-[100px] items-center'>
      <div
        className="w-[100px] h-[100px] mb-4 bg-center rounded-full bg-cover bg-no-repeat md:mt-[50px] "
        style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/mosco.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' ,}}
      />

      <div className=''>
        <div className='flex flex-col items-center'>
          <ul className='flex gap-4 mt-4'>
            <li className='text-[16px] opacity-60 font-medium'>Home</li>
            <li className='text-[16px] opacity-60 font-medium'>About Us</li>
            <li className='text-[16px] opacity-60 font-medium'>Our Projects</li>
            <li className='text-[16px] opacity-60 font-medium'>Mission</li>
            <li className='text-[16px] opacity-60 font-medium'>Contact</li>
          </ul>

          <div className='flex items-center justify-center my-4'>
          <RiInstagramFill className='mx-3 hover:scale-125 duration-300 opacity-60' size={30}/>
          <RiLinkedinFill className='mx-3 hover:scale-125 duration-300 opacity-60' size={30}/>
          <RiFacebookFill className='mx-3 hover:scale-125 duration-300 opacity-60' size={30}/>
          </div>

          <div
            className="md:w-[500px] w-[250px] h-[100px] mb-4 bg-center bg-cover bg-no-repeat md:mt-[50px] "
            style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/funded.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' ,}}
          />

          <p className='text-[14px] py-2 md:my-6 opacity-60'>copyright 2025 Arts For Change. All rights reserved</p>

        </div>
      </div>
        
    </div>
  )
}

export default Footer