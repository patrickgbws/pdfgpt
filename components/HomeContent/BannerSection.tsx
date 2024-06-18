import React from "react";
import Image from "next/image";
import Link from 'next/link';

const iframedescriptiondata = [
    {
        title: 'PDF to AI Conversation',
        alt: 'PDF to AI Conversation',
        description: "You can ask anything about your PDFs. Just type in what you need, and get responses in real-time.",
        image: '/images/icon/iframedescription-1.png',
    },
    {
        title: 'Save Time',
        alt: 'Save Time',
        description: "Don't waste time hunting for information. Ask for any summary or extract key information - all in seconds.",
        image: '/images/icon/iframedescription-2.png',
    },
    {
        title: 'Easy Learning',
        alt: 'Easy Learning',
        description: "We all know how things keep interesting when interacting with your documents while learning.",
        image: '/images/icon/iframedescription-3.png',
    },
];

const BannerSection = () => {
    return (
        <>
            <section className="bg-lightan w-full py-[60px] relative">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row justify-content-center pt-5 mt-5">
                        <div className="col-lg-8 text-center">
                            <p className="inline-block border-2 border-solid border-[#215ae7] px-[22px] py-[5px] rounded-[30px] font-[600] text-[13px] text-[#215ae7] uppercase">Read
                                Faster Your Documents</p>
                            <h1 className="mx-auto max-w-4xl font-display text-[48px] font-bold tracking-tight text-slate-900 sm:text-7xl capitalize">Chat
                                with Your PDFs, Powered by AI</h1>

                            <p className="mx-auto mt-8 max-w-3xl text-[18px] leading-[30px] tracking-tight text-slate-700 dark:text-slate-500">Enough
                                endless pages scrolling! Let your PDF AI summarize, analyze, translate, extract
                                takeaways, and give you answers and insights instantly from documents. Read smarter,
                                work faster!</p>

                            <div className="mt-5">
                                <a href="#" className="btn btn-primary capitalize">Chat with Your PDF for Free</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 mt-[65px]">
                        {/* iframe */}
                        <div className="max-w-screen-xl w-full px-4 mx-auto relative">
                            {/* iframe 部分，底层视频 */}
                            <div
                                className="absolute inset-0 flex items-center justify-center z-0 max-w-[820px] mx-auto mt-[30px] mb-[80px]">
                                <div className="relative w-full h-full"
                                     style={{paddingTop: "65%", borderRadius: "35px"}}>
                                    <iframe
                                        src="https://customer-k5rghq683w5sm3cf.cloudflarestream.com/08305713d67ee6e204c0435b7ae5ce7f/iframe?muted=true&amp;preload=true&amp;loop=true&amp;autoplay=true&amp;poster=https%3A%2F%2Fcustomer-k5rghq683w5sm3cf.cloudflarestream.com%2F08305713d67ee6e204c0435b7ae5ce7f%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                        allowFullScreen
                                        style={{
                                            borderRadius: "10px",
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            height: "100%",
                                            width: "100%"
                                        }}
                                    />
                                </div>
                            </div>
                            {/* 图片部分，顶层图片 */}
                            <div className="relative z-10">
                                <Image
                                    src="/images/iframe-bg.png"
                                    alt="Chat with Your PDF for Free"
                                    layout="responsive"
                                    width={1100} // 图片的原始宽度
                                    height={600} // 图片的原始高度
                                    quality={100} // 设置图片优化质量，可以在1-100之间
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        {/* iframedescription */}
                        <div className=" mx-auto row mt-3 pt-4">
                            {iframedescriptiondata.map((item, index) => (
                                <div key={index} className="col-lg-4">
                                    <div className="service-box mt-4">
                                        <div className="service-icon icon-xxl uim-icon-primary flex justify-center items-center">
                                            <Image
                                                src={item.image}
                                                alt={item.alt}
                                                width={62}
                                                height={62}
                                                className="w-auto h-[33px]"
                                            />
                                        </div>
                                        <h5 className="f-20 mt-4 pt-2">{item.title}</h5>
                                        <p className="text-muted mt-3 mb-0">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerSection;
