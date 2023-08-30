"use client"
import { PrismicRichText } from "@prismicio/react";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { sequenceBy } from "@/common/util/math";
import Icon from "@/components/Icon";
import { useRef, useState } from "react";
import { FeaturesSliceFeaturesGridItem } from "@/prismicio-types";

/**
 * Props for `FeaturesGridSlice`.
 */
export type FeaturesGridProps = {
    items: FeaturesSliceFeaturesGridItem[]
}

/**
 * Component for "FeaturesGridSlice" Slices.
 */
const FeaturesGridSlice = ({ items }: FeaturesGridProps): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const ref = useRef<any>(null);

    const handleClick = (index: number) => {
        setActiveIndex(index);
        ref.current?.go(index);
    };

    const cardIndexes = sequenceBy(items.length, 6, 1)
    const iconColors = [
        'bg-white', // <- never used
        'bg-sky-500',
        'bg-yellow-500',
        'bg-fuchsia-500',
        'bg-lime-500',
        'bg-orange-500',
        'bg-violet-500'
    ]

    return (
        <div className="container relative z-2">
            <Splide
                className="splide-benefits splide-visible max-w-[16rem] md:max-w-none"
                options={{
                    mediaQuery: "min",
                    pagination: false,
                    arrows: false,
                    gap: "1.5rem",
                    breakpoints: {
                        768: {
                            destroy: true,
                        },
                    },
                }}
                onMoved={(e, newIndex) => setActiveIndex(newIndex)}
                hasTrack={false}
                ref={ref}
            >
                <SplideTrack>
                    {items.map((item, index) => (
                        <SplideSlide key={index}>
                            <div className="flex items-center mb-6">
                                <div className={`${iconColors[cardIndexes[index]]} p-2 rounded-md`}>
                                    <Icon packageName={item.icon_package} iconName={item.icon_name || 'fa0'} size="46px" />
                                </div>
                            </div>
                            <h5 className="h6 mb-4">{item.title}</h5>
                            <PrismicRichText 
                                field={item.description} 
                                components={{
                                    paragraph: ({children}) => <p  className="body-2 text-n-3">{children}</p>
                                }}
                            />
                        </SplideSlide>
                    ))}
                </SplideTrack>
            </Splide>
            <div className="flex mt-12 -mx-2 md:hidden">
                {items.map((item, index) => (
                    <button
                        className="relative w-6 h-6 mx-2"
                        onClick={() => handleClick(index)}
                        key={index}
                    >
                        <span
                            className={`absolute inset-0 bg-conic-gradient rounded-full transition-opacity ${
                                index === activeIndex
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        ></span>
                        <span className="absolute inset-0.25 bg-n-8 rounded-full">
                            <span className="absolute inset-2 bg-n-1 rounded-full"></span>
                        </span>
                    </button>
                ))}
            </div>
        </div>
  );
};

export default FeaturesGridSlice;