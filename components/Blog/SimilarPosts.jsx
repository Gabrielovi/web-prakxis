import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { blogData } from './BlogData';

const SimilarPosts = () => {
    const posts = blogData.corporate.posts.slice(0, 4);

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
                <div className="row g-4 align-items-end">
                    <div className="col-12 col-lg-6">
                        <h2 className="display-6 fw-medium mb-0">Similar Posts</h2>
                    </div>
                    <div className="col-12 col-lg-6 text-lg-end">
                        <ul className="list-inline">
                            <li>
                                <button className="button-circle button-circle-dark button-circle-hover-slide blog-slider-3-prev" onClick={() => sliderRef.current?.slidePrev()} aria-label="Prev Slide">
                                    <i className="bi bi-arrow-left"></i>
                                    <i className="bi bi-arrow-left"></i>
                                </button>
                            </li>
                            <li>
                                <button className="button-circle button-circle-dark button-circle-hover-slide blog-slider-3-next" onClick={() => sliderRef.current?.slideNext()} aria-label="Next Slide">
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
                            spaceBetween: 40,
                        },
                        // when window width is >= 1200px
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    className="blog-slider-3 mt-4"
                >
                    {posts.map((post, index) => (
                        <SwiperSlide key={index}>
                            <div className="img-link-box border-radius-1">
                                <Link href={`/blog/${post.slug}`}>
                                    <Image src={post.image.src} alt={post.image.alt} loading="lazy" />
                                </Link>
                            </div>
                            <div className="mt-3 mt-lg-4 px-3 px-lg-4">
                                <h4>
                                    <Link className="link-hover-reveal" href={`/blog/${post.slug}`}><i className="bi bi-arrow-right"></i>{post.title}</Link>
                                </h4>
                                <ul className="list-inline-dash">
                                    <li>{post.date}</li>
                                    <li>{post.category}</li>
                                </ul>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    )
}

export default SimilarPosts