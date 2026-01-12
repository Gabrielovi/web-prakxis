import { Cursor, HeaderFullscreenMenu5, Portfolio6 } from '@/components';
import { headerData } from '@/components/Header/HeaderData';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function IndexPortfolioHorizontal() {
    const themeData = mainData.portfolioHorizontal;

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderFullscreenMenu5 data={headerData.portfolioHorizontal} />

            <main className="section-fullscreen">
                {/* Portfolio */}
                <Portfolio6 data={portfolioData.portfolioHorizontal} />
            </main>

            {/* Cursors */}
            <Cursor />
        </>
    )
}
