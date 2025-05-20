import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Benefits from "../components/Benefits";
import OurProducts from "../components/OurProducts";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <OurProducts />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
