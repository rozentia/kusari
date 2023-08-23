import Section from "../Section";
import Logo from "../Logo";
import Image from "../Image";

import { socials } from "@/constants/socials";
import { PrismicNextLink } from "@prismicio/next";
import { isFilled } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { compact } from "lodash";
import Link from "next/link";
import Icon from "../Icon";


const Footer = async () => {
    const client = createClient()
    const settings = await client.getSingle('settings')
    const navigation = compact([...settings.data.footer_navigation])
    return (
    <Section
        className="pt-11 pb-6 px-5 lg:pt-[6.5rem] lg:px-7.5 lg:pb-12 xl:px-10"
        crosses
        customPaddings
    >
        <div className="flex items-center justify-center h-[6.5rem] mb-6 border-b border-n-6 lg:justify-start">
            <div className="pl-4">
                <Logo />
            </div>
            <nav className="hidden lg:flex items-center justify-center ml-auto">
                {navigation.map(({link, label}, index) => isFilled.link(link) && (
                    <PrismicNextLink
                        field={link}
                        className={`px-12 py-8 font-code text-xs font-semibold leading-5 uppercase text-n-1/50 transition-colors hover:text-n-1`}
                        key={index}
                    >
                        {label}
                    </PrismicNextLink>
                ))}
            </nav>
        </div>
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="hidden caption text-n-4 pl-5 lg:block">
                © {new Date().getFullYear()} Rozentia LLC
            </div>
            <div className="flex justify-center -mx-4">
                {socials.map((item) => (
                    <Link
                        className="flex items-center justify-center w-11 h-11 mx-4 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                        href={item.url}
                        target="_blank"
                        key={item.id}
                    >
                        <Icon
                            packageName="boxIcons"
                            iconName={item.iconName}
                            color="#757185"
                            size="20px"                            
                        />
                    </Link>
                ))}
            </div>
        </div>
    </Section>
)};

export default Footer;
