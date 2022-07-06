import Footer from '../components/Footer/Footer'
import SSRProvider from 'react-bootstrap/SSRProvider';
import Navigation from '../components/Navbar/Navigation'
import TopLogo from '../components/TopLogo/TopLogo'
import '../styles/globals.css'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
     
        <link rel="icon" href="/scmp-logo.svg" />
      </Head>
      <NextSeo
        title='Scientific Center For Manufacturing And Production'
        description='Scientific Center For Manufacturing And Production'
      />
      <SSRProvider>
        <TopLogo />
        <Navigation />
        <Component {...pageProps} />
        <Footer />

      </SSRProvider>



    </div>)
}

export default MyApp
