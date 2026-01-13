import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero3 = ({ data }) => {
    return (
        <div className="section-spacing-lg">
            <div className="container">
                <div className="row g-4 g-xl-5 align-items-center">
                    <div className="col-12 col-xl-8">
                        <h1 className="display-3 font-family-poppins fw-bold stroke-text">
                            {data.title}
                        </h1>
                        <h2 className="display-3 fw-normal font-family-tertiary fst-italic text-dark-30">
                            {data.subtitle}
                        </h2>
                        <ul className="list-inline-2xl mt-4 mt-xl-5">
                            <li>
                                <Link
                                    className="button button-lg button-rounded button-gradient-1 button-hover-slide"
                                    href={data.button1.href}
                                >
                                    <span data-text={data.button1.text}>{data.button1.text}</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="link-hover-gradient-1 font-family-secondary" href={data.button2.href}>
                                    {data.button2.text}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-xl-4 d-none d-xl-block">
                        <div className="position-relative">
                            <Image className="img-mask-1" src={data.image.src} alt={data.image.alt} loading="lazy" />
                            <div className="position-absolute start-0 bottom-0 translate-middle d-flex align-items-center bg-white-80 backdrop-filter-blur rounded-pill px-4 py-3 box-shadow text-dark icon-2xl">
                                <i className="bi bi-check2-circle"></i>
                                <div className="d-inline-block ps-3">
                                    <p>{data.awardText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero3