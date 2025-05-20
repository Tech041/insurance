import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import OurProducts from "../components/OurProducts";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import PackageCarousel from "../components/PackageCarousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <PackageCarousel />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
