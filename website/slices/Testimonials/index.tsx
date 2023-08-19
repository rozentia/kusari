import { Content, isFilled } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/BoundedOld";
import Heading from "@/components/Heading";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading3: ({children}) => <Heading as="h3" size="md" className="text-center mb-12">{children}</Heading>,
  paragraph: ({children}) => <p className="text-2xl font-body text-center font-normal leading-10 text-slate-600 mb-4 md:mb-8 max-w-md">{children}</p>
}

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = async ({ slice }: TestimonialsProps): Promise<JSX.Element> => {
  const client = createClient()
  const testimonials = await Promise.all(slice.items.map((item) => {
    if (isFilled.contentRelationship(item.testimonial) && item.testimonial.uid) {
      return client.getByUID("testimonial", item.testimonial.uid)
    }
  }))
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />
      <div className="grid md:grid-cols-3 grid-cols-1gap-8">
        {
          testimonials.map((item, index) => item?.data.quote && (
            <div key={index} className="border bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between">
              <PrismicRichText field={item.data.quote} />
              <div className="flex">
                <PrismicNextImage 
                  width={56} 
                  height={56} 
                  field={item.data.avatar} 
                  className="rounded-full mr-4" 
                  imgixParams={{ar: "1:1", fit: "crop"}} 
                />
                <div>
                  <p>{item.data.name}</p>
                  <p className="text-slate-500">{item.data.job_title}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </Bounded>
  );
};

export default Testimonials;
