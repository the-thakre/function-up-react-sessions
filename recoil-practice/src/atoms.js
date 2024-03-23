import { atom } from 'recoil';

export const counter = atom({
    key: 'myCounter',
    default: 0
})