import Section from "@/components/Section";
import Image from "@/components/Image"
import { kBodyStyle } from "@/constants/classNames";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Button from "@/components/Button";

/**
 * Props for `HeroDefault`.
 */
export type HeroProps = {
    data: Content.HeroSliceDefaultPrimary
};

/**
 * Component for "HeroDefault" Slices.
 */
const HeroDefault = ({ data }: HeroProps): JSX.Element => {
  return (
     <Section crosses>
        <div className="container">
            <div className="relative max-w-[43.125rem] mx-auto py-8 md:py-14 xl:py-0">
                <div className="relative z-1 text-center">
                    <h1 className="h1 mb-6">
                        {`${data.heading} `} {/*" "*/}
                        {data.heading_highlight && 
                            <span className="inline-block relative">
                                {data.heading_highlight}
                                <Image
                                    className="absolute top-full left-0 w-full"
                                    src="/images/curve.png"
                                    width={624}
                                    height={28}
                                    alt="Curve"
                                />
                            </span>
                        }
                    </h1>
                    <PrismicRichText
                      field={data.body}
                      components={{
                        paragraph: ({children}) => <p className="body-1 mb-8 text-n-4">{children}</p>
                      }}
                    />
                    <Button white>
                      <PrismicNextLink field={data.button_link} >
                        {data.button_text}
                      </PrismicNextLink>
                    </Button>
                </div>
                <div className="absolute top-1/2 left-1/2 w-[46.5rem] h-[46.5rem] border border-n-2/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-[39.25rem] h-[39.25rem] border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-[30.625rem] h-[30.625rem] border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-[21.5rem] h-[21.5rem] border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-[13.75rem] h-[13.75rem] border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 w-[46.5rem] h-[46.5rem] border border-n-2/5 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60 mix-blend-color-dodge pointer-events-none">
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
        </div>
        <div className="absolute -top-[5.75rem] left-[18.5rem] -z-1 w-[19.8125rem] pointer-events-none lg:-top-15 lg:left-[5.5rem]">
            <Image
                className="w-full"
                src="/images/join/shapes-1.svg"
                width={317}
                height={293}
                alt="Shapes 1"
            />
        </div>
        <div className="absolute right-[15rem] -bottom-[7rem] -z-1 w-[28.1875rem] pointer-events-none lg:right-7 lg:-bottom-[5rem]">
            <Image
                className="w-full"
                src="/images/join/shapes-2.svg"
                width={451}
                height={266}
                alt="Shapes 2"
            />
        </div>
    </Section>
 );
};

export default HeroDefault;
