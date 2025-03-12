import { useProducts } from "@/features/product-card/context/product-context";
import FilterButton from "./filter-button";

const Filter = () => {

    const categories = ["All", "Spicy", "Dressings", "Sweet", "Roots", "Exotic", "Fresh Veggie"];

    return (
        <div className="mb-5 overflow-scroll flex flex-nowrap scrollbar-hide">
            {categories.map((category)=> (
                <FilterButton key={category} title={category}/>
            ))}
        </div>
    );
}

export default Filter;