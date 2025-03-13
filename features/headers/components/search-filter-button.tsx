import filterIcon from "@/public/icons/Filter.svg";
import searchIcon from "@/public/icons/Search.svg";
import Image from "next/image";

const SearchFilterButton = () => {
    return (
        <div
        className="flex justify-center items-center gap-4"
        >
          <Image
            src={filterIcon}
            width={24}
            height={24}
            alt="filter-icon"
          />
          <Image
            src={searchIcon}
            width={24}
            height={24}
            alt="filter-icon"
          />
        </div>
    );
}

export default SearchFilterButton;