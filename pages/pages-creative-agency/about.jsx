import { About9, BackgroundVerticalLines, Clients3, Cursor, Footer1, HeaderFullscreenMenu1, ScrollToTop, Services8, SlidingText2, Team4 } from '@/components';
import { aboutData } from '@/components/About/AboutData';
import { clientsData } from '@/components/Clients/ClientsData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { servicesData } from '@/components/Services/ServicesData';
import { slidingData } from '@/components/Sliding/SlidingData';
import { teamData } from '@/components/Team/TeamData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageCreativeAgencyAbout() {
    const themeData = mainData.pageCreativeAgencyAbout;

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderFullscreenMenu1 data={headerData.creativeAgency} className="header-dark" />

            <main>
                {/* About */}
                <About9 data={aboutData.creativeAgencyAbout} />

                {/* Progress bars / Services */}
                <Services8 data={servicesData.creativeAgencyAbout} />

                {/* Clients */}
                <Clients3 data={clientsData.creativeAgency} className="bg-gray" />

                {/* Sliding Text */}
                <SlidingText2 data={slidingData.creativeAgency} />

                {/* Team */}
                <Team4 data={teamData.creativeAgencyAbout} />

                {/* Footer */}
                <Footer1 data={footerData.corporate} />
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
