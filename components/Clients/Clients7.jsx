import Image from 'next/image'
import React from 'react'

const Clients7 = ({ data }) => {
    return (
        <div className="section-spacing-sm">
            <div className="container">
                <div className="row g-4 g-xl-5 align-items-center">
                    <div className="col-12 col-lg-4 text-center text-lg-start">
                        <h2 className="fw-medium display-6">
                            {data.title.first} <span className="text-highlight-gradient-2">{data.title.highlight}</span> {data.title.last}
                        </h2>
                        <a className="button button-md button-rounded button-gradient-2 mt-3 mt-lg-4" href={data.button.href}>
                            {data.button.text}
                        </a>
                    </div>
                    <div className="col-12 col-lg-8">
                        <ul className="border-grid column-3">
                            {data.clients.map((client, index) => (
                                <li key={index} className="px-lg-5">
                                    <div className="client-box-with-link">
                                        <a href={client.link}>
                                            <Image src={client.logo} alt={client.alt} loading="lazy" />
                                            <span>{client.name}</span>
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

export default Clients7