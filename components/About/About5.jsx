import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About5 = ({ data }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-12 col-lg-4">
                        <div className="circle-text">
                            <svg viewBox="0 0 200 200" className="circle-svg rotating">
                                <path id="textPath" d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0" transform="translate(100,100)" fill="none" stroke="rgba(28, 30, 32, 0.1)" strokeWidth="10"></path>
                                <text textAnchor="start">
                                    <textPath xlinkHref="#textPath" textLength="300%">
                                        {data.textPath}
                                    </textPath>
                                </text>
                            </svg>
                            <div className="circle-text-inner icon-4xl text-gradient-5">
                                <i className="ti-crown"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="d-flex align-items-center mb-4">
                            <ul className="avatar-group">
                                {data.images.map((item, index) => (
                                    <li key={index}>
                                        <Image src={item.src} alt={item.alt} width={60} height={60} loading="lazy" />
                                    </li>
                                ))}
                            </ul>
                            <div className="d-inline-block ps-3">
                                <p>{data.clientMessage} <br className="d-md-block" />{data.clientMessage2}</p>
                            </div>
                        </div>
                        <h2 className="display-6 fw-normal">
                            {data.description}
                        </h2>
                        <Link href={data.button.href} className="button button-lg button-dark button-rounded button-hover-slide mt-4">
                            <span data-text={data.button.text}>{data.button.text}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About5