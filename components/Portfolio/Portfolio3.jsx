import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const Portfolio3 = ({ data }) => {
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
        <div className="section-spacing pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-8">
                        <h2 className="display-2 fw-semi-bold uppercase">Recent Works</h2>
                    </div>
                    <div className="col-12 col-lg-4 text-lg-end">
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
                    className="portfolio-horizontal-slider mt-4"
                >
                    {data.projects.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="portfolio-box" data-hover-title={item.title}>
                                <Link href={`/portfolio/${item.slug}`}>
                                    <div className="portfolio-img">
                                        <Image src={item.mainImage} alt={item.title} loading="lazy" />
                                    </div>
                                    <div className="portfolio-mobile-caption">
                                        <h4>{item.title}</h4>
                                        <span>{item.category}</span>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Portfolio3