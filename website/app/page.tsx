import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import HomepageHero from "@/components/HomepageHero";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");
  const {
    title,
    title_highlight,
    tagline,
    button_link,
    button_label,
  } = page.data

  return (<>
    <HomepageHero
      title={title || "Explore the Possibilities of "}
      titleHighlight={title_highlight || "Kusari"}
      tagline={tagline || "Unleash the power of Kusari and upgrade your productivity to the next level."}
      buttonLink={button_link}
      buttonLabel={button_label || "Get Started"}
    />
    <SliceZone slices={page.data.slices} components={components} />
  </>);
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
