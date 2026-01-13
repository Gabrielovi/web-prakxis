import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Portfolio6 = ({ data }) => {
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
        <div className="bg-black w-100 h-100 position-relative d-flex align-items-center">
            <div className="container">
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
                    pagination={{
                        el: '.horizontal-portfolio-pagination',
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="portfolio-horizontal-slider"
                >
                    {data.projects.map((item, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
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

            {/* Slider Navigations */}
            <div className="position-absolute start-0 bottom-0 w-100 pb-4">
                <div className="container-fluid px-xxl-5">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-4 order-sm-2 text-center">
                            <div className="horizontal-portfolio-pagination"></div>
                        </div>
                        <div className="col-6 col-sm-4 order-sm-1">
                            <button className="button-fancy horizontal-portfolio-prev" onClick={() => sliderRef.current?.slidePrev()} aria-label="Prev Slide">Prev Project</button>
                        </div>
                        <div className="col-6 col-sm-4 order-sm-3 text-end">
                            <button className="button-fancy button-fancy-right horizontal-portfolio-next" onClick={() => sliderRef.current?.slideNext()} aria-label="Next Slide">Next Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio6