"use client"; // 添加这行

import React from "react";
import Image from "next/image";
import Link from 'next/link';

const testimonials = [
    {
        name: 'Jonathan Miller',
        content: "Instead of spending hours digging through lengthy documents, I can now quickly find specific clauses and terms with just a few simple queries.",
        role: 'Senior Partner',
        unit: 'Miller & Associates',
        img: '/images/users/CustomersReview-Jonathan Miller.jpg',
        imgalt: "Jonathan Miller - Instead of spending hours digging through lengthy documents, I can now quickly find specific clauses and terms with just a few simple queries.",
        tags: ['#PDFAI', '#PDFCHAT'],
        rating: 5,
    },
    {
        name: 'Emily Roberts',
        content: "Finding information in PDFs used to be a huge headache. Since I started using XXX, it's so much easier. I just type in a question and it gives me the exact info I need. My students love that I can answer their questions quickly!",
        role: 'Teacher',
        unit: 'Lincoln High School',
        img: '/images/users/CustomersReview-Emily Roberts.jpg',
        imgalt: "Emily Roberts - Finding information in PDFs used to be a huge headache. Since I started using XXX, it's so much easier. I just type in a question and it gives me the exact info I need. My students love that I can answer their questions quickly!",
        tags: ['#PDFCHAT', '#DocumentChat', '#PDFAI'],
        rating: 5,
    },
    {
        name: 'Sarah Thompson',
        content: "Being able to quickly summarize a long PDF has been a lifesaver. XXX lets me get the key points without reading every page. It’s great because now I have more time for my clients, and they really appreciate that.",
        role: 'Financial Advisor',
        unit: 'Thompson Wealth Management',
        img: '/images/users/CustomersReview-Sarah Thompson.jpg',
        imgalt: "Sarah Thompson - Being able to quickly summarize a long PDF has been a lifesaver. XXX lets me get the key points without reading every page. It’s great because now I have more time for my clients, and they really appreciate that.",
        tags: ['#AIInteraction', '#TechTools', '#EfficientReading'],
        rating: 5,
    },
    {
        name: 'David Hernandez',
        content: "XXX is the best thing that happened to my workflow. Normally, I'd spend ages flipping through PDFs, but with this AI tool, I just ask it what I need to know, and it points me to the exact spot. No more endless scrolling! If you work with PDFs, you NEED this.",
        role: 'Research Analyst',
        unit: 'Global Insights Inc',
        img: '/images/users/CustomersReview-David Hernandez.jpg',
        imgalt: "David Hernandez - XXX is the best thing that happened to my workflow. Normally, I'd spend ages flipping through PDFs, but with this AI tool, I just ask it what I need to know, and it points me to the exact spot. No more endless scrolling! If you work with PDFs, you NEED this.",
        tags: ['#PDFInsights', '#ProfessionalEfficiency', '#PDFCHAT'],
        rating: 5,
    },
    {
        name: 'Emma Davis',
        content: "XXX is super easy to use. I'm not the most tech-savvy person, but even I figured it out right away. My deadlines don't feel as stressful now, and my editor's thrilled with how fast I can turn things around.",
        role: 'Freelance Writer',
        unit: 'Creative Pens Publishing',
        img: '/images/users/CustomersReview-Emma Davis.jpg',
        imgalt: "Emma Davis - XXX is super easy to use. I'm not the most tech-savvy person, but even I figured it out right away. My deadlines don't feel as stressful now, and my editor's thrilled with how fast I can turn things around.",
        tags: ['#TechTools', '#SmartPDF', '#AIReader'],
        rating: 5,
    },
    {
        name: 'Ethan Reynolds',
        content: "Being a student is tough, especially when you're drowning in papers. But XXX's like having a super-smart buddy to help you out whenever you're stuck. Sure, it's not flawless, but it's a real time-saver. If you're in the same boat, definitely give it a shot!",
        role: 'Student',
        unit: 'UC Berkeley',
        img: '/images/users/CustomersReview-Ethan Reynolds.jpg',
        imgalt: "Ethan Reynolds - Being a student is tough, especially when you're drowning in papers. But XXX's like having a super-smart buddy to help you out whenever you're stuck. Sure, it's not flawless, but it's a real time-saver. If you're in the same boat, definitely give it a shot!",
        tags: ['#EfficientReading', '#StudentAid', '#PDFAI', '#PDFCHAT'],
        rating: 5,
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
            <section className="w-full pt-[30px] pb-[20px]">
                <div className="container">
                    <div className="section_title text-center">
                        <div className="overline-title"> PDF AI Chatbot -- testimonial</div>
                        <h2 className="title">
                            Customers Love PDF AI Chatbot!
                        </h2>
                        <p className="lead">
                            We understand how challenging it can be to work with PDFs, which is why we&apos;ve created AI PDF chat features that users love!
                        </p>
                    </div>
                    <div className={"testimonialsContainer"}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className={"testimonialCard"}>
                                <div className={"testimonialCard-top"}>
                                    <div className={"img-icon"}>
                                        <Image src={testimonial.img} alt={testimonial.name} width={360} height={360}  />
                                    </div>
                                    <div className={"name"}>
                                        <h5>{testimonial.name}</h5>
                                        <p className={"title"}>{testimonial.role}  ( {testimonial.unit} )</p>
                                    </div>
                                </div>
                                <div className={"testimonialCard-bottom"}>
                                    <div className={"stars"}>
                                        {'★'.repeat(testimonial.rating)}
                                        {'☆'.repeat(5 - testimonial.rating)}
                                    </div>

                                    <div className={"text"}>
                                        <p>{testimonial.content}</p>
                                    </div>

                                    <div className={"tags"}>
                                        <p>
                                            {testimonial.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                        {/*{testimonials.map((testimonials, index) => (*/}
                        {/*    <div key={index} className="w-[400px] slick-slide slick-current slick-active slick-center">*/}
                        {/*        <div className="testimonial-item-two">*/}
                        {/*            <div className="testimonial-avatar">*/}
                        {/*                <div className="testi-avatar-img">*/}
                        {/*                    <Image src={testimonials.img} alt={testimonials.imgalt} width={360} height={360} className="inline-block" />*/}
                        {/*                </div>*/}
                        {/*                <div className="testi-avatar-info">*/}
                        {/*                    <h5 className="title">{testimonials.name}</h5>*/}
                        {/*                    <span>{testimonials.role} {testimonials.unit}</span>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className="testimonial-content-two">*/}
                        {/*                <p>{testimonials.content}</p>*/}
                        {/*                <span>{testimonials.tags}</span>*/}
                        {/*                <div className="rating">*/}
                        {/*                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="currentColor"/></svg>*/}
                        {/*                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="currentColor"/></svg>*/}
                        {/*                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="currentColor"/></svg>*/}
                        {/*                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="currentColor"/></svg>*/}
                        {/*                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="currentColor"/></svg>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*))}*/}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialsSection;
