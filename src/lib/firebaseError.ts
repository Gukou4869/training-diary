export const firebaseError = (code: string): string => {
    switch (code) {
        case 'auth/user-not-found':
            return 'こちらのメールアドレスは登録されていません。';
        case 'auth/invalid-password':
            return 'パスワードが間違っています。';
        case 'auth/email-already-in-use':
            return '入力されたパスワードはすでに登録されています';
        default:
            return 'サーバーエラーが発生しました。お手数ですが、開発者までご連絡をお願いいたします。';
    }
};
