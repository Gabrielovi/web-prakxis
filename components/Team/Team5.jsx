import Image from 'next/image'
import React from 'react'

const Team5 = ({ data }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                        <h2 className="display-6 fw-medium">{data.description}</h2>
                    </div>
                </div>
                <div className="divider-side-line mt-3">
                    <div className="h6 sm-heading mb-0 me-3">{data.title}</div>
                </div>
                <div className="row gx-3 gy-4 gy-lg-5 mt-1" data-cues="fadeIn">
                    {data.members.map((member) => (
                        <div className="col-12 col-md-6 col-lg-3" key={member.id}>
                            <div className="team-box">
                                <div className="team-img">
                                    <Image src={member.image} alt={member.name} />
                                </div>
                                <div className="team-hover p-3">
                                    <div className="bg-black-20 backdrop-filter-blur border-radius p-3 text-center">
                                        <ul className="list-inline-lg">
                                            {member.social.map((social, i) => (
                                                <li key={i}>
                                                    <a href={social.link}>
                                                        <i className={`bi bi-${social.icon}`}></i>
                                                    </a>
                                                </li>
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

export default Team5