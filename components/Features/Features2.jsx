import Image from 'next/image'
import React from 'react'

const Features2 = ({ data }) => {
    return (
        <div className="container-fluid p-0">
            <div className="row g-0">
                {data.map((feature, index) => (
                    <div key={index} className="col-12 col-lg-4">
                        <div className="interactive-box">
                            <Image src={feature.image} alt={feature.title} loading="lazy" />
                            <div className="interactive-overlay">
                                <div className="interactive-inner p-4 p-xl-5">
                                    <div className="icon-3xl mb-3">
                                        <i className={feature.iconClass}></i>
                                    </div>
                                    <h5 className="mb-1">{feature.title}</h5>
                                    <span>{feature.description}</span>
                                </div>
                                <div className="interactive-hover p-4 p-xl-5">
                                    <a className="button-circle button-circle-dark" href={feature.link}><i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features2