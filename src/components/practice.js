"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export default function Cube() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    // Split text into characters
    const split = new SplitText(textElement, {
      type: "chars",
      charsClass: "char",
    });

    // Store original text in data-content for scrambling reference
    split.chars.forEach((char) => {
      gsap.set(char, { attr: { "data-content": char.innerHTML } });
    });

    // Pointer move animation
    const handleMove = (e) => {
      split.chars.forEach((char) => {
        const rect = char.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          gsap.to(char, {
            overwrite: true,
            duration: 1.2 - dist / 100,
            scrambleText: {
              text: char.dataset.content,
              chars: ".:",
              speed: 0.5,
            },
            ease: "none",
          });
        }
      });
    };

    textElement.addEventListener("pointermove", handleMove);

    // Cleanup
    return () => {
      textElement.removeEventListener("pointermove", handleMove);
      split.revert();
    };
  }, []);

  return (
    <div className="text-block text-center p-8">
      <p
        ref={textRef}
        className="text-3xl text-white leading-relaxed max-w-3xl mx-auto"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}
