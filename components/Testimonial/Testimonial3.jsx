import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial3 = ({ data, className }) => {
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
        <div className={`section-spacing ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1">
                        <div className="testimonial-single-wrapper">
                            <Swiper
                                onSwiper={(swiper) => {
                                    sliderRef.current = swiper;
                                    swiper.on('init', () => {
                                        updateNavigation(swiper);
                                    });
                                }}
                                slidesPerView={1}
                                spaceBetween={40}
                                className="testimonial-slider text-center"
                            >
                                {data.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="display-3 mb-2">
                                            <i className="bi bi-quote text-dark-30"></i>
                                        </div>
                                        <p className="fs-4 font-family-tertiary text-dark-50">{testimonial.text}</p>
                                        <h5 className="mt-4">{testimonial.name}</h5>
                                        <span>{testimonial.position}</span>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            {/* Slider Navigation */}
                            <div className="testimonial-single-nav">
                                <button className="button-circle button-circle-dark button-circle-hover-slide testimonial-slider-prev" onClick={() => sliderRef.current?.slidePrev()} aria-label="Prev Slide">
                                    <i className="bi bi-arrow-left"></i>
                                    <i className="bi bi-arrow-left"></i>
                                </button>
                                <button className="button-circle button-circle-dark button-circle-hover-slide testimonial-slider-next" onClick={() => sliderRef.current?.slideNext()} aria-label="Next Slide">
                                    <i className="bi bi-arrow-right"></i>
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Testimonial3