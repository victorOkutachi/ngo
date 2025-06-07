// src/components/Hero.jsx
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import ShakeButton from './ShakeButton'

const Hero = () => {
  const headingOneRef = useRef(null)
  const headingTwoRef = useRef(null)
  const paragraphRef   = useRef(null)
  const buttonRef      = useRef(null)
  const imageRef       = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (
        headingOneRef.current &&
        headingTwoRef.current &&
        paragraphRef.current &&
        buttonRef.current &&
        imageRef.current
      ) {
        // Build timeline: all elements start <opacity: 0> from CSS.
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } })

        tl.fromTo(
          headingOneRef.current,
          { x: -50, opacity: 0 },
          { x: 0,   opacity: 1, immediateRender: false }
        )
          .fromTo(
            headingTwoRef.current,
            { x: -50, opacity: 0 },
            { x: 0,   opacity: 1, immediateRender: false },
            '-=0.6'
          )
          .fromTo(
            paragraphRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, immediateRender: false },
            '-=0.4'
          )
          .fromTo(
            buttonRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1,   opacity: 1, immediateRender: false },
            '-=0.4'
          )
          .fromTo(
            imageRef.current,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              immediateRender: false,
              ease: 'power3.out'
            },
            '-=0.8'
          )
      }
    }, null)

    return () => ctx.revert()
  }, [])

  return (
    <div
      id='hero-section'
      className='bg-[#55A697] relative pb-[180px] lg:pt-[120px] lg:pb-[250px]'
      style={{ willChange: 'transform, opacity' }}
    >
      <div className='lg:flex items-center lg:px-[159px] justify-between'>

        {/* TEXT BLOCK (initially invisible via `opacity-0`) */}
        <div className='px-6 relative pt-3 z-10'>
          <h1
            ref={headingOneRef}
            className='text-[30px] lg:text-[48px] font-bold text-white opacity-0'
          >
            Unleash Your Voice.
          </h1>
          <h1
            ref={headingTwoRef}
            className='text-[30px] lg:text-[48px] font-bold text-white opacity-0'
          >
            Ignite Change.
          </h1>

          <p
            ref={paragraphRef}
            className='text-[16px] lg:text-[24px] mt-5 font-medium text-white max-w-[400px] md:max-w-[500px] opacity-0'
          >
            Through creativity and collaboration, you’ll transform ideas into powerful stories that challenge
            injustice and build inclusive communities.
          </p>

          <div
            ref={buttonRef}
            className='inline-block mt-6 opacity-0'
          >
            <ShakeButton />
          </div>
        </div>

        {/* IMAGE (initially invisible via `opacity-0`) */}
        <div
          ref={imageRef}
          id='hero-image'
          className={`
            absolute
            left-1/2
            -translate-x-1/2
            bottom-[-60px]

            h-[200px]
            w-[90%]

            lg:h-[412px]
            lg:w-[618px]
            bg-gray-200
            z-0
            lg:static
            lg:translate-x-0
            lg:bottom-auto
            lg:z-auto

            opacity-0
          `}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>
    </div>
  )
}

export default Hero
