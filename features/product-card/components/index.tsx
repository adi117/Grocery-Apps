"use client";

import Image from "next/image";
import { useProducts } from "../context/product-context";

const ProductCard = () => {

  const {products} = useProducts();

  return (
    <div className="grid grid-cols-2 min-h-screen items-center justify-between flex-wrap">
      {products.map((product) => (
        <div key={product.id} className="bg-white">
          <Image
          src={product.imageUrl}
          width={145}
          height={113}
          alt="product-image"
          />
          <div className="flex flex-col text-black">
            <div>
              <p className="text-[22px] font-semibold">${product.price}</p>
              <p >{product.name}</p>
            </div>
            <div className="flex justify-between">
              <p className="opacity-30">{product.weight}</p>
              <p>+</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
