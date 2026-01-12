import React, { useState } from 'react'
import { HeaderNavLeft3, SimilarPosts } from '@/components'
import Head from 'next/head'
import { blogData } from '@/components/Blog/BlogData'
import Image from 'next/image';
import { headerData } from '@/components/Header/HeaderData';
import Lightbox from 'yet-another-react-lightbox'
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

const PageBlogSingle = ({ post }) => {
    const [imageOpen, setImageOpen] = useState(false);
    const [videoOpen, setVideoOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setImageOpen(true);
    };

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.description} />
                <meta name="keywords" content={post.keywords} />
            </Head>

            {/* Header */}
            <HeaderNavLeft3 data={headerData.business} />

            <main>
                {/* Post Title */}
                <div className="px-3 px-md-4 px-xxl-5">
                    <div className="bg-image parallax" style={{ backgroundImage: `url(/images/bg.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center 0px' }}>
                        <div className="section-spacing-lg bg-black-40">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-lg-10 offset-lg-1 col-xl-9 col-xxl-8">
                                        <ul className="list-inline-dash mb-2">
                                            <li>{post.category}</li>
                                            <li>Posted on {post.postedOn}</li>
                                        </ul>
                                        <h1 className="display-4 fw-medium">{post.title}</h1>
                                        <div className="sm-heading mt-3">Posted by <a href={post.author.website}>{post.author.name}</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Post */}
                <div className="section-spacing-sm">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1">
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />

                                {/* Lightbox Images */}
                                <div className="row g-3 mt-3">
                                    {post.media.map((image, index) => (
                                        <div key={index} className="col-12 col-md-6">
                                            <div className="img-link-box">
                                                <a className="glightbox" onClick={() => handleImageClick(index)}>
                                                    <Image src={image.image} alt={image.alt} width={515} height={321} loading="lazy" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Lightbox for Images */}
                                <Lightbox
                                    open={imageOpen}
                                    onClose={() => setImageOpen(false)}
                                    startIndex={currentIndex}
                                    slides={post.media.map(image => ({ src: image.image.src, title: image.alt }))}
                                />

                                {/* Content 2 */}
                                <div dangerouslySetInnerHTML={{ __html: post.content2 }} />

                                {/* Lightbox Video */}
                                <div className="lightbox-video mt-4 mt-lg-5">
                                    <Image src={post.videoImage} alt="Video Thumbnail" width={1046} height={415} />
                                    <button className="glightbox lightbox-play-btn" onClick={() => setVideoOpen(true)}>
                                        <i className="bi bi-play"></i>
                                    </button>
                                    <Lightbox
                                        plugins={[Video]}
                                        open={videoOpen}
                                        onClose={() => setVideoOpen(false)}
                                        slides={[
                                            {
                                                type: "video",
                                                width: 1280,
                                                height: 720,
                                                sources: [
                                                    {
                                                        src: post.videoSrc,
                                                        type: "video/mp4",
                                                    },
                                                ],
                                            },
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 offset-lg-1">
                            <hr className="hr-diagonal" />
                        </div>
                    </div>
                </div>

                {/* Tags, Share */}
                <div className="section-spacing-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <ul className="list-inline">
                                            {post.tags.map((tag, idx) => (
                                                <li key={idx}>
                                                    <a className="button button-xs button-radius button-outline-dashed" href={tag.url}>#{tag.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-12 col-md-6 text-md-end">
                                        <ul className="list-inline">
                                            <li>
                                                Share on:
                                            </li>
                                            <li>
                                                <a href="#"><i className="bi bi-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Similar Posts */}
                <SimilarPosts />
            </main>
        </>
    )
}

export async function getStaticPaths() {
    // Generate paths for all your business and corporate blog posts
    const businessPaths = blogData.business.posts.map((post) => ({
        params: { slug: post.slug },
    }));

    const corporatePaths = blogData.corporate.posts.map((post) => ({
        params: { slug: post.slug },
    }));

    const startupPaths = blogData.startup.posts.map((post) => ({
        params: { slug: post.slug },
    }));

    const featuredPostsPaths = blogData.featuredPosts.posts.map((post) => ({
        params: { slug: post.slug },
    }));

    const recentPostsPaths = blogData.recentPosts.posts.map((post) => ({
        params: { slug: post.slug },
    }));

    const paths = [...businessPaths, ...corporatePaths, ...startupPaths, ...featuredPostsPaths, ...recentPostsPaths];

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;

    // Search for the blog post with the matching slug in the business section
    const businessPost = blogData.business.posts.find((post) => post.slug === slug);
    // Search for the blog post with the matching slug in the corporate section
    const corporatePost = blogData.corporate.posts.find((post) => post.slug === slug);
    // Search for the blog post with the matching slug in the startup section
    const startupPost = blogData.startup.posts.find((post) => post.slug === slug);
    // Search for the blog post with the matching slug in the featuredPosts section
    const featuredPostsPost = blogData.featuredPosts.posts.find((post) => post.slug === slug);
    // Search for the blog post with the matching slug in the recentPosts section
    const recentPostsPost = blogData.recentPosts.posts.find((post) => post.slug === slug);

    // Check if the post is found in either section
    if (!businessPost && !corporatePost) {
        return {
            notFound: true,
        };
    }

    // Return the appropriate post based on the section
    const post = businessPost || corporatePost || startupPost || featuredPostsPost || recentPostsPost;

    return {
        props: {
            post,
        },
    };
}

export default PageBlogSingle