import axios from 'axios';

// 기본 URL 설정 (서버 주소가 달라질 경우 여기에 변경 가능)
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Express 서버의 주소
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET 요청 함수
export const getData = async (url) => {
  try {
    const response = await api.get(url);
    return response.data;  // 성공적으로 데이터를 반환
  } catch (error) {
    console.error('GET 요청 실패:', error);
    throw error;  // 실패시 오류를 던짐
  }
};

// POST 요청 함수
export const postData = async (url, data) => {
  try {
    const response = await api.post(url, data);
    return response.data;  // 성공적으로 데이터를 반환
  } catch (error) {
    console.error('POST 요청 실패:', error);
    throw error;  // 실패시 오류를 던짐
  }
};