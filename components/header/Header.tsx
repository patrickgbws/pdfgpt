"use client"; // 添加这行

import React, {useEffect, useState} from "react";
import {siteConfig} from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import {headerNavLinks} from "@/data/websitedata";


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
    const [showSubMenu, setShowSubMenu] = useState(false);

    const handleMouseEnter = () => {
        setShowSubMenu(true);
    };

    const handleMouseLeave = () => {
        setShowSubMenu(false);
    };

    return (
        <li className={"menuItem"}>
            {item.children ? (
                <div className={"menuLink"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <span>{item.title}</span>
                    <span className={`"arrowIcon"`}></span>
                    {showSubMenu && (
                        <ul className={"submenu"}>
                            {item.children.map((childItem, index) => (
                                <li key={index}>
                                    <Link href={childItem.href}>
                                        {childItem.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ) : (
                <Link href={item.href}>
                    {item.title}
                </Link>
            )}
        </li>
    );
};


const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
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
        <header className={`"chatpdfai-header" ${isScrolled ? "scrolled" : ""}`}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"logo"}>
                        <Link href="/" className="flex items-center space-x-1 font-bold">
                            <Image
                                src="/images/logo.png"
                                alt="PDF AI Chatbot-logo"
                                width={100}
                                height={22}
                                className="h-[40px] w-auto mr-[8px]"
                            />
                            <span>PDF AI Chatbot</span>
                        </Link>
                    </div>
                    <div className={"menu"}>
                        <div className={"menu-item"}>
                            <ul>
                                {headerNavLinks.map((item: any, index: number) => (
                                    <MenuItem key={index} item={item}/>
                                ))}
                            </ul>
                        </div>
                        <div className={"menu-button"}>
                            <Link
                                href="/"
                                rel="nofollow"
                                className={"menu-button-style"}
                            >
                                <span>Try It for Free</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;