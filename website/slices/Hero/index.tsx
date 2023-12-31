"use client"

import { kBodyStyle } from "@/constants/classNames";
import { SliceComponentProps } from "@prismicio/react";
import HeroDefault from "./HeroDefault";
import HeroHorizontal from "./HeroHorizontal";
import HeroVertical from "./HeroVertical";
import { HeroSlice } from "@/prismicio-types";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const { variation, primary } = slice
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={process.env.NODE_ENV != 'production' ? kBodyStyle : ''}
    >
     {variation === 'default' && <HeroDefault data={primary}/>}
     {variation === 'horizontal' && <HeroHorizontal data={primary}/>}
     {variation === 'vertical' && <HeroVertical data={primary} />}
    </section>
  );
};

export default Hero;
