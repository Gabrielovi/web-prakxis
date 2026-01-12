import { BackgroundVerticalLines, Cursor, Footer3, HeaderFullscreenMenu4, Portfolio5, ScrollToTop } from '@/components';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import Hero7 from '@/components/Hero/Hero7';
import { heroData } from '@/components/Hero/HeroData';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function IndexPortfolioFullWidth() {
    const themeData = mainData.portfolioGrid;

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderFullscreenMenu4 data={headerData.portfolioGrid} />

            <main>
                {/* Hero */}
                <Hero7 data={heroData.portfolioGrid} />

                {/* Portfolio */}
                <Portfolio5 data={portfolioData.portfolioGrid} />

                {/* Footer */}
                <Footer3 data={footerData.portfolioGrid} />
            </main>

            {/* Cursors */}
            <Cursor />

            {/* Scroll to Top */}
            <ScrollToTop />

            {/* Background Vertical lines */}
            <BackgroundVerticalLines />
        </>
    )
}
