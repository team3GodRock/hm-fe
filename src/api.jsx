import axios from 'axios';

// 공통 Axios 인스턴스 생성
const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 1. 인물 정보 요청
export const getPersonInfoById = async (personId) => {
  try {
    const response = await api.get(`/person/${personId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching person info:', error);
    throw error;
  }
};

// 2. 정치인 목록 요청
export const getAllPersonList = async () => {
  try {
    const response = await api.get('/person/personList');
    return response.data;
  } catch (error) {
    console.error('Error fetching person list:', error);
    throw error;
  }
};

// 3. 공약 정보 요청
export const getPromiseInfoById = async (personId) => {
    try {
        const response = await api.get(`/promise/${personId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching promise info:', error);
        throw error;
    }
};

// 5. 이력 정보 요청
export const getRecordListById = async (personId) => {
  try {
    const response = await api.get(`/record/${personId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching record list:', error);
    throw error;
  }
};
