import Button from "@/components/Button";
import Section from "@/components/Section";
import Image from "@/components/Image";
import { kBodyStyle } from "@/constants/classNames";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { apps } from "@/mocks/collaboration";

/**
 * Props for `Collaboration`.
 */
export type CollaborationProps =
  SliceComponentProps<Content.CollaborationSlice>;

/**
 * Component for "Collaboration" Slices.
 */
const Collaboration = ({ slice }: CollaborationProps): JSX.Element => {
  const {items} = slice
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={process.env.NODE_ENV != 'production' ? kBodyStyle : ''}
    >
      <Section crosses>
            <div className="container lg:flex">
                <div className="max-w-[25rem]">
                    <h2 className="h2 mb-4 md:mb-8">
                        {slice.primary.heading}
                    </h2>
                    <ul className="max-w-[22.5rem] mb-10 md:mb-14">
                        {items.map((item, index) => (
                            <li className="mb-3 py-3" key={index}>
                                <div className="flex items-center">
                                    <Image
                                        src="/images/check.svg"
                                        width={24}
                                        height={24}
                                        alt="Check"
                                    />
                                    <h6 className="body-2 ml-5">
                                        {item.title}
                                    </h6>
                                </div>
                                {item.description && (
                                    <PrismicRichText field={item.description} components={{
                                      paragraph: ({children}) => (<p className="body-2 mt-3 text-n-4">{children}</p>)
                                    }}/>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Button>
                      <PrismicNextLink field={slice.primary.button_link}>
                        {slice.primary.button_label}
                      </PrismicNextLink>
                    </Button>
                </div>
                <div className="mt-15 lg:mt-0 lg:ml-auto xl:w-[37.5rem]">
                    <div className="relative lg:w-[22.5rem] lg:mx-auto">
                      <PrismicRichText field={slice.primary.text} components={{ 
                        paragraph: ({children}) => (
                          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32">
                              {children}
                          </p>
                      )}} />
                        
                        <div className="relative left-1/2 flex w-[22.5rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
                            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                                <div className="w-[5.75rem] aspect-square m-auto p-[0.1875rem] bg-conic-gradient rounded-full">
                                    <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                                        <Image
                                            src="/images/brainwave-symbol.svg"
                                            width={48}
                                            height={48}
                                            alt="Brainwave"
                                        />
                                    </div>
                                </div>
                            </div>
                            <ul>
                                {apps.map((app, index) => (
                                    <li
                                        className={`absolute top-0 left-1/2 h-1/2 -ml-[1.625rem] ${
                                            index === 1 && "rotate-[45deg]"
                                        } ${index === 2 && "rotate-[90deg]"} ${
                                            index === 3 && "rotate-[135deg]"
                                        } ${index === 4 && "rotate-[180deg]"} ${
                                            index === 5 && "rotate-[225deg]"
                                        } ${index === 6 && "rotate-[270deg]"} ${
                                            index === 7 && "rotate-[315deg]"
                                        } origin-bottom`}
                                        key={app.id}
                                    >
                                        <div
                                            className={`relative -top-[1.625rem] flex w-[3.25rem] h-[3.25rem] bg-n-7 border border-n-1/15 rounded-xl ${
                                                index === 1 && "-rotate-[45deg]"
                                            } ${
                                                index === 2 && "-rotate-[90deg]"
                                            } ${
                                                index === 3 &&
                                                "-rotate-[135deg]"
                                            } ${
                                                index === 4 &&
                                                "-rotate-[180deg]"
                                            } ${
                                                index === 5 &&
                                                "-rotate-[225deg]"
                                            } ${
                                                index === 6 &&
                                                "-rotate-[270deg]"
                                            } ${
                                                index === 7 &&
                                                "-rotate-[315deg]"
                                            }`}
                                        >
                                            <Image
                                                className="m-auto"
                                                src={app.icon}
                                                width={app.width}
                                                height={app.height}
                                                alt={app.title}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
                                <Image
                                    src="/images/collaboration/curve-1.svg"
                                    width={522}
                                    height={182}
                                    alt="Curve 1"
                                />
                            </div>
                            <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
                                <Image
                                    src="/images/collaboration/curve-2.svg"
                                    width={162}
                                    height={76}
                                    alt="Curve 2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    </section>
  );
};

export default Collaboration;
