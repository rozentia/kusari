import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

// const components: JSXMapSerializer = {
//   heading1: ({children}) => <Heading 
//     as="h1" 
//     className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb0">
//       {children}
//   </Heading>,
//   paragraph: ({children}) => <p className="text-2xl font-body text-center font-normal leading-10 text-slate-600 mb-4 md:mb-8 max-w-md">{children}</p>
// }

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
        <div className="grid grid-cols-1 place-items-center text-center">
      {/* <h1>{slice.primary.heading}</h1> */}
      <PrismicRichText
        field={slice.primary.body}
      />    
        {slice.primary.button_text}
    
      <PrismicNextImage field={slice.primary.image} />
      </div>
    </section>
  );
};

export default Hero;
