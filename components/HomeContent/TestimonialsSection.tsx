"use client"; // 添加这行

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const testimonials = [
    {
        name: 'Jonathan Miller',
        content: "Instead of spending hours digging through lengthy documents, I can now quickly find specific clauses and terms with just a few simple queries.",
        role: 'Senior Partner',
        unit: 'Miller & Associates',
        img: '/images/CustomersReview-Jonathan Miller.jpg',
        imgalt: "Jonathan Miller - Instead of spending hours digging through lengthy documents, I can now quickly find specific clauses and terms with just a few simple queries.",
        tags: ['#PDFAI', '#PDFCHAT']
    },
    {
        name: 'Emily Roberts',
        content: "Finding information in PDFs used to be a huge headache. Since I started using XXX, it's so much easier. I just type in a question and it gives me the exact info I need. My students love that I can answer their questions quickly!",
        role: 'Teacher',
        unit: 'Lincoln High School',
        img: '/images/CustomersReview-Emily Roberts.jpg',
        imgalt: "Emily Roberts - Finding information in PDFs used to be a huge headache. Since I started using XXX, it's so much easier. I just type in a question and it gives me the exact info I need. My students love that I can answer their questions quickly!",
        tags: ['#PDFCHAT', '#DocumentChat', '#PDFAI']
    },
    {
        name: 'Sarah Thompson',
        content: "Being able to quickly summarize a long PDF has been a lifesaver. XXX lets me get the key points without reading every page. It’s great because now I have more time for my clients, and they really appreciate that.",
        role: 'Financial Advisor',
        unit: 'Thompson Wealth Management',
        img: '/images/CustomersReview-Sarah Thompson.jpg',
        imgalt: "Sarah Thompson - Being able to quickly summarize a long PDF has been a lifesaver. XXX lets me get the key points without reading every page. It’s great because now I have more time for my clients, and they really appreciate that.",
        tags: ['#AIInteraction', '#TechTools', '#EfficientReading']
    },
    {
        name: 'David Hernandez',
        content: "XXX is the best thing that happened to my workflow. Normally, I'd spend ages flipping through PDFs, but with this AI tool, I just ask it what I need to know, and it points me to the exact spot. No more endless scrolling! If you work with PDFs, you NEED this.",
        role: 'Research Analyst',
        unit: 'Global Insights Inc',
        img: '/images/CustomersReview-David Hernandez.jpg',
        imgalt: "David Hernandez - XXX is the best thing that happened to my workflow. Normally, I'd spend ages flipping through PDFs, but with this AI tool, I just ask it what I need to know, and it points me to the exact spot. No more endless scrolling! If you work with PDFs, you NEED this.",
        tags: ['#PDFInsights', '#ProfessionalEfficiency', '#PDFCHAT']
    },
    {
        name: 'Emma Davis',
        content: "XXX is super easy to use. I'm not the most tech-savvy person, but even I figured it out right away. My deadlines don't feel as stressful now, and my editor's thrilled with how fast I can turn things around.",
        role: 'Freelance Writer',
        unit: 'Creative Pens Publishing',
        img: '/images/CustomersReview-Emma Davis.jpg',
        imgalt: "Emma Davis - XXX is super easy to use. I'm not the most tech-savvy person, but even I figured it out right away. My deadlines don't feel as stressful now, and my editor's thrilled with how fast I can turn things around.",
        tags: ['#TechTools', '#SmartPDF', '#AIReader']
    },
    {
        name: 'Ethan Reynolds',
        content: "Being a student is tough, especially when you're drowning in papers. But XXX's like having a super-smart buddy to help you out whenever you're stuck. Sure, it's not flawless, but it's a real time-saver. If you're in the same boat, definitely give it a shot!",
        role: 'Student',
        unit: 'UC Berkeley',
        img: '/images/CustomersReview-Ethan Reynolds.jpg',
        imgalt: "Ethan Reynolds - Being a student is tough, especially when you're drowning in papers. But XXX's like having a super-smart buddy to help you out whenever you're stuck. Sure, it's not flawless, but it's a real time-saver. If you're in the same boat, definitely give it a shot!",
        tags: ['#EfficientReading', '#StudentAid', '#PDFAI', '#PDFCHAT']
    },
];

const TestimonialsSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
    };
    return (
        <>
            <section className="bg-lightan w-full">
                <div className="container py-[60px]">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="title-box text-center">
                                <h5 className="sub-title text-primary f-13 uppercase">PDF AI Chatbot -- testimonial</h5>
                                <h2 className="text-[48px] capitalize leading-[55px] text-[#494D61] font-[600] my-[10px]">Customers Love PDF AI Chatbot</h2>
                                <p className="max-w-[1000px] mx-auto text-[16px] leading-[28px] capitalize text-[#6d7c90] mt-4">
                                    We understand how challenging it can be to work with PDFs, <br/>which is why we&apos;ve created AI PDF chat features that users love!
                                </p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <Slider {...settings} className="mt-[40px] px-[45px] grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white rounded-[30px] border border-gray-200 shadow-custom p-[32px] flex flex-col gap-y-5">
                                    <div className="flex gap-4 justify-start items-center">
                                        <div className="w-[40px] h-[40px] flex-shrink-0 overflow-hidden rounded-[360px] border-2 border-solid border-[#1e58eb]">
                                            <Image src={testimonial.img} alt={testimonial.imgalt} width={40} height={40} className="object-cover" />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="text-[16px] font-[600] pb-[2px]">{testimonial.name}</div>
                                            <div className="text-[12px] text-[#7c7c7c] leading-[14px]">{testimonial.role}, {testimonial.unit}</div>
                                        </div>
                                    </div>
                                    <div className="quote">
                                        <div className="quote-mark">" </div>
                                        <div>{testimonial.content}</div>
                                        <div className="quote-mark"> "</div>
                                    </div>
                                    <div>
                                        {testimonial.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="text-[#1e58eb] pr-[5px]">
                                        {tag}{tagIndex !== testimonial.tags.length - 1 ? ' ' : ''}
                                    </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialsSection;
