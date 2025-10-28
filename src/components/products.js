"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Leaf } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const circleRefs = useRef([]);
  const overlayRefs = useRef([]);
  const accentRefs = useRef([]);

  useEffect(() => {
    // Function to reset a specific card to original state
    const resetCard = (index) => {
      const el = circleRefs.current[index];
      const overlay = overlayRefs.current[index];
      const accent = accentRefs.current[index];

      if (!el || !overlay || !accent) return;

      const tl = gsap.timeline({ defaults: { overwrite: true } });

      tl.to(overlay, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
      })
        .to(
          accent,
          {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          el,
          {
            borderRadius: "50%",
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        );
    };

    circleRefs.current.forEach((el, i) => {
      const overlay = overlayRefs.current[i];
      const accent = accentRefs.current[i];

      if (!el || !overlay || !accent) return;

      // Hide overlay initially
      gsap.set(overlay, { opacity: 0, y: "100%" });

      // Hover in
      el.addEventListener("mouseenter", (e) => {
        if (accent.contains(e.target)) return;

        // Reset all OTHER cards
        circleRefs.current.forEach((_, idx) => {
          if (idx !== i) {
            resetCard(idx);
          }
        });

        // Animate current card
        const tl = gsap.timeline({ defaults: { overwrite: true } });

        tl.to(el, {
          borderRadius: "2rem",
          duration: 0.4,
          ease: "power2.out",
        })
          .to(
            accent,
            {
              opacity: 0,
              duration: 0.3,
              ease: "power2.out",
            },
            "-=0.3"
          )
          .fromTo(
            overlay,
            { y: "100%", opacity: 0 },
            { y: "25%", opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.2"
          );
      });

      // Hover out
      el.addEventListener("mouseleave", (e) => {
        if (accent.contains(e.relatedTarget)) return;

        resetCard(i);
      });
    });
  }, []);

  const products = [
    {
      src: "/images/granolaOrig.webp",
      text: "GRANOLA ORIGINAL",
      tag: "ORIGINAL",
      desc1: "Rich in fibers and a source of protein",
      desc2: "70% lesss carbs",
      desc3: "No added sugar",
    },
    {
      src: "/images/granolaCacaoCrisp.webp",
      text: "GRANOLA CACAO CRISP",
      tag: "CACAO",
      desc1: "Rich in fibers and a source of protein",
      desc2: "60% lesss carbs",
      desc3: "No added sugar",
    },
    {
      src: "/images/granolaCinnamonChai.webp",
      text: "GRANOLA CINNAMON CHAI",
      tag: "CINNAMON",
      desc1: "Rich in fibers and a source of protein",
      desc2: "70% lesss carbs",
      desc3: "No added sugar",
    },
    {
      src: "/images/granolaPbutter.webp",
      text: "GRANOLA PEANUT BUTTER",
      tag: "PEANUT",
      desc1: "Rich in fibers and a source of protein",
      desc2: "70% lesss carbs",
      desc3: "No added sugar",
    },
  ];

  return (
    <section className="w-screen text-left py-12 lg:pt-20 px-12">
      <div className="max-w-[1536px] mx-auto bg-[var(--background)] relative">
        <h1
          className="text-3xl md:text-5xl lg:text-6xl leading-9 md:leading-14 lg:leading-18 font-bold self-start mb-20"
          style={{ fontFamily: "var(--font-chau-philomene-one)" }}
        >
          DISCOVER OUR TASTY <br /> PRODUCTS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center items-center z-1 mb-20">
          {products.map((product, i) => (
            <div key={i} className="relative overflow-visible">
              {/* Circle Card */}
              <div
                ref={(el) => (circleRefs.current[i] = el)}
                className="relative w-[70vmin] md:w-[40vmin]  xl:w-[70vmin] h-[70vmin] md:h-[40vmin] xl:h-[70vmin] rounded-full bg-[var(--primary)] overflow-hidden cursor-pointer"
              >
                <Image
                  src={product.src}
                  alt={product.text}
                  fill
                  className="object-cover p-10"
                />

                {/* Overlay */}
                <div
                  ref={(el) => (overlayRefs.current[i] = el)}
                  className="absolute shadow inset-0 bg-[var(--background85)]  hidden xl:flex flex-col items-start justify-start pointer-events-none p-5 text-[var(--foreground)]"
                >
                  <p
                    className=" text-3xl  mb-6"
                    style={{ fontFamily: "var(--font-chau-philomene-one)" }}
                  >
                    {product.text}
                  </p>
                  <ul className="text-xl">
                    <li className="flex gap-4 mb-3">
                      <Leaf className="text-green-500" />
                      <p>{product.desc1}</p>
                    </li>
                    <li className="flex gap-5 mb-3">
                      <Leaf className="text-green-500" />
                      <p>{product.desc2}</p>
                    </li>
                    <li className="flex gap-5 mb-3">
                      <Leaf className="text-green-500" />
                      <p>{product.desc3}</p>
                    </li>
                  </ul>
                  <div className="flex justify-between gap-5 mt-6">
                    <Button
                      className="p-4 rounded-2xl text-xl font-bold  cursor-pointer w-[180px] h-[48px] bg-[var(--primary)]"
                      variant="outline"
                      style={{ fontFamily: "var(--font-chau-philomene-one)" }}
                    >
                      COMPARE
                    </Button>
                    <Button
                      className="p-4 rounded-2xl text-xl font-bold text-[var(--primary)] bg-[var(--foreground)] cursor-pointer  w-[180px] h-[48px]"
                      style={{ fontFamily: "var(--font-chau-philomene-one)" }}
                    >
                      OUR STORY
                    </Button>
                  </div>
                </div>
              </div>

              {/* Accent Icon */}
              <div
                ref={(el) => (accentRefs.current[i] = el)}
                className="absolute top-0 md:top-4 right-0 md:right-4 w-24 md:w-28 h-24 md:h-28 flex justify-center items-center z-10 pointer-events-auto group"
                style={{ fontFamily: "var(--font-chau-philomene-one)" }}
              >
                <Image
                  src="/images/circle.svg"
                  alt="Accent"
                  fill
                  className="object-contain"
                />
                <p className="text-[var(--background)] z-11 xl md:text-2xl">
                  {product.tag}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center flex-col xl:flex-row  mb-20 px-0 sm:px-2 gap-0 xl:gap-6 mt-0 xl:mt-20">
          <h1
            className="text-xl xl:text-3xl mb-4 xl:mb-0 text-center"
            style={{ fontFamily: "var(--font-chau-philomene-one)" }}
          >
            CURIOUS ABOUT OUR PRODUCTS?
          </h1>
          <Button
            className="p-4 rounded-2xl text-xl xl:text-2xl font-bold text-[var(--primary)] bg-[var(--foreground)] cursor-pointer  w-[250px] xl:w-[300px] h-[48px] xl:h-[60px]"
            style={{ fontFamily: "var(--font-chau-philomene-one)" }}
          >
            SEE ALL OUR PRODUCTS
          </Button>
        </div>

        {/* Vertical Text */}
        {/* <h1
            className="absolute right-0 top- rotate-90 text-[20vmin] font-bold z-[0]"
            style={{ fontFamily: "var(--font-chau-philomene-one)" }}
          >
            PRODUCTS
          </h1> */}
      </div>
    </section>
  );
};

export default Products;
