"use client"; // 添加这行

import React from "react";
import Image from "next/image";
import Link from 'next/link';

const KeyFeaturesSection = () => {
    return (
        <>
            <section className="w-full relative pb-[30px] ">
                <div className="container">
                    <div className="sec-title mb-[40px] text-center">
                        <span className="sub-title">PDF AI Chatbot -- Key Features</span>
                        <h2>Key Features of PDF AI Chatbot</h2>
                        {/*<p className="max-w-[900px] mx-auto text-[15px] leading-[27px] capitalize text-[#6d7c90] mt-4">*/}
                        {/*    At PDF AI Chatbot, we&apos;re a team of AI experts who get what it&apos;s like to deal with*/}
                        {/*    dense, multi-page PDFs. Making it easier for you to find, summarize, and understand all*/}
                        {/*    that information is why PDF AI Chatbot was created - it works no matter what kind of*/}
                        {/*    PDF content you want to explore.*/}
                        {/*</p>*/}
                    </div>
                    <div className="flex flex-row flex-wrap mt-[50px]">
                        <div className="col-lg-4 col-md-6 col-sm-12 features-block">
                            <div className="features-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-22"></i></div>
                                    <h3>AI PDFGPT Powered by ChatGPT 4.0</h3>
                                    <p>
                                        Get quick and precise responses! With ChatGPT 4.0,
                                        Gemini, and other leading AI models, XXX taps into advanced tech for
                                        seamless document interaction, featuring smooth document summarization,
                                        extraction, and creation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 features-block">
                            <div className="features-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-22"></i></div>
                                    <h3>AI PDF Reader</h3>
                                    <p>
                                        You don't have to waste hours reading documents,
                                        because XXX reads them in seconds and has the answers to your questions.
                                        Just send the document and ask away - it's that easy.
                                        No matter what you need to know, our PDF AI's got it covered.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 features-block">
                            <div className="features-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-22"></i></div>
                                    <h3>AI PDF Analyzer</h3>
                                    <p>
                                        Reading a PDF is one thing, but understanding it is another. That's where
                                        our AI PDF Analyzer shines. It can identify key terms, detect patterns,
                                        and even map out the structure of a document.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 features-block">
                            <div className="features-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-22"></i></div>
                                    <h3>PDF AI Summarizer</h3>
                                    <p>
                                        Get the highlights! When you need to understand long PDFs without reading
                                        every page, our AI summarizer can help. Just ask, and it quickly creates
                                        a concise summary, giving you the key points from complex documents in
                                        a fraction of the time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 features-block">
                            <div className="features-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-22"></i></div>
                                    <h3>AI PDF Image to Text (OCR)</h3>
                                    <p>
                                        Sometimes you need to turn an image in a PDF into text, whether it's for
                                        editing or sharing. Our AI PDF to Text feature does exactly that. It
                                        converts PDFs into editable text files, even if they're scanned or
                                        image-based. Now you can easily copy, paste, and edit to your heart's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 features-block">
                            <div className="features-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-22"></i></div>
                                    <h3>User-Friendly PDF AI Chatting Interface</h3>
                                    <p>
                                        Our dashboard is designed to be simple yet powerful,
                                        giving you quick access to a variety of handy tools and features.
                                        The menu has everything you need to work with your PDFs, from rotating
                                        clockwise/counterclockwise to text selection, hand tool, zoom in/out,
                                        and more. Feel free to customize your PDF view and interact with it
                                        just the way you want.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 features-block">
                            <div className="features-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-22"></i></div>
                                    <h3>Multilingual PDF ChatBot</h3>
                                    <p>
                                        Global reach! Our AI PDF tool works with any language. English, Spanish,
                                        Mandarin - whatever it is, our system handles it with ease.
                                        No more language barriers in your workflow.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 features-block">
                            <div className="features-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-22"></i></div>
                                    <h3>Source Referencing</h3>
                                    <p>
                                        Know the source! XXX makes it easy to find
                                        the origin of any information within your PDF.
                                        No more flipping through pages - the answers contain references
                                        that point you to the exact source in the original document.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default KeyFeaturesSection;
