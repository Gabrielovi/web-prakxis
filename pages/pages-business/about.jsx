import { About7, Clients5, Cursor, Footer1, HeaderNavLeft3, HrDiagonal, ScrollToTop, SlidingText, Team2 } from '@/components';
import { aboutData } from '@/components/About/AboutData';
import { clientsData } from '@/components/Clients/ClientsData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { slidingData } from '@/components/Sliding/SlidingData';
import { teamData } from '@/components/Team/TeamData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageBusinessAbout() {
    const themeData = mainData.pageBusinessAbout;

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderNavLeft3 data={headerData.business} className="header-dark" />

            <main>
                {/* About */}
                <About7 data={aboutData.businessAbout} />

                {/* Hr Diagonal */}
                <HrDiagonal />

                {/* Clients */}
                <Clients5 data={clientsData.businessAbout} />

                {/* Sliding Text */}
                <SlidingText data={slidingData.business} />

                {/* Team */}
                <Team2 data={teamData.businessAbout} />

                {/* Footer */}
                <Footer1 data={footerData.business} />
            </main>

            {/* Cursors */}
            <Cursor />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    )
}
