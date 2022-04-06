import { createUserWithEmailAndPassword, User, UserCredential } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';

async function signup(email: string, password: string): Promise<User> {
    try {
        const userCredential: UserCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
        );
        return userCredential.user;
    } catch (e) {
        throw e;
    }
}

export default signup;
