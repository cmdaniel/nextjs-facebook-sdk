import { useEffect } from "react";
import addFacebookScript from "../../utils/facebookScript";
import Link from "next/link";
import Head from "next/head";
import styles from '../../styles/Html.module.css';

export default function Html () {

    return (
        <>
         
         <div className={styles.container}>

                <Head>

                    <title>Nextjs Facebook SDK - Pure Html</title>

                    <link rel="icon" href="/favicon.ico" />

                </Head>

                <main className={styles.main}>
                
                    <Link href="/">
                        <a className={styles.back}>Back</a>
                    </Link> 

                    <h1>This page is working! Script inserted manually</h1>

                    <div id="fb-root"></div>
                    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v10.0" nonce="5JOEwLPT"></script>
                    
                    <h2>Post 1</h2>
                    <div class="fb-comments" data-href="http://localhost:3000/111" data-width="" data-numposts="5"></div>

                    <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="100px" data-layout="button" data-action="like" data-size="large" data-share="true"></div>
                    
                    
                    <h2>Post 2</h2>
                    <div class="fb-comments" data-href="http://localhost:3000/112" data-width="" data-numposts="5"></div>

                    <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="100px" data-layout="button" data-action="like" data-size="large" data-share="true"></div>
        
                </main>

            </div>
        </>
    );

}