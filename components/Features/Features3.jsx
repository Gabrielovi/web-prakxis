import Image from 'next/image'
import React from 'react'

const Features3 = ({ data }) => {
    return (
        <div className="container z-index-1">
            <div className="n-margin-3">
                <div className="row g-3">
                    {data.map((item, index) => (
                        <div key={index} className="col-12 col-lg-4">
                            <div className={`interactive-box border-radius-1 box-shadow  ${index === 0 ? 'mt-lg-3' : ''}`}>
                                <Image src={item.image} alt={item.title} loading="lazy" />
                                <div className="interactive-overlay">
                                    <div className="interactive-inner p-4 p-lg-5">
                                        <h6 className="uppercase mb-0">{item.title}</h6>
                                    </div>
                                    <div className="interactive-hover p-4 p-lg-5">
                                        <p>{item.description}</p>
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

export default Features3