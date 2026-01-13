import Image from 'next/image'
import React from 'react'

const About4 = ({ data }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row align-items-center custom-row">
                    <div className="col-12 col-lg-6 custom-col">
                        <div className="row g-3">
                            <div className="col-6 text-end">
                                <div data-bottom-top="transform: translateY(10px)" data-top-bottom="transform: translateY(-36px)">
                                    <Image className="border-radius-1" src={data.image1.src} alt={data.image1.alt} />
                                    <div className="d-flex align-items-center mt-1">
                                        <p>{data.clientsText}</p>
                                        <div className="h2 display-3 fw-normal ps-3"><span className="text-gradient-1">{data.number}</span></div>
                                    </div>
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
                        <h2 className="display-6 fw-normal">{data.title}</h2>
                        {data.features.map((item, index) => (
                            <div key={index} className="d-flex align-items-center mt-4" data-cue="slideInRight">
                                <div className="icon-3xl text-gradient-1 pe-4">
                                    <i className="ti-check-box"></i>
                                </div>
                                <p>{item.text}</p>
                            </div>
                        ))}
                        <a className="button button-lg button-rounded button-gradient-1 button-hover-slide mt-4 mt-lg-5" href={data.button.href} data-cue="fadeIn">
                            <span data-text={data.button.text}>{data.button.text}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About4