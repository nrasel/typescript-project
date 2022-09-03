import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../common/ProductCard";

const ProductsArray = ({ products }: { products: IProduct[] }) => {
  const navigate = useNavigate();
  const onClick = (id: string | undefined): void => {
    navigate("/product" + id);
  };
  return (
    <div className="grid grid-cols-2 text-gray-800 md:grid-cols-4 lg:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} onclick={onClick} />
      ))}
    </div>
  );
};

export default ProductsArray;
