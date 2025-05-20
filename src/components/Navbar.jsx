import { useContext } from "react";
import Container from "./Container";
import { GiHamburgerMenu } from "react-icons/gi";
const liStyles = "hover:cursor-pointer hover:text-orange-500";
import { MdClose } from "react-icons/md";
import Button from "./Button";
import { AppContext } from "../context/AppContext";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const mobileStyle = "cursor-pointer hover:text-green-600 w-[100px]";
const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);
  return (
    <header className=" fixed py-2 h-auto w-full border-b border-gray-400 bg-gray-200 z-40">
      <Container>
        <div className="flex items-center hover:cursor-pointer">
          {/* logo */}
          <div className="flex-1 flex items-center gap-2 ">
            <a href="#home" className="">
              <img
                src="/insurance_logo.png"
                alt=""
                width={30}
                height={30}
                className="w-[30px] h-[30px] rounded-full"
              />

              <span className="text-xs text-black font-bold hidden sm:block ">M'Whales Enterprices Resources</span>
            </a>
          </div>
          {/* nav links */}
          <nav className=" flex justify-between items-center gap-3 flex-[2] relative">
            <div className="flex-[3] hidden md:block ">
              <ul className="flex justify-center items-center gap-5 text-gray-200">
                <li className={liStyles}>
                  <a href="#home" className="">
                    Home
                  </a>
                </li>
                <li className={liStyles}>
                  <a href="#about" className="">
                    About 
                  </a>
                </li>
                <li className={liStyles}>
                  <a href="#benefits" className="">
                    Benefits
                  </a>
                </li>
                <li className={liStyles}>
                  <a href="#products" className="">
                    Products
                  </a>
                </li>
                <li className={liStyles}>
                  <a href="#footer" className="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 flex  items-center gap-4 justify-end ">
              <Button>
                <a href="https://wa.link/k5g70d" className="">
                  Contact Us
                </a>
              </Button>

              <div
                onClick={() => setIsOpen((prev) => !prev)}
                className="md:hidden z-40 cursor-pointer"
              >
                {isOpen ? (
                  <MdClose color="black" size={30} />
                ) : (
                  <GiHamburgerMenu size={20} color="black" />
                )}
              </div>
            </div>
          </nav>
          {/* Mobile nav */}
          <nav
            className={`${
              isOpen ? "right-0" : "right-[-100%]"
            } md:hidden absolute  top-0 h-screen  w-[70%] bg-white transition-all duration-700 ease-out z-30`}
          >
            <ul className="text-black mt-20 pt-10 flex flex-col gap-6 items-center font-semibold  ">
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <a href="#home" className="">
                  Home
                </a>
              </li>
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <a href="#about" className="">
                  About 
                </a>
              </li>
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <a href="#benefits" className="">
                  Benefits
                </a>
              </li>

              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <a href="#products" className="">
                  Products
                </a>
              </li>

              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <a href="#footer" className="">
                  Contact
                </a>
              </li>
            </ul>
            {/* social links */}
            <div className="flex items-center justify-center gap-5 pt-10 ">
              <div className="">
                <a
                  href="https://www.facebook.com/share/1A8YHCQtsR/"
                  target="_blank"
                  className=""
                >
                  <span className="">
                    <FaFacebookF size={20} color="blue" />
                  </span>
                </a>
              </div>
              <div className="">
                <a
                  href="https://www.instagram.com/kitaajanwachuku?igsh=MWJ6bGlxMW45OHFrNQ=="
                  target="_blank"
                  className=""
                >
                  <span className="">
                    <FaInstagram size={20} color="red" />
                  </span>
                </a>
              </div>
              <div className="">
                <a href="https://wa.link/nylble" target="_blank" className="">
                  <span className="">
                    <FaWhatsapp size={20} color="green" />
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
