import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Portfolio4 = ({ data }) => {
    return (
        <div className="section-spacing-sm pb-0">
            <div className="container" data-cues="fadeIn">

                {data.projects.map((item, index) => (
                    <div key={index} className="section-spacing-sm pt-0">
                        <div className="img-link-box">
                            <Link href={`/portfolio/${item.slug}`}>
                                <Image src={item.mainImage} alt={item.title} />
                            </Link>
                        </div>
                        <div className="d-lg-flex justify-content-between mt-4">
                            <div>
                                <h2 className="display-3 font-family-poppins uppercase fw-semi-bold">
                                    <Link className="link-hover-fill" href={`/portfolio/${item.slug}`}>{item.title}</Link>
                                </h2>
                                <ul className="list-inline-dot">
                                    {item.categories.map((category, index) => (
                                        <li key={index}>{category.name}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-end">
                                <Link className="button-fancy button-fancy-right mt-2 mt-lg-0" href={`/portfolio/${item.slug}`}>View Project</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Portfolio4