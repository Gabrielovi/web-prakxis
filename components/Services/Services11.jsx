import Image from 'next/image'
import React from 'react'

const Services11 = ({ data }) => {
    return (
        <div className="section-spacing">
            <div className="container icon-2xl">
                {data.map((service, index) => (
                    <React.Fragment key={service.id}>
                        <hr className="hr-diagonal" />
                        <div className="py-5">
                            <div className="row g-4 g-lg-5">
                                <div className="col-12 col-lg-2">
                                    <h2 className="display-4 fw-medium mb-0">
                                        <span className="text-gradient-1">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </h2>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <h3 className="fw-normal">{service.title}</h3>
                                    <ul className="list-inline-dot mb-3 sm-heading">
                                        {service.listItems.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p>{service.description}</p>
                                </div>
                                <div className="col-12 col-lg-4 col-xl-3 offset-xl-1 text-lg-end">
                                    <Image src={service.imgSrc} alt={service.title} loading="lazy" className="border-radius-1" />
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
                <hr className="hr-diagonal" />
            </div>
        </div>
    )
}

export default Services11