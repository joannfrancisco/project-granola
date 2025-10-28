"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

const Subscribe = () => {
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
    <section className="w-screen text-center bg-[var(--background)] py-20 md:py-30">
      <div className="max-w-[1536px] mx-auto px-4 md:px-10">
        <div
          ref={imgRef}
          className="inline-block w-20 h-20 md:w-40 md:h-40 mb-6 relative"
        >
          <Image
            src="/images/wholeFoods.svg"
            alt="Rotating leaf"
            fill
            className="object-contain"
          />
        </div>
        <h1
          className="text-3xl md:text-5xl lg:text-6xl leading-9 md:leading-14 lg:leading-18 font-bold mb-6"
          style={{ fontFamily: "var(--font-chau-philomene-one)" }}
        >
          WE LOVE WHOLE FOODS
        </h1>
        <p className="text-sm md:text-xl lg:text-2xl tracking-tight opacity-90 py-1">
          Do you also think gr8nola is{" "}
          <span className="italic">without more the tastiest</span>?
        </p>
        <p className="text-sm md:text-xl lg:text-2xl tracking-tight opacity-90 py-1">
          Read more about our products, whole foods, super tasty
        </p>
        <p className="text-sm md:text-xl lg:text-2xl tracking-tight opacity-90 py-1">
          recipes and health tips in our newsletter.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 mt-10 w-[90vw] mx-auto px-4">
        <Input
          type="text"
          placeholder="First name"
          className="p-6 xl:p-8 rounded-2xl text-lg md:text-xl xl:text-2xl md:w-[35%]"
        />
        <Input
          type="email"
          placeholder="Email address"
          className="p-6 xl:p-8 rounded-2xl text-lg md:text-xl xl:text-2xl md:w-[45%]"
        />
        <Button
          className="p-6 xl:p-8 rounded-2xl text-lg md:text-xl xl:text-2xl font-bold text-[var(--primary)] bg-[var(--foreground)] cursor-pointer w-full md:w-auto"
          style={{ fontFamily: "var(--font-chau-philomene-one)" }}
        >
          SUBSCRIBE
        </Button>
      </div>
    </section>
  );
};

export default Subscribe;
