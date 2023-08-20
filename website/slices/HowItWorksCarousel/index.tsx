import { kBodyStyle } from "@/constants/classNames";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={process.env.NODE_ENV != 'production' ? kBodyStyle : ''}
    >
      Placeholder component for how_it_works_carousel (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default HowItWorksCarousel;
