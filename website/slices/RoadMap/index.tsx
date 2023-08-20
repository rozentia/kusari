import { kBodyStyle } from "@/constants/classNames";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `RoadMap`.
 */
export type RoadMapProps = SliceComponentProps<Content.RoadMapSlice>;

/**
 * Component for "RoadMap" Slices.
 */
const RoadMap = ({ slice }: RoadMapProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={process.env.NODE_ENV != 'production' ? kBodyStyle : ''}
    >
      Placeholder component for road_map (variation: {slice.variation}) Slices
    </section>
  );
};

export default RoadMap;
