import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';

const login = (email: string, password: string): void => {
    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            // Signed in
            const user = userCredential.user;
            console.log('🚀 ~ file: login.ts ~ line 10 ~ login ~ user', user);
            // ...
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
};

export default login;
