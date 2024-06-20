import {IconType} from "react-icons"

export type AuthorsConfig = {
    name: string
    url: string
    twitter?: string
}
export type Link = {
    name: string
    href: string
}
export type ThemeColor = {
    media: string
    color: string
}
export type SiteConfig = {
    name: string
    description: string
    url: string
    keywords: string[]
    authors: AuthorsConfig[]
    creator: string
    ogImage: string
    headerLinks: Link[]
    themeColors?: string | ThemeColor[]
    defaultNextTheme?: string
    icons: {
        icon: string
        shortcut?: string
        apple?: string
    }
    openGraph: {
        type: string
        locale: string
        url: string
        title: string
        description: string
        siteName: string
        images?: string[]
    },
    twitter: {
        card: string
        title: string
        description: string
        images?: string[]
        creator: string
    },
}
