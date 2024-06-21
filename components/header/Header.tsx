"use client"; // 添加这行

import React, {useEffect, useState} from "react";
import {siteConfig} from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { headerNavLinks } from "@/data/websitedata";
import { ArrowDownIcon, ArrowUpIcon } from "@/data/websitedata";

interface MenuItemProps {
    item: {
        href: string;
        title: string;
        children?: {
            href: string;
            title: string;
        }[];
    };
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <li className={`menu-item ${isExpanded ? 'expanded' : ''}`}>
            {item.children ? (
                <a onClick={handleToggle} className="menu-link">
                    {item.title}
                    <span className="arrow-icon">{isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
                </a>
            ) : (
                <Link href={item.href} className="menu-link">
                    {item.title}
                </Link>
            )}

            {item.children && (
                <ul className={`submenu ${isExpanded ? 'expanded' : ''}`}>
                    {item.children.map((childItem, index) => (
                        <li key={index}>
                            <Link href={childItem.href}>
                                {childItem.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};


const Header = () => {
    const {authors} = siteConfig;
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`pdfaiheader ${isScrolled ? "scrolled" : ""}`}>
            <div className="container row">
                <div className="logo">
                    <Link href="/" className="flex items-center space-x-1 font-bold">
                        <Image
                            src="/images/logo.png"
                            alt="PDF AI Chatbot-logo"
                            width={100}
                            height={22}
                            className="h-[40px] w-auto mr-[8px]"
                        />
                        <span>{authors[0].name}</span>
                    </Link>
                </div>
                <nav className="menu">
                    <ul>
                        {headerNavLinks.map((item, index) => (
                            <MenuItem key={index} item={item} />
                        ))}
                    </ul>
                </nav>
                <div className="button">
                    <button>Button</button>
                </div>
            </div>
        </header>
    );
};

export default Header;