import benchPress from '@/assets/benchPress.jpeg';
import inclineBenchPress from '@/assets/inclineBenchPress.jpeg';
import dumbbellFly from '@/assets/dumbbellFly.jpeg';
import sideRaise from '@/assets/sideRaise.jpeg';
import frontRaise from '@/assets/frontRaise.jpeg';
import rearRaise from '@/assets/rearRaise.jpeg';

export type Training = 'sholder' | 'chest' | 'ab' | 'back' | 'arm' | 'legs';
export const trainingType = ['sholder', 'chest', 'ab', 'back', 'arm', 'legs'];
export interface ITraining {
    name: string;
    src: StaticImageData;
}

export const getRep = (): Array<string> => {
    let rep = 1;
    let result = [];
    while (rep <= 30) {
        result.push(rep.toString());
        rep++;
    }
    return result;
};

export const getWeight = (): Array<string> => {
    let weight = 1;
    let result = [];
    while (weight <= 120) {
        result.push(weight.toString());
        weight++;
    }
    return result;
};

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

export const getTraining = (type: string): Array<ITraining> => {
    switch (type) {
        case 'sholder':
            return sholderTrainingList;
        case 'chest':
            return chestTrainingList;
        // case 'ab':
        //     return abTraining;
        // case 'back':
        //     return backTraining;
        // case 'arm':
        //     return armTraining;
        // case 'legs':
        //     return legsTraining;
        default:
            return null;
    }
};

export const sholderTrainingList: Array<ITraining> = [
    {
        name: 'サイドレイズ',
        src: sideRaise,
    },
    {
        name: 'フロントレイズ',
        src: frontRaise,
    },
    {
        name: 'リアレイズ',
        src: rearRaise,
    },
];

export const chestTrainingList: Array<ITraining> = [
    {
        name: 'ベンチプレス',
        src: benchPress,
    },
    {
        name: 'インクライベンチプレス',
        src: inclineBenchPress,
    },
    {
        name: 'ダンベルフライ',
        src: dumbbellFly,
    },
];
