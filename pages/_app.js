import React from 'react'
import { LoadingScreen } from '@/components'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "swiper/css";
import '@/styles/theme.scss'
import '@/styles/all.min.css'
import '@/styles/themify-icons.css'
import Head from 'next/head'
import { mainData } from '@/lib/data'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {loading ? (
        <React.Fragment>
          <Head>
            <title>Prakxis | Ciencia y Narrativa en Acción</title>
            <meta name="description" content="Transformamos el conocimiento complejo en historias humanas, visuales y accesibles para conectar la ciencia con las personas." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href={mainData.favicon.src} />
          </Head>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}