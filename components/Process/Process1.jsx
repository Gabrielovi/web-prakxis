import Image from 'next/image'
import React from 'react'

const Process1 = ({ data, className, tertiary }) => {
    return (
        <div className={`section-spacing ${className}`}>
            <div className="container">
                <div className="row g-4 g-xl-5 align-items-center">
                    <div className="col-12 col-lg-6 col-xl-7 order-lg-2">
                        <Image src={data.image.src} alt={data.image.alt} loading="lazy" data-bottom-top="transform: translateY(10px)" data-top-bottom="transform: translateY(-50px)" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5 order-lg-1">
                        {tertiary ? (
                            <h2 className="display-3 fw-normal font-family-tertiary fst-italic text-dark-30 mb-3">{data.title}</h2>
                        ) : (
                            <h2 className="display-5 fw-medium">{data.title.first} <span className="text-highlight-gradient-1">{data.title.highlight}</span> {data.title.last}</h2>
                        )}
                        {data.process.map((process, index) => (
                            <div key={index} className={`process-box  mt-4 mt-xl-5 ${index === 0 ? 'active' : ''}`} data-cue="slideInRight">
                                <div className="process-order">
                                    <span>{index + 1}</span>
                                </div>
                                <h4>{process.title}</h4>
                                <p>{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process1