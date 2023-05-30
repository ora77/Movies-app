import React from "react";
import { Link, Router } from "react-router-dom";

import "./CardsList.css";

import { Card } from "./Card";
import { Movie } from "../../../models/movie";

interface MoviesProps {
  movies: Movie[];
}

export const CardsList = ({ movies }: MoviesProps) => {
  return (
    <div className="CardsList">
      {movies.map((movie) => (
        
        <Link to={`/details/${movie.id}`}>
        <div key={movie.id}>
          <Card src={movie.poster_path} title={movie.title} />
        </div>
        </Link>
        
      ))}
    </div>
  );
};
