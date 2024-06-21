"use client";

import React from 'react';
import Image from 'next/image';


const ChatSection: React.FC = () => {
    return (
        <>
            <section className="w-full pt-[40px] pb-[60px]">
                <div className="container">
                    <div className="section_title text-center">
                        <div className="overline-title"> PDF AI Chatbot -- Chat</div>
                        <h2 className="title">
                            Chat with Your AI PDF Right Away!
                        </h2>
                    </div>
                    <div className="flex flex-row mt-[40px]">
                        <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                            <div className="processing-block-two">
                                <div className="inner-box">
                                    <span className="count-text">1</span>
                                    <h3>Upload a PDF</h3>
                                    <p>No limitations on PDF uploads. Feel free to upload any file you want to chat with, one PDF per upload.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                            <div className="processing-block-two">
                                <div className="inner-box">
                                    <span className="count-text">2</span>
                                    <h3>Ask your pdf</h3>
                                    <p>Then, you can start chatting with PDF and ask as many questions as you want - no limitations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                            <div className="processing-block-two">
                                <div className="inner-box">
                                    <span className="count-text">3</span>
                                    <h3>Get your answer.</h3>
                                    <p>Our PDF AI will deliver answers in a few seconds. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more-btn">
                        <a href="/" className="theme-btn btn-three"><span>Drop a PDF here</span></a>
                    </div>
                </div>

            </section>
        </>
    );
};

export default ChatSection;
