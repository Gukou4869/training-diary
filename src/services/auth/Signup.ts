import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';
import { IError } from '@/store/error/models';

const signup = (email: string, password: string): void => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch(error => {
            const errorObj: IError = {
                hasError: true,
                errorType: error.code,
                errorMessage: error.message,
            };
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            return errorObj;
        });
};

export default signup;
