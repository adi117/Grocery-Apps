import { Metadata } from "@/types/product";
import { FC } from "react";

interface MetadataProps {
    metadata: Metadata;
}

const MetadataComponent: FC<MetadataProps> = ({metadata}) => {
    return (
        <div className="flex border-[1px] rounded-2xl">
            <div className="flex flex-col items-center w-[85px] py-5">
                <p className="font-semibold text-lg">{metadata.calorie}</p>
                <p className="text-sm font-normal opacity-30">calories</p>
            </div>
            <div className="flex flex-col items-center w-[85px] py-5">
                <p className="font-semibold text-lg">{metadata.proteins}</p>
                <p className="text-sm font-normal opacity-30">proteins</p>
            </div>
            <div className="flex flex-col items-center w-[85px] py-5">
                <p className="font-semibold text-lg">{metadata.fats}</p>
                <p className="text-sm font-normal opacity-30">fats</p>
            </div>
            <div className="flex flex-col items-center w-[85px] py-5">
                <p className="font-semibold text-lg">{metadata.carbs}</p>
                <p className="text-sm font-normal opacity-30">carbs</p>
            </div>
        </div>
    );
}

export default MetadataComponent;