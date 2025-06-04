import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = '474ef74793bc1bbd28132368dabcb27e';
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzRlZjc0NzkzYmMxYmJkMjgxMzIzNjhkYWJjYjI3ZSIsIm5iZiI6MTc0ODcxMTA0My4xOTM5OTk4LCJzdWIiOiI2ODNiMzY4M2EwNjhkZTZhMzJkMjBmYWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VdX7iL6zzUINT2ocEMVJ3EZTPHcIIJn2diA47qfwtCY',
  },
};
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchMovies = async () => {
  const response = await axios.get(BASE_URL + 'trending/movie/day', options);
  return response.data.results;
};
export const fetchMoviesByID = async (movieId) => {
  const response = await axios.get(BASE_URL + `movie/${movieId}`, options);
  return response.data;
};
