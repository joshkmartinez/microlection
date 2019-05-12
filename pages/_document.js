import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
export default class extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <style>{`
            body {
              margin: 0;
              padding: 0;
            }

            @media only screen and (max-height: 650px) {
              body {
                font-size: 0.84em;
              }
            }
          `}</style>

          {/*<link rel='shortcut icon' href='https://jkm.now.sh/logos/pfp.png' />*/}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="keywords"
            content="joshua martinez,joshua,personal,website,projects,about,contact,info,developer"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
          {/*
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.css"
          />*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
