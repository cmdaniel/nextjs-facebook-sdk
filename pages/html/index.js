import Head from "next/head";
import useFacebook from "../../hooks/useFacebook";
import styles from '../../styles/Html.module.css';

export default function Html() {

    useFacebook({});

    return (
        <>
   
        <Head>
                    
            <meta charset="utf-8" />

            <title>Nextjs Facebook SDK - Pure Html</title>

            <link rel="icon" href="/favicon.ico" />

        </Head>
        
        <div id="fb-root"></div>

            <div className={styles.container}>        

                <main className={styles.main}>
                
                    <h1>This page is working!</h1>
                    <h2>A <a onClick={() => window.location.reload()} style={ { textDecoration: 'underline', cursor: 'pointer' } }>refresh</a> might be required. I still don't know how to solve it.</h2>
           
                    <h2>Post 1</h2>
                    <div className="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="100px" data-layout="button" data-action="like" data-size="large" data-share="true"></div>           
                    <div className="fb-comments" data-href="http://localhost:3000/posts/1" data-width="100%" data-numposts="5"></div>
               
                    <h2>Post 2</h2>
                    <div className="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="100px" data-layout="button" data-action="like" data-size="large" data-share="true"></div>           
                    <div className="fb-comments" data-href="http://localhost:3000/posts/2" data-width="100%" data-numposts="5"></div>
                
                </main>

            </div>
        </>
    );

}