import {SiteConfig} from "@/types/siteConfig";
import {BsGithub, BsTwitterX, BsWechat} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import {SiBuymeacoffee, SiJuejin} from "react-icons/si";

const baseSiteConfig = {
    name: "PDF AI Chatbot: Free PDFGPT - The Best PDF AI Chatbot for Reading Any Documents Faster",
    description:
        "Use PDF AI Chatbot to chat with your PDF. This free PDFGPT will summarize and answer any questions from documents in no time. Just ask your pdf, AI will do the rest.",
    url: "https://pdfgpt-beta.vercel.app/",
    ogImage: "https://starter.weijunext.com/og.png",
    metadataBase: '/',
    keywords: [],
    authors: [
        {
            name: "PDF AI Chatbot",
            url: "https://pdfgpt-beta.vercel.app/",
            twitter: 'https://pdfgpt-beta.vercel.app/',
        }
    ],
    creator: 'PDF AI Chatbot',
    themeColors: [
        {media: '(prefers-color-scheme: light)', color: 'white'},
        {media: '(prefers-color-scheme: dark)', color: 'black'},
    ],
    defaultNextTheme: 'light', // next-theme option: system | dark |
    icons: {
        icon: "/images/logo.png",
        shortcut: "/images/logo.png",
        apple: "/logo.png",
    },
    headerLinks: [
        { name: 'Home', href: "https://github.com/weijunext/clean-nextjs-starter", },
        { name: 'Tools', href: "https://twitter.com/weijunext", },
        { name: 'Abouts', href: "https://www.buymeacoffee.com/weijunext", },
        { name: 'Contact Us', href: "https://www.buymeacoffee.com/weijunext", },
        { name: 'Privacy Policy', href: "https://www.buymeacoffee.com/weijunext", },
    ],
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
        creator: baseSiteConfig.creator,
    },
}
