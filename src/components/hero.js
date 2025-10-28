"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const Hero = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");
    gsap.fromTo(
      letters,
      {
        opacity: 0,
        x: 50, // from right
        y: -50, // from top
        rotate: 10, // optional slight rotation
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    // Continuous rotation using GSAP
    gsap.to(imgRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section className="h-auto py-30 lg:h-full w-screen text-center px-4 bg-[var(--background)] text-[var(--foreground)]">
      <div className="relative w-full max-w-7xl mx-auto flex justify-center">
        <h1
          ref={textRef}
          className="w-fit relative text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mt-12 mb-4 sm:mt-16 md:mt-20 sm:mb-6 tracking-wide leading-tight sm:leading-[75px] md:leading-[90px] lg:leading-[130px]"
          style={{ fontFamily: "var(--font-chau-philomene-one)" }}
        >
          {"THE FUTURE".split("").map((char, i) => (
            <span key={`future-${i}`} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}

          <br />

          {"IS WHOLE FOODS".split("").map((char, i) => (
            <span key={`foods-${i}`} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          <span
            ref={imgRef}
            className="absolute top-[-40] right-3 sm:top-[-50] sm:right-7 md:right-9 lg:right-15 w-15 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
          >
            <Image
              src="/images/wholeFoods.svg"
              alt="Rotating leaf"
              fill
              className="object-contain"
            />
          </span>
        </h1>
      </div>
      <p className="mx-auto text-m sm:text-lg md:text-2xl lg:text-4xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl opacity-90 leading-relaxed sm:leading-[30px] md:leading-[30px] lg:leading-[50px]">
        Nature offers us everything we need. Nothing more, nothing less. Just
        right as it is.
      </p>
    </section>
  );
};

export default Hero;
