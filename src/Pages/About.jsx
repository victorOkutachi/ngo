import React from 'react'

const About = () => {
  return (
    <div className='bg-white mb-[80px] lg:mb-[200px]' id='Main Container'>
        
        <div id='div for text and image' className='lg:flex lg:items-center lg:px-[159px] lg:justify-between'>
            
            <div className='mt-[160px] lg:mt-[107px] px-12 lg:px-0' id='text and button div'>
                <h2 className='text-[30px] lg:text-[40px] pt-[ font-bold'>
                    About Us
                </h2>

                <p className='text-xl lg:text-[24px] mt-[42px] font-medium opacity-60 lg:max-w-[600px]'>
                    Founded on the belief that creativity is a powerful engine
                    for social transformation, we provide participants with 
                    hands-on training in music, visual arts, performance, and 
                    digital storytelling. Our diverse team of professional artists,
                    educators, and community organizers collaborates
                    closely with each cohort to design projects that speak
                    to the real-life challenges they face—be it racism,
                    discrimination, or social exclusion.
                </p>

                
            </div>

            <div style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/about.png)`, backgroundSize: 'cover',}} className='h-[432px] w-5/6 lg:w-[458px] mx-auto lg:mx-0 lg:h-[462px] mt-10 lg:mt-[217px]  ' id='image div'></div>
            
        </div>
        <button className='h-[44px] mt-10 lg:mt-0 mx-10 lg:mx-[159px] w-[207px] bg-[#E88E5E] text-xl font-semibold rounded-md text-white'>Get Involved</button>

    </div>
  )
}

export default About