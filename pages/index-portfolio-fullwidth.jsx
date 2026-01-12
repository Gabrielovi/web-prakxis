import { Cursor, Footer4, HeaderFullscreenMenu3, Portfolio4, ScrollToTop } from '@/components';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React, { useEffect } from 'react'

export default function IndexPortfolioFullWidth() {
    const themeData = mainData.portfolioFullWidth;

    useEffect(() => {
        // Add class to the body tag
        document.body.classList.add('bg-iceblue');

        // Cleanup function to remove the class on component unmount
        return () => {
            document.body.classList.remove('bg-iceblue');
        };
    }, []);

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderFullscreenMenu3 data={headerData.portfolioFullWidth} />

            <main>
                {/* Portfolio */}
                <Portfolio4 data={portfolioData.portfolioFullWidth} />

                {/* Footer */}
                <Footer4 data={footerData.portfolioFullWidth} />
            </main>

            {/* Cursors */}
            <Cursor />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    )
}
