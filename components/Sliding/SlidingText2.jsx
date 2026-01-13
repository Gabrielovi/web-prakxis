import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

const SlidingText2 = ({ data }) => {
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
            className="sliding-text bg-black py-3">
            {data.texts.map((item, index) => (
                <SwiperSlide key={index}>
                    <h2 className={`display-1 font-family-poppins  ${index % 2 === 0 ? 'fw-semi-bold' : 'fw-bold stroke-text'} uppercase mb-0`}>{item.text}</h2>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SlidingText2;