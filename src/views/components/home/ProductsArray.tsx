import React from "react";
import ProductCard from "../common/ProductCard";

const ProductsArray = ({ products }: { products: any[] }) => {
  return (
    <div className="grid grid-cols-2 text-gray-800 md:grid-cols-4 lg:grid-cols-5">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductsArray;
