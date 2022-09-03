import React from "react";

const ProductCard = ({
  product,
  onclick,
}: {
  product: IProduct;
  onclick: (id: string | undefined) => void;
}) => {
  return (
    <div
      onClick={() => onclick(product._id)}
      className="p-3 rounded-sm shadow hover:shadow-xl hover:cursor-pointer"
    >
      <div className="relative pb-60">
        <img
          src={process.env.REACT_APP_IMAGE_BASE_URL + product.image}
          alt=""
          className="absolute object-cover w-full h-full"
        />
      </div>
      <div className="pt-3">
        <h4>hi</h4>
        <p className="text-lg font-semibold">hello</p>
      </div>
    </div>
  );
};

export default ProductCard;
