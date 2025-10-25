"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const foregroundRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const foreground = foregroundRef.current;
    const background = backgroundRef.current;

    if (!container || !foreground || !background) return;

    // Get initial size based on viewport
    const getInitialSize = () => {
      const vw = window.innerWidth;
      if (vw < 640)
        return {
          width: "300px",
          height: "300px",
          vwidth: "100vmin",
          vheight: "100vmin",
        }; // mobile
      if (vw < 768)
        return {
          width: "400px",
          height: "400px",
          vwidth: "100vmin",
          vheight: "100vmin",
        }; // sm
      if (vw < 1024)
        return {
          width: "500px",
          height: "500px",
          vwidth: "150vmin",
          vheight: "100vmin",
        }; // md
      if (vw < 1280)
        return {
          width: "600px",
          height: "600px",
          vwidth: "200vmin",
          vheight: "150vmin",
        }; // lg
      return {
        width: "800px",
        height: "800px",
        vwidth: "200vmin",
        vheight: "150vmin",
      }; // xl+
    };

    const initialSize = getInitialSize();

    // Foreground moves upward
    gsap.to(foreground, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Background moves downward
    gsap.to(background, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Circle → Expanding Rectangle Morph
    gsap.fromTo(
      background,
      {
        borderRadius: "50%",
        width: initialSize.width,
        height: initialSize.height,
      },
      {
        borderRadius: "0%",
        width: initialSize.vwidth,
        height: initialSize.vheight,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: container,
          start: "top 100%",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className=" relative h-[90vmin] sm:h-[80vmin] md:h-[90vmin] lg:h-[135vmin]  overflow-visible flex items-start justify-center z-4"
    >
      {/* Background Image */}
      <div ref={backgroundRef} className="rounded-full overflow-hidden">
        <Image
          src="/images/granolaAbout.png"
          alt="Granola about background"
          fill
          className="object-cover object-center "
          priority
        />
      </div>

      {/* Foreground Text */}
      <div
        ref={foregroundRef}
        className="absolute flex flex-col items-center justify-end text-[var(--foreground)] mt-40 sm:mt-50 lg:mt-90"
      >
        {/* <div className="h-3/12 sm:h-4/12"></div> */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-2 sm:mb-5 md:mb-6 lg:mb-7 text-center leading-tight px-4"
          style={{ fontFamily: "var(--font-chau-philomene-one)" }}
        >
          WE LOVE <br /> WHOLE FOODS
        </h1>
        <p className="text-m md:text-xl lg:text-3xl opacity-90 tracking-wide text-center px-4">
          Discover the world of whole foods
        </p>
      </div>
    </section>
  );
};

export default About;
