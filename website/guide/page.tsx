import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import type { NextPage } from "next";
import HomePage from "@/templates/HomePage";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");
  console.log(page)

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

const Home: NextPage = () => {
  return <HomePage />;
};

export default Home;
