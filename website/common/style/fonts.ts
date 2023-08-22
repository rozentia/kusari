import { Sora, Source_Code_Pro, Space_Grotesk, Nunito } from "next/font/google";

export const sora = Sora({
    weight: ["300", "400", "600"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-sora",
});

export const code = Source_Code_Pro({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-code",
});

export const grotesk = Space_Grotesk({
    weight: ["300"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-grotesk",
});

export const nunito = Nunito({
    weight: ["300", "400", "600"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-nunito",
});