"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { Product } from "@/types/product";
import { config } from "@/constants/url";

interface ProductContextType {
    products: Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch(`${config.BASE_URL}${config.endpoints.products}`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) throw new Error("useProducts muse within ProductProvider");
    return context;
}