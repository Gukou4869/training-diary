export const firebaseError = (code: string): string => {
    switch (code) {
        case 'auth/user-not-found':
            return 'こちらのメールアドレスは登録されていません。';
        case 'auth/invalid-password':
            return 'パスワードが間違っています。';
        default:
            return 'サーバーエラーが発生しました。お手数ですが、開発者までご連絡をお願いいたします。';
    }
};
