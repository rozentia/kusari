import Heading from "@/components/Heading";
import Section from "@/components/Section";
import Image from "@/components/Image"
import { kBodyStyle } from "@/constants/classNames";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Tagline from "@/components/Tagline";
import Button from "@/components/Button";
import dayjs from "dayjs";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { RoadMapSliceDefaultItem, RoadMapSliceDefaultPrimary } from "@/prismicio-types";

/**
 * Props for `RoadMapDefault`.
 */
export type RoadMapDefaultProps = {
    items: RoadMapSliceDefaultItem[]
    data: RoadMapSliceDefaultPrimary
};

/**
 * Component for "RoadMapDefault" Slices.
 */
const RoadMapDefault = ({ items, data }: RoadMapDefaultProps): JSX.Element => {
  return (
      <Section className="overflow-hidden">
        <div className="container md:pb-10">
            <Heading tag={data.tagline || undefined} title={data.heading || undefined} />
            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {items.map((item, index) => (
                    <div
                        className={`md:flex ${
                            index % 2 !== 0 ? "md:translate-y-[7rem]" : ""
                        } p-0.25 rounded-[2.5rem] ${
                            item.colorful ? "bg-conic-gradient" : "bg-n-6"
                        }`}
                        key={index}
                    >
                        <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                            <div className="absolute top-0 left-0 max-w-full">
                                <Image
                                    className="w-full"
                                    src="/images/grid.png"
                                    width={550}
                                    height={550}
                                    alt="Grid"
                                />
                            </div>
                            <div className="relative z-1">
                                <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                    <Tagline>{dayjs(item.date).format('MMM YYYY')}</Tagline>
                                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                                        <Image
                                            className="mr-2.5"
                                            src={
                                                item.status === "completed"
                                                    ? "/images/icons/check.svg"
                                                    : "/images/icons/loading-01.svg"
                                            }
                                            width={16}
                                            height={16}
                                            alt={
                                                item.status === "completed"
                                                    ? "Done"
                                                    : "In progress"
                                            }
                                        />
                                        <div className="tagline">
                                            {item.status === "completed"
                                                ? "Done"
                                                : "In progress"}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-8 md:mb-20">
                                    <div className="-my-10 -mx-15">
                                        <PrismicNextImage
                                            className="w-full"
                                            field={item.image}
                                            width={628}
                                            height={426}
                                        />
                                    </div>
                                </div>
                                <h4 className="h4 mb-4">{item.title}</h4>
                                <PrismicRichText 
                                    field={item.text} 
                                    components={{
                                        paragraph: ({children}) => <p className="body-2 text-n-4">{children}</p>
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
                <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                        <Image
                            className="w-full"
                            src="/images/gradient.png"
                            width={942}
                            height={942}
                            alt="Gradient"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                <Button>
                    <PrismicNextLink field={data.button_link}>
                        {data.button_label}
                    </PrismicNextLink>
                </Button>
            </div>
        </div>
    </Section>
  );
};

export default RoadMapDefault;
