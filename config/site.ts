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
    creator: '@weijunext',
    themeColors: [
        {media: '(prefers-color-scheme: light)', color: 'white'},
        {media: '(prefers-color-scheme: dark)', color: 'black'},
    ],
    defaultNextTheme: 'system', // next-theme option: system | dark | light
    icons: {
        icon: "/favicon.ico",
        shortcut: "/logo.png",
        apple: "/logo.png", // apple-touch-icon.png
    },
    headerLinks: [
        {name: 'repo', href: "https://github.com/weijunext/clean-nextjs-starter", icon: BsGithub},
        {name: 'twitter', href: "https://twitter.com/weijunext", icon: BsTwitterX},
        {name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee}
    ],
    footerLinks: [
        {name: 'email', href: "mailto:weijunext@gmail.com", icon: MdEmail},
        {name: 'twitter', href: "https://twitter.com/weijunext", icon: BsTwitterX},
        {name: 'github', href: "https://github.com/weijunext/", icon: BsGithub},
        {name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee},
        {name: 'juejin', href: "https://juejin.cn/user/26044008768029", icon: SiJuejin},
        {name: 'weChat', href: "https://weijunext.com/make-a-friend", icon: BsWechat}
    ],
    footerProducts: [
        {url: 'https://weijunext.com/', name: 'J实验室'},
        {url: 'https://smartexcel.cc/', name: 'Smart Excel'},
        {url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate'},
        {url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice'},
        {url: 'https://starter.weijunext.com/', name: 'Next.js Starter'},
        {url: 'https://githubbio.com', name: 'Github Bio Generator'},
        {url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools'},
    ]
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
