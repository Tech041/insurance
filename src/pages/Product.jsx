import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import { ProductData } from "../data/ProductData";
import Button from "../components/Button";
import { IoIosArrowBack } from "react-icons/io";

const Product = () => {
  const { id } = useParams();
  const product = ProductData[id];
  return (
    <section className="flex justify-center  items-center py-10">
      <Container>
        <div className="">
          <Link to={"/"} className="">
            <IoIosArrowBack size={30} color="green" />
          </Link>
        </div>
        <div className="max-w-4xl mx-auto ">
          {/* Product Name */}
          <h1 className="text-3xl font-bold text-orange-800 text-center py-2">
            {product.name}
          </h1>

          <div className="flex  flex-col md:flex-row  items-center gap-4">
            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={product.imgUrl}
                alt="product_image"
                className="w-full max-w-md rounded-lg "
              />
            </div>

            {/* Product Description */}
            <div className="">
              <div className=" text-gray-600 text-center">
                <p className="text-lg text-green-700">{product.description}</p>
              </div>
              <div className="pt-2 text-center">
                <Button>
                  <a href="https://wa.link/k5g70d" className="">
                    Buy Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Product;
