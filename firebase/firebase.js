// firebaseをimportしています
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MASSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};
// Firebaseのインスタンスが存在しない場合にのみ、インスタンスを作成します
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
