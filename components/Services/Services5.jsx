import React from 'react'

const Services5 = ({ data }) => {
    return (
        <div className="container">
            <div className="row g-4">
                {data.map((service, index) => (
                    <div key={index} className="col-12 col-lg-6">
                        <div className={`${service.gradientClass} bg-opacity-10 p-4 p-md-5 border-radius-1 backdrop-filter-blur d-md-flex align-items-center`} data-cue="slideInUp">
                            <div className="mb-2 mb-md-0 me-md-4 me-lg-5 icon-4xl">
                                <i className={`${service.icon} ${service.iconClass}`}></i>
                            </div>
                            <div>
                                <h4 className="text-dark">{service.title}</h4>
                                <p className="text-dark-70">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services5