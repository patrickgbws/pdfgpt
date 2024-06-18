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
                                <h2 className="text-[48px] capitalize leading-[55px] text-[#494D61] font-[600] my-[10px]">Customers
                                    Love PDF AI Chatbot</h2>
                                <p className="max-w-[1000px] mx-auto text-[16px] leading-[28px] capitalize text-[#6d7c90] mt-4">
                                    We understand how challenging it can be to work with PDFs, <br/>which is why
                                    we&apos;ve created AI PDF chat features that users love!
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5 pt-5">

                        <div className="col-lg-10">

                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">


                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="client-box mt-4">
                                            <div className="client-img d-flex">
                                                {/*<img src="images/users/img-1.jpg" className="img-fluid rounded-circle" alt="">*/}


                                                <div className="client-content ps-4">
                                                    <h5 className="line-height_1_6 f-18">“I feel confident imposing
                                                        change
                                                        on
                                                        myself. It's a lot more fun proging than looking back.
                                                        That's why I ultricies enim at malesuada
                                                        creatures and the whole of quis consectetur nunc diam on tortor
                                                        neaded
                                                        to sit amet semper throw curve balls.”
                                                    </h5>

                                                    <div className="client-icon">
                                                        <i className="mdi mdi-format-quote-close"></i>
                                                    </div>

                                                    <h5 className="f-18">Brandon Carney</h5>
                                                    <p className="text-primary mb-0">- Designer</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="client-box mt-4">
                                            <div className="client-img d-flex">
                                                {/*<img src="images/users/img-2.jpg" className="img-fluid rounded-circle" alt="">*/}


                                                <div className="client-content ps-4">
                                                    <h5 className="line-height_1_6 f-18">
                                                        “Our task must be to free ourselves by widening our circle of
                                                        comsion to
                                                        embrace all living creatures and the
                                                        whole of quis consectetur nunc sit amet semper justo.
                                                        scelerisque
                                                        pretium dolor, sit amet vehicula erat pelleque nature and its
                                                        beauty.”
                                                    </h5>

                                                    <div className="client-icon">
                                                        <i className="mdi mdi-format-quote-close"></i>
                                                    </div>

                                                    <h5 className="f-18">Jeremiah Eskew</h5>
                                                    <p className="text-primary mb-0">- Designer</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="client-box mt-4">
                                            <div className="client-img d-flex">
                                                {/*<img src="images/users/img-3.jpg" className="img-fluid rounded-circle" alt="">*/}


                                                <div className="client-content ps-4">
                                                    <h5 className="line-height_1_6 f-18">
                                                        “I've learned that people will forget what you said, people will
                                                        forget
                                                        what you did, but people will never aliquam in nunc
                                                        quis tincidunt forget how you never forget how donec in
                                                        efficitur
                                                        lectus, nec lobortis metus you made vestibulum egestas them
                                                        feel.”
                                                    </h5>

                                                    <div className="client-icon">
                                                        <i className="mdi mdi-format-quote-close"></i>
                                                    </div>

                                                    <h5 className="f-18">Zachary Tevis</h5>
                                                    <p className="text-primary mb-0">- Designer</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="client-box mt-4">
                                            <div className="client-img d-flex">
                                                {/*<img src="images/users/img-4.jpg" className="img-fluid rounded-circle" alt="">*/}
                                                <div className="client-content ps-4">
                                                    <h5 className="line-height_1_6 f-18">
                                                        “I've learned that people will forget what you said, people will
                                                        forget
                                                        what you did, but people will never forget how
                                                        donec in efficitur lectus, nec lobortis enim at malesuada nibh
                                                        diam on
                                                        tortor neaded to metus you made them feel.”
                                                    </h5>

                                                    <div className="client-icon">
                                                        <i className="mdi mdi-format-quote-close"></i>
                                                    </div>

                                                    <h5 className="f-18">William Alderman </h5>
                                                    <p className="text-primary mb-0">- Designer</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                </div>

                                <div className="carousel-indicators mb-0">
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="0" className="active" aria-current="true"
                                            aria-label="Slide 1">
                                        {/*<img src="images/users/img-1.jpg" alt="" className=" testi-img img-fluid rounded mx-auto d-block">*/}
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="1" aria-label="Slide 2">
                                        {/*<img src="images/users/img-2.jpg" alt="" className=" testi-img img-fluid rounded mx-auto d-block">*/}
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="2" aria-label="Slide 3">
                                        {/*<img src="images/users/img-3.jpg" alt="" className=" testi-img img-fluid rounded mx-auto d-block">*/}
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="3" aria-label="Slide 4">
                                        {/*<img src="images/users/img-4.jpg" alt="" className=" testi-img img-fluid rounded mx-auto d-block">*/}
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialsSection;
