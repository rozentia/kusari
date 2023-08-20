import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

const icons = {
  calendar: "Calendar",
  clover: "Clover",
  hourglass: "Hourglass",
  bargraph: "Bargraph"
}

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h1>{slice.primary.heading}</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
        {slice.items.map((item, index) => (
          <div key={index} className="max-w-xs grid sm:place-items-start place-items-center">
          <PrismicRichText field={item.description} />
          </div>
        )
        )}
      </div>
    </section>
  );
};

export default Features;
