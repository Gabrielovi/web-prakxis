import Image from 'next/image'
import React from 'react'

const About11 = ({ data }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row g-4 g-lg-5 align-items-center">
                    <div className="col-12 col-lg-6">
                        <h1 className="display-3 fw-normal font-family-tertiary fst-italic text-dark-30 mb-3">{data.title}</h1>
                        <div className="row g-4">
                            <div className="col-6">
                                <ul className="list-unstyled">
                                    {data.checklistItems.slice(0, Math.ceil(data.checklistItems.length / 2)).map((item, index) => (
                                        <li key={index}><i className="bi bi-check"></i>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-unstyled">
                                    {data.checklistItems.slice(Math.ceil(data.checklistItems.length / 2)).map((item, index) => (
                                        <li key={index}><i className="bi bi-check"></i>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>  
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row">
                            <div className="col-6">
                                <Image className="img-mask-1 mt-md-4" src={data.image1.src} alt={data.image1.src} loading="lazy" />
                            </div>
                            <div className="col-6">
                                <Image className="img-mask-2"  src={data.image2.src} alt={data.image2.src} loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About11