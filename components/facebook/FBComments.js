import React from 'react';

const FBComments = ({ width, href, numPosts, dataLazy }) => {
  
  return (
     <>
       
        <div className="fb-comments" data-href={href} data-numposts={numPosts} data-width={width} data-lazy={dataLazy}> 
        </div>

     </>
  );
};

export default FBComments;
