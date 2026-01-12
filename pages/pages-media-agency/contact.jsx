import { Contact1, Cursor, Footer3, HeaderCenter2, Map, ScrollToTop } from '@/components';
import { contactData } from '@/components/Contact/ContactData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React, { useEffect } from 'react'

export default function PageMediaAgencyContact() {
    const themeData = mainData.pageMediaAgencyContact;

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
                {/* Contact */}
                <Contact1 data={contactData.marketing} dark />

                {/* Map */}
                <div className="section-spacing">
                    <div className="container">
                        <Map />
                    </div>
                </div>

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
