import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

const Clients1 = ({ data }) => {
    return (
        <div className="container">
            <div className="bg-black-70 backdrop-filter-blur p-4 p-lg-5 border-radius-1 box-shadow n-margin-4">
                <div className="row g-3 g-lg-5 align-items-center">
                    <div className="col-12 col-lg-3 text-center text-lg-start">
                        <p>{data.clientMessage}</p>
                    </div>
                    <div className="col-12 col-lg-9">
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
                                // when window width is >= 1024px
                                1024: {
                                    slidesPerView: 5,
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
                                            <Image src={client.logo} alt={client.alt} loading="lazy" width={500} height={500} />
                                        </a>
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

export default Clients1