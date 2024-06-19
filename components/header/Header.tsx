import HeaderLinks from "@/components/header/HeaderLinks";
import {siteConfig} from "@/config/site";
import Image from "next/image";
import Link from "next/link";
// import {ThemedButton} from "../ThemedButton";
import React from "react";

const Header = () => {
    const {authors} = siteConfig;

    return (
        <>
            <header className="py-[20px]">
                <div className="container">
                    <nav className="relative z-50 flex justify-between">
                        <div className="flex items-center md:gap-x-12">
                            <Link href="/" className="flex items-center space-x-1 font-bold">
                                <Image
                                    src="/images/logo.png"
                                    alt="PDF AI Chatbot-logo"
                                    width={100}
                                    height={22}
                                    className="h-[40px] w-auto mr-[8px]"/>
                                <span className="text-gray-950 text-[26px]">{authors[0].name}</span>
                            </Link>
                            <div className="hidden md:flex md:gap-x-6"></div>
                        </div>

                        <div className="flex items-center gap-x-5 md:gap-x-8">
                            <HeaderLinks/>
                        </div>

                        <div className="nav-button">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <button type="button" className="btn btn-primary navbar-btn btn-rounded">Try it
                                        Free
                                    </button>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
