import Image from 'next/image'
import React from 'react'

const Team1 = ({ data }) => {
    return (
        <div className="section-spacing pt-0">
            <div className="container">
                <div className="row g-4 g-lg-5 align-items-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-4 order-xl-2">
                        <h2 className="display-3 fw-normal font-family-tertiary fst-italic text-dark-30 mb-4">{data.title}</h2>
                        <p>{data.description}</p>
                        <a className="button-fancy-gradient-1 mt-4" href={data.button.link}>{data.button.text}</a>
                    </div>
                    <div className="col-12 col-xl-8 order-xl-1">
                        <div className="row g-3">
                            {data.members.map((member, index) => (
                                <div key={index} className="col-12 col-md-4">
                                    <div className="interactive-box">
                                        <Image src={member.image} alt={member.name} loading="lazy" />
                                        <div className="interactive-overlay">
                                            <div className="interactive-inner p-4">
                                                <h5 className="mb-1">{member.name}</h5>
                                                <span>{member.position}</span>
                                            </div>
                                            <div className="interactive-hover p-4">
                                                <ul className="list-inline-lg">
                                                    <li><a href={member.social.facebook}><i className="bi bi-facebook"></i></a></li>
                                                    <li><a href={member.social.twitter}><i className="bi bi-twitter-x"></i></a></li>
                                                    <li><a href={member.social.instagram}><i className="bi bi-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
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

export default Team1