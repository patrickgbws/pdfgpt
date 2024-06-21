import {IconType} from "react-icons"
export type Link = {
    name: string
    href: string
}
export type SiteConfig = {
    name: string
    title: string
    description: string
    url: string
    keywords: string[]
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
    }
}
