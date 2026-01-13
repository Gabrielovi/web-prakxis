import Image from 'next/image'
import React from 'react'

const About16 = ({ data }) => {
    return (
        <div className="section-spacing-sm">
            <div className="container">
                <div className="row align-items-center custom-row">
                    <div className="col-12 col-lg-5 custom-col">
                        <div className="img-overlap">
                            <div className="img-1">
                                <Image src={data.image1.src} alt={data.image1.alt} loading="lazy" />
                            </div>
                            <div className="img-2">
                                <Image src={data.image2.src} alt={data.image2.alt} loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 custom-col">
                        <h2 className="display-6 fw-medium">{data.title}</h2>
                        {data.features.map((item, index) => (
                            <div key={index} className="d-flex align-items-center mt-4">
                                <div className="icon-3xl pe-4">
                                    <i className="ti-check-box"></i>
                                </div>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About16