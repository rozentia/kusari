import Section from "@/components/Section";
import Image from "@/components/Image"
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Generating from "@/components/Generating";

/**
 * Props for `HeroVertical`.
 */
export type HeroProps = {
    data: Content.HeroSliceVerticalPrimary
};

/**
 * Component for "HeroVertical" Slices.
 */
const HeroVertical = ({ data }: HeroProps): JSX.Element => {
  return (
    <Section>
        <div className="container md:pt-10 lg:pt-16 xl:pt-20">
            <Heading
                className="md:mb-15"
                textAlignClassName="text-center"
                titleLarge={data.heading}
                textLarge={data.body}
            >
            {
                isFilled.link(data.button_link) && 
                <Button
                    className="mt-8 md:mt-12"
                    white
                >
                    <PrismicNextLink 
                        field={data.button_link}
                    >
                        {data.button_label}
                    </PrismicNextLink>
                </Button>
            }
            </Heading>
            <div className="relative max-w-5xl mx-auto">
                <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                    <div className="relative bg-n-8 rounded-[0.875rem]">
                        <div className="h-[1.375rem] bg-[#43435C] rounded-t-[0.875rem]"></div>
                        <div className="relative h-[30.625rem] rounded-b-[0.875rem] overflow-hidden">
                            {
                                isFilled.image(data.image)
                                    ? <PrismicNextImage
                                        field={data.image}
                                        className="absolute top-1/2 left-1/2 max-w-none -translate-x-[51%] -translate-y-[58%]"
                                        width={654}
                                        height={932}
                                    />
                                    : <Image
                                        className="absolute top-1/2 left-1/2 max-w-none -translate-x-[51%] -translate-y-[58%]"
                                        src="/images/roadmap/hero.png"
                                        width={654}
                                        height={932}
                                        alt="Hero"
                                    />
                            }
                        </div>
                        {
                            !data.hide_out_of_bounds_image &&
                            <div className="hidden absolute -top-20 left-[14%] md:block pointer-events-none">
                                {
                                    isFilled.image(data.out_of_bounds_image)
                                        ? <PrismicNextImage
                                            field={data.out_of_bounds_image}
                                            className="w-full"
                                            width={76}
                                            height={190}
                                        />
                                        : <Image
                                            className="w-full"
                                            src="/images/roadmap/coins.png"
                                            width={76}
                                            height={190}
                                            alt="Coins"
                                        />
                                }
                            </div>
                        }
                        {data.show_overlay &&
                            <Generating
                                className="absolute left-4 right-4 bottom-5 border border-n-1/10 md:left-1/2 md:right-auto md:bottom-8 md:w-[30.5rem] md:-translate-x-1/2" 
                                text={data.overlay_text || undefined}
                            />
                        }
                    </div>
                </div>
                <div className="relative z-1 h-6 mx-2.5 bg-[#1B1B2E] shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8"></div>
                <div className="relative z-1 h-6 mx-6 bg-[#1B1B2E]/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20"></div>
            </div>
        </div>
    </Section>
 );
};

export default HeroVertical;
