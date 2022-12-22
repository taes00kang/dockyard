import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript  } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
   
    return initialProps
  }


  render() {
    return (
      <Html lang="en">
        <Head />
        <body className='theme-sec-1'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument