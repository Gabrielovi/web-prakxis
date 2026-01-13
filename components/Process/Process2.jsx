import Image from 'next/image'
import React from 'react'

const Process2 = ({ data }) => {
    return (
        <div className="section-spacing pt-0">
            <div className="container">
                <div className="row g-4 g-xl-5 align-items-center">
                    <div className="col-12 col-lg-6 col-xl-5">
                        <h2 className="display-5 fw-medium">{data.title.first} <span className="text-highlight-gradient-2">{data.title.highlight}</span> {data.title.last}</h2>
                        {data.process.map((process, index) => (
                            <div key={index} className={`process-box process-gradient-2 mt-4 ${index === 0 ? 'active' : ''}`} data-cue="slideInRight">
                                <div className="process-order">
                                    <span>{index + 1}</span>
                                </div>
                                <h4>{process.title}</h4>
                                <p>{process.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="col-12 col-lg-6 col-xl-7">
                        <Image src={data.image.src} alt={data.image.alt} loading="lazy" data-bottom-top="transform: translateY(10px)" data-top-bottom="transform: translateY(-50px)" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process2