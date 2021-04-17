export default function addFacebookScript(forceReload = false, id = null, addTrack = false) {
    if (typeof window !== "undefined") {
        const fbFinded = document.getElementById('fb-sdk');
        const wasFinded = !!fbFinded;
        if (wasFinded && forceReload) {
            fbFinded.remove();
            addScript(id, addTrack);
        }
        if (!wasFinded) {
           addScript(id, addTrack);
        }
    }
}

function addScript(id, addTrack) {
    console.log('addFaceBookScript', new Date());

    const facebookScript = document.createElement("script");

    facebookScript.id = id || 'fb-sdk';
    facebookScript.async = true;
    facebookScript.defer = true;
    facebookScript.crossOrigin = "anonymous";
    facebookScript.nonce = "xB6vPMou";
    const track = addTrack ? `&appId=${process.env.NEXT_PUBLIC_FACEBOOK_ID}&autoLogAppEvents=1` : '';
    facebookScript.src = `https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v10.0${track}`;

    document.body.appendChild(facebookScript);
}

function addDiv() {
    const div = document.createElement("div");
    div.id = 'fb-root';
    document.body.appendChild(div);
}