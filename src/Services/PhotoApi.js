import axios from "axios";

const fetchPhotos = (query, page, pageSize = 12) => {
  const apiKey = "19541383-5d00357ab0e5a7bba4cc805df";
  const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${pageSize}`;
  return axios.get(url).then((res) => res.data.hits);
};

export default fetchPhotos;
