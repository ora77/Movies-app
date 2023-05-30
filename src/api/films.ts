import axios from "axios"
import { Movie } from "../models/Movie"


const API_KEY = process.env.REACT_APP_API_KEY as string

export const getAllMovies = () => {
    const allMovieURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr-EU`

    return axios
        .get<{ results: Movie[]}>(allMovieURL)
        .then((response)  => {
            return response.data.results
        })
        .catch((error) => {
            console.log(error);
        })
}