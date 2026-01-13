import Image from 'next/image'
import React from 'react'

const About7 = ({ data }) => {
    return (
        <>
            {/* About section */}
            <div className="section-spacing">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-12 col-xl-6 custom-col">
                            <h2 className="display-5 fw-medium mb-3">
                                {data.title.first} <span className="text-highlight-gradient-1">{data.title.highlight}</span> {data.title.last}
                            </h2>
                            <p>{data.description}</p>
                        </div>
                        <div className="col-12 col-xl-6">
                            <div className="row g-3">
                                {data.facts.map((fact, index) => (
                                    <div className="col-12 col-sm-6" key={index}>
                                        <div className="bg-gray border-radius-1 p-4">
                                            <div className="h2 display-4 font-family-tertiary fw-normal fst-italic text-dark-30">
                                                <span className="counter">{fact.counter}</span>
                                            </div>
                                            <div className="text-end">
                                                <div className="sm-heading h6 mb-0">{fact.title}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end About section */}

            {/* Images */}
            <div className="section-spacing pt-0">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-12 col-md-4">
                            <Image src={data.image1.src} alt={data.image1.alt} loading="lazy" />
                        </div>
                        <div className="col-12 col-md-4">
                            <Image src={data.image2.src} alt={data.image2.alt} loading="lazy" />
                        </div>
                        <div className="col-12 col-md-4">
                            <Image src={data.image3.src} alt={data.image3.alt} loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
            {/* end Images */}
        </>
    )
}

export default About7