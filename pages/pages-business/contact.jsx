import { Contact1, Cursor, Footer1, HeaderNavLeft3, Map, ScrollToTop } from '@/components';
import { contactData } from '@/components/Contact/ContactData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageBusinessContact() {
    const themeData = mainData.pageBusinessContact;

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
                {/* Contact */}
                <Contact1 data={contactData.business} />

                {/* Map */}
                <div className="section-spacing">
                    <div className="container">
                        <Map />
                    </div>
                </div>

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
