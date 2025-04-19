import Head from 'next/head';

import '../styles/globals.css';
import '../components/client/css/layout.css';
import '../styles/pages/home.css';
import '../styles/pages/tour/detail.css';
import '../styles/tour/layout.css';

import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from '@mui/material';
import theme from '../styles/theme';
import { HotelProvider } from '../state/context/hotelContext';

import { Loading, ToastMessage } from '../components/common';
import { ClientLayout } from '../components/client/js/layout';
// import { appWithTranslation } from 'next-i18next';
// import ToastMessageWrapper from '@/components/toast/ToastMessageWrapper';

function App({ Component, pageProps }) {
  const toast = {
    type: 'none',
    message: 'some thing',
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-barstyle"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Hotel" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Hotel" />
        <title>Hotel Reservation</title>
      </Head>
      <HotelProvider>
        <Loading loading={false}></Loading>
        <ToastMessage state={toast}></ToastMessage>
        <ThemeProvider theme={theme}>
          <ClientLayout>
            <Component {...pageProps} />
          </ClientLayout>
        </ThemeProvider>
      </HotelProvider>
    </>
  );
}

export default appWithTranslation(App);
