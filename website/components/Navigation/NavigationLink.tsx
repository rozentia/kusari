"use client"

import { SettingsDocumentDataFooterNavigationItem, SettingsDocumentDataNavigationItem } from "@/prismicio-types"
import { isFilled } from "@prismicio/client"
import { PrismicNextLink } from "@prismicio/next"
import { usePathname } from "next/navigation"

type HeaderNavigationLinkProps = {
    item: SettingsDocumentDataNavigationItem
}

export const HeaderNavigationLink = ({ item: { link, label, mobileonly } }: HeaderNavigationLinkProps): JSX.Element => {
    const pathname = usePathname();
    if (!(isFilled.link(link) && link.url != undefined)) return <></>

    return (
        <PrismicNextLink
        field={link}
        className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
            mobileonly ? "lg:hidden" : ""
        } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
            link.url === pathname
                ? "z-2 lg:text-n-1"
                : "lg:text-n-1/50"
        } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
        
    >
        {label}
        <div
            className={`hidden absolute left-0 bottom-0 w-0.25 h-1.5 bg-n-6 lg:block ${
                pathname === link.url
                    ? "lg:h-3 lg:bg-n-1"
                    : ""
            }`}
        ></div>
        <div
            className={`hidden absolute right-0 bottom-0 w-0.25 h-1.5 bg-n-6 lg:block ${
                pathname === link.url
                    ? "lg:h-3 lg:bg-n-1"
                    : ""
            }`}
        ></div>
    </PrismicNextLink>
    )
}

type FooterNavigationLinkProps = {
    item: SettingsDocumentDataFooterNavigationItem
}

export const FooterNavigationLink = () => (<></>)