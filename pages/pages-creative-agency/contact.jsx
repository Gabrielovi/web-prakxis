import { BackgroundVerticalLines, Contact1, Cursor, Footer1, HeaderFullscreenMenu1, Map, ScrollToTop } from '@/components';
import { contactData } from '@/components/Contact/ContactData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageCreativeAgencyContact() {
    const themeData = mainData.pageCreativeAgencyContact;

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderFullscreenMenu1 data={headerData.creativeAgency} />

            <main>
                {/* Contact */}
                <Contact1 data={contactData.creativeAgency} italic />

                {/* Map */}
                <div className="section-spacing">
                    <div className="container">
                        <Map />
                    </div>
                </div>

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
