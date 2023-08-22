"use client"

import Section from "@/components/Section";
import Image from "@/components/Image"
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Arrows from "@/components/Arrows";

/**
 * Props for `TestimonialsDefault`.
 */
export type TestimonialsDefaultProps = {
 data: Content.TestimonialsSliceDefaultPrimary
 testimonials: Content.TestimonialDocument<string>[]
};

/**
 * Component for "TestimonialsDefault" Slices.
 */
const TestimonialsDefault = ({ data, testimonials }: TestimonialsDefaultProps): JSX.Element => {
  return (
    <Section className="overflow-hidden">
        <div className="container relative z-2">
            <Heading
                tag={data.tag_line || undefined}
                title={data.heading || undefined}
            />
            <Splide
                className="splide-custom splide-visible"
                options={{
                    mediaQuery: "min",
                    gap: "1.5rem",
                    breakpoints: {
                        1024: {
                            autoWidth: true,
                        },
                    },
                    rewind: true,
                    pagination: false,
                }}
                hasTrack={false}
            >
                <SplideTrack>
                    {testimonials.map((item) => (
                        <SplideSlide key={item.id}>
                            <div className="relative flex h-full p-4 rounded-t-xl overflow-hidden lg:w-[46.125rem]">
                                <div className="absolute top-0 left-0 right-0 bottom-[3.25rem] border border-n-4/50 rounded-3xl"></div>
                                <div className="absolute inset-px rounded-t-[1.4375rem] overflow-hidden">
                                    <div className="absolute -inset-0.25">
                                        {}
                                        {/* <Image
                                            className="w-full h-full object-cover"
                                            src={item.imageUrl}
                                            width={739}
                                            height={472}
                                            alt={item.name}
                                        /> */}
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-n-8/50 to-n-8/0"></div>
                                <div className="hidden relative z-1 md:flex flex-col flex-1 pt-12 px-4 pb-16">
                                    <div className="w-[12.75rem] h-10 mb-auto">
                                        {/* <Image
                                            className="w-full h-full object-contain"
                                            src={item.logoUrl}
                                            width={204}
                                            height={40}
                                            alt={item.name}
                                        /> */}
                                    </div>
                                    <div className="h5">{item.data.name}</div>
                                    <div className="h5 text-n-4">{item.data.job_title}</div>
                                </div>
                                <div className="relative flex z-1 bg-conic-gradient p-0.25 rounded-2xl md:ml-auto">
                                    <div className="flex flex-col items-start p-8 bg-n-8 rounded-[0.9375rem] md:w-[21.75rem]">
                                        {isFilled.richText(item.data.quote) && <PrismicRichText 
                                            field={item.data.quote}
                                            components={{
                                                paragraph: ({children}) => <p className="quote mb-8">{children}</p>
                                            }}
                                        /> }
                                        <Button className="mt-auto">
                                            Visit link
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </SplideTrack>
                <Arrows
                    className="justify-center mt-12 md:mt-15 xl:mt-20"
                    prevClassName="mr-8"
                />
            </Splide>
        </div>
    </Section>
  );
};

export default TestimonialsDefault;
