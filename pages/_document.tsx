import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="favicon.png" />
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Falaq" />
        <meta name="author" content="Hum Bruno" />
        <meta
          name="keywords"
          content="falaq, create value for your business, portflio, development"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
