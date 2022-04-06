import { signInWithEmailAndPassword, User, UserCredential } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';

async function login(email: string, password: string): Promise<User> {
    try {
        const userCredential: UserCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password,
        );
        return userCredential.user;
    } catch (e) {
        throw e;
    }
}

export default login;
