"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Hero from "@/components/hero";
import About from "@/components/about";
import Story from "@/components/story";
import Products from "@/components/products";
import Impact from "@/components/impact";
import Subscribe from "@/components/subscribe";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollSmoother);

const Home = () => {
  useEffect(() => {
    // initialize smoother
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // seconds it takes to "catch up"
      effects: true, // allow effects like parallax
    });

    return () => smoother.kill();
  }, []);

  return (
    <div id="smooth-wrapper" className="overflow-hidden">
      <div id="smooth-content">
        <Hero />
        <About />
        <Story />
        <Products />
        <Impact />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
