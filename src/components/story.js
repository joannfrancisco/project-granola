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

    // Animate each background image slightly for parallax effect
    backgroundRefs.current.forEach((bg, i) => {
      if (!bg) return;
      gsap.to(bg, {
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

    // Foreground moves slower
    gsap.to(foregroundRef.current, {
      yPercent: 10,
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
      className="relative h-[1200px] md:h-[1600px] lg:h-[1800px] xl:h-[2100px] w-screen px-12 overflow-hidden text-center bg-[var(--primary)] mt-30 md:mt-0 "
    >
      {/* Top Left - Hidden on mobile */}
      <div
        ref={(el) => (backgroundRefs.current[0] = el)}
        className="hidden md:block absolute top-20 sm:top-32 md:top-100 left-2 md:left-[-150px] lg:left-0  2xl:left-[100px] w-[35vmin] sm:w-[40vmin] h-[35vmin] sm:h-[40vmin] opacity-0 md:opacity-80 z-3"
      >
        <Image
          src="/images/granola3.png"
          alt="Granola 3"
          fill
          sizes="(max-width: 640px) 30vmin, 40vmin"
          className="object-cover rounded-lg pointer-events-none"
        />
      </div>

      {/* Top Right */}
      <div
        ref={(el) => (backgroundRefs.current[1] = el)}
        className="hidden md:block absolute top-40 md:top-200 lg:top-250 right-[-20px] md:right-[-200px] lg:right-[-190px] xl:right-[-100px] w-[40vmin] md:w-[45vmin] lg:w-[50vmin] h-[40vmin] md:h-[45vmin] lg:h-[50vmin] md:opacity-70 lg:opacity-80 z-3"
      >
        <Image
          src="/images/granola4.png"
          alt="Granola 4"
          fill
          sizes="(max-width: 640px) 30vmin, 40vmin"
          className="object-cover rounded-lg pointer-events-none"
        />
      </div>

      {/* Bottom Left */}
      <div
        ref={(el) => (backgroundRefs.current[2] = el)}
        className="hidden md:block absolute bottom-0 lg:bottom-0 xl:bottom-52 left-0 w-[20vmin] lg:w-[25vmin] h-[45vmin] lg:h-[55vmin] opacity-0 md:opacity-80 z-3"
      >
        <Image
          src="/images/granola1.png"
          alt="Granola 1"
          fill
          sizes="(max-width: 640px) 30vmin, 40vmin"
          className="object-cover rounded-lg pointer-events-none"
        />
      </div>

      {/* Bottom Right */}
      <div
        ref={(el) => (backgroundRefs.current[3] = el)}
        className="hidden md:block absolute bottom-[-150px] sm:bottom-[-200px] md:bottom-[-700px] xl:bottom-[-300px] right-4 sm:right-8 md:right-[-80px] w-[30vmin] sm:w-[35vmin] md:w-[40vmin] h-[30vmin] sm:h-[35vmin] md:h-[40vmin] opacity-0 sm:opacity-70 md:opacity-80 z-3"
      >
        <Image
          src="/images/granola2.png"
          alt="Granola 2"
          fill
          sizes="(max-width: 640px) 30vmin, 40vmin"
          className="object-cover rounded-lg pointer-events-none"
        />
      </div>

      {/* Foreground Text */}
      <div
        ref={foregroundRef}
        className=" text-shadow-[2px_2px_4px_rgba(0,0,0,0.4)] absolute inset-x-0 flex flex-col items-center justify-center pt-10 px-15 md:px-20 lg:px-30 text-[var(--foreground)] z-10"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-18 text-center leading-tight sm:leading-[50px] md:leading-[70px] lg:leading-[90px] xl:leading-[110px]"
          style={{ fontFamily: "var(--font-chau-philomene-one)" }}
        >
          FROM NATURE, <br /> ALWAYS SUPER TASTY
        </h1>

        {/* Icon 1 */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-30 lg:h-30 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <Image
            src="/images/circle.svg"
            alt="Circle"
            fill
            className="object-contain z-0"
          />
          <Leaf className="absolute inset-0 m-auto w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[var(--background)] z-10" />
        </div>

        <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed sm:leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[70px] text-center opacity-90 tracking-wide mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-18 max-w-4xl">
          We truly mean &quot;from nature&quot;. No additives. Simply pure.
        </h2>

        {/* Icon 2 */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-30 lg:h-30 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <Image
            src="/images/circle.svg"
            alt="Circle"
            fill
            className="object-contain z-0"
          />
          <Bean className="absolute inset-0 m-auto w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[var(--background)] z-10" />
        </div>

        <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed sm:leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[70px] text-center opacity-90 tracking-wide mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-18 max-w-4xl">
          We use &quot;whole&quot; nuts, seeds, legumes, pits, vegetables and
          fruits. So that you naturally get what your body nutritiously needs.
        </h2>

        {/* Icon 3 */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-30 lg:h-30 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <Image
            src="/images/circle.svg"
            alt="Circle"
            fill
            className="object-contain z-0"
          />
          <Vegan className="absolute inset-0 m-auto w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[var(--background)] z-10" />
        </div>

        <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed sm:leading-[40px] md:leading-[50px] lg:leading-[60px] xl:leading-[70px] text-center opacity-90 tracking-wide mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-15 max-w-4xl">
          That way you eat real and honest food with the taste of nature. The
          Future is Whole Foods.
        </h2>

        <Button
          className="px-6 py-4 sm:px-7 sm:py-5 md:px-8 md:py-6 lg:py-8 rounded-2xl sm:rounded-3xl text-lg sm:text-xl md:text-2xl font-bold text-[var(--background)] bg-[var(--foreground)] cursor-pointer"
          style={{ fontFamily: "var(--font-chau-philomene-one)" }}
        >
          OUR STORY
        </Button>
      </div>
    </section>
  );
};

export default Story;
