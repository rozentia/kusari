import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({children}) => <Heading as="h2" size="md" className="text-center mb-12">{children}</Heading>
}

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
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
        {slice.items.map((item, index) => (
          <div key={index} className="max-w-xs grid sm:place-items-start place-items-center">
          {item.icon && (<div className="mb-8">{icons[item.icon]}</div>)}
          <PrismicRichText field={item.title} />
          <PrismicRichText field={item.description} />
          </div>
        )
        )}
      </div>
    </Bounded>
  );
};

export default Features;
