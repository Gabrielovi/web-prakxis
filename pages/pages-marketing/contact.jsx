import { Contact1, Cursor, Footer3, HeaderCenter, Map } from '@/components';
import { contactData } from '@/components/Contact/ContactData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageMarketingContact() {
    const themeData = mainData.pageMarketingContact;

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
                {/* Title */}
                <div className="section-spacing bg-gradient-1 bg-opacity-10">
                    <div className="container pt-4">
                        <h1 className="display-3 fw-medium text-center mb-0"><span className="text-gradient-1">Get in touch with us</span></h1>
                    </div>
                </div>

                {/* Contact */}
                <Contact1 data={contactData.marketing} removeTitle />

                {/* Map */}
                <div className="section-spacing">
                    <div className="container">
                        <Map />
                    </div>
                </div>

                {/* Footer */}
                <Footer3 data={footerData.marketing} />
            </main>

            {/* Cursors */}
            <Cursor />
        </>
    )
}
