import Hero from "@/components/hero";
import About from "@/components/about";
import Story from "@/components/story";
import Products from "@/components/products";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Story />
      {/* <Products /> */}
      <Hero />
    </div>
  );
};

export default Home;
