import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();
const signout = (): void => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        .catch(error => {
            // An error happened.
        });
};

export default signout;
