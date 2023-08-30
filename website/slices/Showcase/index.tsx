import { kBodyStyle } from "@/constants/classNames";
import { SliceComponentProps } from "@prismicio/react";
import ShowcaseDefault from "./ShowcaseDefault";
import ShowcaseHorizontal from "./ShowcaseHorizontal";
import ShowcaseHorizontalWithIcons from "./ShowcaseHorizontalWithIcons";
import TripleFeatureShowcase from "./TripleFeatureShowcase";
import { ShowcaseSlice } from "@/prismicio-types";

/**
 * Props for `Showcase`.
 */
export type ShowcaseProps = SliceComponentProps<ShowcaseSlice>;

/**
 * Component for "Showcase" Slices.
 */
const Showcase = ({ slice }: ShowcaseProps): JSX.Element => {
  const {variation, primary, items} = slice
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={process.env.NODE_ENV != 'production' ? kBodyStyle : ''}
    >
      {variation === 'default' && <ShowcaseDefault data={primary} />}
      {(variation === 'leftShowcase' || variation === 'rightShowcase') && 
        <ShowcaseHorizontal data={primary} items={items} isLeft={variation === 'leftShowcase'}/>
      }
      {(variation === 'leftShowcaseWithIcons' || variation === 'rightShowcaseWithIcons') &&
        <ShowcaseHorizontalWithIcons data={primary} items={items} isLeft={variation === 'leftShowcaseWithIcons'} />
      }
      {variation === 'tripleFeatureShowcase' && <TripleFeatureShowcase data={primary} items={items} />} 
    </section>
  );
};

export default Showcase;
