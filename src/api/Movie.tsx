import React from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovieById = async (movieId: number) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=fr-EU`;
  try {
    return await axios.get(url).then((res) => res.data);
  } catch (err) {
    console.log(err);
  }
};
