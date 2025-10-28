import Counter from "./counter";
import { Button } from "./ui/button";
import { Leaf, ArrowBigDown, BicepsFlexed, Ratio } from "lucide-react";

const Impact = () => {
  return (
    <section className="bg-[var(--primary)] w-screen text-center py-10 lg:py-20">
      <div
        className="max-w-[1536px] mx-auto px-6 md:px-10 py-6"
        style={{ fontFamily: "var(--font-chau-philomene-one)" }}
      >
        <h2 className="text-5xl lg:text-6xl xl:text-8xl font-bold tracking-wide mb-6">
          OUR IMPACT
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0  ">
          <Counter
            target={134}
            description="MIO PORTIONS SOLD"
            icon={<Ratio className="w-15 h-15" />}
          />
          <Counter
            target={1.43}
            description="MIO KG CARBS REDUCED"
            icon={<ArrowBigDown className="w-15 h-15" />}
          />
          <Counter
            target={583.087}
            description="KG FIBERS"
            icon={<Leaf className="w-15 h-15" />}
          />
          <Counter
            target={1.05}
            description="KG PROTEIN SOLD"
            icon={<BicepsFlexed className="w-15 h-15" />}
          />
        </div>
      </div>

      <div className="flex items-center justify-center flex-col xl:flex-row  mb-20 px-2 gap-0 xl:gap-6 mt-0 ">
        <h1
          className="text-xl xl:text-3xl mb-4 xl:mb-0"
          style={{ fontFamily: "var(--font-chau-philomene-one)" }}
        >
          CURIOUS ABOUT OUR IMPACT?
        </h1>
        <Button
          className="p-8 rounded-2xl text-xl xl:text-2xl font-bold text-[var(--primary)] bg-[var(--foreground)] cursor-pointer"
          style={{ fontFamily: "var(--font-chau-philomene-one)" }}
        >
          THE FUTURE IS WHOLE FOODS
        </Button>
      </div>
    </section>
  );
};

export default Impact;
