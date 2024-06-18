import FooterLinks from "@/components/footer/FooterLinks";
import FooterProducts from "@/components/footer/FooterProducts";
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
        <footer>
            <section className="bg-footer bg-lightan">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mt-3">
                                <p className="flex items-center mb-[20px]">
                                    <Image
                                        src="/images/logo.png"
                                        alt="PDF AI Chatbot-logo"
                                        width={100}
                                        height={22}
                                        className="h-[40px] w-auto"
                                    />
                                    <span className="text-[25px] font-bold ml-[8px]">{authors[0].name}</span>
                                </p>

                                <p className="text-muted mt-4 pt-1">Read and learn faster than ever with our PDF AI tool. Instantly get what you need from lengthy documents, saving you time and effort. </p>
                                <p className="text-muted mt-1 pt-1">You are reaching a new level of efficiency!</p>
                            </div>
                        </div>

                        <div className="col-lg-7 offset-lg-1">
                            <div className="row">
                                <div className="col-lg-4">
                                    {FooterProductsNavLinks.map((section) => (
                                        <div key={section.title} className="mt-4">
                                            <h5 className="f-18">{section.title}</h5>
                                            <ul className="list-unstyled footer-link my-4">
                                                {section.children.map((item) => (
                                                    <li key={item.title}>
                                                        <Link href={item.href} legacyBehavior><a>{item.title}</a></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-lg-4">
                                    {FooterCompareNavLinks.map((section) => (
                                        <div key={section.title} className="mt-4">
                                            <h5 className="f-18">{section.title}</h5>
                                            <ul className="list-unstyled footer-link my-4">
                                                {section.children.map((item) => (
                                                    <li key={item.title}>
                                                        <Link href={item.href} legacyBehavior><a>{item.title}</a></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-lg-4">
                                    {FooterAboutNavLinks.map((section) => (
                                        <div key={section.title} className="mt-4">
                                            <h5 className="f-18">{section.title}</h5>
                                            <ul className="list-unstyled footer-link my-4">
                                                {section.children.map((item) => (
                                                    <li key={item.title}>
                                                        <Link href={item.href} legacyBehavior><a>{item.title}</a></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>

                    <hr className="my-3 border-t-1 border-solid border-[#9197b5] border-opacity-25"/>

                    <div className="row">
                        <div className="col-lg-12">
                            <p className="text-center text-muted mb-0 f-15">
                                {`Copyright © ${currentYear} `} All Rights Reserved By <Link
                                href="/">{authors[0].name}</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </footer>
    );
};

export default Footer;
