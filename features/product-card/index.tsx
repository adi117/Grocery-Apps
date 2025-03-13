"use client";

import ProductCard from "./components/product-card";
import ProductDetails from "./components/product-details";
import { useProducts } from "./context/product-context";
import Drawer from "../drawer/component/drawer";
import { useEffect, useState } from "react";

export default function Product() {
    const { selectedProduct } = useProducts();
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        if (selectedProduct) {
            setDrawerOpen(true);
        }
    }, [selectedProduct]);

    return (
        <main className="">
            {selectedProduct
                ? <div
                onClick={() => setDrawerOpen(true)}
            >
                <Drawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
                    <ProductDetails />
                </Drawer>
            </div>
                : <ProductCard/>
            }
        </main>
    )
}