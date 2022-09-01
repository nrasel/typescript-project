import React from "react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="p-3 rounded-sm shadow hover:shadow-xl hover:cursor-pointer">
      <div className="relative pb-60">
        <img src="" alt="" className="absolute object-cover w-full h-full" />
      </div>
      <div className="pt-3">
        <h4>{product.name}</h4>
        <p className="text-lg font-semibold">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
