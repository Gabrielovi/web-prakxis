import React from 'react'
import { mainData } from '@/lib/data'
import Head from 'next/head'
import { portfolioData } from '@/components/Portfolio/PortfolioData'
import { Cursor, Footer3, HeaderCenter, HeaderCenter2, Portfolio7, ScrollToTop } from '@/components';
import { headerData } from '@/components/Header/HeaderData';
import { footerData } from '@/components/Footer/FooterData';

export default function PortfolioList() {
    const themeData = mainData.pagePortfolioList;

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderCenter2 data={headerData.mediaAgency} className="header-dark" white2 />

            <main>
                {/* Portfolio */}
                <Portfolio7 data={portfolioData.mediaAgencyPortfolio} />

                {/* Footer */}
                <Footer3 data={footerData.mediaAgency} />
            </main>

            {/* Cursors */}
            <Cursor />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    )
}
