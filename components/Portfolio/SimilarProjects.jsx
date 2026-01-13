import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { portfolioData } from './PortfolioData';

const SimilarProjects = ({ className }) => {
    const projects = portfolioData.creativeAgency.projects.slice(0, 4);

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const sliderRef = useRef(null);

    const updateNavigation = (swiper) => {
        if (prevRef.current && nextRef.current) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            updateNavigation(sliderRef.current);
        }
    }, []);

    return (
        <div className={`section-spacing-sm ${className}`}>
            <div className="container">
                <div className="row g-4 align-items-end">
                    <div className="col-12 col-lg-6">
                        <h2 className="display-6 fw-semi-bold uppercase mb-0">Similar Projects</h2>
                    </div>
                    <div className="col-12 col-lg-6 text-lg-end">
                        <ul className="list-inline">
                            <li>
                                <button className="button-circle button-circle-dark button-circle-hover-slide horizontal-portfolio-prev" onClick={() => sliderRef.current?.slidePrev()} aria-label="Prev Slide">
                                    <i className="bi bi-arrow-left"></i>
                                    <i className="bi bi-arrow-left"></i>
                                </button>
                            </li>
                            <li>
                                <button className="button-circle button-circle-dark button-circle-hover-slide horizontal-portfolio-next" onClick={() => sliderRef.current?.slideNext()} aria-label="Next Slide">
                                    <i className="bi bi-arrow-right"></i>
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <Swiper
                    onSwiper={(swiper) => {
                        sliderRef.current = swiper;
                        swiper.on('init', () => {
                            updateNavigation(swiper);
                        });
                    }}
                    slidesPerView={1}
                    spaceBetween={24}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        // when window width is >= 992px
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        // when window width is >= 1200px
                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 60,
                        },
                        // when window width is >= 1400px
                        1400: {
                            slidesPerView: 2,
                            spaceBetween: 70,
                        },
                    }}
                    className="swiper portfolio-horizontal-slider mt-4"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className="portfolio-box" data-hover-text="view project">
                                <a href={`/portfolio/${project.slug}`}>
                                    <div className="portfolio-img">
                                        <Image src={project.mainImage} alt={project.title} loading="lazy" />
                                    </div>
                                    <div className="pt-2 d-flex justify-content-between">
                                        <h3 className="mb-0">{project.title}</h3>
                                        <span className="sm-heading text-dark-50">{project.category}</span>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SimilarProjects;
