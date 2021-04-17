import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {

    return (
      <Html>

        <Head />

        <body>

            {/* <div id="fb-root"></div>
        
            <script 
                async 
                defer 
                crossorigin="anonymous" 
                nonce="wSpIoLOU" 
                src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v10.0"
            ></script> */}
       
     
          <Main />

          <NextScript />

        </body>

      </Html>
    );

  }
}

export default MyDocument;