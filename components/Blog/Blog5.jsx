import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog5 = ({ data }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="divider-side-line">
                    <div className="h6 sm-heading mb-0 me-3">{data.title}</div>
                </div>
                {data.posts.map((post, index) => (
                    <div key={index} className="row g-4 g-lg-5 align-items-center mt-1">
                        <div className="col-12 col-lg-6 col-xl-5">
                            <div className="img-link-box border-radius">
                                <Link href={`/blog/${post.slug}`}>
                                    <Image src={post.image.src} alt={post.image.alt} loading="lazy" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-7">
                            <ul className="list-inline-dash sm-heading mb-3">
                                <li>{post.category}</li>
                                <li>{post.postedOn}</li>
                            </ul>
                            <h2><Link className="link-hover-line" href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                            <p>{post.description}</p>
                            <Link className="button-fancy mt-3 mt-lg-4" href={`/blog/${post.slug}`}>Read More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog5