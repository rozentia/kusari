import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CommunityTestimonials`.
 */
export type CommunityTestimonialsProps =
  SliceComponentProps<Content.CommunityTestimonialsSlice>;

/**
 * Component for "CommunityTestimonials" Slices.
 */
const CommunityTestimonials = ({
  slice,
}: CommunityTestimonialsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for community_testimonials (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default CommunityTestimonials;
