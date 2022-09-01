import React, { useEffect, useState } from "react";
import ProductService from "services/Product.service";
import ProductsArray from "views/components/home/ProductsArray";
import Dslider from "../../components/custom/Dslider";

const Home = () => {
  const [products, setProducts] = useState<[] | any[]>([]);
  useEffect(() => {
    ProductService.getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main>
      <div className="py-20">
        <Dslider />
        <div>
          <ProductsArray products={products} />
        </div>
      </div>
    </main>
  );
};

export default Home;
