import instance from '@/api/instance';

// 서울 실시간 시간조회 API
export const getAsiaSeoulTimer = () => {
  return instance.get('/api/timezone/Asia/Seoul').then((res) => res.data);
};
