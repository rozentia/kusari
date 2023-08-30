import { kBodyStyle } from "@/constants/classNames";
import { isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { compact, flatten, map, uniq } from "lodash";
import StructuredContent from "./StructuredContent";
import { StructuredContentCollectionSlice } from "@/prismicio-types";

/**
 * Props for `StructuredContentCollection`.
 */
export type StructuredContentCollectionProps =
  SliceComponentProps<StructuredContentCollectionSlice>;

/**
 * Component for "StructuredContentCollection" Slices.
 */
const StructuredContentCollection = async ({
  slice,
}: StructuredContentCollectionProps): Promise<JSX.Element> => {

  const { primary, items } = slice
  const client = createClient()
  const sections = compact(await Promise.all(
    items.map((item) => {
    if (isFilled.contentRelationship(item.content_section) && item.content_section.uid) {
      return client.getByUID("content_section", item.content_section.uid)
    }
  })))

  const uids = uniq(compact(flatten(sections.map(({data}) => 
      data.content.map((content) => {
        if (isFilled.contentRelationship(content.block) && content.block.uid) {
          return content.block.uid
        }
      })
    ))))

  const content = await client.getAllByUIDs("content_block", uids)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={process.env.NODE_ENV != 'production' ? kBodyStyle : ''}
    >
      <StructuredContent data={primary} sections={sections} content={content} />
    </section>
  );
};

export default StructuredContentCollection;
