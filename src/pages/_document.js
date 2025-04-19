import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="#"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,500italic,700,700italic"
        ></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.cdnfonts.com/css/sf-ui-text-2"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
