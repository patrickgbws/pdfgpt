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
                    <div className="flex flex-row">
                        <div className="feature-top mb-50 tp_fade_bottom">
                            <div className="feature-item feature-item-1">
                                <h5 className="feature-item-title">
                                    Welcome screen
                                </h5>
                                <p>
                                    Lorem Ipsum is simply dummy text’s of the one most printing and
                                    typesetting is an one of the best.
                                </p>
                            </div>
                            <div className="feature-item feature-item-2"><h5 className="feature-item-title">One-click
                                management</h5><p>Lorem Ipsum is simply dummy text’s of the one most printing and
                                typesetting is an one of the best.</p></div>
                            <div className="feature-item feature-item-3"><h5 className="feature-item-title">Custom
                                greetings</h5><p>Lorem Ipsum is simply dummy text’s of the one most printing and
                                typesetting is an one of the best.</p></div>
                        </div>
                        <div className={`col-xl-3 col-lg-4 col-md-6 tp_fade_left`} data-fade-from="left"
                             style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
                            <div className="choose-item mb-30">
                                <span className="choose-item-count">01</span>
                                <div className="choose-item-img">
                                    <Image src="/images/icon/pdf.png" alt="Image Not Found" width={44} height={44}/>
                                </div>
                                <div className="choose-item-content">
                                    <p>Upload the PDF file you want to chat with</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-xl-3 col-lg-4 col-md-6 tp_fade_left`} data-fade-from="left"
                             style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
                            <div className="choose-item mb-30">
                                <span className="choose-item-count">02</span>
                                <div className="choose-item-img">
                                    <Image src="/images/icon/pdf.png" alt="Image Not Found" width={44} height={44}/>
                                </div>
                                <div className="choose-item-content">
                                    <p>Ask your pdf</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-xl-3 col-lg-4 col-md-6 tp_fade_left`} data-fade-from="left"
                             style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
                            <div className="choose-item mb-30">
                                <span className="choose-item-count">03</span>
                                <div className="choose-item-img">
                                    <Image src="/images/icon/pdf.png" alt="Image Not Found" width={44} height={44}/>
                                </div>
                                <div className="choose-item-content">
                                    <p>Get your answer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default ChatSection;
