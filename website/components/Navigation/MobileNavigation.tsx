"use client"

import { useEffect, useState } from "react";
import Button from "../Button"
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const MobileNavigation = () => {
    const [openNavigation, setOpenNavigation] = useState<boolean>(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    useEffect(() => {
        enablePageScroll();
        setOpenNavigation(false);
    }, []);

    return (
    <Button
        className="ml-auto lg:hidden"
        onClick={toggleNavigation}
        px="px-3"
    >
        <svg
            className="overflow-visible"
            width="20"
            height="12"
            viewBox="0 0 20 12"
        >
            <rect
                className="transition-all origin-center"
                y={openNavigation ? "5" : "0"}
                width="20"
                height="2"
                rx="1"
                fill="white"
                transform={`rotate(${openNavigation ? "45" : "0"})`}
            />
            <rect
                className="transition-all origin-center"
                y={openNavigation ? "5" : "10"}
                width="20"
                height="2"
                rx="1"
                fill="white"
                transform={`rotate(${
                    openNavigation ? "-45" : "0"
                })`}
            />
        </svg>
    </Button>
    )
}

export default MobileNavigation
