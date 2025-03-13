import { cn } from "@/utils/cn";
import { ReactNode } from "react";
import { FC } from "react";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Drawer: FC<DrawerProps> = ({ children, isOpen, onClose }) => {

    return (
        <div className="overflow-y-hidden">
            <div
                className={`fixed inset-0 bg-gray-950 transition-opacity w-full ${isOpen ? "opacity-40 visible z-10" : "opacity-0 invisible z-10"}`}
                onClick={onClose}
            >
            </div>
            <div
                className={cn("absolute left-0 bg-white w-full rounded-t-2xl transition-transform duration-[2000ms]", isOpen ? "translate-y-90 z-10" : "translate-y-full z-10"
                )}
            >
                {children}
            </div>
        </div>

    );
};

export default Drawer;