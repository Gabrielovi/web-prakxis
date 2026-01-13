import React from 'react'

const Features1 = ({ data, className }) => {
    return (
        <div className={`section-spacing ${className}`}>
            <div className="container">
                <div className="row g-4 g-lg-5 icon-4xl">
                    {data.map((item, index) => (
                        <div key={index} className="col-12 col-lg-4">
                            <div className="d-flex align-items-center">
                                <div className="d-inline-block pe-4">
                                    <i className={item.iconClass}></i>
                                </div>
                                <div className="d-inline-block">
                                    <h5>{item.title}</h5>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features1