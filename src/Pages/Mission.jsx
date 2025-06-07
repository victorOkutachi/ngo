import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const missionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from('.mission-title .word', {
        scrollTrigger: {
          trigger: missionRef.current,
          start: 'top 90%',
          end: 'bottom top',
          toggleActions: 'play reverse play reverse',
        },
        y: -50,
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'bounce.out',
        stagger: 0.1,
      });

      // Paragraph
      gsap.from('.mission-desc', {
        scrollTrigger: {
          trigger: missionRef.current,
          start: 'top 85%',
          end: 'bottom top',
          toggleActions: 'play reverse play reverse',
        },
        y: 20,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: 'power1.out',
      });

      const isMobile = window.innerWidth < 768;

      if (!isMobile) {
        // Desktop first grid
        const firstGrid = gsap.timeline({
          scrollTrigger: {
            trigger: missionRef.current,
            start: 'top center',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse',
          },
        });
        firstGrid
          .from('.first-grid .mission-image', {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'bounce.out',
          })
          .from(
            '.first-grid .mission-content',
            { y: 20, opacity: 0, stagger: 0.2, duration: 0.8, delay: 0.4 },
            '<'
          );

        // Desktop second grid
        const secondGrid = gsap.timeline({
          scrollTrigger: {
            trigger: '.second-grid .mission-card:first-child',
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse',
          },
        });
        secondGrid
          .from('.second-grid .mission-image', {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'bounce.out',
          })
          .from(
            '.second-grid .mission-content',
            { y: 20, opacity: 0, stagger: 0.2, duration: 0.8, delay: 0.4 },
            '<'
          );
      } else {
        // Mobile cards one-by-one
        gsap.utils.toArray('.mission-card').forEach(card => {
          const img = card.querySelector('.mission-image');
          const content = card.querySelector('.mission-content');
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'bottom top',
              toggleActions: 'play reverse play reverse',
            },
          });
          tl
            .from(img, { y: -100, opacity: 0, duration: 1, ease: 'bounce.out' })
            .from(
              content,
              { y: 20, opacity: 0, stagger: 0.2, duration: 0.8, delay: 0.4 },
              '<'
            );
        });
      }
    }, missionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={missionRef}
      className="p-10 md:px-[159px] bg-[rgba(56,161,255,0.07)]"
    >
      <div>
        <h2 className="mission-title text-[24px] lg:text-[40px] font-bold mt-10">
          {"Our Mission & Activities".split(' ').map((word, i) => (
            <span key={i} className="word inline-block mr-2">{word}</span>
          ))}
        </h2>
        <p className="mission-desc text-[16px] lg:text-[20px] mt-[42px] font-medium opacity-60 mb-20">
          Arts for Change empowers young people—especially those from
          underrepresented and marginalized communities—to harness creative
          expression as a catalyst for social inclusion, active citizenship,
          and anti-discrimination advocacy.
        </p>
      </div>

      {/* First grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 first-grid justify-items-center">
        {[ 
          {
            title: 'Skill Building',
            img: 'skillbuilding.jpg',
            desc:
              "Provide workshops in music, visual arts, performance, and digital media to develop participants’ creative and technical abilities."
          },
          {
            title: 'Awareness Raising',
            img: 'awareness.jpg',
            desc:
              "Use art-based projects to explore topics such as racism, discrimination, and social exclusion, encouraging critical dialogue."
          },
          {
            title: 'Community Engagement',
            img: 'community.jpg',
            desc:
              "Facilitate public showcases (exhibitions, open-mics, film screenings) where participants present their work to peers, families, and local leaders."
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="mission-card h-[325px] w-full max-w-[332px] bg-white shadow-md p-4 flex flex-col items-center text-center"
          >
            <div
              className="mission-image w-[100px] h-[100px] mb-4 bg-center bg-cover bg-no-repeat rounded-full"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/${item.img})`,
                backgroundSize: 'contain',
              }}
            />
            <div className="mission-content">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              <button className="bg-white border-2 border-[#E88E5E] text-[16px] font-semibold text-[#E88E5E] px-4 py-2 hover:bg-[#E88E5E] hover:text-white transition">
                Get Involved
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Second grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 second-grid justify-items-center mt-6 md:mt-10">
        {[
          {
            title: 'Advocacy Training',
            img: 'advocacy.jpg',
            desc:
              "Equip youth with the tools to design and lead campaigns—both online and offline—that spotlight pressing social issues."
          },
          {
            title: 'Leadership Development',
            img: 'leadership.jpg',
            desc:
              "Foster confidence and leadership through mentorship, peer collaboration, and opportunities to co-create community events."
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="mission-card h-[325px] w-full max-w-[332px] bg-white shadow-md p-4 flex flex-col items-center text-center"
          >
            <div
              className="mission-image w-[150px] h-[100px] mb-4 bg-center bg-cover bg-no-repeat rounded-full"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/${item.img})`,
                backgroundSize: 'contain',
              }}
            />
            <div className="mission-content">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              <button className="bg-white border-2 border-[#E88E5E] text-[16px] font-semibold text-[#E88E5E] px-4 py-2 hover:bg-[#E88E5E] hover:text-white transition">
                Get Involved
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
