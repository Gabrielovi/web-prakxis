import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const Portfolio7 = ({ data }) => {
    const [selectedFilter, setSelectedFilter] = useState('');

    const filteredProjects = selectedFilter === ''
        ? data.projects
        : data.projects.filter((item) => item.category === selectedFilter);

    return (
        <div className="section-spacing-sm">
            <div className="container">
                <h1 className="display-3 fw-semi-bold uppercase text-center mb-4">{data.title}</h1>
                {/* Portfolio Filter */}
                <div className="filter mb-4 mb-lg-5 text-center">
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

                {/* Portfolio */}
                <div className="row custom-row portfolio-grid">
                    {filteredProjects.map((item, index) => (
                        <div key={index} className="col-12 col-md-6 custom-col portfolio-item">
                            <div className="portfolio-box" data-hover-text="view project">
                                <Link href={item.slug}>
                                    <div className="portfolio-img">
                                        <Image src={item.mainImage} alt={item.title} loading="lazy" />
                                    </div>
                                    <div className="pt-2 d-flex justify-content-between">
                                        <h3 className="mb-0">{item.title}</h3>
                                        <span className="sm-heading text-dark-50">{item.category}</span>
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

export default Portfolio7