import Head from 'next/head';
import { useEffect } from 'react';
import FBComments from '../components/facebook/FBComments';
import styles from '../styles/Home.module.css';
import addFacebookScript from '../utils/facebookScript';

export default function Home({ posts }) {

  useEffect(() => {
    if(posts?.length > 0) {
      addFacebookScript();
    }
  }, [posts]);

  return (

    <div className={styles.container}>

      <Head>

        <title>Nextjs Facebook SDK</title>

        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className={styles.main}>
          
        <ul>
          
          { posts && posts.map(post => (
              
                <li key={post.id}>
                  
                    <h1>{post.title}</h1>

                    <FBComments 
                      href={ `http://localhost:3000/post/${post.id}` } 
                      numPosts={10}
                      dataLazy={true}
                      width="100%"
                    />

                </li>
            )
          )}

        </ul>

      </main>

      <footer className={styles.footer}>
        
        <h4>References:</h4>
        
        <a href="https://developers.facebook.com/docs/plugins/" target="_blank" title="facebook plugins">Social Plugins</a>

      </footer>

    </div>

  );

}

export async function getServerSideProps() {
  
  const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
    { id: 4, title: 'Post 4' },
  ];

  return {
    props: {
      posts,
    },
  };

}