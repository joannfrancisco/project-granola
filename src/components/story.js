"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Leaf, Bean, Vegan } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        // Bigger yPercent = faster parallax movement
        yPercent: -300,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // 🟢 Foreground moves slower (smaller yPercent)
    gsap.to(foregroundRef.current, {
      yPercent: 40, // smaller movement = slower effect
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
      className="relative h-[400vh] overflow-hidden flex items-start justify-center bg-[var(--primary)]"
    >
      {/* Top Left */}
      <div
        ref={(el) => (backgroundRefs.current[0] = el)}
        className="absolute top-140 left-10 w-[40vmin] h-[40vmin] opacity-80 z-3"
      >
        <Image
          src="/images/granola3.png"
          alt="Granola 3"
          fill
          sizes="(max-width: 500px) 100vw, 40vmin"
          className="object-cover rounded-lg pointer-events-none"
        />
      </div>

      {/* Top Right */}
      <div
        ref={(el) => (backgroundRefs.current[0] = el)}
        className="absolute top-260 right-[-50] w-[50vmin] h-[50vmin] opacity-80 z-3"
      >
        <Image
          src="/images/granola4.png"
          alt="Granola 4"
          fill
          sizes="(max-width: 500px) 100vw, 40vmin"
          className="object-cover rounded-lg pointer-events-none"
        />
      </div>

      {/* Bottom Left */}
      <div
        ref={(el) => (backgroundRefs.current[0] = el)}
        className="absolute bottom-150 left-0 w-[40vmin] h-[90vmin] opacity-80 z-3"
      >
        <Image
          src="/images/granola1.png"
          alt="Granola 1"
          fill
          sizes="(max-width: 500px) 100vw, 40vmin"
          className="object-cover rounded-lg pointer-events-none"
        />
      </div>

      {/* Bottom Right */}
      <div
        ref={(el) => (backgroundRefs.current[0] = el)}
        className="absolute bottom-[-300] right-20 w-[40vmin] h-[40vmin] opacity-80 z-3"
      >
        <Image
          src="/images/granola2.png"
          alt="Granola 2"
          fill
          sizes="(max-width: 500px) 100vw, 40vmin"
          className="object-cover rounded-lg pointer-events-none"
        />
      </div>

      {/* Foreground Text */}
      <div
        ref={foregroundRef}
        className="absolute inset-0 flex flex-col items-center justify-start mt-80 text-[var(--foreground)] text-4xl font-bold"
      >
        <h1
          className="text-6xl lg:text-8xl mb-18 text-center leading-[110px]"
          style={{ fontFamily: "var(--font-chau-philomene-one)" }}
        >
          FROM NATURE, <br /> ALWAYS SUPER TASTY
        </h1>
        <div className="relative w-30 h-30">
          <Image
            src="/images/circle.svg"
            alt="Circle"
            fill
            className="object-contain z-0"
          />

          <Leaf className="absolute inset-0 m-auto w-16 h-16 text-[var(--background)] z-10" />
        </div>
        <h2 className="text-5xl leading-[70px] text-center opacity-90 tracking-wide mb-18">
          We truly mean &quot;from nature&quot;. No
          <br /> additives. Simply pure.
        </h2>
        <div className="relative w-30 h-30">
          <Image
            src="/images/circle.svg"
            alt="Circle"
            fill
            className="object-contain z-0"
          />

          <Bean className="absolute inset-0 m-auto w-16 h-16 text-[var(--background)] z-10" />
        </div>
        <h2 className="text-5xl leading-[70px] text-center opacity-90 tracking-wide mb-18">
          We use &quot;whole&quot; nuts, seeds, <br /> legumes, pits, vegetables
          and fruits.
          <br /> So that you naturally get what your <br />
          body nutritiously needs.
        </h2>
        <div className="relative w-30 h-30">
          <Image
            src="/images/circle.svg"
            alt="Circle"
            fill
            className="object-contain z-0"
          />

          <Vegan className="absolute inset-0 m-auto w-16 h-16 text-[var(--background)] z-10" />
        </div>
        <h2 className="text-5xl leading-[70px] text-center opacity-90 tracking-wide mb-15">
          That way you eat real and honest
          <br /> food with the taste of nature. The <br /> Future is Whole
          Foods.
        </h2>
        <Button
          className="p-8 rounded-3xl text-2xl font-bold text-[var(--background)] bg-[var(--foreground)] cursor-pointer"
          style={{ fontFamily: "var(--font-chau-philomene-one)" }}
        >
          OUR STORY
        </Button>
      </div>
    </section>
  );
};

export default Story;
