import Image from 'next/image'
import React from 'react'

const Services12 = ({ data }) => {
    return (
        <div className="section-spacing pt-0">
            <div className="container">
                {data.map((service, index) => (
                    <div key={index}>
                        <hr className="hr-diagonal" />
                        <div className="py-5 px-lg-4 px-xl-5">
                            <div className="row g-4">
                                <div className="col-12 col-lg-8">
                                    <div className="icon-4xl mb-3 mb-lg-4">
                                        <i className={service.icon}></i>
                                    </div>
                                    <div className="h1 display-2 font-family-tertiary">{service.title}</div>
                                    <p>{service.description}</p>
                                </div>
                                <div className="col-12 col-lg-3 offset-lg-1">
                                    <Image src={service.image} alt={service.title} loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <hr className="hr-diagonal" />
            </div>
        </div>
    )
}

export default Services12