import { Link } from "react-router-dom";
import Container from "./Container";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      className="bg-black text-white h-full"
      id="footer"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center  gap-14 my-10 mt-40 text-sm">
          <div className="">
            <div className="">
              <p className="text-xl font-medium mb-5 pt-5 text-white ">
                Kedi Pharma
              </p>
              <div className="">
                <a href="#home" className="">
                  <img
                    src="/insurance_logo.png"
                    alt=""
                    width={50}
                    height={50}
                    className="w-[30px] h-[30px] rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-xl font-medium mb-5 pt-5 text-orange-600 ">
              Quick Link
            </p>
            <ul className="flex flex-col gap-1">
              <li className="cursor-pointer py-1">
                <a href="#home" className="">
                  Home
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#benefits" className="">
                  Benefits
                </a>
              </li>
              <li className="cursor-pointer py-1">
                <a href="#about" className="">
                  About Us
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="#products" className="">
                  Products
                </a>
              </li>
              <li className="cursor-pointer py-1">
                <a href="#contact" className="">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-xl font-medium mb-5 text-orange-600 ">
              Contact Us
            </p>
            <div className="">
              <div className="flex  items-center ">
                <div className="flex items-center justify-center gap-3 ">
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
                    <a
                      href="https://wa.link/k5g70d"
                      target="_blank"
                      className=""
                    >
                      <span className="">
                        <FaWhatsapp size={20} color="green" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-3">
                <a
                  href="tel:+2347055577074"
                  className="flex items-center gap-3"
                >
                  <FaPhone size={15} />
                  <span className="">+2347055577074</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <hr className="" />
          <p className="py-5 text-xs text-center  ">
            Copyright &copy;Kedi Pharma {new Date().getFullYear()} <br />
            <span className="">All rights reserved.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
