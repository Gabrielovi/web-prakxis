import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const Portfolio5 = ({ data }) => {
    const [selectedFilter, setSelectedFilter] = useState('');

    const filteredProjects = selectedFilter === ''
        ? data.projects
        : data.projects.filter((item) => item.category === selectedFilter);

    return (
        <div className="section-spacing pt-0">
            <div className="container">
                {/* Portfolio Filter */}
                <div className="filter mb-4 mb-lg-5">
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
                <div className="row custom-row portfolio-grid" data-cues="fadeIn">
                    {filteredProjects.map((item, index) => (
                        <div key={index} className="col-12 col-md-6 custom-col portfolio-item">
                            <div className="portfolio-box" data-hover-text="view project">
                                <Link href={`/portfolio/${item.slug}`}>
                                    <h3>{item.title}</h3>
                                    <div className="portfolio-img">
                                        <Image src={item.mainImage} alt={item.title} loading="lazy" />
                                    </div>
                                    <div className="pt-2 text-end">
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

export default Portfolio5