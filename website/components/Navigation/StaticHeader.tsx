import Logo from "../Logo";
import Image from "../Image";

import { isFilled } from "@prismicio/client";
import { HeaderNavigationLink } from "./NavigationLink";
import { createClient } from "@/prismicio";
import { compact } from "lodash";


const StaticHeader = async () => {
    const client = createClient()
    const settings = await client.getSingle('settings')
    const navigation = compact([...settings.data.navigation])

    return (
        <div
            className={"fixed top-0 left-0 z-50 w-full bg-n-8 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm"}
        >
            <div className={`flex items-center h-[4.75rem] px-5 lg:h-[5.25rem] lg:px-7.5 xl:px-10`}>
                <Logo className="xl:mr-8" />
                <nav
                    className={"flex fixed top-[4.8125rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent"}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item, index) => <HeaderNavigationLink key={index} item={item} />)}
                    </div>
                    <div className="absolute inset-0 pointer-events-none lg:hidden">
                        <div className="absolute inset-0 opacity-[.03]">
                            <Image
                                className="w-full h-full object-cover"
                                src="/images/header/background.jpg"
                                width={688}
                                height={953}
                                alt="Background"
                            />
                        </div>
                        <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
                            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                        <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
                        <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
                        <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
                        <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
                        <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default StaticHeader;
