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
    <section className="flex flex-col items-center justify-center h-screen text-center px-6 bg-[var(--background)] text-[var(--foreground)]">
      <div className="relative inline-block">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold mt-20 mb-4 tracking-wide leading-[130px]"
          style={{ fontFamily: "var(--font-chau-philomene-one)" }}
        >
          THE FUTURE <br /> IS WHOLE FOODS
          <span ref={imgRef} className="absolute top-4 right-23 w-28 h-28">
            <Image
              src="/images/wholeFoods.svg"
              alt="Rotating leaf"
              fill
              className="object-contain"
            />
          </span>
        </h1>
      </div>
      <p className="text-xl md:text-3xl lg:text-4xl max-w-3xl opacity-90 leading-[50px]">
        Nature offers us everything we need. Nothing more, nothing less. Just
        right as it is.
      </p>
      {/* <button className="mt-8 bg-[var(--foreground)] text-[var(--background)] px-8 py-3 rounded-full font-semibold text-lg hover:opacity-90 transition duration-300">
        Explore More
      </button> */}
    </section>
  );
};

export default Hero;
