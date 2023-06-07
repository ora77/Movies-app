import React from "react";
import { Link, Router } from "react-router-dom";

import "./CardsList.css";

import { Card } from "./Card";
import { Movie } from "../../../models/Movie";

interface MoviesProps {
  movies: Movie[];
}

export const CardsList = ({ movies }: MoviesProps) => {
  return (
    <div className="CardsList">
      {movies.map((movie) => (
        // Link can be the main container, no need to have an additional div
        <div key={movie.id}>
          <Link className="link-card"to={`/details/${movie.id}`}>
            <Card src={movie.poster_path} title={movie.title} />
          </Link>
        </div>
      ))}
    </div>
  );
};
