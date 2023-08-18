import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Collaboration`.
 */
export type CollaborationProps =
  SliceComponentProps<Content.CollaborationSlice>;

/**
 * Component for "Collaboration" Slices.
 */
const Collaboration = ({ slice }: CollaborationProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for collaboration (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Collaboration;
