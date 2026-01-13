import React from 'react'
import Image from 'next/image'

const About1 = ({ data }) => {
    return (
        <div className="section-spacing-lg pb-0">
            <div className="container">
                <div className="row custom-row align-items-center">
                    <div className="col-12 col-lg-5 custom-col">
                        <div className="img-overlap">
                            <div className="img-1">
                                <Image src={data.image1.logo} alt={data.image1.alt} loading="lazy" />
                            </div>
                            <div className="img-2">
                                <Image src={data.image2.logo} alt={data.image2.alt} loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 custom-col">
                        <h2 className="display-5 fw-medium mb-3">{data.title.first} <span className="text-highlight-gradient-1">{data.title.highlight}</span> {data.title.last}</h2>
                        <p>{data.description}</p>
                        <a className="button button-lg button-rounded button-gradient-1 button-hover-slide mt-4 mt-lg-5" href={data.button.link}><span data-text="More About Us">More About Us</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About1