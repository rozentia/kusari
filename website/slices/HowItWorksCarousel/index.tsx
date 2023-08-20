"use client"

import Arrows from "@/components/Arrows";
import Button from "@/components/Button";
import Image from "@/components/Image"
import Section from "@/components/Section";
import Tagline from "@/components/Tagline";
import { kBodyStyle } from "@/constants/classNames";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useRef, useState } from "react";

/**
 * Props for `HowItWorksCarousel`.
 */
export type HowItWorksCarouselProps =
  SliceComponentProps<Content.HowItWorksCarouselSlice>;

/**
 * Component for "HowItWorksCarousel" Slices.
 */
const HowItWorksCarousel = ({
  slice,
}: HowItWorksCarouselProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const ref = useRef<any>(null);

  const handleClick = (index: number) => {
      setActiveIndex(index);
      ref.current?.go(index);
  };

  const { items } = slice

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={process.env.NODE_ENV != 'production' ? kBodyStyle : ''}
    >
      <Section className="lg:-mb-16" crosses>
            <div className="container">
                <Splide
                    className="splide-custom"
                    options={{
                        type: "fade",
                        rewind: true,
                        pagination: false,
                    }}
                    hasTrack={false}
                    ref={ref}
                >
                    <SplideTrack>
                        {items.map((item, index) => (
                            <SplideSlide key={index}>
                                <div className="lg:flex lg:flex-row-reverse lg:items-center">
                                    <div className="">
                                        <Tagline className="mb-4 lg:mb-6">
                                            {item.short_text}
                                        </Tagline>
                                        <h2 className="h2 mb-4 lg:mb-6">
                                            {item.title}
                                        </h2>
                                        <PrismicRichText
                                          field={item.long_text}
                                          components={{
                                            paragraph: ({children}) => <p className="body-2 mb-10 text-n-3">{children}</p>
                                          }}
                                        />
                                        {(item.button_link && item.button_label) && <Button>
                                          <PrismicNextLink field={item.button_link} >{item.button_label}</PrismicNextLink>
                                        </Button>}
                                        <Arrows
                                            className="my-10 lg:hidden"
                                            prevClassName="mr-3"
                                            onPrev={() => ref.current?.go("<")}
                                            onNext={() => ref.current?.go(">")}
                                        />
                                    </div>
                                    <div className="relative lg:w-[29.375rem] lg:flex-shrink-0 lg:mr-[7.125rem] xl:w-[34.375rem] xl:mr-40">
                                        <div className="pt-0.25 pl-0.25 overflow-hidden bg-gradient-to-tl from-n-1/0 via-n-1/0 to-n-1/15 rounded-3xl">
                                            <div className="h-[30.5rem] bg-n-7 rounded-[1.4375rem] xl:h-[35.625rem]">
                                                <PrismicNextImage
                                                  field={item.image}
                                                  className="w-full h-full object-contain"
                                                  width={550}
                                                  height={570}
                                                />
                                            </div>
                                        </div>
                                        <div className="absolute -right-6 top-8 bottom-8 w-6 bg-[#1B1B2E] rounded-r-3xl"></div>
                                        <div className="absolute -right-12 top-16 bottom-16 w-6 bg-[#1B1B2E]/50 rounded-r-3xl"></div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                    <Arrows
                        className="hidden justify-center mt-12 lg:flex lg:mt-15 xl:hidden"
                        prevClassName="mr-3"
                        onPrev={() => ref.current?.go("<")}
                        onNext={() => ref.current?.go(">")}
                    />
                    <div className="absolute top-0 -left-[10rem] w-[29.5rem] h-[29.5rem] mix-blend-color-dodge opacity-20 pointer-events-none">
                        <Image
                            className="absolute top-1/2 left-1/2 w-[55.5rem] max-w-[55.5rem] h-[61.5rem] -translate-x-1/2 -translate-y-1/2"
                            src="/images/how-it-works/gradient.png"
                            width={984}
                            height={984}
                            alt="Gradient"
                        />
                    </div>
                    <div className="hidden grid-cols-4 gap-6 mt-20 xl:grid">
                        {items.map((item, index) => (
                            <div
                                className="group cursor-pointer"
                                onClick={() => handleClick(index)}
                                key={index}
                            >
                                <div
                                    className={`h-[0.125rem] mb-10 transition-colors ${
                                        index === activeIndex
                                            ? "bg-color-1"
                                            : "bg-[#D9D9D9]/10 group-hover:bg-[#D9D9D9]/50"
                                    }`}
                                ></div>
                                <div className="tagline mb-1 text-n-3">
                                    0{index + 1}.
                                </div>
                                <h2 className="mb-[0.625rem] text-2xl leading-8">
                                    {item.title}
                                </h2>
                                <PrismicRichText 
                                  field={item.long_text}
                                  components={{
                                    paragraph: ({children}) =>  
                                      <p
                                          className={`body-2 text-n-3 line-clamp-3 transition-opacity ${
                                          index !== activeIndex && "opacity-0"
                                      }`}
                                      >
                                          {children}
                                      </p>
                                  }}
                                />
                               
                            </div>
                        ))}
                    </div>
                </Splide>
            </div>
        </Section>
    </section>
  );
};

export default HowItWorksCarousel;
