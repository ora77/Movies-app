import axios from "axios"
import { Categorie } from "../models/Categorie"


const API_KEY = process.env.REACT_APP_API_KEY as string

export const getCategories = () => {
    const allMovieURL = `https://api.themoviedb.org/3/discover/movie/list?api_key=${API_KEY}&language=fr-EU`

    return axios
        .get<{ results: Categorie[]}>(allMovieURL)
        .then((response)  => {
            return response.data.results
        })
        .catch((error) => {
            console.log(error);
        })
}
