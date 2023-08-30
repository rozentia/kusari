import { kBodyStyle } from "@/constants/classNames";
import { SliceComponentProps } from "@prismicio/react";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import FeaturesDefaultSlice from "./FeaturesDefault";
import FeaturesGridSlice from "./FeaturesGrid";
import { FeaturesSlice } from "@/prismicio-types";

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  const {items, variation} = slice
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={process.env.NODE_ENV != 'production' ? kBodyStyle : ''}
    >
      <Section className={variation === 'default' ? "overflow-hidden" : ""}>
        {(slice.primary.heading?.length || 0) > 0 && <Heading 
          className="md:max-w-md lg:max-w-2xl" 
          title={slice.primary.heading} 
        />}
        {variation === 'default' && <FeaturesDefaultSlice items={items} />}
        {variation === 'featuresGrid' && <FeaturesGridSlice items={items} />}
      </Section>
    </section>
  );
};

export default Features;
