export type Training = 'sholder' | 'chest' | 'ab' | 'back' | 'arm' | 'legs';
export const trainingType = ['sholder', 'chest', 'ab', 'back', 'arm', 'legs'];

export const sholderTraining = [
    'サイドレイズ',
    'フロントレイズ',
    'リアレイズ',
    'ダンベルショルダープレス',
    'バーベルショルダープレス',
    'アップライトローイング',
    'ケーブルアップライトロウ',
];

export const chestTraining = [
    'ベンチプレス',
    'スミスマシンインクラインベンチプレス',
    'ダンベルプレス',
    'インクラインダンベルプレス',
    'ダンベルフライ',
    'インクラインダンベルフライ',
    'ディップス',
    'ペックフライ',
    'ケーブルフライ',
];

export const abTraining = [
    'クランチ',
    'リバースクランチ',
    'リバースクランチ',
    'レッグレイズ',
    'アブローラー（立ち）',
    'アブローラー（膝）',
];

export const backTraining = [
    'デッドリフト',
    'チンニング',
    'ベントオーバーロウ',
    'シーテッド・ロウイング',
];

export const armTraining = [
    'イージーバーカール',
    'インクラインカール',
    'バイセプスカール',
    'ナロウプレス',
    'フレンチプレス',
    'プッシュダウン',
];

export const legsTraining = [
    'バーベルスクワット',
    'ブルガリアンスクワット',
    'レッグプレス',
    'レッグエクステンション',
    'レッグカール',
    'ヒップスラスト',
];

export const getTraining = (type: string): Array<string> | null => {
    switch (type) {
        case 'sholder':
            return sholderTraining;
        case 'chest':
            return chestTraining;
        case 'ab':
            return abTraining;
        case 'back':
            return backTraining;
        case 'arm':
            return armTraining;
        case 'legs':
            return legsTraining;
        default:
            return null;
    }
};
