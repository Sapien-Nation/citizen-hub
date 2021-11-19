import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html className="f-full">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <meta name="robots" content="index, follow" />
          <link href="/static/favicon.ico" rel="icon" type="image/png" />
          <meta
            content="Sapien is a Web3 social network that rewards content creators and puts users back in control of their data. Built on Ethereum ♥️."
            name="description"
          />
        </Head>
        <body className="f-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
