import '../styles/globals.css';
import Link from 'next/link';

function NextJsFacebookSdkApp({ Component, pageProps }) {
  return (
    <>
      <nav>
       
        <Link href="/">
            <a>Home</a>
        </Link>

        <Link href="/html">
            <a>Pure Html</a>
        </Link> 

      </nav>

      <Component {...pageProps} />
    </>
  );
}

export default NextJsFacebookSdkApp;
