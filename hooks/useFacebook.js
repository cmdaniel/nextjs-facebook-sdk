
import { useEffect } from 'react';

const useFacebook = ({ addTrack }) => {

  useEffect(() => {
 
    const facebookScript = document.createElement("script");

    facebookScript.id = 'fb-sdk';
    facebookScript.async = true;
    facebookScript.defer = true;
    facebookScript.crossOrigin = "anonymous";
    facebookScript.nonce = "5JOEwLPT";
    const track = addTrack ? `&appId=${process.env.NEXT_PUBLIC_FACEBOOK_ID}&autoLogAppEvents=1` : '';
    facebookScript.src = `https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v10.0${track}`;

    document.body.appendChild(facebookScript);

    const href = window.location.href;
    if (href.indexOf('refresh') <= 0) {
      window.location.href = href+'?refresh';
    }

    return () => {
      document.body.removeChild(facebookScript);
    }
  }, [addTrack]);
};

export default useFacebook;