import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

const apiService = options =>
  new Promise((resolve, reject) => {
    const instance = axios.create();
    instance({ ...options })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });

export async function fetchAPI(methodType, url, body, header = {}) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...header,
  };

  const options = {
    method: methodType,
    headers,
    url,
    data: body,
  };

  let data = null;
  data = await apiService(options);
  return data;
}

export const getUrl = (path = '') => `${API_URL}/${path}`;
