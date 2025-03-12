"use client";

import ProductCard from "./components/product-card";
import ProductDetails from "./components/product-details";
import { useProducts } from "./context/product-context";

export default function Product() {
    const {selectedProduct} = useProducts();

    return (
        <main className="">
            {selectedProduct ? <ProductDetails /> : <ProductCard />}
        </main>
    )
}