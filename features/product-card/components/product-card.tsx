"use client";

import Image from "next/image";
import { useProducts } from "../context/product-context";
import plusButtonIcon from "@/public/icons/add product.svg"
import { useEffect, useState } from "react";

const ProductCard = () => {

  const { products, setSelectedProduct, selectedCategory, searchQuery, filteredProducts, setFilteredProducts } = useProducts();

  useEffect (() => {
    const filteredProducts = (
      selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory)
    )
  
    const searchedProducts = (
      searchQuery === ""
      ? filteredProducts
      : filteredProducts.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    setFilteredProducts(searchedProducts);
  }, [searchQuery, selectedCategory, products, setFilteredProducts])

  

  const calculatePrice = (price: number) => {
    const totalPrice =price * 1000;
    return Number(totalPrice.toFixed(2));
  }

  if (filteredProducts.length < 1){
    return (
      <div className="flex justify-center items-center">
        No product matched!
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 min-h-screen items-center justify-between flex-wrap w-full gap-2 px-4">
      {filteredProducts.map((product) => (
        <div
        key={product.id}
        className="bg-[#F9F8F6] items-center justify-end flex flex-col w-full h-full px-3 pb-4 rounded-xl pt-3"
        onClick={() => setSelectedProduct(product)}
        >
          <Image
            src={product.imageUrl}
            width={150}
            height={0}
            alt="product-image"
            className="max-h-28 w-full object-contain"
          />
          <div className="flex flex-col text-black w-full h-full">
            <div>
              <p className="text-[22px] font-semibold">${calculatePrice (product.price)}</p>
              <p >{product.name}</p>
            </div>
            <div className="flex justify-between w-full items-center">
              <p className="opacity-30">{product.weight}</p>
              <div className="p-2 border-[1px] rounded-full">
                <Image
                  src={plusButtonIcon}
                  width={24}
                  height={24}
                  alt="add product to cart button"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
