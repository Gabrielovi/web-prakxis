import React, { useEffect } from 'react'
import { BackgroundVerticalLines, Blog4, Cursor, Footer, Footer6, Header, HeaderNavLeft3, ScrollToTop } from '@/components'
import { mainData } from '@/lib/data'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { blogData } from '@/components/Blog/BlogData';
import { headerData } from '@/components/Header/HeaderData'
import { footerData } from '@/components/Footer/FooterData'
import Blog5 from '@/components/Blog/Blog5'

export default function BlogList() {
    const themeData = mainData.pageBlogList;

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
                {/* Featured Blog */}
                <Blog4 data={blogData.featuredPosts} />

                {/* Recent Blog */}
                <Blog5 data={blogData.recentPosts} />

                {/* Footer */}
                <Footer6 data={footerData.portfolio} />
            </main >

            {/* Cursors */}
            <Cursor />
        </>
    )
}
