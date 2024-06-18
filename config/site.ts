import {SiteConfig} from "@/types/siteConfig";
import {BsGithub, BsTwitterX, BsWechat} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import {SiBuymeacoffee, SiJuejin} from "react-icons/si";

const baseSiteConfig = {
    name: "PDF AI Chatbot: Free PDFGPT - The Best PDF AI Chatbot for Reading Any Documets Faster",
    description:
        "Use XXX to chat with your PDF. This free PDFGPT will summarize and answer any questions from documents in no time. Just ask your pdf, AI will do the rest.",
    url: "https://starter.weijunext.com",
    ogImage: "https://starter.weijunext.com/og.png",
    metadataBase: '/',
    keywords: ["next.js starter", "next.js template", "awesome starter", "study next.js"],
    authors: [
        {
            name: "PDF AI Chatbot",
            url: "https://weijunext.com",
            twitter: 'https://twitter.com/weijunext',
        }
    ],
    themeColors: [
        {media: '(prefers-color-scheme: light)', color: 'white'},
        {media: '(prefers-color-scheme: dark)', color: 'black'},
    ],
    defaultNextTheme: 'light', // next-theme option: system | dark |
    icons: {
        icon: "/images/logo.png",
        shortcut: "/images/logo.png",
        apple: "/logo.png", // apple-touch-icon.png
    },
    headerLinks: [],
    footerLinks: [],
    footerProducts: []
}

export const siteConfig: SiteConfig = {
    ...baseSiteConfig,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: baseSiteConfig.url,
        title: baseSiteConfig.name,
        description: baseSiteConfig.description,
        siteName: baseSiteConfig.name,
        images: [`${baseSiteConfig.url}/og.png`],
    },
    twitter: {
        card: "summary_large_image",
        title: baseSiteConfig.name,
        description: baseSiteConfig.description,
        images: [`${baseSiteConfig.url}/og.png`],
    },
}
