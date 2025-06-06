// src/components/About.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const About = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // ========== TITLE: TYPEWRITER (ALL SCREENS) ==========
    gsap.fromTo(
      titleRef.current,
      { text: '' },
      {
        text: 'About Us',
        duration: 1.2,
        ease: 'none',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
          markers: false,
        },
      }
    );

    // Use matchMedia to scope desktop vs. mobile animations:
    const mm = gsap.matchMedia();

    // ─────────────────────────────────────────────────────────────────────────────
    // DESKTOP ANIMATIONS (min-width: 768px)
    // ─────────────────────────────────────────────────────────────────────────────
    mm.add(
      {
        isDesktop: '(min-width: 768px)',
      },
      () => {
        // PARAGRAPH: slide left & fade out (same as before)
        gsap.fromTo(
          paragraphRef.current,
          { x: 0, opacity: 1 },
          {
            x: -100,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: paragraphRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              markers: false,
            },
          }
        );

        // IMAGE: slide right & fade out (same as before)
        gsap.fromTo(
          imageRef.current,
          { x: 0, opacity: 1 },
          {
            x: 100,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'bottom bottom',
              end: 'bottom top',
              scrub: true,
              markers: false,
            },
          }
        );

        // BUTTON: fade in & slide up slightly, then reverse on scroll up
        gsap.fromTo(
          buttonRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: buttonRef.current,
              start: 'top bottom',    // when button’s top hits viewport bottom
              end: 'bottom top',      // when button’s bottom hits viewport top
              scrub: true,            // tie to scroll so it reverses smoothly
              markers: false,
            },
          }
        );

        // Cleanup desktop-specific ScrollTriggers when this context is killed:
        return () => {
          ScrollTrigger.getAll().forEach((st) => st.kill());
        };
      }
    );

    // ─────────────────────────────────────────────────────────────────────────────
    // MOBILE ANIMATIONS (max-width: 767px)
    // ─────────────────────────────────────────────────────────────────────────────
    mm.add(
      {
        isMobile: '(max-width: 767px)',
      },
      () => {
        // PARAGRAPH (mobile): from y:+100 → y:0, opacity 0→1 then y:0 → y:-100, opacity 1→0
        const paraTL = gsap.timeline({
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            markers: false,
          },
        });
        paraTL.fromTo(
          paragraphRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none', duration: 0.5 },
          0
        );
        paraTL.to(
          paragraphRef.current,
          { y: -100, opacity: 0, ease: 'none', duration: 0.5 },
          0.5
        );

        // IMAGE (mobile): same pattern
        const imgTL = gsap.timeline({
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            markers: false,
          },
        });
        imgTL.fromTo(
          imageRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none', duration: 0.5 },
          0
        );
        imgTL.to(
          imageRef.current,
          { y: -100, opacity: 0, ease: 'none', duration: 0.5 },
          0.5
        );

        // BUTTON (mobile): identical “come from below → fade out up” timeline
        const btnTL = gsap.timeline({
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            markers: false,
          },
        });
        btnTL.fromTo(
          buttonRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none', duration: 0.5 },
          0
        );
        btnTL.to(
          buttonRef.current,
          { y: -100, opacity: 0, ease: 'none', duration: 0.5 },
          0.5
        );

        // Cleanup mobile-specific ScrollTriggers when this context is killed:
        return () => {
          ScrollTrigger.getAll().forEach((st) => st.kill());
        };
      }
    );

    // Cleanup all matchMedia contexts on unmount
    return () => mm.revert();
  }, []);

  return (
    <div className="bg-white mb-[80px] lg:mb-[200px]" id="MainContainer">
      <div
        id="divForTextAndImage"
        className="lg:flex lg:items-center lg:px-[159px] lg:justify-between"
      >
        {/* ======== TITLE & PARAGRAPH ======== */}
        <div
          className="mt-[160px] lg:mt-[107px] px-6 lg:px-0"
          id="textAndButtonDiv"
        >
          {/* TYPEWRITTEN TITLE */}
          <h2 ref={titleRef} className="text-[24px] lg:text-[40px] font-bold" />

          {/* PARAGRAPH */}
          <p
            ref={paragraphRef}
            className="text-[16px] lg:text-[20px] mt-[42px] font-medium opacity-60 lg:max-w-[600px]"
          >
            Founded on the belief that creativity is a powerful engine for social
            transformation, we provide participants with hands-on training in music,
            visual arts, performance, and digital storytelling. Our diverse team of
            professional artists, educators, and community organizers collaborates
            closely with each cohort to design projects that speak to the real-life
            challenges they face—be it racism, discrimination, or social exclusion.
          </p>
        </div>

        {/* ======== IMAGE ======== */}
        <div
          ref={imageRef}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/about.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="h-[350px] w-11/12 lg:w-[458px] mx-auto lg:mx-0 lg:h-[462px] mt-10 lg:mt-[217px]"
        />
      </div>

      {/* ======== BUTTON ======== */}
      <button
        ref={buttonRef}
        className="w-[150px] h-[44px] mt-10 lg:mt-0 mx-6 lg:mx-[159px] md:w-[150px] bg-white border-2 border-[#E88E5E] hover:bg-[#E88E5E] hover:text-white text-[16px] font-semibold text-[#E88E5E]"
      >
        Get Involved
      </button>
    </div>
  );
};

export default About;
