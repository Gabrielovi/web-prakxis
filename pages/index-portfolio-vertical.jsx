import { Cursor, Footer5, HeaderFullscreenMenu2} from '@/components';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function IndexPortfolioVertical() {
    const [activeIndex, setActiveIndex] = useState(0);
    const themeData = mainData.portfolioVertical;

    useEffect(() => {
        // Add class to the body tag
        document.body.classList.add('bg-black');

        // Cleanup function to remove the class on component unmount
        return () => {
            document.body.classList.remove('bg-black');
        };
    }, []);

    useEffect(() => {
        const vPortfolioNav = document.querySelector(".vp-nav");
        const vPortfolioLinks = document.querySelectorAll(".vp-link");

        if (vPortfolioLinks) {
            vPortfolioLinks.forEach(function (vPortfolioLink) {
                vPortfolioLink.addEventListener("mouseenter", function () {
                    var thisParent = this.parentElement;
                    var vPortfolioChildrens = vPortfolioNav.querySelectorAll("li");

                    vPortfolioChildrens.forEach(function (child) {
                        child.classList.remove("active");
                    });

                    thisParent.classList.add("active");
                });
            });
        }
    }, []);

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderFullscreenMenu2 data={headerData.portfolioVertical} />

            <main>
                {/* Portfolio */}
                <div className="container-fluid h-100 position-relative">
                    <div className="vertical-portfolio">
                        <div className="vertical-portfolio-captions">
                            <ul className="vp-nav display-3 font-family-secondary fw-medium">
                                {portfolioData.portfolioVertical.projects.map((item, index) => (
                                    <li key={index} className={`vp-item ${activeIndex === index ? 'active' : ''}`}>
                                        <Image src={item.mainImage} alt={item.title} />
                                        <Link
                                            className="vp-link link-hover-line"
                                            href={item.slug}
                                            onMouseEnter={() => setActiveIndex(index)}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Footer5 data={footerData.portfolioVertical} />
            </main>

            {/* Cursors */}
            <Cursor />
        </>
    )
}
