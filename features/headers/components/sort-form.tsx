import SortButton from "./sort-button";

const SortForm = () => {
    
    const sortingParameter = ["Category", "Price", "Calorie", "Protein", "Carbs"];

    return (
        <form action="" className="flex flex-col gap-1 p-2 w-full justify-start">
            <h2 className="text-lg font-bold">Sort by</h2>
            {sortingParameter.map((parameter) => (
                <SortButton key={parameter} title={parameter}/>
            ))}
        </form>
    )
}

export default SortForm;