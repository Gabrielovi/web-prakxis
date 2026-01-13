import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const Clients2 = ({ data }) => {
    return (
        <div className="py-5">
            <div className="container">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        // when window width is >= 998px
                        998: {
                            slidesPerView: 5,
                            spaceBetween: 60,
                        },
                        // when window width is >= 1200px
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 60,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {data.clients.map((client, index) => (
                        <SwiperSlide key={index}>
                            <div className="client-box">
                                <a href={client.link}>
                                    <Image src={client.logo} alt={client.alt} loading="lazy" />
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Clients2