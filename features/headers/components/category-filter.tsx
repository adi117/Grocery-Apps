import FilterButton from "./category-button";

const CategoryFilter = () => {

    const categories = ["All", "Spicy", "Dressings", "Sweet", "Roots", "Exotic", "Fresh Veggie"];

    return (
        <div className="mb-5 overflow-scroll flex flex-nowrap scrollbar-hide">
            {categories.map((category)=> (
                <FilterButton key={category} title={category}/>
            ))}
        </div>
    );
}

export default CategoryFilter;