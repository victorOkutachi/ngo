import React from 'react';



const Mission = () => {
  return (
    <div className="p-10 md:px-[159px] bg-[rgba(56,161,255,0.07)] ">
      <div>
        <h2 className='text-[24px] lg:text-[40px] font-bold mt-10'>Our Mission & Activites</h2>
        <p className='text-[16px] lg:text-[20px] mt-[42px] font-medium opacity-60 mb-20'>
        Arts for Change empowers young people—especially those from underrepresented and marginalized
        communities—to harness creative expression as a catalyst for social inclusion, active citizenship, and 
        anti-discrimination advocacy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="h-[325px] w-[332px] mx-auto bg-white shadow-md p-4 flex flex-col items-center text-center">
                <div
                  className="w-[100px] h-[100px] mb-4 bg-center bg-cover bg-no-repeat rounded-full"
                  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/skillbuilding.jpg)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' ,}}
                />
                <h2 className="text-lg font-semibold mb-2">Skill Building</h2>
                <p className="text-sm text-gray-600 mb-4">
                Provide workshops in music, visual arts, performance, and digital media to develop participants’ creative and technical abilities.
                </p>
                <button className="bg-white border-2 border-[#E88E5E] text-[16px] font-semibold  text-[#E88E5E] px-4 py-2  hover:bg-[#E88E5E] hover:text-white transition">
                  Get Involved
                </button>
              </div>

              <div className="h-[325px] w-[332px] mx-auto bg-white shadow-md p-4 flex flex-col items-center text-center">
                    <div
                      className="w-[150px] h-[100px] mb-4 bg-center bg-cover bg-no-repeat "
                      style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/awareness.jpg)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' ,}}
                      />
                    <h2 className="text-lg font-semibold mb-2">Awareness Raising</h2>
                    <p className="text-sm text-gray-600 mb-4">
                    Use art-based projects to explore topics such as racism, discrimination, and social exclusion, encouraging critical dialogue.
                    </p>
                    <button className="bg-white border-2 border-[#E88E5E] text-[16px] font-semibold  text-[#E88E5E] px-4 py-2  hover:bg-[#E88E5E] hover:text-white transition">
                      Get Involved
                    </button>
                  </div>

                  <div className="h-[325px] w-[332px] mx-auto bg-white shadow-md p-4 flex flex-col items-center text-center">
                  <div
                  className="w-[150px] h-[100px] mb-4 bg-center bg-cover bg-no-repeat rounded-full"
                  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/community.jpg)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' ,}}
                />
                        <h2 className="text-lg font-semibold mb-2">Community Engagement</h2>
                        <p className="text-sm text-gray-600 mb-4">
                        Facilitate public showcases (exhibitions, open-mics, film screenings) where participants present their work to peers, families, and local leaders.
                        </p>
                        <button className="bg-white border-2 border-[#E88E5E] text-[16px] font-semibold  text-[#E88E5E] px-4 py-2  hover:bg-[#E88E5E] hover:text-white transition">
                          Get Involved
                        </button>
                      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:mx-2 mt-6 md:mt-10 gap-6">
          <div className="h-[325px] w-[332px] mx-auto bg-white shadow-md p-4 flex flex-col items-center text-center">
          <div
                  className="w-[170px] h-[100px] mb-4 bg-center bg-cover bg-no-repeat rounded-full"
                  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/advocacy.jpg)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' ,}}
                />
                <h2 className="text-lg font-semibold mb-2">Advocacy Training</h2>
                <p className="text-sm text-gray-600 mb-4">
                Equip youth with the tools to design and lead campaigns—both online and offline—that spotlight pressing social issues.
                </p>
                <button className="bg-white border-2 border-[#E88E5E] text-[16px] font-semibold  text-[#E88E5E] px-4 py-2  hover:bg-[#E88E5E] hover:text-white transition">
                  Get Involved
                </button>
              </div>

            <div className="h-[325px] w-[332px] mx-auto bg-white shadow-md p-4 flex flex-col items-center text-center">
            <div
                  className="w-[150px] h-[100px] mb-4 bg-center bg-cover bg-no-repeat rounded-full"
                  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/leadership.jpg)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' ,}}
                />
                
                  <h2 className="text-lg font-semibold mb-2">Leadership Development</h2>
                  <p className="text-sm text-gray-600 mb-4">
                  Foster confidence and leadership through mentorship, peer collaboration, and opportunities to co-create community events.
                  </p>
                  <button className="bg-white border-2 border-[#E88E5E] text-[16px] font-semibold  text-[#E88E5E] px-4 py-2  hover:bg-[#E88E5E] hover:text-white transition">
                    Get Involved
                  </button>
                </div>
      </div>
    </div>
  );
};




export default Mission;

