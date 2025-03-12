"use client";

import { useState } from "react";
import { useProducts } from "@/features/product-card/context/product-context";
import { FC } from "react";
import { cn } from "@/utils/cn";

interface FilterButtonProps {
    title: string;
}

const FilterButton: FC<FilterButtonProps> = ({ title }) => {

    const { selectedCategory, setSelectedCategory } = useProducts();

    const [] = useState<boolean>(false);

    return (
        <button
            className={cn("text-lg px-4 py-3 whitespace-nowrap", selectedCategory === title ? "shadow-[inset_0_-1px_0_#000000]" : "")}
            onClick={() => {
                setSelectedCategory(title)
            }}
        >
            {title}
        </button>
    );
}

export default FilterButton;