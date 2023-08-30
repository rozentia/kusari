import Heading from "@/components/Heading"
import Section from "@/components/Section"
import Image from "@/components/Image"
import { kBodyStyle } from "@/constants/classNames"
import { isFilled } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"
import Grid from "./Grid"
import Carousel from "./Carousel"
import { createClient } from "@/prismicio"
import { CommunityTestimonialsSlice } from "@/prismicio-types"

/**
 * Props for `CommunityTestimonials`.
 */
export type CommunityTestimonialsProps =
  SliceComponentProps<CommunityTestimonialsSlice>

/**
 * Component for "CommunityTestimonials" Slices.
 */
const CommunityTestimonials =  async ({
  slice,
}: CommunityTestimonialsProps): Promise<JSX.Element> => {

  const client = createClient()
  const testimonials = await Promise.all(slice.items.map((item) => {
    if (isFilled.contentRelationship(item.testimonial) && item.testimonial.uid) {
      return client.getByUID("testimonial", item.testimonial.uid)
    }
  }))
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={process.env.NODE_ENV != 'production' ? kBodyStyle : ''}
    >
      <Section>
            <div className="container">
                <Heading
                    className="md:text-center"
                    tagClassName="md:justify-center"
                    tag={slice.primary.tag || ''}
                    title={slice.primary.title}
                />
                <div className="relative">
                  {testimonials.length > 0 && (
                    <>
                      <div className="hidden lg:block"><Grid items={testimonials} /></div>
                      <div className="block lg:hidden"><Carousel items={testimonials} /></div>
                    </>
                  )}
                    <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                            <Image
                                className="w-full"
                                src="/images/gradient.png"
                                width={942}
                                height={942}
                                alt="Gradient"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    </section>
  )
}

export default CommunityTestimonials
