import Image from 'next/image'
import React from 'react'

const Clients6 = ({ data }) => {
    return (
        <div className="section-spacing-sm">
            <div className="container">
                <h1 className="display-3 fw-normal font-family-tertiary fst-italic text-dark-30 text-center mb-4 mb-lg-5">Our Amazing Clients</h1>
                <div className="row">
                    <div className="col-12 col-xl-10 offset-xl-1">
                        <ul className="border-grid column-4">
                            {data.clients.map((client) => (
                                <li className="p-lg-5" key={client.id}>
                                    <div className="client-box-with-link">
                                        <a href={client.link}>
                                            <Image src={client.logo} alt={client.alt} loading="lazy" />
                                            <span>{client.alt}</span>
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients6