import axios from "axios"
import { Movie } from "../models/Movie"

export const getAllMovies = () => {
    const allMovieURL = 'https://api.themoviedb.org/3/discover/movie?api_key=0a43c2ac665683721778982c8e5d75e1&language=fr-EU'

    return axios
        .get<{ results: Movie[]}>(allMovieURL)
        .then((response)  => {
            return response.data.results
        })
        .catch((error) => {
            console.log(error);
        })
}
