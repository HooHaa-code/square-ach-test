let isSDKLoaded = false

export const loadSquareSDK = async () => {
    console.log('isSDKLoaded', isSDKLoaded)
    if(!isSDKLoaded){
        await injectScript({id: 'squareSDK', url:'https://sandbox.web.squarecdn.com/v1/square.js'})
        console.log('sdkLoaded')
        isSDKLoaded = true
    }
}

export const injectScript = ({ id, url }) =>
    new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.setAttribute('id', id);
        script.src = url;
        document.getElementsByTagName('body')[0].appendChild(script);

        script.onload = () => {
            resolve();
        };

        script.onerror = () => {
            reject();
        };
    });
