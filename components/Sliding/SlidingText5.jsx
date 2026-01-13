import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const SlidingText5 = ({ data }) => {
    return (
        <Swiper
            slidesPerView="auto"
            spaceBetween={70}
            speed={20000}
            loop={true}
            allowTouchMove={false}
            autoplay={{
                delay: 0,
                clickable: false,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="sliding-text">
            {data.texts.map((item, index) => (
                <SwiperSlide key={index}>
                    <h2 className="display-1 font-family-poppins fw-semi-bold uppercase stroke-text opacity-30 mb-0">{item.text}</h2>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SlidingText5