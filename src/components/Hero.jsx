import React from 'react'
import ShakeButton from './ShakeButton'

const Hero = () => {
  return (
    <div className='bg-[#55A697] relative pb-[180px] lg:pt-[120px] lg:pb-[250px]' id='Main Container'>
        
        <div className='lg:flex items-center lg:px-[159px] justify-between' id='container for text and image'>

            <div className='px-6 relative z-10' id='Text Div'>
                <h1 className='text-[30px] lg:text-[48px] font-bold text-white'>Unleash Your Voice.</h1>
                <h1 className='text-[30px] lg:text-[48px] font-bold text-white'>Ignite Change.</h1>

                <p className='text-[16px] lg:text-[24px] mt-5 font-medium text-white max-w-[400px] md:max-w-[500px]'>Through creativity and collaboration, you’ll transform ideas into powerful stories that challenge 
                injustice and build inclusive communities.</p>

                <ShakeButton/>
            </div>
            
            <div id='image' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.png)`, backgroundSize: 'cover',}} className='absolute 
    left-1/2 
    -translate-x-1/2 
    bottom-[-60px] 
    mx-auto
    h-2/4
    w-11/12
    lg:h-[412px] 
    lg:w-[618px] 
    bg-gray-200 
    z-0
    lg:static 
    lg:translate-x-0 
    lg:bottom-auto 
    lg:z-auto
    '></div>
        </div>
    </div>
  )
}

export default Hero