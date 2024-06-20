"use client"; // Add this line for Next.js client-side component

import React, {useState} from 'react';
import Link from "next/link";

const FAQItemmessage = [
    {
        question_text: "Q1: What AI model does XXX use, and is it better than ChatPDF?",
        answer_text: "A: XXX combines a range of AI models, including OpenAI's ChatGPT, Google Gemini, Together AI, Mixtral, Pinecone, " +
            "and LangChain. It's one of the most versatile Chat PDF tools out there, and some say it's one of the best alternatives to ChatPDF. ",
    },
    {
        question_text: "Q2: Is XXX PDFGPT free to use?",
        answer_text: "A: Yes, at the moment, XXX is completely free to use. You can read PDFs, summarize them, and more without paying a dime." +
            " We're doing this to get user feedback and improve the tool, so dive in and give it a try while it's free!",
    },
    {
        question_text: "Q3: What are the limitations of XXX?",
        answer_text: "A: XXX currently works with PDF files only. We don't support other formats yet, but we're building more features to make working with PDFs even easier, like a PDF compressor, splitter, editor, and other tools, and they are all free!",
    },
    {
        question_text: "Q4: How do I use XXX chatbot?",
        answer_text: "A: It's super easy. Just drag and drop a PDF file onto the workspace on our site, and you can start chatting with it.",
    },
    {
        question_text: "Q5: Is XXX open-source?",
        answer_text: "A: Yes, XXX is open-source, and we're happy to get contributions from anyone who wants to help. If you have ideas or code to contribute, we'd love to hear from you.",
    },
    {
        question_text: "Q6: Can XXX understand text in images within PDFs?",
        answer_text: "A: Not directly. However, we offer OCR (Optical Character Recognition), which can extract text from images. You can access this feature through the chat interface. It's not built into the AI model itself, but it's a handy workaround when you need to read text from images.",
    },
    {
        question_text: "Q7: How does XXX work?",
        answer_text: "A: XXX uses advanced natural language processing and AI to interact with PDFs. It creates a semantic index for each paragraph, so it can understand the document's structure and content. That’s why it’s so good at finding answers to your questions quickly.",
    },
];

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active state
    };

    return (
        <>
            <section className="pdfai-faq w-full py-[50px]">
                <div className="container">
                    <div className="section_title text-center">
                        <div className="overline-title">PDF AI Chatbot -- FAQs</div>
                        <h2 className="title">Frequently Asked Questions</h2>
                    </div>
                </div>
                <div className="container flex flex-row mt-[40px]">
                    <div className="w-[5%]">
                        <div className="faq-widget-wrap"></div>
                    </div>
                    <div className="w-[90%]">
                        <section className="block_faq style_two">
                            <div className="accordion-box">
                                {FAQItemmessage.map((faq, index) => (
                                    <div
                                        key={index}
                                        className={`accordion trans ${activeIndex === index ? 'active-block' : ''}`}
                                    >
                                        <div
                                            className={`question faq_header ${activeIndex === index ? 'active' : ''}`}
                                            onClick={() => handleToggle(index)}
                                        >
                                            <div className="question_box">
                                                <div className="title_no_a_18">{faq.question_text}</div>
                                                <div className="plus_mins">
                                                    <div className={`${activeIndex === index ? 'hidden' : 'block'}`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
                                                            <path fill="#6B7989"
                                                                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                                        </svg>
                                                    </div>
                                                    <div className={`${activeIndex === index ? 'block' : 'hidden'}`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16">
                                                            <path fill="#3f94fd"
                                                                  d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={`answer accordion-content ${activeIndex === index ? 'current' : 'hidden'}`}>
                                            {faq.answer_text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                    <div className="w-[5%]">
                        <div className="faq-widget-wrap"></div>
                    </div>
                </div>
            </section>
            <section className="pdfai-cat w-full">
                <div className="container">
                    <div className="inner-container">
                        <div className="catshape"></div>
                        <div className="catcontents text-center mx-auto">
                            <div className="section_title type_one g_enable">
                                <div className="overlinetitle">BOOST YOUR WRITING PRODUCTIVITY</div>
                                <div className="title_whole position-relative">
                                    <h2 className="cattitle">
                                        Talk to Your PDF AI Assistant - Straight to Knowledge Via Instant Q&A
                                    </h2>
                                </div>
                                <p className="lead mb-[40px] px-[50px] py-[20px]">Streamline your PDF workflow with our PDF AI Chat tool. Talk to it, ask it what you need, and watch the answers roll in.</p>
                            </div>
                            <div>
                                <Link
                                    href="/"
                                    rel="nofollow"
                                    target="_blank"
                                    className="theme_btn">
                                    Get Started for Free
                                </Link>
                            </div>
                            <div className="mt-[25px]">
                                <ul className="flex flex-row justify-center">
                                    <li className="flex flex-row items-center mx-[10px]">
                                        <div className="cat-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path
                                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                    fill="currentColor"/>
                                            </svg>
                                        </div>
                                        <span>ChatGPT 4</span>
                                    </li>
                                    <li className="flex flex-row items-center mx-[10px]">
                                        <div className="cat-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path
                                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                    fill="currentColor"/>
                                            </svg>
                                        </div>
                                        <span>PDF AI Chatbot</span>
                                    </li>
                                    <li className="flex flex-row items-center mx-[10px]">
                                        <div className="cat-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path
                                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                                    fill="currentColor"/>
                                            </svg>
                                        </div>
                                        <span>PDF Tools</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                    className="elementor-element elementor-element-e46feac elementor-widget elementor-widget-copygen-themebtns-v1"
                                    data-id="e46feac" data-element_type="widget"
                                    data-widget_type="copygen-themebtns-v1.default">
                                    <div className="elementor-widget-container">

                                    </div>
                                </div>
                                {/*<div>*/}
                                {/*    <div>*/}
                                {/*        <div>*/}
                                {/*            <ul>*/}
                                {/*                <li>*/}
                                {/*                    <div className="d-flex">*/}
                                {/*                        <div className="icon"><i className=" copy-check-circle-fill"></i></div>*/}
                                {/*                        <a className="links" href="#">No credit card required</a>*/}
                                {/*                    </div>*/}
                                {/*                </li>*/}
                                {/*                <li>*/}
                                {/*                    <div className="d-flex">*/}
                                {/*                        <div className="icon"><i class=" copy-check-circle-fill"></i></div>*/}
                                {/*                        <a class="links" href="#">Cancel anytime </a>*/}
                                {/*                    </div>*/}
                                {/*                </li>*/}
                                {/*                <li>*/}
                                {/*                    <div class="d-flex">*/}
                                {/*                        <div class="icon"><i class=" copy-check-circle-fill"></i></div>*/}
                                {/*                        <a class="links" href="#">10+ tools to expolore </a>*/}
                                {/*                    </div>*/}
                                {/*                </li>*/}
                                {/*            </ul>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        {/*<div className="text-box">*/}
                        {/*    <h2>Talk to Your PDF AI Assistant <br/>- Straight to Knowledge Via Instant Q&A</h2>*/}
                        {/*    <p className="text-[16px] text-[#6a6a6a]">*/}
                        {/*        Streamline your PDF workflow with our PDF AI Chat tool. Talk to it,*/}
                        {/*        ask it what you need, and watch the answers roll in*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        {/*<div className="btn-box">*/}
                        {/*    <a href="#" className="btn btn-primary capitalize"><span>Get Started for Free</span></a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqSection;
