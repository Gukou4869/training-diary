import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';

async function signout(): Promise<void> {
  try {
    await signOut(auth);
  } catch (e) {
    throw e;
  }
}

export default signout;
