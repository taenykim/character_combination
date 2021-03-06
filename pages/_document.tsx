import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import Document, { Html, Head, Main, NextScript } from 'next/document'

interface Props {
  styleTags: any
}

class _document extends Document<Props> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }
  render() {
    return (
      <Html>
        <Head>{this.props.styleTags}</Head>
        <body style={{ fontFamily: 'escore3' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default _document
