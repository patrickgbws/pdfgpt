import {siteConfig} from "@/config/site";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const FooterProductsNavLinks = [
    {
        title: 'Products',
        children: [
            {href: '/pdf-chatbot', title: 'PDF Chatbot'},
            {href: '/use-cases', title: 'Use Cases'},
            {href: '/blog', title: 'Blog'},
            {href: '/pdf-compressor', title: 'PDF Compressor'},
            {href: '/pdf-to-png', title: 'PDF to PNG'},
            {href: '/pdf-merger', title: 'PDF Merger'},
            {href: '/more-pdf-tools', title: 'More PDF Tools'},
        ]
    },
];

const FooterCompareNavLinks = [
    {
        title: 'Compare',
        children: [
            {href: '/chatpdf-alternative', title: 'ChatPDF Alternative'},
            {href: '/pdfai-alternative', title: 'PDFAI Alternative'},
            {href: '/askyourpdf-alternative', title: 'AskYourPDF Alternative'},
            {href: '/humata-alternative', title: 'Humata Alternative'},
        ]
    },
];

const FooterAboutNavLinks = [
    {
        title: 'About',
        children: [
            {href: 'about-us', title: 'About Us'},
            {href: 'contact-us', title: 'Contact Us'},
            {href: 'terms-and-conditions', title: 'Terms and Conditions'},
            {href: 'privacy-policy', title: 'Privacy Policy'},
        ]
    },
];

const Footer = () => {
    const d = new Date();
    const currentYear = d.getFullYear();
    const {authors} = siteConfig;

    return (
        <footer className="bg-[#020202] relative">
            <section>
                <div className="container">
                    <div className="py-[60px]">
                        <div className="flex flex-row justify-between clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget logo-widget">
                                    <figure className="mb-[30px]">
                                        <Link href="/" legacyBehavior>
                                            <a className="flex flex-row items-center text-[#FFFFFF] text-[23px] font-bold">
                                                <Image
                                                    src="/images/logo.png"
                                                    alt="PDF AI Chatbot-logo"
                                                    width={100}
                                                    height={22}
                                                    className="h-[40px] w-auto mr-[8px]"/>
                                                {authors[0].name}
                                            </a>
                                        </Link>
                                    </figure>
                                    <p className="max-w-[500px] text-[16px] text-[#A9A7B0] leading-[28px] mb-[20px]">
                                        Read and learn faster than ever with our PDF AI
                                        tool. Instantly get what you need from lengthy documents, saving you time and
                                        effort.
                                    </p>
                                    <p className="max-w-[500px] text-[16px] text-[#A9A7B0] leading-[28px] mb-[40px]">
                                        You are reaching a new level of efficiency!
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                {FooterProductsNavLinks.map((section) => (
                                    <div key={section.title} className="ml-[100px] footer-widget links-widget ">
                                        <h5 className="relative block mb-[15px] text-[#ffffff] text-[24px] leading-[32px] font-[600]">{section.title}</h5>
                                        <div className="widget-content">
                                            <ul className="list-unstyled footer-link my-4">
                                                {section.children.map((item) => (
                                                    <li key={item.title} className="relative block text-[16px] text-[#A9A7B0] leading-[30px]">
                                                        <Link href={item.href} legacyBehavior><a className="hover:text-[#3f94fd]">{item.title}</a></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                {FooterCompareNavLinks.map((section) => (
                                    <div key={section.title} className="ml-[70px] footer-widget links-widget ">
                                        <h5 className="relative block mb-[15px] text-[#ffffff] text-[24px] leading-[32px] font-[600]">{section.title}</h5>
                                        <div className="widget-content">
                                            <ul className="list-unstyled footer-link my-4">
                                                {section.children.map((item) => (
                                                    <li key={item.title} className="relative block text-[16px] text-[#A9A7B0] leading-[30px]">
                                                        <Link href={item.href} legacyBehavior><a className="hover:text-[#3f94fd]">{item.title}</a></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                {FooterAboutNavLinks.map((section) => (
                                    <div key={section.title} className="ml-[50px] footer-widget links-widget ">
                                        <h5 className="relative block mb-[15px] text-[#ffffff] text-[24px] leading-[32px] font-[600]">{section.title}</h5>
                                        <div className="widget-content">
                                            <ul className="list-unstyled footer-link my-4">
                                                {section.children.map((item) => (
                                                    <li key={item.title} className="relative block text-[16px] text-[#A9A7B0] leading-[30px]">
                                                        <Link href={item.href} legacyBehavior><a className="hover:text-[#3f94fd]">{item.title}</a></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#111111] relative py-[20px]">
                    <p className="text-[#A9A7B0] text-center my-0">
                        {`Copyright © ${currentYear} `} All Rights Reserved By
                        <Link href="/" className="text-[#3f94fd]"> {authors[0].name}</Link>
                    </p>
                </div>
            </section>
        </footer>
);
};

export default Footer;
