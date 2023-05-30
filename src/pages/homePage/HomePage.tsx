import React from "react";

import { Search } from "./components/Search";
import { Filter } from "./components/Filter";
import { CardsList } from "./components/CardsList";

import "./HomePage.css";

import { getAllMovies } from "../../api/movie";
import { useState, useEffect } from "react";
import { Movie } from "../../models/movie";
import { Link } from "react-router-dom";

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
      <CardsList movies={movies} />
      <Filter />
    </div>
  );
};

// const categorie = async () => {
//   try {
//     const actionMoviesData = await getActionMovies();
//     if (actionMoviesData != null && actionMoviesData.length > 0) {
//       setMovies(actionMoviesData);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
