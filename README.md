# Tralog

トレーニングを記録できるウェブサイト 💪🏼

# DEMO

[サイトはこちらから](https://training-log-puce.vercel.app/).

Demo User：gukoutest@test.com
Demo Password : test123

# Features

カレンダー形式で自身のトレーニングログの一覧を素早く見ることができます。

# 実装時のルール

今回このアプリを作成するにあたっての工夫点および今後の改善点を記します。

## 技術スタック

現職と基本的に同じ技術スタックを採用しています。
基本は TypeScript + React で書いています。コンポーネントの管理には Storybook（以下 SB とします）、ログイン認証には Firebase を採用しました。
また Next JS を採用してみました。本アプリでは SSR の恩恵を受けることはないのですが、Vercel との連携のしやすさ（=デプロイ作業の簡易化）のため採用するに至りました。
CI/CD には Github actions を採用しました。

## テスト戦略

SB と Jest を用い、コンポーネント単位での UT を実装しました。
検証タイミングとしては PR 作成時に CI を回す、というベーシックなスタイルを採用しました。

工夫点は、SB で作成したストーリーを Jest で再利用することで、テストの実装コストを抑えたことです。
また Input などのインタラクティブな操作を持つコンポーネントについては、こちらも SB のストーリーを用いてインタラクティブテストも実装することができました。
SB を用いた テストの実装は現職では使用していなかったのですが、非常に楽でした。
これは余談ですが、テストで Dir を作成してしまうと、階層が深くなってしまい今後の修正時にテストのアップデートをおろそかしてしまうことを危惧し、コンポーネントの Dir に直接突っ込んでみました。

今後はインテグレーションテストも導入したいと考えています。

## Lint 戦略

Lint のルールについては ESLint および StyleLint を採用しました。
extends で airbnb と nextjs のルールを採用させていただき、実装を進めていく中で、適宜 rules に自分にあった設定をカスタマイズしていく、という方法を取りました。

工夫点としては ESLint からコード整形の役割を完全に分離し、ESLint には Linter としての役割に集中してもらったことです。コード整形は Prettier に一任しました。
またコード保存時に Lint と Prettier を走らせ、コミット時にも Husky で自動チェックを走らせるようにしました。

Lint 関連でエラーがある場合は、実装時にエディターから目視で確認でき、かつコミットごとにチェックを行っているため CI での Lint チェックは不要と判断し省略しています。

# Set Up

```bash
## プロジェクトをクローン
git clone https://github.com/traigning-log

## ディレクトリに移動
cd training-log

## パッケージをインストール
yarn install

## 開発用サーバを起動
yarn dev

## 開発用Storybookを起動
yarn storybook
```

# Note

現在さらに開発を進めています。
将来的に複数ユーザ間で記録をシェアできるようにしていきたいです。

# Author

-   Shota Taniguchi
-   st11121.grtkmch@gmail.com

# License d

"Tralog" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).
