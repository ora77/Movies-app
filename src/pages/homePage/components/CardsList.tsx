import React from 'react'

import { Card } from "./Card"
import { Movie } from "../../../models/Movie"

interface MoviesProps{
    movies: Movie[],
}

export const CardsList = ({movies}: MoviesProps) => {

   return (
     <div>
       {movies.map((movie) => (
         <div key={movie.id}>
           <Card id={movie.id} src={movie.poster_path} title={movie.title} />
         </div>

         //  <div key={movie.id}>
         //    <div>{movie.id}</div>
         //    <img
         //      className="image"
         //      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
         //    ></img>
         //    <div>{movie.title}</div>
         //  </div>
       ))}
     </div>
   );
};