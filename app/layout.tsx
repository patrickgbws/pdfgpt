import BaiDuAnalytics from "@/app/BaiDuAnalytics";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import {ThemeProvider} from "@/components/ThemeProvider";
import {siteConfig} from "@/config/site";
import {cn} from "@/lib/utils";
import "@/styles/globals.css";
import "@/styles/style.css";
import {Analytics} from "@vercel/analytics/react";
import {Viewport} from "next";


export const metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    icons: siteConfig.icons,
    openGraph: siteConfig.openGraph,
};
export const viewport: Viewport = {
    themeColor: siteConfig.themeColors,
};

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head/>
        <body
            className={cn(
                "min-h-screen antialiased",
            )}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme={siteConfig.defaultNextTheme}
            enableSystem
        >
            <Header/>
            <main className="flex flex-col items-center">{children}</main>
            <Footer/>
            <Analytics/>
        </ThemeProvider>
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
