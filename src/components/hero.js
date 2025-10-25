"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const Hero = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    // Continuous rotation using GSAP
    gsap.to(imgRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-auto py-30 lg:h-screen text-center px-4 bg-[var(--background)] text-[var(--foreground)]">
      <div className="relative w-full max-w-7xl mx-auto flex justify-center">
        <h1
          className="w-fit relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mt-12 mb-4 sm:mt-16 md:mt-20 sm:mb-6 tracking-wide leading-tight sm:leading-[75px] md:leading-[90px] lg:leading-[130px]"
          style={{ fontFamily: "var(--font-chau-philomene-one)" }}
        >
          THE FUTURE <br /> IS WHOLE FOODS
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
      <p className="text-lg sm:text-lg md:text-2xl lg:text-4xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl opacity-90 leading-relaxed sm:leading-[30px] md:leading-[30px] lg:leading-[50px]">
        Nature offers us everything we need. Nothing more, nothing less. Just
        right as it is.
      </p>
    </section>
  );
};

export default Hero;
