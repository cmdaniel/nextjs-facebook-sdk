import React from 'react';
import styles from '../../styles/FBComments.module.css';

const FBComments = ({ width, href, numPosts, dataLazy }) => {
  
  return (
     <>
       
        <div className={styles.comment} data-href={href} data-numposts={numPosts} data-width={width} data-lazy={dataLazy}> 
        </div>

     </>
  );
};

export default FBComments;
