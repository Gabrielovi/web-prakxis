import { About12, About9, Cursor, Footer3, HeaderFullscreenMenu2, ScrollToTop, Team5 } from '@/components';
import { aboutData } from '@/components/About/AboutData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { teamData } from '@/components/Team/TeamData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageInteriorAbout() {
    const themeData = mainData.pageInteriorAbout;

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderFullscreenMenu2 data={headerData.interior} />

            <main>
                {/* Title */}
                <div className="bg-image parallax" style={{ backgroundImage: `url(/images/bg.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center 0px' }}>
                    <div className="section-spacing-xl bg-black-40">
                        <div className="container text-center">
                            <h1 className="display-2 fw-semi-bold uppercase mb-0">About Us</h1>
                        </div>
                    </div>
                </div>

                {/* About */}
                <About9 data={aboutData.interiorAbout} />

                {/* About 2 */}
                <About12 data={aboutData.interiorAbout2} className="pt-0" />

                {/* Team */}
                <Team5 data={teamData.interiorAbout} />

                {/* Footer */}
                <Footer3 data={footerData.interior} />
            </main>

            {/* Cursors */}
            <Cursor />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    )
}
