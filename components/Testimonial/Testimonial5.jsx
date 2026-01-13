import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonial5 = ({ data, className, dark }) => {
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
                <div className="row g-4 g-lg-5 align-items-center">
                    <div className="col-12 col-lg-5 col-xl-4">
                        <h2 className="font-family-tertiary">{data.title}</h2>
                        <ul className="list-inline mt-3">
                            <li>
                                <button className={`button-circle ${dark ? 'button-circle-dark' : 'button-circle-white-2'} button-circle-hover-slide testimonial-slider-2-prev`} onClick={() => sliderRef.current?.slidePrev()} aria-label="Prev Slide">
                                    <i className="bi bi-arrow-left"></i>
                                    <i className="bi bi-arrow-left"></i>
                                </button>
                            </li>
                            <li>
                                <button className={`button-circle ${dark ? 'button-circle-dark' : 'button-circle-white-2'} button-circle-hover-slide testimonial-slider-2-next`} onClick={() => sliderRef.current?.slideNext()} aria-label="Next Slide">
                                    <i className="bi bi-arrow-right"></i>
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-7 col-xl-8">
                        <Swiper
                            onSwiper={(swiper) => {
                                sliderRef.current = swiper;
                                swiper.on('init', () => {
                                    updateNavigation(swiper);
                                });
                            }}
                            slidesPerView={1}
                            spaceBetween={30}
                            breakpoints={{
                                // when window width is >= 1200px
                                1200: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                            }}
                            className="testimonial-slider-2"
                        >
                            {data.testimonial.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="testimonial-quote-box">
                                        <div className="quote">
                                            <p>{testimonial.text}</p>
                                        </div>
                                        <div className="quote-author">
                                            <Image src={testimonial.avatar.image} alt={testimonial.avatar.alt} />
                                            <div className="ps-3">
                                                <h6 className="sm-heading mb-0">{testimonial.name}</h6>
                                                <span>{testimonial.position}</span>
                                            </div>
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

export default Testimonial5