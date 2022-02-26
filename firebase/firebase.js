// firebaseをimportしています
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyDOYAR7dpHcl7J6h1XxSe1Dp3KII496Ftc',
    authDomain: 'training-diary-f2f96.firebaseapp.com',
    projectId: 'training-diary-f2f96',
    storageBucket: 'training-diary-f2f96.appspot.com',
    messagingSenderId: '774435497389',
    appId: '1:774435497389:web:771446c42f673e1cdc6d24',
    measurementId: 'G-H7PY1DNR6B',
};
// Firebaseのインスタンスが存在しない場合にのみ、インスタンスを作成します
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
