import Image from 'next/image'
import React from 'react'

const Services10 = ({ data }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row g-0 hover-border-wrapper">
                    {data.map(service => (
                        <div key={service.id} className="col-12 col-lg-6">
                            <div className={`p-4 p-sm-5 hover-border ${service.active ? 'hover-border-active' : ''}`}>
                                <div className="row g-4 align-items-center">
                                    <div className={`col-12 col-md-7 ${service.orderMd ? 'order-md-2 text-md-end' : ''} col-lg-12 col-xl-7`}>
                                        <div className="icon-3xl mb-3">
                                            <i className={`bi ${service.icon}`}></i>
                                        </div>
                                        <h4>{service.title}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                    <div className={`col-12 col-md-5 ${service.orderMd ? 'order-md-1' : ''} col-lg-12 col-xl-5`}>
                                        <Image src={service.imgSrc} alt="" loading="lazy" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services10