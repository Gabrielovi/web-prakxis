import React from 'react'

const Services1 = ({ data }) => {
    return (
        <div className="section-spacing pt-0">
            <div className="container icon-2xl">
                {data.map((service, index) => (
                    <div key={index}>
                        <hr className="hr-diagonal" />
                        <div className="py-4">
                            <div className="row align-items-center g-1">
                                <div className="col-12 col-lg-2">
                                    <h2 className="display-4 font-family-poppins fw-bold stroke-text">{service.number}</h2>
                                </div>
                                <div className="col-12 col-lg-8">
                                    <h2 className="fw-medium">{service.title}</h2>
                                    <ul className="list-inline-dot">
                                        {service.listItems.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-2 text-lg-end">
                                    <a className="d-inline-block mt-3 mt-lg-0" href="#">
                                        <i className="ti-arrow-right"></i>
                                    </a>
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

export default Services1