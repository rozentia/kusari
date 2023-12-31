import { kBodyStyle } from "@/constants/classNames";
import { PricingSlice } from "@/prismicio-types";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Pricing`.
 */
export type PricingProps = SliceComponentProps<PricingSlice>;

/**
 * Component for "Pricing" Slices.
 */
const Pricing = ({ slice }: PricingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={process.env.NODE_ENV != 'production' ? kBodyStyle : ''}
    >
      Placeholder component for pricing (variation: {slice.variation}) Slices
    </section>
  );
};

export default Pricing;
