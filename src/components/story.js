"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const containerRef = useRef(null);
  const backgroundRefs = useRef([]);
  const foregroundRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Animate each background image slightly for parallax effect (move faster)
    backgroundRefs.current.forEach((bg, i) => {
      if (!bg) return;
      gsap.to(bg, {
        yPercent: i % 2 === 0 ? 100 : 100, // increased movement for faster parallax
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Animate foreground text upward (slower)
    gsap.to(foregroundRef.current, {
      yPercent: -10, // less movement = slower scroll speed
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] overflow-hidden flex items-start justify-center bg-[var(--primary)]"
    >
      {/* Four Corner Backgrounds */}
      <div
        ref={(el) => (backgroundRefs.current[0] = el)}
        className="absolute top-130 left-[-50] w-[40vmin] h-[40vmin] bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('./images/granolaOrig.webp')" }}
      ></div>

      <div
        ref={(el) => (backgroundRefs.current[1] = el)}
        className="absolute top-180 right-0 w-[40vmin] h-[40vmin] bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('./images/granolaOrig.webp')" }}
      ></div>

      <div
        ref={(el) => (backgroundRefs.current[2] = el)}
        className="absolute bottom-80 left-0 w-[40vmin] h-[40vmin] bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('./images/granolaOrig.webp')" }}
      ></div>

      <div
        ref={(el) => (backgroundRefs.current[3] = el)}
        className="absolute bottom-0 right-0 w-[40vmin] h-[40vmin] bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('./images/granolaOrig.webp')" }}
      ></div>

      {/* Foreground Text */}
      <div
        ref={foregroundRef}
        className="absolute inset-0 flex flex-col items-center justify-end text-[var(--foreground)] text-4xl font-bold"
      >
        <h1
          className="text-6xl lg:text-8xl mb-40 text-center leading-[110px]"
          style={{ fontFamily: "var(--font-chau-philomene-one)" }}
        >
          FROM NATURE, <br /> ALWAYS SUPER TASTY
        </h1>
        <h2 className="text-5xl leading-[70px] text-center opacity-90 tracking-wide mb-40">
          We truly mean &quot;from nature&quot;. No
          <br /> additives. Simply pure.
        </h2>
        <h2 className="text-5xl leading-[70px] text-center opacity-90 tracking-wide mb-40">
          We use &quot;whole&quot; nuts, seeds, <br /> legumes, pits, vegetables
          and fruits.
          <br /> So that you naturally get what your <br />
          body nutritiously needs.
        </h2>

        <h2 className="text-5xl leading-[70px] text-center opacity-90 tracking-wide mb-40">
          That way you eat real and honest
          <br /> food with the taste of nature. The <br /> Future is Whole
          Foods.
        </h2>
      </div>
    </section>
  );
};

export default Story;
