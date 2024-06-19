"use client"; // 添加这行

import React, {useEffect, useState} from "react";
import HeaderLinks from "@/components/header/HeaderLinks";
import {siteConfig} from "@/config/site";
import Image from "next/image";
import Link from "next/link";


const Header = () => {
    const {authors} = siteConfig;

    return (
        <header className="nk-header nk-header-landing is-theme">
            <div className="nk-header-main">
                <div className="container">
                    <div className="nk-header-wrap">
                        <div className="nk-header-logo">
                            <a href="index.html" className="logo-link">
                                <div className="logo-wrap">
                                    <Link href="/" className="flex items-center space-x-1 font-bold">
                                        <Image
                                            src="/images/logo.png"
                                            alt="PDF AI Chatbot-logo"
                                            width={100}
                                            height={22}
                                            className="h-[40px] w-auto mr-[8px]"/>
                                        <span>{authors[0].name}</span>
                                    </Link>
                                </div>
                            </a>
                        </div>
                        <nav className="nk-header-menu nk-navbar navbar-mobile">
                            <div>
                                <ul className="nk-nav">
                                    <li className="nk-nav-item">
                                        <a href="#nk-section-homepages" className="nk-nav-link">
                                            <span className="nk-nav-text">Home</span>
                                        </a>
                                    </li>
                                    <li className="nk-nav-item">
                                        <a href="#nk-section-homepages" className="nk-nav-link">
                                            <span className="nk-nav-text">Tools</span>
                                        </a>
                                    </li>
                                    <li className="nk-nav-item">
                                        <a href="#nk-section-homepages" className="nk-nav-link">
                                            <span className="nk-nav-text">About us</span>
                                        </a>
                                    </li>
                                    <li className="nk-nav-item">
                                        <a href="https://themepanthers.com/wp/copygen/demos/documentation"
                                           target="_blank" className="nk-nav-link">
                                            <span className="nk-nav-text">Contact us</span>
                                        </a>
                                    </li>
                                    <li className="nk-nav-item">
                                        <a href="https://steelthemes.ticksy.com/submit/#100021264" target="_blank"
                                           className="nk-nav-link">
                                            <span className="nk-nav-text">Privacy Policy</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="nk-navbar-btn d-md-none">
                                    <ul className="nk-btn-group sm justify-content-center">
                                        <li className="w-100">
                                            <a href="https://1.envato.market/NioLand" target="_blank"
                                               className="btn btn-primary w-100">
                                                <svg className="me-1" width="20" height="20" viewBox="0 0 20 20"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.1801 5.01841L15.236 2.35175C14.9293 1.93508 14.441 1.66675 13.8893 1.66675H6.11181C5.56014 1.66675 5.07181 1.93425 4.76848 2.34675L4.76514 2.35175L2.82098 5.01841C2.62098 5.29008 2.50098 5.63091 2.50098 6.00008V15.3334C2.50098 15.3376 2.50098 15.3434 2.50098 15.3484C2.50098 16.9892 3.82514 18.3209 5.46264 18.3334H14.5376C16.1768 18.3209 17.501 16.9892 17.501 15.3484C17.501 15.3434 17.501 15.3376 17.501 15.3326V15.3334V6.00008C17.501 5.63091 17.381 5.29008 17.1776 5.01341L17.181 5.01841H17.1801ZM6.11098 3.33341H13.8885L15.1035 5.00008H4.89514L6.11098 3.33341ZM15.8335 15.3334C15.8335 15.3384 15.8335 15.3451 15.8335 15.3517C15.8335 16.0717 15.2551 16.6559 14.5385 16.6667H14.5376H5.46348C4.74514 16.6559 4.16681 16.0717 4.16681 15.3517C4.16681 15.3451 4.16681 15.3392 4.16681 15.3326V15.3334V6.66675H15.8335V15.3334ZM6.25014 8.54175C6.25014 8.08175 6.62348 7.70842 7.08348 7.70842C7.54348 7.70842 7.91681 8.08175 7.91681 8.54175C7.91681 9.69258 8.84931 10.6251 10.0001 10.6251C11.151 10.6251 12.0835 9.69258 12.0835 8.54175C12.0835 8.08175 12.4568 7.70842 12.9168 7.70842C13.3768 7.70842 13.7501 8.08175 13.7501 8.54175C13.7501 10.6126 12.071 12.2917 10.0001 12.2917C7.92931 12.2917 6.25014 10.6126 6.25014 8.54175Z"
                                                        fill="white"></path>
                                                </svg>
                                                <span>Purchase</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="nk-header-action">
                            <ul className="nk-btn-group sm justify-content-center">
                                <li className="d-none d-md-block">
                                    <a href="https://1.envato.market/CopyGenWP" target="_blank"
                                       className="btn btn-primary">
                                        <span>Try For Free</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
