import Footer from "../components/Footer/Footer";
import SSRProvider from "react-bootstrap/SSRProvider";
import Navigation from "../components/Navbar/Navigation";
import TopLogo from "../components/TopLogo/TopLogo";
import "../styles/globals.css";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag("js", new Date); 
          gtag("config", ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS})`}
      </Script>

      <Head>
        <link rel="icon" href="/scmp-logo.svg" />
      </Head>
      <NextSeo
        title="Scientific Center For Manufacturing And Production"
        description="Scientific Center For Manufacturing And Production"
      />
      <SSRProvider>
        <TopLogo />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </SSRProvider>
    </div>
  );
}

export default MyApp;
