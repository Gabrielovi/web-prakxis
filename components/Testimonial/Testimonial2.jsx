import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonial2 = ({ data }) => {
    return (
        <div className="section-spacing pt-0">
            <Swiper
                slidesPerView="auto"
                spaceBetween={40}
                speed={14000}
                loop={true}
                allowTouchMove={false}
                autoplay={{
                    delay: 0,
                    clickable: false,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="sliding-boxes"
            >
                {data.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white border-radius p-4 p-lg-5">
                            <div className="mb-3">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <i key={i} className="bi bi-star-fill text-yellow"></i>
                                ))}
                            </div>
                            <p>{testimonial.text}</p>
                            <h4 className="mt-4 mb-1">{testimonial.name}</h4>
                            <span className="sm-heading text-dark-50">
                                {testimonial.position}
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}

export default Testimonial2