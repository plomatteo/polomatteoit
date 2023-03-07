import Head from "next/head";
import Script from 'next/script'
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/glitch.css";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Matteo Polo - Regionali 2023</title>
        {/* <!-- Favicon --> */}

        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {/* <!-- plugin CSS --> */}
        <link
          href="static/plugin/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/font-awesome/css/all.min.css"
          rel="stylesheet"
        />
        <link href="static/plugin/et-line/style.css" rel="stylesheet" />
        <link
          href="static/plugin/themify-icons/themify-icons.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/owl-carousel/css/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/magnific/magnific-popup.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/scroll/jquery.mCustomScrollbar.min.css"
          rel="stylesheet"
        />
        {/* <!-- theme css --> */}
        <link href="static/css/style.css" rel="stylesheet" />

        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />
      </Head>
      <Script
        onLoad={() => {
          var _iub = _iub || [];
          _iub.csConfiguration = { "askConsentAtCookiePolicyUpdate": true, "countryDetection": true, "enableLgpd": true, "enableUspr": true, "floatingPreferencesButtonDisplay": "bottom-right", "lang": "en", "lgpdAppliesGlobally": false, "perPurposeConsent": true, "siteId": 3020686, "whitelabel": false, "cookiePolicyId": 77821801, "banner": { "acceptButtonDisplay": true, "closeButtonDisplay": false, "customizeButtonDisplay": true, "explicitWithdrawal": true, "fontSizeBody": "12px", "listPurposes": true, "position": "float-bottom-right", "rejectButtonDisplay": true, "showPurposesToggles": true }; }
        }}></Script>
      <Script type="text/javascript" src="//cdn.iubenda.com/cs/gpp/stub.js"></Script>
      <Script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></Script>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
