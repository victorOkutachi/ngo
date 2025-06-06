// src/components/Projects.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  // Refs for all elements we’ll animate:
  const sectionRef      = useRef(null);
  const progressRef     = useRef(null);
  const titleRef        = useRef(null);
  const lineRef         = useRef(null);
  const subtitleRef     = useRef(null);
  const imageWrapperRef = useRef(null);
  const paraRef         = useRef(null);
  const buttonRef       = useRef(null);

  useEffect(() => {
    // ───────────────────────────────────────────────────────────────────────────────
    // 1) SECTION‐LEVEL PIN + PROGRESS BAR (unchanged)
    // ───────────────────────────────────────────────────────────────────────────────
    gsap.to(progressRef.current, {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom+=200 top',
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false,
      },
      immediateRender: false,
    });

    // ───────────────────────────────────────────────────────────────────────────────
    // 2) TITLE SLIDE + FADE + UNDERLINE GROW (unchanged)
    // ───────────────────────────────────────────────────────────────────────────────
    gsap.from(titleRef.current, {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        markers: false,
      },
      immediateRender: false,
    });

    gsap.from(lineRef.current, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 87%',
        toggleActions: 'play none none reverse',
        markers: false,
      },
      immediateRender: false,
    });

    gsap.from(subtitleRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: 'top 88%',
        toggleActions: 'play none none reverse',
        markers: false,
      },
      immediateRender: false,
    });

    // ───────────────────────────────────────────────────────────────────────────────
    // 3) IMAGE “REVEAL” + PARALLAX + ROTATION (unchanged)
    // ───────────────────────────────────────────────────────────────────────────────
    gsap.from(imageWrapperRef.current, {
      scale: 1.2,
      rotate: 5,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: imageWrapperRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        markers: false,
      },
      immediateRender: false,
    });

    gsap.to(imageWrapperRef.current, {
      backgroundPosition: '50% 90%',
      ease: 'none',
      scrollTrigger: {
        trigger: imageWrapperRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        markers: false,
      },
      immediateRender: false,
    });

    gsap.to(imageWrapperRef.current, {
      rotate: 2,
      ease: 'none',
      scrollTrigger: {
        trigger: imageWrapperRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        markers: false,
      },
      immediateRender: false,
    });

    // ───────────────────────────────────────────────────────────────────────────────
    // 4) PARAGRAPH SLIDE + FADE IN/OUT (simplified)
    // ───────────────────────────────────────────────────────────────────────────────
    gsap.from(paraRef.current, {
      y: 100,               // start 100px below
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: paraRef.current,
        start: 'top 85%',   // when paragraph’s top hits 85% down viewport
        toggleActions: 'play reverse play reverse',
        markers: false,
      },
      immediateRender: false,
    });

    // ───────────────────────────────────────────────────────────────────────────────
    // 5) BUTTON POP‐IN + FADE‐OUT (unchanged)
    // ───────────────────────────────────────────────────────────────────────────────
    const btnTL = gsap.timeline({
      scrollTrigger: {
        trigger: buttonRef.current,
        start: 'top 85%',
        end: 'bottom 15%',
        scrub: true,
        markers: false,
      },
    });

    btnTL.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, ease: 'back.out(1.2)', duration: 0.5 },
      0
    );
    btnTL.to(
      buttonRef.current,
      { y: -40, opacity: 0, ease: 'power3.in', duration: 0.5 },
      0.5
    );

    // ───────────────────────────────────────────────────────────────────────────────
    // CLEANUP ON UNMOUNT
    // ───────────────────────────────────────────────────────────────────────────────
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#55A697] lg:px-[159px] overflow-hidden"
    >
      {/* ────────── PROGRESS BAR ────────── */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20">
        <div
          ref={progressRef}
          className="h-full bg-white transform origin-left"
          style={{ width: '0%' }}
        />
      </div>

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
          className="h-[3px] bg-white mt-2 w-full scale-x-0"
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
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/smiles.png)`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 10%',
        }}
      />

      {/* ────────── PARAGRAPH + BUTTON ────────── */}
      <div className="mt-[32px] px-6 lg:px-0">
        {/* Paragraph now simply “slides up & fades in” when its top hits 85% down */}
        <p
          ref={paraRef}
          className="text-[16px] lg:text-[20px] font-medium text-white mb-[52px] leading-relaxed max-w-[900px]"
        >
          Unmute the Message is a youth empowerment initiative amplifying voices
          from marginalized communities. The program equips participants with
          creative, digital, and advocacy skills for active citizenship. It
          tackles racism, discrimination, and inequality through artistic and
          community engagement. Music, visual arts, and digital media are used
          as powerful tools for social change. Workshops and collaborations build
          confidence and promote intercultural dialogue. Youth are inspired to
          lead and make a difference in their local environments. At least 80% of
          participants will produce original works that champion inclusion and
          equality.
        </p>

        {/* Button remains “pop” + fade out with scrubbed timeline */}
        <button
          ref={buttonRef}
          className="text-white font-medium border-white border-2 py-2 px-6 hover:bg-[#E88E5E] hover:scale-105 transition-transform duration-200 mb-[60px] rounded-md"
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Projects;
