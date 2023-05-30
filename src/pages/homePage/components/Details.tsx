import React, { useEffect, useState } from "react";
import "./Details.css";
import { getMovieById } from "../../../api/movie";
import { useParams } from "react-router-dom";
import { Movie } from "../../../models/movie";

export const Details = () => {
  const [movie, setMovie] = useState<null | Movie>(null); 

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const test = async () => {
      const test = await getMovieById(id);
      console.log(test);
      setMovie(test);
    };

    test();
  }, []);

  if (movie == null) return <p>Loading...</p>;

  return (
    <main className="detail-main">
      <h2 className="detail-title">{movie.title}</h2>
      <ul className="detail-list ">
        <li>{movie.release_date.slice(0, 4)}</li>
        <li>{movie.runtime}</li>
      </ul>
      <figure>
        <img
          className="detail-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} //???
        />
      </figure>
      <ul className="detail-list genres">
        {movie.genres.map((x) => (
          <li>{x.name}</li>
        ))}
      </ul>
      <p className="detail-synopsis">{movie.overview}</p>
    </main>
  );
};
