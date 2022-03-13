import {
    ActionCodeSettings,
    createUserWithEmailAndPassword,
    sendSignInLinkToEmail,
    User,
    UserCredential,
} from 'firebase/auth';
import { auth } from '../../../firebase/firebase';

async function signup(email: string, password: string): Promise<User> {
    try {
        const userCredential: UserCredential =
            await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (e) {
        throw e;
    }
}

export default signup;

const CONTINUE_URL_DEV = 'http://localhost:3000/?login';
const CONTINUE_URL_PRD = 'https://domain.web.app/?login=1';
const LOCAL_STORAGE_KEY_EMAIL = 'emailForSignIn';

const actionCodeSettings: ActionCodeSettings = {
    // ログイン成功時のリダイレクト先URL
    url: CONTINUE_URL_DEV,
    handleCodeInApp: true,
};

export async function sendLinkForSignUp(email: string) {
    try {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings);
        localStorage.setItem('emailForSignIn', email);
    } catch (e) {
        throw e;
    }
}
