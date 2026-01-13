import React from 'react'

const Services3 = ({ data }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                        <h2 className="display-6 fw-medium">{data.description}</h2>
                    </div>
                </div>
                <div className="divider-side-line mt-3">
                    <div className="h6 sm-heading mb-0 me-3">{data.title}</div>
                </div>
                <div className="row g-2 mt-4 mt-lg-5 hover-border-wrapper" data-cues="slideInUp">
                    {data.services.map((service, index) => (
                        <div key={index} className="col-12 col-md-6 col-xl-3">
                            <div className={`p-4 p-lg-5 hover-border ${index === 0 ? 'hover-border-active' : ''}`}>
                                <div className="icon-3xl mb-3">
                                    <i className={service.icon}></i>
                                </div>
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                                <a className={`button-circle ${index === 0 ? 'button-circle-dark' : 'button-circle-outline-dashed'} mt-3 mt-lg-4`} href="#">
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services3