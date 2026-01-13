import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const Blog3 = ({ data }) => {
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
                <div className="row g-4 g-xl-5 align-items-center">
                    <div className="col-12 col-lg-6">
                        <h2 className="display-5 fw-medium">
                            {data.title}
                        </h2>
                        <ul className="list-inline mt-3">
                            <li>
                                <button
                                    className="button-circle button-circle-dark button-circle-hover-slide blog-slider-3-prev"
                                    onClick={() => sliderRef.current?.slidePrev()} aria-label="Prev Slide"
                                >
                                    <i className="bi bi-arrow-left"></i>
                                    <i className="bi bi-arrow-left"></i>
                                </button>
                            </li>
                            <li>
                                <button
                                    className="button-circle button-circle-dark button-circle-hover-slide blog-slider-3-next"
                                    onClick={() => sliderRef.current?.slideNext()} aria-label="Next Slide"
                                >
                                    <i className="bi bi-arrow-right"></i>
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p>{data.description}</p>
                        <div className="mt-3">
                            <a className="button-fancy-gradient-1" href={data.button.link}>
                                {data.button.text}
                            </a>
                        </div>
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
                            spaceBetween: 40,
                        },
                        // when window width is >= 1200px
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    className="blog-slider-3 mt-4 mt-lg-5"
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
                                        <Link className="link-hover-line" href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Blog3