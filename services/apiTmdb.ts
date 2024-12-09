'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1'


import axios from 'axios';

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers : {
    Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDQ4ODI5ZTE5YmIyN2MzZmI5ZGE2MThiOGUwMTE1YiIsIm5iZiI6MTcyMzEyMjU1MC41Nywic3ViIjoiNjZiNGMzNzZmZmQwNTcyZGJiMjdmMGY4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.leyiN2adm0MecWfcLUZDWGFvLfawnjagCXD7_AafVak"
  }
});

export const fetchMovies = async (endpoint: string, params = {}) => {
  const { data } = await tmdb.get(endpoint, { params });
  return data;
};
