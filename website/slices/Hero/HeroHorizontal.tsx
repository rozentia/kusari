import Section from "@/components/Section";
import Image from "@/components/Image"
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Heading from "@/components/Heading";

/**
 * Props for `HeroHorizontal`.
 */
export type HeroProps = {
    data: Content.HeroSliceHorizontalPrimary
};

/**
 * Component for "HeroHorizontal" Slices.
 */
const HeroHorizontal = ({ data }: HeroProps): JSX.Element => {
  return (
    <Section className="overflow-hidden md:-mb-10 xl:-mb-20">
    <div className="container relative z-2 md:grid md:grid-cols-2 md:items-center md:gap-10 lg:gap-48">
        <Heading
            className="md:mt-12 lg:max-w-[30rem] lg:mt-20"
            textAlignClassName="md:text-left"
            titleLarge={data.heading}
            textLarge={data.body}
        />
        <div className="relative">
            <PrismicNextImage
                className="w-full md:min-w-[125%] xl:min-w-full"
                field={data.image}
                width={547}
                height={588}
            />
            <div className="absolute top-0 left-1/2 w-full">
                <Image
                    className="w-full"
                    src="/images/grid.png"
                    width={550}
                    height={550}
                    alt="Grid"
                />
            </div>
        </div>
    </div>
</Section>
 );
};

export default HeroHorizontal;
