import { userState } from './atom';
import { selector } from 'recoil';

export const userNameFormatSelector = selector<string>({
  key: 'userNameFormatSelector',
  get: ({ get }) => {
    const user = get(userState);
    return `${user.firstName} ${user.lastName}`;
  },
  set: ({ set }, value) => {
    const [firstName, lastName] = (value as string).split(' ');
    set(userState, { firstName, lastName: lastName || '' });
  },
});
