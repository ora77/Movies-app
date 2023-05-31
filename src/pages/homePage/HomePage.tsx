import React from "react";

import { Search } from "./components/Search";
import { Filter } from "./components/Filter";
import { CardsList } from "./components/CardsList";

import "./HomePage.css";

import { getAllMovies } from "../../api/movie";
import { getMovieByCategory } from "../../api/movie";
import { getMoviesBySearch } from "../../api/movie";
import { useState, useEffect } from "react";
import { Movie } from "../../models/movie";
import { Category } from "../../models/category";

export const HomePage = () => {
  //********************* USE STATE **************************
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [searchValue, setSearchValue] = useState("");

  // ***************************** FETCH ALL MOVIES **************************************
  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getAllMovies();
      if (moviesData != null && moviesData.length > 0) setMovies(moviesData);
    };
    fetchMovies();
  }, []);

  // ***************************** FETCH CATEGORY **************************************

  useEffect(() => {
    const fetchMoviesByCategory = async (categoryId: Category) => {
      const moviesData = await getMovieByCategory(categoryId);
      if (moviesData != null && moviesData.length > 0) {
        setMovies(moviesData);
      }
    };

    if (selectedCategory != null) {
      fetchMoviesByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  // ***************************** FETCH SEARCH **************************************

  useEffect(() => {
    const fetchMoviesBySearch = async () => {
      if (searchValue) {
        const moviesData = await getMoviesBySearch(searchValue);
        if (moviesData != null && moviesData.length > 0) {
          setMovies(moviesData);
        }
      }
    };

    fetchMoviesBySearch();
  }, [searchValue]);

  return (
    <div className="HomePage">
      <Search onSearch={setSearchValue} />
      <div className="HomeFilm">
        <Filter setSelectedCategory={setSelectedCategory} />
        <CardsList movies={movies} />
      </div>
    </div>
  );
};
