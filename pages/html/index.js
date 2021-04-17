import { useEffect } from "react";
import addFacebookScript from "../../utils/facebookScript";
import Link from "next/link";
import styles from '../styles/Html.module.css';

export default function Html () {

    useEffect(() => {
          addFacebookScript();
      }, []);

    return (
        <>
         <div className={styles.container}>

                <Head>

                    <title>Nextjs Facebook SDK - Pure Html</title>

                    <link rel="icon" href="/favicon.ico" />

                </Head>

                <main className={styles.main}>
                
                <Link href="/">
                    <a>Back</a>
                </Link> 

                <div class="fb-comments" data-href="http://localhost:3000/111" data-width="" data-numposts="5"></div>

                <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="100px" data-layout="button" data-action="like" data-size="large" data-share="true"></div>
                
                <div class="fb-comments" data-href="http://localhost:3000/112" data-width="" data-numposts="5"></div>

                <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="100px" data-layout="button" data-action="like" data-size="large" data-share="true"></div>
        
                </main>

            </div>
        </>
    );

}