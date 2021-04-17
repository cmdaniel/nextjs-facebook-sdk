import Head from 'next/head';
import FBComments from '../components/facebook/FBComments';
import useFacebook from '../hooks/useFacebook';
import styles from '../styles/Home.module.css';

export default function Home({ posts }) {

  useFacebook({ addTrack: false });

  return (

    <div className={styles.container}>

      <Head>

        <title>Nextjs Facebook SDK - Home</title>

        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className={styles.main}>
        
        <h1>This page is working!</h1>
        <h2>A <a onClick={() => window.location.reload()} style={ { textDecoration: 'underline', cursor: 'pointer' } }>refresh</a> might be required. I still don't know how to solve it.</h2>
           
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

export async function getStaticProps() {
  
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