import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Blog4 = ({ data }) => {
    return (
        <div className="section-spacing-sm pb-0">
            <div className="container">
                <div className="divider-side-line">
                    <div className="h6 sm-heading mb-0 me-3">{data.title}</div>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 992px
                        992: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 1200px
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{
                        el: '.blog-slider-featured-3-pagination',
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="blog-slider-featured-3 mt-4 mt-lg-5"
                >
                    {data.posts.map(post => (
                        <SwiperSlide key={post.id}>
                            <div className="interactive-box">
                                <Image src={post.image.src} alt={post.image.alt} loading="lazy" />
                                <div className="interactive-overlay">
                                    <div className="interactive-inner p-4 p-lg-5">
                                        <ul className="list-inline-dash mb-2">
                                            <li>{post.category}</li>
                                            <li>{post.postedOn}</li>
                                        </ul>
                                        <h4 className="mb-0">{post.title}</h4>
                                    </div>
                                    <div className="interactive-hover p-4 p-lg-5">
                                        <Link className="button button-md button-rounded button-white-2" href={`/blog/${post.slug}`}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="blog-slider-featured-3-pagination mt-4"></div>
            </div>
        </div>
    )
}

export default Blog4