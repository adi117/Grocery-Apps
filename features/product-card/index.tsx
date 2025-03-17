"use client";

import ProductCard from "./components/product-card";
import ProductDetails from "./components/product-details";
import { useProducts } from "./context/product-context";
import Drawer from "../drawer/component/drawer";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

export default function Product() {
    const { selectedProduct } = useProducts();
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        if (selectedProduct) {
            setDrawerOpen(true);
        }
    }, [selectedProduct]);

    return (
        <main className="relative min-h-screen">
            <div
            className={cn("absolute w-full", isDrawerOpen && "overflow-hidden")}>
                <ProductCard />
            </div>
            {selectedProduct
                && <div
                    onClick={() => setDrawerOpen(true)}
                >
                    <Drawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
                        <ProductDetails />
                    </Drawer>
                </div>
            }
        </main>
    )
}