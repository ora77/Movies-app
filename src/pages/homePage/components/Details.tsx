import React, { useEffect, useState } from "react";
import "./Details.css";
import { getMovieById } from "../../../api/Movie";

export const Details = () => {
  interface Details {
    id: number;
    title: string;
    runtime: number;
    release_date: string; // example : "1958-12-28"
    genres: { name: string }[];
    overview: string;
    poster_path: string;
  }

  const [movie, setMovie] = useState<null | Details>(null); // remplacer "Details" par ...?

  useEffect(() => {
    const test = async () => {
      const test = await getMovieById(/* useParams */);
      console.log(test);
      setMovie(test);
    };

    test();
  }, []);

  const genresArray = movie?.genres.map((x) => x.name);

  if (movie == null) return <p>Loading...</p>;

  return (
    <main className="detail-main">
      <h1 className="detail-title">{movie.title}</h1>
      <ul className="detail-list ">
        <li>{movie.release_date.slice(0, 4)}</li>
        {/* methode sur la chaine de caractere pour avoir l'année? */}
        <li>{movie.runtime}</li>
      </ul>
      <figure>
        <img
          className="detail-poster"
          src={`${movie.poster_path}`} //????
        />
      </figure>
      <ul className="detail-list genres">{genresArray}</ul>
      <p className="detail-synopsis">{movie.overview}</p>
    </main>
  );
};
