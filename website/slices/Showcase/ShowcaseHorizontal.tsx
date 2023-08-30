import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Section from "@/components/Section";
import Image from "@/components/Image"
import { PrismicNextImage } from "@prismicio/next";
import { ShowcaseSliceLeftShowcaseItem, ShowcaseSliceLeftShowcasePrimary, ShowcaseSliceRightShowcaseItem, ShowcaseSliceRightShowcasePrimary } from "@/prismicio-types";

/**
 * Props for `ShowcaseHorizontal`.
 */
export type ShowcaseHorizontalProps = {
    data: ShowcaseSliceLeftShowcasePrimary | ShowcaseSliceRightShowcasePrimary
    items: ShowcaseSliceLeftShowcaseItem[] | ShowcaseSliceRightShowcaseItem[]
    isLeft: boolean
};
/**
 * Component for "ShowcaseHorizontal" Slices.
 */
const ShowcaseHorizontal = ({ data, items, isLeft }: ShowcaseHorizontalProps): JSX.Element => {
  return (
    <Section>
            <div className="container">
                <div className="-mb-16">
                    <div className="mb-16 md:grid md:grid-cols-2 md:items-center lg:gap-20 xl:gap-40">
                            <div
                                className={`mb-8 bg-n-6 rounded-3xl md:relative md:mb-0 ${
                                    !isLeft ? "" : "md:order-1"
                                }`}
                            >
                                <PrismicNextImage 
                                    className="w-full rounded-3xl"
                                    field={data.image}
                                    width={550}
                                    height={600}
                                />
                                <div
                                    className={`hidden absolute top-5 -right-8 bottom-5 grid-cols-2 w-8 md:grid ${
                                        !isLeft
                                            ? "-right-8"
                                            : "-left-8 rotate-180"
                                    }`}
                                >
                                    <div className="rounded-r-[1.25rem] bg-[#1B1B2E]"></div>
                                    <div className="my-5 rounded-r-[1.25rem] bg-[#1B1B2E]/50"></div>
                                </div>
                            </div>
                            <div
                                className={
                                    !isLeft ? "md:pl-16" : "md:pr-16"
                                }
                            >
                                <h2 className="h2 mb-4 md:mb-8">{data.heading}</h2>
                                <ul className="">
                                    {items.map((item, index) => (
                                        <li
                                            className="py-4 border-b border-n-1/5 md:py-6"
                                            key={index}
                                        >
                                            <div className="flex items-center">
                                                <Image
                                                    src="/images/check.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="Check"
                                                />
                                                <h6 className="body-2 ml-5">
                                                    {item.tagline}
                                                </h6>
                                            </div>
                                            {item.description && <PrismicRichText 
                                                field={item.description}
                                                components={{
                                                    paragraph: ({children}) => (
                                                    <p className="body-2 mt-3 text-n-4">
                                                        {children}
                                                    </p>)
                                                }}
                                            />
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </Section>
  );
};

export default ShowcaseHorizontal;
