import { atom } from 'recoil';
import { IUser } from './type';

// example recoil
export const userState = atom<IUser>({
  key: 'userState',
  default: {
    firstName: 'Younghoon',
    lastName: 'Kim',
  },
});
