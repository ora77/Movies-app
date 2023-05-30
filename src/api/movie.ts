import axios from "axios";
import { Movie } from "../models/movie";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getAllMovies = () => {
  const allMovieURL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-EU`;

  return axios
    .get<{ results: Movie[] }>(allMovieURL)
    .then((response) => response.data.results)
    .catch((error) => {
      console.log(error);
    });
};

export const getMovieById = async (movieId: number) => {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr-EU`;
  try {
    return await axios.get(url).then((res) => {
      console.log(res.data);
      return res.data;
    });
  } catch (err) {
    console.log(err);
  }
};
