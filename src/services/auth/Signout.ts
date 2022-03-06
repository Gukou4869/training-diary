import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';

const signout = (): void => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            console.log('logout!!!');
        })
        .catch(error => {
            // An error happened.
        });
};

export default signout;
