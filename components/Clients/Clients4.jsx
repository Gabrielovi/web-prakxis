import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const Clients4 = ({ data }) => {
    return (
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
            className="mt-5"
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
    )
}

export default Clients4