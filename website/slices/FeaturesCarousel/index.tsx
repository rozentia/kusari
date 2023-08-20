"use client"

import Arrows from "@/components/Arrows";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Notification from "@/components/Notification"
import { kBodyStyle } from "@/constants/classNames";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useRef } from "react";
import Icon from "@/components/Icon";

/**
 * Props for `FeaturesCarousel`.
 */
export type FeaturesCarouselProps =
  SliceComponentProps<Content.FeaturesCarouselSlice>;

/**
 * Component for "FeaturesCarousel" Slices.
 */
const FeaturesCarousel = ({ slice }: FeaturesCarouselProps): JSX.Element => {
  const ref = useRef<any>(null);
  const { items } = slice
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={process.env.NODE_ENV != 'production' ? kBodyStyle : ''}
    >
      <Section
            className="py-10 md:pb-20 lg:pt-16 lg:pb-32 xl:pb-40 overflow-hidden"
            customPaddings
        >
            <div className="container relative z-2">
                <Splide
                    className="splide-custom splide-visible"
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
                                <div className="lg:flex" key={index}>
                                    <div className="lg:flex lg:flex-col lg:items-start lg:max-w-[18.75rem] lg:mr-auto">
                                        <h2 className="h2 mb-6">{item.title}</h2>
                                        <PrismicRichText
                                          field={item.text}
                                          components={{
                                            paragraph: ({children}) => <p className="body-2 mb-10 text-n-3">{children}</p>
                                          }}
                                        />
                                        {item.button_link &&
                                        <Button>
                                          <PrismicNextLink field={item.button_link} >
                                            {item.button_label || "Explore more"}
                                          </PrismicNextLink>
                                        </Button>}
                                    </div>
                                    <Arrows
                                        className="my-10 lg:hidden"
                                        prevClassName="mr-3"
                                        onPrev={() => ref.current?.go("<")}
                                        onNext={() => ref.current?.go(">")}
                                    />
                                    <div className="relative h-[27.5rem] border border-n-1/20 rounded-3xl md:rounded-[2.5rem] lg:flex-1 lg:max-w-[34.625rem] lg:h-[34.5rem] lg:ml-24 xl:h-[36rem]">
                                        <div className="absolute top-[8.5rem] -left-[2rem] w-[21rem] md:w-[25.25rem] md:top-[6.4rem] md:-left-[4.5rem] lg:top-[12rem] lg:-left-[3rem] xl:top-[7.625rem] xl:-left-[4.5rem] xl:w-[32.75rem]">
                                            <PrismicNextImage
                                              field={item.image}
                                              className="w-full"
                                              width={512}
                                              height={512}
                                            />
                                        </div>
                                        {item.notification_text && <Notification
                                            className="absolute left-4 right-4 bottom-4 bg-n-8/95 md:left-8 md:right-8 md:bottom-8"
                                            title={item.notification_text}
                                        />}
                                        <div className="absolute top-6 right-6 flex items-center justify-center w-15 h-15 bg-n-1 rounded-full xl:top-8 xl:right-8">
                                            <Icon packageName={item.icon_package} iconName={item.icon_name || "fa0"} size="32px" color="black" />
                                        </div>
                                        <div className="hidden absolute top-0 left-full ml-5 w-full h-full bg-n-8/50 border border-n-1/10 rounded-[2.5rem] md:block"></div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                    <Arrows
                        className="hidden -mt-12 lg:flex"
                        prevClassName="mr-3"
                        onPrev={() => ref.current?.go("<")}
                        onNext={() => ref.current?.go(">")}
                    />
                </Splide>
            </div>
        </Section>
    </section>
  );
};

export default FeaturesCarousel;
