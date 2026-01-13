import React from 'react'

const Process3 = ({ data }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="bg-gradient-1 bg-opacity-10 p-4 p-md-5 border-radius-1 backdrop-filter-blur" data-cue="slideInUp">
                    <div className="row g-4">
                        {data.map((process, index) => (
                            <div key={index} className="col-12 col-lg-4">
                                <div className="h2 fw-normal mb-3">
                                    <span className="text-gradient-1">{process.number}</span>
                                </div>
                                <h4 className="text-dark">{process.title}</h4>
                                <p className="text-dark-70">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process3