import { Contact3, Cursor, Footer3, HeaderFullscreenMenu2, ScrollToTop } from '@/components';
import { contactData } from '@/components/Contact/ContactData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageInteriorContact() {
    const themeData = mainData.pageInteriorContact;

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
                            <h1 className="display-2 fw-semi-bold uppercase mb-0">Get In Touch</h1>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <Contact3 data={contactData.interior} />

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
