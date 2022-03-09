import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';

const signup = (email: string, password: string): void => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
};

export default signup;
