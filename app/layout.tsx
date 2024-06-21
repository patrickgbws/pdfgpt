// 站点文件
import {siteConfig} from "@/config/site";

// 样式文件
import "@/styles/globals.css";
import "@/styles/style.css";

// components
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";


import {cn} from "@/lib/utils";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import BaiDuAnalytics from "@/app/BaiDuAnalytics";
import {Analytics} from "@vercel/analytics/react";
import {Viewport} from "next";


export const metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    icons: siteConfig.icons,
    openGraph: siteConfig.openGraph,
};

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head/>
        <body className={cn("min-h-screen antialiased")}>
            <Header/>
            <main className="flex flex-col items-center">{children}</main>
            <Footer/>
            <ScrollToTopButton />
            <Analytics/>
            {process.env.NODE_ENV === "development" ? (
                <></>
            ) : (
                <>
                    <GoogleAnalytics/>
                    <BaiDuAnalytics/>
                </>
            )}
        </body>
        </html>
    );
}
