import {SiteConfig} from "@/types/siteConfig";

const baseSiteConfig = {
    name:"ChatPDFAI",
    title: "ChatPDFAI: Free PDFGPT - The Best PDF AI Chatbot for Reading Files Faster",
    description:
        "Use ChatPDFAI to chat with your PDF. This free PDFGPT will summarize & answer questions from documents in no time. Just ask your pdf, AI will do the rest",
    url: "https://chatpdfai.pro/",
    keywords: ["PDF AI", "PDFGPT Free", "Chat with PDF", "Chat PDF", "Chat PDF Alternative", "PDFGPT", "PDF to AI", "Ask Your PDF",],
    icons: {
        icon: "/images/logo.png",
        shortcut: "/images/logo.png",
        apple: "/logo.png",
    },
}

export const siteConfig: SiteConfig = {
    ...baseSiteConfig,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: baseSiteConfig.url,
        title: baseSiteConfig.title,
        description: baseSiteConfig.description,
        siteName: baseSiteConfig.title,
        images: [`${baseSiteConfig.url}/images/logo.png`],
    }
}
