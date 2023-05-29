import React from "react";

import { Search } from "./components/Search";
import { Filter } from "./components/Filter";
import { CardsList } from "./components/CardsList";

import './HomePage.css';

import { getAllMovies } from "../../api/films";
import { useState, useEffect } from "react";
import { Movie } from "../../models/Movie";

export const HomePage = () => {


  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getAllMovies();
        if (moviesData != null && moviesData.length > 0) setMovies(moviesData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="HomePage">
      {/* <CardsList movies={movies} /> */}

      {movies.map((movie) => (
        <div key={movie.id}>
          <div>{movie.id}</div>
          <img
            className="image"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          ></img>
          <div>{movie.title}</div>
        </div>
      ))}
    </div>
  );
};
