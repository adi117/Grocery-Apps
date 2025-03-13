"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { Product } from "@/types/product";
import { config } from "@/constants/url";

interface ProductContextType {
    products: Product[];
    selectedProduct: Product | null;
    setSelectedProduct: (product: Product | null) => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    searchQuery: string;
    setQuery: (searchQuery: string) => void;
    filteredProducts: Product[];
    setFilteredProducts: (products: Product[]) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [searchQuery, setQuery] = useState<string>("");


    useEffect(() => {
        fetch(`${config.BASE_URL}${config.endpoints.products}`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, []);

    return (
        <ProductContext.Provider value={{ products, selectedProduct, setSelectedProduct, selectedCategory, setSelectedCategory, searchQuery, setQuery, filteredProducts, setFilteredProducts }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) throw new Error("useProducts muse within ProductProvider");
    return context;
}