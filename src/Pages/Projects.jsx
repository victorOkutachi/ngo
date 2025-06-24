// src/components/Projects.jsx
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const titleRef         = useRef(null);
  const lineRef          = useRef(null);
  const subtitleRef      = useRef(null);
  const imageWrapperRef  = useRef(null);
  const paraContainerRef = useRef(null);
  const buttonRef        = useRef(null);

  useLayoutEffect(() => {
    // ───────────────────────────────────────────────────────────────────────────────
    // 1) FLOATING IMAGE (infinite loop, no ScrollTrigger)
    // ───────────────────────────────────────────────────────────────────────────────
    if (imageWrapperRef.current) {
      gsap.to(imageWrapperRef.current, {
        y: 20,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }

    // Common ScrollTrigger settings for text elements:
    const scrollOpts = (triggerElem) => ({
      trigger: triggerElem,
      start: 'top 85%',
      end: 'bottom top',
      scrub: true,
      markers: false,
    });

    // ───────────────────────────────────────────────────────────────────────────────
    // 2) TITLE ANIMATION (fade/slide in; reverses smoothly via scrub)
    // ───────────────────────────────────────────────────────────────────────────────
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: scrollOpts(titleRef.current),
        }
      );
    }

    // ───────────────────────────────────────────────────────────────────────────────
    // 3) UNDERLINE ANIMATION (scaleX from 0→1; reverses smoothly via scrub)
    // ───────────────────────────────────────────────────────────────────────────────
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'power3.out',
          scrollTrigger: scrollOpts(titleRef.current),
        }
      );
    }

    // ───────────────────────────────────────────────────────────────────────────────
    // 4) SUBTITLE ANIMATION (fade/slide in; reverses smoothly via scrub)
    // ───────────────────────────────────────────────────────────────────────────────
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: scrollOpts(subtitleRef.current),
        }
      );
    }

    // ───────────────────────────────────────────────────────────────────────────────
    // 5) PARAGRAPH BLOCKS ANIMATION (stagger fade/slide in; reverses smoothly via scrub)
    // ───────────────────────────────────────────────────────────────────────────────
    if (paraContainerRef.current) {
      const blocks = gsap.utils.toArray(paraContainerRef.current.children);
      if (blocks.length > 0) {
        gsap.fromTo(
          blocks,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.3,
            ease: 'power3.out',
            scrollTrigger: scrollOpts(paraContainerRef.current),
          }
        );
      }
    }

    // ───────────────────────────────────────────────────────────────────────────────
    // 6) BUTTON ANIMATION (pop in; reverses smoothly via scrub)
    // ───────────────────────────────────────────────────────────────────────────────
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          ease: 'back.out(1.2)',
          scrollTrigger: scrollOpts(buttonRef.current),
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="relative bg-[#55A697] lg:px-[159px] overflow-hidden">
      {/* ────────── TITLE + SUBTITLE ────────── */}
      <div className="px-6 lg:px-0 pt-[50px]">
        <h2
          ref={titleRef}
          className="text-[24px] lg:text-[40px] font-bold text-white"
        >
          Our Upcoming Projects
        </h2>
        <div
          ref={lineRef}
          className="h-[3px] bg-white mt-2 w-[270px] lg:w-[450px] transform origin-left"
          style={{ scaleX: 0 }}
        />
        <h3
          ref={subtitleRef}
          className="pt-[21px] text-lg lg:text-[30px] font-semibold text-white"
        >
          Unmute The Message
        </h3>
      </div>

      {/* ────────── IMAGE WRAPPER ────────── */}
      <div
        ref={imageWrapperRef}
        className="mx-auto lg:mx-0 mt-[32px] h-[300px] md:h-[500px] w-11/12 lg:w-[1207px] bg-gray-200 overflow-hidden rounded-xl"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/projectimage.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 10%',
        }}
      />

      {/* ────────── PARAGRAPH (3 wider blocks) + BUTTON ────────── */}
      <div className="mt-[32px] px-6 lg:px-0 max-w-[1200px] mx-auto">
        <div
          ref={paraContainerRef}
          className="space-y-4 mb-[52px] leading-relaxed"
        >
          <div className="text-[16px] lg:text-[20px] font-medium text-white">
            Unmute the Message is a youth empowerment initiative amplifying voices
            from marginalized communities, equipping participants with creative,
            digital, and advocacy skills for active citizenship. It also tackles
            racism, discrimination, and inequality through artistic and community
            engagement by using music, visual arts, and digital media as avenues
            for social change.
          </div>

          <div className="text-[16px] lg:text-[20px] font-medium text-white">
            Workshops and collaborations build confidence and promote intercultural
            dialogue while inspiring youth to lead and make a difference in their
            local environments. These sessions encourage participants to channel
            their stories and experiences into original works that speak to
            inclusion and equality.
          </div>

          <div className="text-[16px] lg:text-[20px] font-medium text-white">
            Ultimately, at least 80% of participants will produce original works
            that champion inclusion and equality across their communities.
          </div>
        </div>

        <a href='https://www.instagram.com/p/DKfXEeJILbC/?igsh=MTdqaGh1d2N5ZjAyNg==' target={'_blank'}>
        <button
          ref={buttonRef}
          className="text-white font-medium border-white border-2 py-2 px-6 hover:bg-[#E88E5E] hover:scale-105 transition-transform duration-200 mb-[60px] rounded-md"
        >
          
          Learn More
        </button>
        </a>
      </div>
    </section>
  );
};

export default Projects;
