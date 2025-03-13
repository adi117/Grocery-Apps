"use client";

import { useState } from "react";
import { useProducts } from "@/features/product-card/context/product-context";
import { FC } from "react";
import { cn } from "@/utils/cn";

interface SortButtonProps {
    title: string;
}

const SortButton: FC<SortButtonProps> = ({ title }) => {

    return (
        <option
            className={cn("text-lg whitespace-nowrap")}
        >
            {title}
        </option>
    );
}

export default SortButton;