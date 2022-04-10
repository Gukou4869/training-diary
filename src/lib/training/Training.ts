import benchPress from '@/assets/benchPress.jpeg';
import inclineBenchPress from '@/assets/inclineBenchPress.jpeg';
import dumbbellFly from '@/assets/dumbbellFly.jpeg';
import sideRaise from '@/assets/sideRaise.jpeg';
import frontRaise from '@/assets/frontRaise.jpeg';
import rearRaise from '@/assets/rearRaise.jpeg';
import chrunch from '@/assets/chrunch.jpeg';
import reverseChrunch from '@/assets/reverseChrunch.jpeg';
import sittingAbRoaler from '@/assets/sittingAbRoaler.jpeg';
import deadLift from '@/assets/deadLift.jpeg';
import chinning from '@/assets/chinning.jpeg';
import bentOverRow from '@/assets/bentOverRow.jpeg';
import seatedRow from '@/assets/seatedRow.jpeg';
import ezBarCurl from '@/assets/ezBarCurl.jpeg';
import inclineCurl from '@/assets/inclineCurl.jpeg';
import bysepsCurl from '@/assets/bysepsCurl.jpeg';
import barbellSquat from '@/assets/barbellSquat.jpeg';
import bulgarianSquat from '@/assets/bulgarianSquat.jpeg';
import legExtention from '@/assets/legExtention.jpeg';
import legCurl from '@/assets/legCurl.jpeg';

export type Training = 'sholder' | 'chest' | 'ab' | 'back' | 'arm' | 'legs';
export const trainingType: Array<Training> = ['sholder', 'chest', 'ab', 'back', 'arm', 'legs'];
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

export const getTraining = (type: string): Array<ITraining> => {
    switch (type) {
        case 'sholder':
            return sholderTrainingList;
        case 'chest':
            return chestTrainingList;
        case 'ab':
            return abTrainingList;
        case 'back':
            return backTrainingList;
        case 'arm':
            return armsTrainingList;
        case 'legs':
            return legsTrainingList;
        default:
            return sholderTrainingList;
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

export const abTrainingList: Array<ITraining> = [
    {
        name: 'クランチ',
        src: chrunch,
    },
    {
        name: 'リバースクランチ',
        src: reverseChrunch,
    },
    {
        name: 'アブローラー',
        src: sittingAbRoaler,
    },
];

export const backTrainingList: Array<ITraining> = [
    {
        name: 'デッドリフト',
        src: deadLift,
    },
    {
        name: 'チンニング',
        src: chinning,
    },
    {
        name: 'ベントオーバーロウ',
        src: bentOverRow,
    },
    {
        name: 'シーテッド・ロウ',
        src: seatedRow,
    },
];

export const armsTrainingList: Array<ITraining> = [
    {
        name: 'イージーバーカール',
        src: ezBarCurl,
    },
    {
        name: 'インクラインカール',
        src: inclineCurl,
    },
    {
        name: 'バイセプスカール',
        src: bysepsCurl,
    },
];

export const legsTrainingList: Array<ITraining> = [
    {
        name: 'バーベルスクワット',
        src: barbellSquat,
    },
    {
        name: 'ブルガリアンスクワット',
        src: bulgarianSquat,
    },
    {
        name: 'レッグエクステンション',
        src: legExtention,
    },
    {
        name: 'レッグカール',
        src: legCurl,
    },
];

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
