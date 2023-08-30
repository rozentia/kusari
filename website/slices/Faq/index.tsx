"use client"

import { useState } from "react";
import { kBodyStyle } from "@/constants/classNames";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import { kContactEmail } from "@/constants/config";
import { FaqSlice } from "@/prismicio-types";

/**
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<FaqSlice>;

/**
 * Component for "Faq" Slices.
 */
const Faq = ({ slice }: FaqProps): JSX.Element => {
  const faq = slice.items.map((item, index) => Object.assign(item, {id: index.toString()}))
  const [activeId, setActiveId] = useState<string | null>(faq[0].id);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={process.env.NODE_ENV != 'production' ? kBodyStyle : ''}
    >
      <Section>
            <div className="container lg:flex">
                <Heading
                    className="lg:min-w-[22.75rem] lg:mr-12 lg:pt-8 xl:min-w-[32.75rem]"
                    textAlignClassName="md:text-center lg:text-left"
                    title={slice.primary.heading || "Frequently asked questions"}
                    text={<PrismicRichText 
                      field={slice.primary.text} 
                      components={{
                        paragraph: ({children}) => <p>{children}</p>,
                        hyperlink: ({children}) => <span className="text-n-1 hover:text-color-2">{children}</span>
                      }}
                    />}
                />
                <div className="-mt-8 lg:mt-0">
                    {faq.map((item, index) => (
                        <div
                            className="py-8 border-b border-n-1/5"
                            key={item.id}
                        >
                            <div
                                className="flex items-start justify-between cursor-pointer"
                                onClick={() =>
                                    setActiveId(
                                        activeId === item.id ? null : item.id
                                    )
                                }
                            >
                                  <PrismicRichText
                                    field={item.question} 
                                    components={{
                                      paragraph: ({children}) => <div className="text-[1.25rem] leading-8">{children}</div>
                                    }}
                                  />
                                <div className="relative w-6 h-6 mt-1 ml-10">
                                    <div className="absolute top-[0.6875rem] left-1 w-4 h-0.5 bg-n-1 rounded-sm"></div>
                                    <div
                                        className={`absolute top-[0.6875rem] left-1 w-4 h-0.5 bg-n-1 rounded-sm transition-transform ${
                                            item.id === activeId
                                                ? ""
                                                : "rotate-90"
                                        }`}
                                    ></div>
                                </div>
                            </div>
                            <div
                                className={`grid grid-rows-[0fr] transition-all ${
                                    item.id === activeId
                                        ? "grid-rows-[1fr]"
                                        : ""
                                }`}
                            >
                                <div className="body-2 text-n-3 overflow-hidden">
                                    <div className="pt-6">
                                    <PrismicRichText
                                      field={item.answer}
                                      components={{
                                        paragraph: ({children}) => <p className="body-2 text-n-3 ">{children}</p>
                                      }}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    </section>
  );
};

export default Faq;
