import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'

const Blog1 = ({ data }) => {
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
        <div className="section-spacing-sm bg-gray">
            <div className="container">
                <div className="row g-4 g-lg-5 align-items-center">
                    <div className="col-12 col-lg-5 col-xl-4">
                        <div className="d-inline-block px-3 py-2 rounded-pill sm-heading title-fade-gradient-1 text-gradient-1 mb-3">{data.title}</div>
                        <h2 className="font-family-tertiary">{data.subtitle}</h2>
                        <p>{data.description}</p>
                        <ul className="list-inline mt-3">
                            <li>
                                <button className="button-circle button-circle-dark button-circle-hover-slide blog-slider-2sm-prev" onClick={() => sliderRef.current?.slidePrev()} aria-label="Prev Slide">
                                    <i className="bi bi-arrow-left"></i>
                                    <i className="bi bi-arrow-left"></i>
                                </button>
                            </li>
                            <li>
                                <button className="button-circle button-circle-dark button-circle-hover-slide blog-slider-2sm-next" onClick={() => sliderRef.current?.slideNext()} aria-label="Next Slide">
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
                                // when window width is >= 1024px
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                            }}
                            className="blog-slider-2sm"
                        >
                            {data.posts.map((post, index) => (
                                <SwiperSlide key={index}>
                                    <div className="float-card">
                                        <div className="img-link-box">
                                            <Link href={`/blog/${post.slug}`}>
                                                <Image src={post.image.src} alt={post.image.alt} loading="lazy" />
                                            </Link>
                                        </div>
                                        <div className="float-card-text bg-white border-radius">
                                            <ul className="list-inline-dash mb-2 font-small">
                                                <li>{post.date}</li>
                                                <li>{post.category}</li>
                                            </ul>
                                            <h4 className="mb-0">
                                                <Link className="link-hover-line" href={`/blog/${post.slug}`}>{post.title}</Link>
                                            </h4>
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

export default Blog1