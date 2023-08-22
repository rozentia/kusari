import { kBodyStyle } from "@/constants/classNames";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { compact } from "lodash";
import TestimonialsDefault from "./TestimonialsDefault";
import TestimonialsQuoteSlideshow from "./TestimonialsQuoteSlideshow";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = async ({ slice }: TestimonialsProps): Promise<JSX.Element> => {
  const { variation, primary } = slice
  const client = createClient()
  const testimonials = compact(await Promise.all(slice.items.map((item) => {
    if (isFilled.contentRelationship(item.testimonial) && item.testimonial.uid) {
      return client.getByUID("testimonial", item.testimonial.uid)
    }
  })))
  return (
    <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className={process.env.NODE_ENV != 'production' ? kBodyStyle : ''}
  >
    {variation === 'default' && <TestimonialsDefault data={primary} testimonials={testimonials} />}
    {variation === 'quoteSlideshow' && <TestimonialsQuoteSlideshow testimonials={testimonials} />} 
  </section>
  );
};

export default Testimonials;
