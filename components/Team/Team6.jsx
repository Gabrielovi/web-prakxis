import Image from 'next/image'
import React from 'react'

const Team6 = ({ data, gradient1 }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3 text-center">
                        <h2 className="display-4 fw-medium text-center">
                            <span className={gradient1 ? 'text-gradient-1' : ''}>{data.title}</span>
                        </h2>
                        <p>{data.description}</p>
                    </div>
                </div>
                <div className="row gx-3 gy-4 gy-lg-5 mt-1" data-cues="slideInUp">
                    {data.members.map((member, index) => (
                        <div className="col-12 col-md-6 col-lg-3" key={index}>
                            <div className="team-box border-radius-1">
                                <div className="team-img">
                                    <Image src={member.image} alt={member.name} loading="lazy" />
                                </div>
                                <div className="team-hover p-3">
                                    <div className="bg-black-20 backdrop-filter-blur border-radius p-3 text-center">
                                        <ul className="list-inline-lg">
                                            {member.social.map((social, idx) => (
                                                <li key={idx}><a href={social.link}><i className={`bi bi-${social.icon}`}></i></a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3 text-center">
                                <h5 className="mb-1">{member.name}</h5>
                                <span>{member.position}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team6