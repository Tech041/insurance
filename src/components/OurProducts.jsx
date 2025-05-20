import { ProductData } from "../data/ProductData";
import Container from "./Container";
import ProductList from "./ProductList";

const OurProducts = () => {
  return (
    <section className="mt-10" id="products">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ProductData.map((item) => (
            <ProductList key={item.id} id={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurProducts;
