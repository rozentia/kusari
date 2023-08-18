import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeaturesCarousel`.
 */
export type FeaturesCarouselProps =
  SliceComponentProps<Content.FeaturesCarouselSlice>;

/**
 * Component for "FeaturesCarousel" Slices.
 */
const FeaturesCarousel = ({ slice }: FeaturesCarouselProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for features_carousel (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FeaturesCarousel;
