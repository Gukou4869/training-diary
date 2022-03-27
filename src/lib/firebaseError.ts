export const firebaseError = (code: string): string => {
  console.log(code);
  switch (code) {
    case 'auth/user-not-found':
      return 'こちらのメールアドレスは登録されていません。';
    case 'auth/invalid-password':
      return 'パスワードが間違っています。';
    case 'auth/email-already-in-use':
      return '入力されたパスワードはすでに登録されています';
    case 'auth/wrong-password':
      return 'パスワードが間違っています。';
    default:
      return 'サーバーエラーが発生しました。お手数ですが、開発者までご連絡をお願いいたします。';
  }
};

export default firebaseError;
