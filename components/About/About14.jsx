import Image from 'next/image'
import React from 'react'

const About14 = ({ data }) => {
    return (
        <div className="section-spacing bg-gradient-1 bg-opacity-10">
            <div className="container pt-4">
                <div className="row align-items-center custom-row">
                    <div className="col-12 col-lg-6 custom-col">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                                <div data-bottom-top="transform: translateY(10px)" data-top-bottom="transform: translateY(-36px)">
                                    <Image className="border-radius-1" src={data.image1.src} alt={data.image1.alt} />
                                </div>
                            </div>
                            <div className="col-6 mt-5">
                                <div data-bottom-top="transform: translateY(-10px)" data-top-bottom="transform: translateY(40px)">
                                    <Image className="border-radius-1" src={data.image2.src} alt={data.image2.alt} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 custom-col">
                        <h2 className="display-6 fw-normal text-dark">{data.title}</h2>
                        {data.features.map((item, index) => (
                            <div key={index} className="d-flex align-items-center mt-4" data-cue="slideInRight">
                                <div className="icon-3xl text-gradient-1 pe-4">
                                    <i className="ti-check-box"></i>
                                </div>
                                <p className="text-dark-70">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About14