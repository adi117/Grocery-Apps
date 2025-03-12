"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useProducts } from "@/features/product-card/context/product-context";
import MetadataComponent from "./metadata-component";
import { useState } from "react";
import plusIcon from "@/public/icons/plus icon.svg"
import minusIcon from "@/public/icons/minus icon.svg"
import favoriteIcon from "@/public/icons/favorite.svg"

const ProductDetails = () => {

  const { selectedProduct, setSelectedProduct } = useProducts();
  const [counter, setCounter] = useState(1);

  const router = useRouter();

  const calculatePrice = (counter: number, price: number) => {
    const totalPrice =price * counter * 1000;
    return Number(totalPrice.toFixed(2));
  }

  if (!selectedProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">No product selected.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen items-center justify-between flex-wrap w-full px-4">
      <div key={selectedProduct?.id} className="bg-white flex flex-col">
        <Image
          src={selectedProduct?.imageUrl || "https://placehold.co/371x336"}
          width={380}
          height={0}
          alt="product image"
          className="w-full max-h-72 object-contain"
        />
        <p className="text-3xl font-bold">{selectedProduct?.name}</p>
        <div className="flex flex-col gap-4 mt-7">
          <p className="text-lg font-semibold">In {selectedProduct?.metadata.increment} grams</p>
          <MetadataComponent metadata={selectedProduct.metadata} />
        </div>
        <div className="flex flex-col gap-4 pt-6">
          <div className="flex justify-between gap-3">
            <div className="flex py-1 px-2 items-center bg-[#F9F8F6] rounded-full justify-between w-full">
              <button
                className="p-3"
                onClick={() => setCounter(counter - 1)}
              >
                <Image
                  src={minusIcon}
                  width={24}
                  height={24}
                  alt="minus quantity"
                />

              </button>
              <p className="p-0 text-lg">{counter} kg</p>
              <button
                className="p-3"
                onClick={() => setCounter(counter + 1)}
              >
                <Image
                  src={plusIcon}
                  width={24}
                  height={24}
                  alt="plus quantity"
                />
              </button>
            </div>
            <button
              className="flex justify-center items-center bg-[#F9F8F6] rounded-full p-4"
            >
              <Image
                src={favoriteIcon}
                width={24}
                height={24}
                alt="plus quantity"
              />
            </button>
          </div>
          <button
            onClick={() => setSelectedProduct(null)}
            className="flex justify-between bg-black text-white text-xl font-medium px-6 py-3 rounded-full w-full"
          >
            <p>To cart</p>
            <p>${calculatePrice(counter, selectedProduct.price)}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
