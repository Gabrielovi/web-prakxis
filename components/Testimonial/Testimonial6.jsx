import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonial6 = ({ data }) => {
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
                <div className="row g-4 g-lg-5">
                    <div className="col-12 col-lg-4">
                        <div className="d-inline-block px-3 py-2 rounded-pill sm-heading title-fade-gradient-1 text-gradient-1 mb-3">{data.title}</div>
                        <h2 className="font-family-tertiary">{data.subtitle}</h2>
                        <ul className="list-inline mt-3">
                            <li>
                                <button className="button-circle button-circle-dark button-circle-hover-slide testimonial-slider-prev" onClick={() => sliderRef.current?.slidePrev()} aria-label="Prev Slide">
                                    <i className="bi bi-arrow-left"></i>
                                    <i className="bi bi-arrow-left"></i>
                                </button>
                            </li>
                            <li>
                                <button className="button-circle button-circle-dark button-circle-hover-slide testimonial-slider-next" onClick={() => sliderRef.current?.slideNext()} aria-label="Next Slide">
                                    <i className="bi bi-arrow-right"></i>
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-8">
                        <Swiper
                            onSwiper={(swiper) => {
                                sliderRef.current = swiper;
                                swiper.on('init', () => {
                                    updateNavigation(swiper);
                                });
                            }}
                            slidesPerView={1}
                            spaceBetween={40}
                            className="testimonial-slider"
                        >
                            {data.testimonial.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="mb-3">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <i key={i} className="bi bi-star-fill text-yellow ps-1"></i>
                                        ))}
                                    </div>
                                    <p className="font-family-tertiary fs-4 fst-italic text-dark-40">{testimonial.text}</p>
                                    <div className="d-flex align-items-center mt-3">
                                        <Image className="img-avatar-70" src={testimonial.avatar.image} alt={testimonial.avatar.alt} loading="lazy" />
                                        <div className="ps-3">
                                            <h5 className="mb-1">{testimonial.name}</h5>
                                            <span>{testimonial.position}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Testimonial6