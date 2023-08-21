import Section from "@/components/Section";
import { Content, isFilled } from "@prismicio/client";
import Image from "@/components/Image"
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Icon from "@/components/Icon";
import { kDefaultIconColor } from "@/common/style/colors";

/**
 * Props for `ShowcaseHorizontalWithIcons`.
 */
export type ShowcaseHorizontalWithIconsProps = {
    data: Content.ShowcaseSliceRightShowcaseWithIconsPrimary | Content.ShowcaseSliceLeftShowcaseWithIconsPrimary
    items: Content.ShowcaseSliceRightShowcaseWithIconsItem[] | Content.ShowcaseSliceLeftShowcaseWithIconsItem[]
    isLeft: boolean
};
/**
 * Component for "ShowcaseHorizontalWithIcons" Slices.
 */
const ShowcaseHorizontalWithIcons = ({ data, items, isLeft }: ShowcaseHorizontalWithIconsProps): JSX.Element => {
  return (
    <Section crosses>
        <div className="container pt-10 pb-10 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center lg:p-0">
            <div className="hidden lg:block">
                <div>
                    {isFilled.image(data.image) 
                        ? <PrismicNextImage 
                            field={data.image}
                            width={756}
                            height={756}
                        />
                        : <Image
                            src="/images/help/help.png"
                            width={756}
                            height={756}
                            alt="Help"
                        />
                }
                    
                </div>
            </div>
            <div>
                {isFilled.keyText(data.heading) && <h2 className="h2 mb-4 md:mb-6">{data.heading}</h2>}
                {isFilled.keyText(data.text) && <p className="body-2 mb-5 text-n-3">{data.text}</p>}
                <ul>
                    {items.map((item, index) => (
                        <li
                            className="flex items-center py-10 border-b border-n-1/15"
                            key={index}
                        >
                            <div className="flex items-center justify-center w-15 h-15 mr-10 bg-n-7 border border-n-1/15 rounded-xl">
                                <Icon packageName={item.icon_package} iconName={item.icon_name || "fa0"} size="24px" color={kDefaultIconColor} />
                            </div>
                            <div>
                                <h6 className="h6 text-n-3">{item.tagline}</h6>
                                <PrismicRichText 
                                    field={item.description}
                                    components={{
                                        paragraph: ({children}) => <p className="body-2 text-n-2">{children}</p>
                                    }}
                                />
                                
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </Section>
  );
};

export default ShowcaseHorizontalWithIcons;
