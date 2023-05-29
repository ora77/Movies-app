import React from "react";
import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovieDetailsById = async (movieId= 1059) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=fr-EU`;
  let result;
  try {
    result = await axios.get(url).then((res) => res.data);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
  return result; 
};