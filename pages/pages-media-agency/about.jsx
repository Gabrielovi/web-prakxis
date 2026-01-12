import { About12, About15, Clients4, Cursor, Footer3, HeaderCenter2, ScrollToTop, Team2 } from '@/components';
import { aboutData } from '@/components/About/AboutData';
import { clientsData } from '@/components/Clients/ClientsData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { teamData } from '@/components/Team/TeamData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React, { useEffect } from 'react'

export default function PageMediaAgencyAbout() {
    const themeData = mainData.pageMediaAgencyAbout;

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
            <HeaderCenter2 data={headerData.mediaAgency} dark />

            <main>
                {/* About */}
                <About15 data={aboutData.mediaAgencyAbout} />

                {/* About 2 */}
                <About12 data={aboutData.mediaAgencyAbout2} className="py-0" />

                {/* Clients */}
                <div className="section-spacing-sm pb-0">
                    <div className="container">
                        <Clients4 data={clientsData.marketing} />
                    </div>
                </div>

                {/* Team */}
                <Team2 data={teamData.mediaAgencyAbout} uppercase />

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
