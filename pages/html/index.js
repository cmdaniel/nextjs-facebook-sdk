import Head from "next/head";
import styles from '../../styles/Html.module.css';

export default function Html () {

    return (
        <>
            <div id="fb-root"></div>
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v10.0" nonce="5JOEwLPT"></script>
            
            <div className={styles.container}>

                <Head>

                    <title>Nextjs Facebook SDK - Pure Html</title>

                    <link rel="icon" href="/favicon.ico" />

                </Head>

                <main className={styles.main}>
                
                    <h1>This page is working! Script inserted manually</h1>
           
                    <h2>Post 1</h2>
                    <div className="fb-comments" data-href="http://localhost:3000/111" data-width="" data-numposts="5"></div>

                    <div className="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="100px" data-layout="button" data-action="like" data-size="large" data-share="true"></div>
                    
                    
                    <h2>Post 2</h2>
                    <div className="fb-comments" data-href="http://localhost:3000/112" data-width="" data-numposts="5"></div>

                    <div className="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="100px" data-layout="button" data-action="like" data-size="large" data-share="true"></div>
        
                </main>

            </div>
        </>
    );

}