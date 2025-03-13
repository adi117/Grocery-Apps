"use client";

import { useProducts } from "@/features/product-card/context/product-context";

const SearchFilter = () => {

    const {searchQuery, setQuery} = useProducts();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }
    return (
        <div className="flex w-full bg-white justify-center items-start">
            <input
            type="text"
            className="border-2 border-[#EDECEA] px-3 py-2 rounded-full w-full"
            value={searchQuery}
            placeholder="Search.."
            onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
}

export default SearchFilter;