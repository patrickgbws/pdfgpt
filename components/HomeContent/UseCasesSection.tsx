"use client";

import React, {useRef, useState} from 'react';
import Image from 'next/image';

const tags = [
    { alt: 'PDF AI - Book.pdf', text: 'Book.pdf' },
    { alt: 'PDF AI - Financial Report.pdf', text: 'Financial Report.pdf' },
    { alt: 'PDF AI - Contact.pdf', text: 'Contact.pdf' },
    { alt: 'PDF AI - User Manual.pdf', text: 'User Manual.pdf' },
    { alt: 'PDF AI - Invoice.pdf', text: 'Invoice.pdf' },
    { alt: 'PDF AI - Scientific Paper.pdf', text: 'Scientific Paper.pdf' },
    { alt: 'PDF AI - Marketing Brochure.pdf', text: 'Marketing Brochure.pdf' },
    { alt: 'PDF AI - Newsletter.pdf', text: 'Newsletter.pdf' },
];

const tags2 = [
    { alt: 'PDF AI - Research Paper.pdf', text: 'Research Paper.pdf' },
    { alt: 'PDF AI - Business Proposal.pdf', text: 'Business Proposal.pdf' },
    { alt: 'PDF AI - Survey Results.pdf', text: 'Survey Results.pdf' },
    { alt: 'PDF AI - Magazine.pdf', text: 'Magazine.pdf' },
    { alt: 'PDF AI - Investments Prospectus.pdf', text: 'Investments Prospectus.pdf' },
    { alt: 'PDF AI - Thesis Proposal.pdf', text: 'Thesis Proposal.pdf' },
    { alt: 'PDF AI - Patent Application.pdf', text: 'Patent Application.pdf' },
    { alt: 'PDF AI - Textbook.pdf', text: 'Textbook.pdf' },
];

const tags3 = [
    { alt: 'PDF AI - Lecture Notes.pdf', text: 'Lecture Notes.pdf' },
    { alt: 'PDF AI - Training Manual.pdf', text: 'Training Manual.pdf' },
    { alt: 'PDF AI - Annual Report.pdf', text: 'Annual Report.pdf' },
    { alt: 'PDF AI - Business Case Analysis.pdf', text: 'Business Case Analysis.pdf' },
    { alt: 'PDF AI - Manga.pdf', text: 'Manga.pdf' },
    { alt: 'PDF AI - Exam Paper.pdf', text: 'Exam Paper.pdf' },
    { alt: 'PDF AI - Academic Journal Article.pdf', text: 'Academic Journal Article.pdf' },
    { alt: 'PDF AI - Workshop Handouts.pdf', text: 'Workshop Handouts.pdf' },
];

const UseCasesSection: React.FC = () => {
    // 创建多个引用以控制动画暂停和恢复
    const scrollRef1 = useRef<HTMLDivElement>(null);
    const scrollRef2 = useRef<HTMLDivElement>(null);
    const scrollRef3 = useRef<HTMLDivElement>(null);

    // 定义状态来控制滚动速度和方向
    const [speed, setSpeed] = useState(25); // 滚动速度，单位秒
    const [direction, setDirection] = useState('left'); // 滚动方向

    // 当鼠标进入时暂停滚动
    const handleMouseEnter = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.classList.add('paused');
        }
    };

    // 当鼠标离开时恢复滚动
    const handleMouseLeave = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.classList.remove('paused');
        }
    };

    return (
        <>
            <section className="w-full pb-[60px]">
                <div className="container">
                    <div className="section_title text-center">
                        <div className="overline-title"> PDF AI Chatbot -- Use Cases</div>
                        <h2 className="title">
                            AI-Powered PDF Interaction for Any Use Cases
                        </h2>
                        <p className="lead">
                            At PDF AI Chatbot, we&apos;re a team of AI experts who get what it&apos;s like to deal with
                            dense, multi-page PDFs. Making it easier for you to find, summarize, and understand
                            all that information is why PDF AI Chatbot was created - it works no matter what kind of
                            PDF content you want to explore.
                        </p>
                    </div>
                </div>
                <div className="max-w-[1280px] relative mx-auto w-full mt-[40px] scrolling-wrapper" onMouseEnter={() => handleMouseEnter(scrollRef1)} onMouseLeave={() => handleMouseLeave(scrollRef1)}>
                    <div className="scrolling-content" ref={scrollRef1} style={{ animationDuration: `${speed}s`, animationDirection: direction === 'left' ? 'normal' : 'reverse' }}>
                        <ul className="flex items-center justify-center features-list">
                            {[...tags, ...tags].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 gradient-border text-gray-700 text-[17px]">
                                    <Image src="/images/icon/pdf.png" alt={item.alt} width={18} height={18} className="inline-block w-[18px] h-[18px]" />
                                    <p>{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="max-w-[1280px] relative mx-auto w-full mt-[20px] scrolling-wrapper" onMouseEnter={() => handleMouseEnter(scrollRef2)} onMouseLeave={() => handleMouseLeave(scrollRef2)}>
                    <div className="scrolling-content" ref={scrollRef2} style={{ animationDuration: `${speed}s`, animationDirection: direction === 'left' ? 'normal' : 'reverse' }}>
                        <ul className="flex items-center justify-center features-list">
                            {[...tags2, ...tags2].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 gradient-border text-gray-700 text-[17px]">
                                    <Image src="/images/icon/pdf.png" alt={item.alt} width={18} height={18} className="inline-block w-[18px] h-[18px]" />
                                    <p>{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="max-w-[1280px] relative mx-auto w-full mt-[20px] scrolling-wrapper" onMouseEnter={() => handleMouseEnter(scrollRef3)} onMouseLeave={() => handleMouseLeave(scrollRef3)}>
                    <div className="scrolling-content" ref={scrollRef3} style={{ animationDuration: `${speed}s`, animationDirection: direction === 'left' ? 'normal' : 'reverse' }}>
                        <ul className="flex items-center justify-center features-list">
                            {[...tags3, ...tags3].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 gradient-border text-gray-700 text-[17px]">
                                    <Image src="/images/icon/pdf.png" alt={item.alt} width={18} height={18} className="inline-block w-[18px] h-[18px]" />
                                    <p>{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="w-full pb-[50px]">
                <div className="container">
                    <div className="flex flex-row items-center pb-[60px]">
                        <div className="col-lg-6 section_title pr-[45px]">
                            <h3 className="title2">Professionals – Unlock Efficiency with Our PDFGPT</h3>
                            <p className="lead mb-[20px]">
                                Chat with your PDFs, and get quick summaries and insights, no matter how complex or endless the documents.
                            </p>
                            <div className="relative">
                                <ul className="use-cases-list-box">
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Summarize the main findings of the report.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Compare the financial statements of two quarters in the document</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Identify the financial highlights from the annual report.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Explain any technical terms in the PDF you’re curious about.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Image src="/images/UseCase-1.jpg" alt="Professionals – Unlock Efficiency with Our PDFGPT" width={1024} height={696} className="inline-block w-[100%] h-auto rounded-[15px]" />
                        </div>
                    </div>

                    <div className="flex flex-row items-center pb-[60px]">
                        <div className="col-lg-6 pr-[45px]">
                            <Image src="/images/UseCase-1.jpg" alt="Professionals – Unlock Efficiency with Our PDFGPT" width={1024} height={696} className="inline-block w-[100%] h-auto rounded-[15px]" />
                        </div>
                        <div className="col-lg-6 section_title">
                            <h3 className="title2">Students – Get the Most Out of Your Studies with XXX AI Chat Tool</h3>
                            <p className="lead mb-[20px]">
                                Balancing assignments, notes, and research papers with everything else in life can be tough. Let XXX PDFGPT help you manage it all.
                            </p>
                            <div className="relative">
                                <ul className="use-cases-list-box">
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Summarize main ideas from your lecture notes.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Simplify the X concept from the PDF textbook for easier understanding.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Identify the themes and symbols in the literary work and list them.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Create a study guide with Q&A format.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Generate a title for your essay</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center pb-[60px]">
                        <div className="col-lg-6 section_title pr-[45px]">
                            <h3 className="title2">Researchers – Supercharge Your Research with XXX Chatbot</h3>
                            <p className="lead mb-[20px]">
                                Let XXX make your research process smoother by handling dense academic papers, data-heavy reports, and complex documents.
                            </p>
                            <div className="relative">
                                <ul className="use-cases-list-box">
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Detail the research methodology used in the material.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Compare the findings of 2 studies in the document.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Explain the statistical data in the report.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Gather references related to X topic from the research paper.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Image src="/images/UseCase-1.jpg" alt="Professionals – Unlock Efficiency with Our PDFGPT" width={1024} height={696} className="inline-block w-[100%] h-auto rounded-[15px]" />
                        </div>
                    </div>

                    <div className="flex flex-row items-center">
                        <div className="col-lg-6 pr-[45px]">
                            <Image src="/images/UseCase-1.jpg" alt="Professionals – Unlock Efficiency with Our PDFGPT" width={1024} height={696} className="inline-block w-[100%] h-auto rounded-[15px]" />
                        </div>
                        <div className="col-lg-6 section_title">
                            <h3 className="title2">Marketers – Boost Your Sales Process with PDF to AI Interaction</h3>
                            <p className="lead mb-[20px]">
                                In the fast-paced world of sales and marketing, you need quick access to information, not lengthy reads.
                            </p>
                            <div className="relative">
                                <ul className="use-cases-list-box">
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Provide a detailed breakdown of the budget allocations in the report</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Develop key talking points for a sales pitch based on the marketing material</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Summarize the client feedback data in the survey report.</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-row items-center">
                                            <div className="use-cases-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                        fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>Analyze the sales data and identify trends from the report.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default UseCasesSection;
