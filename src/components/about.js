"use client";
import React, { useRef, useEffect } from "react";
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

    // Foreground moves upward
    gsap.to(foreground, {
      yPercent: -20,
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
      yPercent: 5,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // 🟢 Circle → Expanding Rectangle Morph
    gsap.fromTo(
      background,
      { borderRadius: "50%", width: "800px", height: "800px" }, // start small and round
      {
        borderRadius: "0%", // becomes square/rectangle
        width: "100vw", // expands to full screen width
        height: "150vh", // maintains a rectangular shape
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: container,
          start: "top center", // starts when top reaches the middle of viewport
          end: "bottom top", // completes as it scrolls out
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
      className="area-square relative h-[100vh] overflow-visible flex items-start justify-center z-2"
    >
      {/* Background Image */}
      <div
        ref={backgroundRef}
        className="bg-cover bg-center rounded-full"
        style={{
          backgroundImage: "url('./images/granolaAbout.png')",
        }}
      ></div>

      {/* Foreground Text */}
      <div
        ref={foregroundRef}
        className="absolute inset-0 flex flex-col items-center justify-end text-[var(--foreground)] text-4xl font-bold"
      >
        <div className="h-4/12"></div>
        <h1
          className="text-6xl lg:text-6xl font-extrabold mb-7 text-center"
          style={{ fontFamily: "var(--font-chau-philomene-one)" }}
        >
          WE LOVE <br /> WHOLE FOODS
        </h1>
        <p className="text-xl lg:text-2xl opacity-90 tracking-wide">
          Discover the world of whole foods
        </p>
      </div>
    </section>
  );
};

export default About;
