import { kBodyStyle } from "@/constants/classNames";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import RoadMapDefault from "./RoadmapDefault";
import RoadMapDetail from "./RoadmapDetail";

/**
 * Props for `RoadMap`.
 */
export type RoadMapProps = SliceComponentProps<Content.RoadMapSlice>;

/**
 * Component for "RoadMap" Slices.
 */
const RoadMap = ({ slice }: RoadMapProps): JSX.Element => {
  const { variation, items, primary } = slice
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={process.env.NODE_ENV != 'production' ? kBodyStyle : ''}
    >
      {variation === 'default' && <RoadMapDefault items={items} data={primary} />}
      {variation === 'detail' && <RoadMapDetail items={items} />}
      
    </section>
  );
};

export default RoadMap;
