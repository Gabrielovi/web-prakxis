import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Portfolio1 = ({ data }) => {
    const [selectedFilter, setSelectedFilter] = useState('');

    const filteredProjects = selectedFilter === ''
        ? data.projects
        : data.projects.filter((item) => item.category === selectedFilter);

    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                        <h2 className="display-3 fw-normal font-family-tertiary fst-italic text-dark-30">Our Recent Works</h2>
                    </div>
                </div>
                <div className="filter mt-4 mb-4 mb-lg-5 text-center">
                    <ul>
                        <li
                            onClick={() => setSelectedFilter('')}
                            className={selectedFilter === '' ? 'mixitup-control-active' : ''}
                        >
                            Show All
                        </li>
                        {data.navigationList.map((listItem, index) => (
                            <li
                                key={index}
                                onClick={() => setSelectedFilter(listItem.dataFilter.slice(1))}
                                className={selectedFilter === listItem.dataFilter.slice(1) ? 'mixitup-control-active' : ''}
                            >
                                {listItem.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="row custom-row portfolio-grid">
                    {filteredProjects.map((item, index) => (
                        <div key={index} className="col-12 col-md-6 custom-col portfolio-item">
                            <div className="portfolio-box" data-hover-text="view project">
                                <Link href={`/portfolio/${item.slug}`}>
                                    <div className="portfolio-img">
                                        <Image src={item.mainImage} alt={item.title} loading="lazy" />
                                    </div>
                                    <div className="d-flex pt-3 justify-content-between align-items-start">
                                        <h3>{item.title}</h3>
                                        <span className="d-inline-block py-2 px-3 bg-gray rounded-pill sm-heading text-dark-60">{item.category}</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Portfolio1