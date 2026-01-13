import Image from 'next/image'
import React from 'react'

const About2 = ({ data }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row g-4 g-lg-5">
                    <div className="col-12 col-lg-5 order-lg-2">
                        <div className="img-overlap">
                            <div className="img-1">
                                <Image
                                    src={data.images[0].src}
                                    alt={data.images[0].alt}
                                    data-bottom-top="transform: translateY(10px)"
                                    data-top-bottom="transform: translateY(-50px)"
                                />
                            </div>
                            <div className="img-2">
                                <Image
                                    src={data.images[1].src}
                                    alt={data.images[1].alt}
                                    data-bottom-top="transform: translateY(-10px)"
                                    data-top-bottom="transform: translateY(60px)"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 order-lg-1">
                        <h2 className="display-5 fw-medium mb-3">
                            {data.heading}
                            <span className="text-highlight-gradient-2">best business</span>
                        </h2>
                        <p>{data.description}</p>
                        <div
                            className="d-flex align-items-center mt-4 mt-xl-5"
                            data-cue="slideInRight"
                        >
                            <ul className="avatar-group">
                                {data.images.slice(2).map((image, index) => (
                                    <li key={index}>
                                        <Image src={image.src} alt={image.alt} />
                                    </li>
                                ))}
                            </ul>
                            <div className="d-inline-block ps-3">
                                <p>{data.clientsText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About2