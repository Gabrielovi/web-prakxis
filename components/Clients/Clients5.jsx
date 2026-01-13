import Image from 'next/image'
import React from 'react'

const Clients5 = ({ data }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row g-4 g-lg-5 align-items-center">
                    <div className="col-12 col-lg-4">
                        <div className="d-inline-block px-3 py-2 rounded-pill sm-heading title-fade-gradient-1 text-gradient-1 mb-3">{data.title}</div>
                        <h2 className="font-family-tertiary">{data.clientMessage}</h2>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="row g-5" data-cues="fadeIn">
                            {data.clients.map(client => (
                                <div className="col-6 col-md-4 col-xl-3" key={client.id}>
                                    <div className="client-box">
                                        <a href={client.link}>
                                            <Image src={client.logo} alt={client.alt} loading="lazy" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients5