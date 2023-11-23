import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39812088-032b6c14a0977753a1f192d5f';

export const getImages = async (userSearch, page, perPage) => {
  const responce = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${userSearch}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal`
  );

  return responce.data;
};
