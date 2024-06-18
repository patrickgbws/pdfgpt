import HeaderLinks from "@/components/header/HeaderLinks";
import {siteConfig} from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import {ThemedButton} from "../ThemedButton";

const Header = () => {
    return (
        <>
            {/*<header>*/}
            {/*    <nav className="navbar navbar-expand-lg navbar-white fixed-top navbar-custom sticky sticky-dark"*/}
            {/*         id="main-menu">*/}
            {/*        <div className="container">*/}
            {/*            <a className="navbar-brand logo text-uppercase" href="index.html">*/}
            {/*                /!*<img src="images/logo-dark.png" alt="" height="22" />*!/*/}
            {/*            </a>*/}
            {/*            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
            {/*                    data-bs-target="#navbarCollapse"*/}
            {/*                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*                <i className="mdi mdi-menu"></i>*/}
            {/*            </button>*/}
            {/*            <div className="collapse navbar-collapse" id="navbarCollapse">*/}
            {/*                <ul className="navbar-nav navbar-center mx-auto" id="navbar-navlist">*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a data-scroll href="#home" className="nav-link">Home</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a data-scroll href="#services" className="nav-link">Services</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a data-scroll href="#pricing" className="nav-link">Pricing</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a data-scroll href="#testimonial" className="nav-link">Testimonial</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a data-scroll href="#team" className="nav-link">Team</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a data-scroll href="#blog" className="nav-link">Blog</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a data-scroll href="#contact" className="nav-link">Contact</a>*/}
            {/*                    </li>*/}
            {/*                </ul>*/}
            {/*                <div className="nav-button">*/}
            {/*                    <ul className="nav navbar-nav navbar-right">*/}
            {/*                        <li>*/}
            {/*                            <button type="button" className="btn btn-primary navbar-btn btn-rounded">Try it*/}
            {/*                                Free*/}
            {/*                            </button>*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </nav>*/}
            {/*</header>*/}
            <header className="py-[20px]">
                <div className="container px-4 sm:px-6 lg:px-8">
                    <nav className="relative z-50 flex justify-between">
                        <div className="flex items-center md:gap-x-12">
                            <Link href="/" className="flex items-center space-x-1 font-bold">
                                <Image
                                    alt={siteConfig.name}
                                    src="/logo.svg"
                                    className="w-8 h-8"
                                    width={32}
                                    height={32}
                                />
                                <span className="text-gray-950 dark:text-gray-300">Clean</span>
                                <span className="text-blue-600">Next.js</span>
                                <span className="text-gray-950 dark:text-gray-300">Starter</span>
                            </Link>
                            <div className="hidden md:flex md:gap-x-6"></div>
                        </div>

                        <div className="flex items-center gap-x-5 md:gap-x-8">
                            <HeaderLinks/>
                            <ThemedButton/>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
