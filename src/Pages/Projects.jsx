import React from 'react'

const Projects = () => {
  return (
    <div className='bg-[#55A697] lg:px-[159px]' id='main container'>

      <div className='px-6 lg:px-0' id='title div'>
        <h2 className='pt-[50px] text-[24px] lg:text-[40px] font-bold text-white'>Our Upcoming Projects</h2>
        <h3 className='pt-[21px] text-lg lg:text-[30px] font-semibold text-white'>Unmute The Message</h3>
      </div>

      <div style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/unmutemobile.png)`, backgroundSize: 'cover',}}  className='mx-auto lg:mx-0 h-[300px] md:h-[500px] w-11/12 lg:w-[1207px] mt-[32px] bg-gray-200 ' id='image div'></div>

      <div className='mt-[32px] px-6 lg:px-0' id='paragraph and button div'>
        <p className='text-[16px] lg:text-[20px] font-medium text-white mb-[52px]'>
        Unmute the Message is a youth empowerment initiative amplifying voices from 
        marginalized communities. The program equips participants with creative, digital, 
        and advocacy skills for active citizenship. It tackles racism, discrimination, and 
        inequality through artistic and community engagement.Music, visual arts, and digital 
        media are used as powerful tools for social change. Workshops and collaborations build 
        confidence and promote intercultural dialogue. Youth are inspired to lead and make a 
        difference in their local environments.At least 80% of participants will produce 
        original works that champion inclusion and equality.
        </p>
        <button className='text-white font-medium  border-white border-2 py-2 px-6 hover:bg-[#E88E5E] mb-[60px]'>Learn More</button>
      </div>
    </div>
  )
}

export default Projects