import React from "react";
import Image from "next/image";
import Link from 'next/link';

const iframedescriptiondata = [
    {
        title: 'Save Time',
        alt: 'Save Time',
        description: "Don't waste time hunting for information. Ask for any summary or extract key information - all in seconds.",
        image: '/images/icon/iframedescription-1.png',
    },
    {
        title: 'Easier Comprehension',
        alt: 'Easier Comprehension',
        description: "Break down difficult concepts and receive contextual explanations effortlessly via PDF to AI Conversation.",
        image: '/images/icon/iframedescription-2.png',
    },
    {
        title: 'Learning Fun',
        alt: 'Learning Fun',
        description: "Keep your learning engaging and fun by interacting directly with your documents.",
        image: '/images/icon/iframedescription-3.png',
    },
];

const BannerSection = () => {
    return (
        <>
            <section className="pdfai-header w-full">
                <div className="pdfai-header-background-overlay"></div>
                <div className="container text-center relative z-[2]">
                    <div className="">
                        <span className="sub-title">Read Faster Your Documents</span>
                        <div className="title_whole position-relative ">
                            <h1 className="text-[55px] font-bold leading-[62px] text-[#293a51] capitalize">
                                Chat with Your PDFs, <br/>Powered by AI
                            </h1>
                        </div>
                        <p className="max-w-[700px] mx-auto text-[18px] text-[#6b7989] font-[500] leading-[28px] pt-[40px] pb-[50px] m-0">
                            Enough endless pages scrolling! Let your PDF AI summarize, analyze,
                            translate, extract takeaways, and give you answers and insights instantly
                            from documents. Read smarter, work faster!
                        </p>
                    </div>
                    <div className="mb-[25px]">
                        <Link
                            href="/"
                            rel="nofollow"
                            target="_blank"
                            className="theme_btn">
                            Chat with Your PDF for Free
                        </Link>
                    </div>
                    <div className="mt-[20px]">
                        <div className="font-[400] text-[13px] text-[#6b7989]">Powered by Openai & ‎Google Gemini
                            (Formerly Bard)
                        </div>
                    </div>
                </div>
            </section>
            <section className="pdfai-video w-full relative">
                <div className="max-w-[1140px] mx-auto">
                    <div className="col-lg-12">
                        {/* iframe */}
                        <div className="max-w-screen-xl w-full px-4 mx-auto relative">
                            {/* iframe 部分，底层视频 */}
                            <div
                                className="absolute inset-0 flex items-center justify-center z-0 max-w-[850px] mx-auto mt-[30px] mb-[80px]">
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
                        <div className=" mx-auto row mt-[30px] px-[10px]">

                            <div className="flex flex-row">
                                {iframedescriptiondata.map((item, index) => (
                                    <div key={index} className="col-lg-4">
                                        <div className="pdfai-video-description-iconbox equal-height">
                                            <div className="icon">
                                                <Image
                                                    src={item.image}
                                                    alt={item.alt}
                                                    width={62}
                                                    height={62}
                                                    className="w-auto h-[25px]"
                                                />
                                            </div>
                                            <div className="title_20">{item.title}</div>
                                            <p className="text-[15px] leading-[23px] font-[400] text-[#45485a]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerSection;
