"use client"

import Section from "@/components/Section";
import Image from "@/components/Image"
import { isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Heading from "@/components/Heading";
import { useState } from "react";
import { first } from "lodash";
import ScrollIntoView from "react-scroll-into-view";
import Tagline from "@/components/Tagline";
import { PrismicRichText } from "@prismicio/react";
import { ContentBlockDocument, ContentSectionDocument, StructuredContentCollectionSliceDefaultPrimary } from "@/prismicio-types";

/**
 * Props for `StructuredContent`.
 */
export type StructuredContentProps = {
    data: StructuredContentCollectionSliceDefaultPrimary
    sections: ContentSectionDocument<string>[]
    content: ContentBlockDocument<string>[]
};

/**
 * Component for "StructuredContent" Slices.
 */
const StructuredContent = ({data,  sections, content }: StructuredContentProps): JSX.Element => {
    const [openNavigation, setOpenNavigation] = useState<boolean>(false);
    const [openGroupId, setOpenGroudId] = useState<string | null>("g0");

    const getBlockByUID = (uid: string): ContentBlockDocument<string> | undefined => 
        first(content.filter((block) => block.uid == uid)) 

    return (
        <Section>
            <div className="container md:py-10 lg:pt-16 xl:pt-20">
                <div id="heading">
                    <Heading
                        textAlignClassName="text-center"
                        titleLarge={data.collection_heading}
                        textLarge={data.collection_subheading}
                    />
                </div>
                {
                data.show_search && 
                <div className="relative max-w-[75rem] mb-15 mx-auto">
                    <Image
                        className="absolute top-6 left-6 w-6 opacity-30 pointer-events-none"
                        src="/images/icons/search-md.svg"
                        width={24}
                        height={24}
                        alt="Search"
                    />
                    <input
                        className="w-full h-[4.5rem] pl-[3.5rem] pr-10 bg-transparent border border-n-6 rounded-[2.25rem] outline-none transition-colors focus:border-n-5"
                        type="text"
                        placeholder="Search topic"
                    />
                </div>
                }
                <div className="lg:flex">
                    <aside className="mb-16 lg:flex-shrink-0 lg:w-[19rem] lg:mr-10 xl:mr-20 sticky top-0">
                        <div
                            className="flex items-center justify-between w-full h-16 px-6 bg-n-7 rounded-xl cursor-pointer lg:hidden"
                            onClick={() => setOpenNavigation(!openNavigation)}
                        >
                            {/* <div className="h6 text-n-1/50">
                                Getting started¥
                            </div> */}
                            <Image
                                src="/images/icons/chevron-down.svg"
                                width={24}
                                height={24}
                                alt="Arrow"
                            />
                        </div>
                        <div className={`pt-4 ${openNavigation ? "block" : "hidden"} lg:block lg:pt-0`} >
                            {sections.map((section) => (
                                <div className="mb-5" key={section.uid}>
                                    <button
                                        className="flex items-start py-3.5"
                                        onClick={() => setOpenGroudId(section.uid)}
                                    >
                                        <div
                                            className={`relative w-6 h-6 my-0.5 mr-5 p-0.5 ${
                                                section.uid === openGroupId
                                                    ? "bg-n-7 border-[0.125rem] border-n-1/15 rounded-md"
                                                    : ""
                                            }`}
                                        >
                                            <Image
                                                className={`relative z-1 w-full transition-transform ${
                                                    section.uid === openGroupId
                                                        ? "rotate-90"
                                                        : ""
                                                }`}
                                                src="/images/icons/chevron-right.svg"
                                                width={16}
                                                height={16}
                                                alt="Arrow"
                                            />
                                        </div>
                                        <div className="text-xl">
                                            {section.data.section_title}
                                        </div>
                                    </button>
                                    <div
                                        className={`grid grid-rows-[0fr] transition-all ${
                                            section.uid === openGroupId
                                                ? "grid-rows-[1fr]"
                                                : ""
                                        }`}
                                    >
                                        <ul className="overflow-hidden">
                                            {section.data.content.map(({block}) => {
                                                if (!(isFilled.contentRelationship(block) && block.uid)) return null
                                                const blockDocument = getBlockByUID(block.uid)
                                                if (!blockDocument) return null

                                                return (
                                                    <li key={block.uid}>
                                                        <ScrollIntoView
                                                            className="body-2 block py-3 pl-11 text-n-3 transition-colors hover:text-color-1 cursor-pointer"
                                                            selector={`#anchor-${section.uid}-${block.uid}`}
                                                        >
                                                            <span>
                                                                {blockDocument.data.heading}
                                                            </span>
                                                        </ScrollIntoView>
                                                    </li>
                                                )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>
                    <main className="flex-1">
                        {
                            sections.map((section, index)  => (
                                <>
                                    <h3 
                                        key={index} 
                                        className="h3 mb-16 pb-8 border-b border-n-1/15"
                                    >
                                        {section.data.section_title}
                                    </h3>
                                    {
                                        section.data.content.map(({block}, index) => {
                                            if (!(isFilled.contentRelationship(block) && block.uid)) return null
                                            const blockDocument = getBlockByUID(block.uid)
                                            if (!blockDocument) return null
                                            const {data} = blockDocument

                                            return (
                                                <div key={block.uid} className="relative mb-16">
                                                    <div className="flex items-start mb-10 pt-10 pb-2 bg-n-8/90 sticky top-[4.75rem] lg:top-[5.25rem]">
                                                        <h4 className="h4 mr-auto">{data.heading}</h4>
                                                        <Tagline className="ml-4 mt-4">
                                                            {index.toString().padStart(2, '0')}
                                                        </Tagline>
                                                    </div>
                                                    {
                                                        isFilled.image(data.main_image) &&
                                                        <div className="mb-10">
                                                            <PrismicNextImage 
                                                                field={data.main_image}
                                                                className="w-full h-full object-cover rounded-3xl"
                                                                width={896}
                                                                height={600}
                                                            />
                                                        </div>
                                                    }
                                                    {
                                                        isFilled.richText(data.body) &&
                                                        <div className="body-2 text-n-2">
                                                            <PrismicRichText 
                                                                field={data.body}
                                                                components={{
                                                                    heading5: ({children}) => <h5 className="h5 mr-auto pt-3 pb-2">{children}</h5>,
                                                                    heading6: ({children}) => <h6 className="h6 mr-auto pt-3 pb-2">{children}</h6>,
                                                                    paragraph: ({children}) => <p className="mb-6">{children}</p>,
                                                                    list: ({children}) => <ul className="list-disc list-inside mb-6">{children}</ul>,
                                                                    listItem: ({children}) => <li className="mb-2">{children}</li>,
                                                                    oList: ({children}) => <ol className="list-decimal list-inside mb-6">{children}</ol>,
                                                                    oListItem: ({children}) => <li className="mb-2">{children}</li>
                                                                }}
                                                            />
                                                            <div>
                                                                <ScrollIntoView
                                                                    className="tagline text-right block py-3 pl-11 text-n-3 transition-colors hover:text-color-1 cursor-pointer"
                                                                    selector="#heading"
                                                                >
                                                                    <span>Back to top</span>
                                                                </ScrollIntoView>
                                                            </div>  
                                                        </div>
                                                    }
                                                    <div
                                                        id={`anchor-${section.uid}-${block.uid}`}
                                                        className="absolute -top-32 left-0 w-full h-0.25"
                                                    ></div>
                                                </div>
                                            )
                                        })
                                    }
                                </>
                            ))
                        }
                    </main>
                </div>
            </div>
        </Section>
    );
};

export default StructuredContent;
