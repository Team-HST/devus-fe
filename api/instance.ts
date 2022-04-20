import axios from 'axios';

// TODO: devus-be로 교체
const instance = axios.create({
  baseURL: 'https://worldtimeapi.org',
});

export default instance;
