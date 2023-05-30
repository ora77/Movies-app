import React from "react";

import { Search } from "./components/Search";
import { Filter } from "./components/Filter";
import { CardsList } from "./components/CardsList";

import "./HomePage.css";

import { getAllMovies } from "../../api/movie";
import { getMovieByCategory } from "../../api/movie";
import { useState, useEffect } from "react";
import { Movie } from "../../models/movie";
import { Link } from "react-router-dom";
import { Category } from "../../models/category";

export const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  

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


  const fetchMoviesByCategory = async (categoryId : Category ) => {
    try {
      const moviesData = await getMovieByCategory(categoryId);
      if (moviesData != null && moviesData.length > 0) {
        setMovies(moviesData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedCategory != null) {
      fetchMoviesByCategory(selectedCategory);
    }
  }, [selectedCategory]);


  return (
    <div className="HomePage">
      {movies.map((movie) => (
        <Link to={`/details/${movie.id}`} key={movie.id}></Link>
      ))}
      <Filter setSelectedCategory={setSelectedCategory} />

  return (
    <div className="HomePage">

      <CardsList movies={movies} />
    </div>
  );
};

