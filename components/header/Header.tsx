import HeaderLinks from "@/components/header/HeaderLinks";
import {siteConfig} from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import {ThemedButton} from "../ThemedButton";

const Header = () => {
    return (
        <>
            <header>
                <div id="navbar">
                    <nav class="navbar navbar-expand-lg navbar-white fixed-top navbar-custom sticky sticky-dark" id="main-menu">
                        <div class="container">
                            <a class="navbar-brand logo text-uppercase" href="index.html">
                                {/*<img src="images/logo-dark.png" alt="" height="22" />*/}
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="mdi mdi-menu"></i>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarCollapse">
                                <ul class="navbar-nav navbar-center mx-auto" id="navbar-navlist">
                                    <li class="nav-item">
                                        <a data-scroll href="#home" class="nav-link">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a data-scroll href="#services" class="nav-link">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a data-scroll href="#pricing" class="nav-link">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a data-scroll href="#testimonial" class="nav-link">Testimonial</a>
                                    </li>
                                    <li class="nav-item">
                                        <a data-scroll href="#team" class="nav-link">Team</a>
                                    </li>
                                    <li class="nav-item">
                                        <a data-scroll href="#blog" class="nav-link">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a data-scroll href="#contact" class="nav-link">Contact</a>
                                    </li>
                                </ul>
                                <div class="nav-button">
                                    <ul class="nav navbar-nav navbar-right">
                                        <li>
                                            <button type="button" class="btn btn-primary navbar-btn btn-rounded">Try it
                                                Free</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/*<header className="py-10">*/}
            {/*    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">*/}
            {/*        <nav className="relative z-50 flex justify-between">*/}
            {/*            <div className="flex items-center md:gap-x-12">*/}
            {/*                <Link href="/" className="flex items-center space-x-1 font-bold">*/}
            {/*                    <Image*/}
            {/*                        alt={siteConfig.name}*/}
            {/*                        src="/logo.svg"*/}
            {/*                        className="w-8 h-8"*/}
            {/*                        width={32}*/}
            {/*                        height={32}*/}
            {/*                    />*/}
            {/*                    <span className="text-gray-950 dark:text-gray-300">Clean</span>*/}
            {/*                    <span className="text-blue-600">Next.js</span>*/}
            {/*                    <span className="text-gray-950 dark:text-gray-300">Starter</span>*/}
            {/*                </Link>*/}
            {/*                <div className="hidden md:flex md:gap-x-6"></div>*/}
            {/*            </div>*/}

            {/*            <div className="flex items-center gap-x-5 md:gap-x-8">*/}
            {/*                <HeaderLinks/>*/}
            {/*                <ThemedButton/>*/}
            {/*            </div>*/}
            {/*        </nav>*/}
            {/*    </div>*/}
            {/*</header>*/}
        </>
);
};

export default Header;
