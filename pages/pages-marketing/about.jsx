import { About12, About13, Clients4, Cursor, Footer3, HeaderCenter, ScrollToTop, Team6 } from '@/components';
import { aboutData } from '@/components/About/AboutData';
import { clientsData } from '@/components/Clients/ClientsData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { teamData } from '@/components/Team/TeamData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageMarketingAbout() {
    const themeData = mainData.pageMarketingAbout;

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderCenter data={headerData.marketing} />

            <main>
                {/* About */}
                <About13 data={aboutData.marketingAbout} />

                {/* About 2 */}
                <About12 data={aboutData.marketingAbout2} gradient1 />

                {/* Clients */}
                <div className="section-spacing-sm pb-0">
                    <div className="container">

                        <Clients4 data={clientsData.marketing} />
                    </div>
                </div>

                {/* Team */}
                <Team6 data={teamData.marketingAbout} gradient1 />

                {/* Footer */}
                <Footer3 data={footerData.marketing} />
            </main>

            {/* Cursors */}
            <Cursor />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    )
}
