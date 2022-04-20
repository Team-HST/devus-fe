import { atom } from 'recoil';
import type { Theme } from './type';

// 테마색 지정 ligit | dark
export const themeState = atom<Theme>({
  key: 'themeState',
  default: 'light',
});
