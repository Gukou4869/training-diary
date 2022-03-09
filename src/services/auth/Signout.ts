import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';

async function signout(): Promise<void> {
    try {
        await signOut(auth);
        console.log('sign out complete!');
    } catch (e) {
        throw e;
    }
}

export default signout;
