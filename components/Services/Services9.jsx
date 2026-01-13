import React from 'react'

const Services9 = ({ data }) => {
    return (
        <div className="section-spacing pt-0">
            <div className="container">
                <div className="row g-4 g-lg-5">
                    {data.services.map((service, index) => (
                        <div key={index} className="col-12 col-lg-6">
                            <div className={`bg-gradient-${service.gradient} bg-opacity-10 p-4 p-sm-5 pt-0 pt-sm-0 backdrop-filter-blur`}>
                                <div className="icon-box-square icon-box-square-lg bg-dark icon-xl mb-4">
                                    <i className={`bi ${service.icon}`}></i>
                                </div>
                                <h3 className="text-dark">{service.title}</h3>
                                <p className="text-dark-70">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services9