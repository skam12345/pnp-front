import axios from 'axios';
import { APP_URL } from '../config/API_APP_URL';

const setURL = (isOutAPI: boolean, url: string) => {
  if (isOutAPI) {
    return url;
  } else {
    return APP_URL + url;
  }
};

export const fetchData = async (
  reqData: Object,
  url: string,
  isOutAPI: boolean = false,
) => {
  console.log('reqeustData', reqData, 'path:', url);

  try {
    const response = await axios.post(setURL(isOutAPI, url), reqData, {
      // GET 요청에 데이터를 파라미터로 전달합니다.
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.data;
  } catch (error) {
    // 에러 처리
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (
  url: string,
  reqData: Object,
  isOutAPI: boolean = false,
  formType: string,
) => {
  console.log('requestPost', reqData, url, formType);
  try {
    const response = await axios.post(setURL(isOutAPI, url), reqData, {
      headers:
        formType === 'multiPart'
          ? {
              'Content-Type': 'multipart/form-data; charset=utf-8;',
            }
          : { 'Content-Type': 'application/json; charset=UTF-8' },
    });
    return response.data;
  } catch (error) {
    // 에러 처리
    console.error('Error fetching data:', error);
    throw error;
  }
};
