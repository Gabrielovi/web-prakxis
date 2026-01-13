import Image from 'next/image'
import React from 'react'

const About13 = ({ data }) => {
    return (
        <>
            {/* About */}
            <div className="section-spacing-lg bg-gradient-1 bg-opacity-10">
                <div className="container pt-4">
                    <div className="row g-4 g-lg-5">
                        <div className="col-12 col-lg-6">
                            <h1 className="display-5 fw-medium text-gradient-1">{data.title}</h1>
                        </div>
                        <div className="col-12 col-lg-6">
                            <p className="text-dark-70">{data.description}</p>
                        </div>
                    </div>
                    <div className="row g-4 mt-1">
                        {data.facts.map((fact, index) => (
                            <div className="col-12 col-sm-6 col-lg-3" key={index}>
                                <h2 className="display-3 font-family-poppins fw-semi-bold stroke-text-dark mb-0">
                                    <span className="counter">{fact.value}</span>{fact.suffix}
                                </h2>
                                <p className="text-dark">{fact.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Images */}
            <div className="container z-index-1">
                <div className="n-margin-4">
                    <div className="row g-4">
                        {data.images.map((image, index) => (
                            <div className="col-12 col-md-4" key={index}>
                                <Image
                                    className={`border-radius-1 box-shadow ${index % 2 === 0 ? 'mt-md-4' : ''}`}
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About13