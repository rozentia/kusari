import "@splidejs/react-splide/css";
import "tippy.js/animations/shift-toward.css";
import "./globals.css";
import { createClient } from "@/prismicio";
import { Metadata } from "next";
import { code, grotesk, nunito, sora } from "@/common/style/fonts";

import { kBodyStyle } from "@/constants/classNames";

//: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata(): Promise<Metadata> {
    const client = createClient()
    const settings = await client.getSingle('settings')
    return {
        icons: {
            icon: '/favicon.ico',
        },
        title: settings.data.site_title || 'Kusari',
        description: settings.data.meta_description || 'Kusari stands as a holistic platform, integrating the best of existing solutions with innovative features tailored for the modern creative and entertainment industries. This comprehensive suite ensures that professionals have everything they need to streamline their processes, enhance collaboration, and navigate the evolving digital landscape.',
        openGraph: {
            type: 'website',
            url: 'https://kusari.io',
            title: settings.data.site_title || 'Kusari',
            siteName: settings.data.site_name || 'Kusari',
            description: settings.data.meta_description || '???',
            images: [settings.data.og_image.url || '/fb-og-image.png']
        },
        twitter: {
            title: settings.data.site_title || 'Kusari',
            card: 'summary_large_image',
            site: '@kusari', // TODO create @kusari on twitter
            creator: '@hnpotter',
            images: settings.data.x_card?.url || '/twitter-card.png',
        }
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="font-sans">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body
                className={`${sora.variable} ${code.variable} ${grotesk.variable} ${kBodyStyle}`}
            >
                {children}
                <svg className="block" width={0} height={0}>
                    <defs>
                        <linearGradient
                            id="btn-left"
                            x1="50%"
                            x2="50%"
                            y1="0%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#89F9E8" />
                            <stop offset="100%" stopColor="#FACB7B" />
                        </linearGradient>
                        <linearGradient
                            id="btn-top"
                            x1="100%"
                            x2="0%"
                            y1="50%"
                            y2="50%"
                        >
                            <stop offset="0%" stopColor="#D87CEE" />
                            <stop offset="100%" stopColor="#FACB7B" />
                        </linearGradient>
                        <linearGradient
                            id="btn-bottom"
                            x1="100%"
                            x2="0%"
                            y1="50%"
                            y2="50%"
                        >
                            <stop offset="0%" stopColor="#9099FC" />
                            <stop offset="100%" stopColor="#89F9E8" />
                        </linearGradient>
                        <linearGradient
                            id="btn-right"
                            x1="14.635%"
                            x2="14.635%"
                            y1="0%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#9099FC" />
                            <stop offset="100%" stopColor="#D87CEE" />
                        </linearGradient>
                    </defs>
                </svg>
            </body>
        </html>
    );
}
