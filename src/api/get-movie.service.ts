import axios from "axios";
import {hateGenres} from "./get-movie.helpers";
import {Genre, ApiMovieEndpoints} from "./movie.types";
const API_KEY = "5DC30D3-8DK4P1Q-KENH9YD-5WEBPFY";

const movieAPIInstanse = axios.create({
  baseURL: "https://api.kinopoisk.dev/v1",
  headers: {
    accept: "application/json",
    "X-API-KEY": API_KEY,
  },
});

const movieAPIService = () => {
  const getAllMovies = async () => {
    try {
      const {data} = await movieAPIInstanse.get("/movie?&limit=12");
      console.log("фильмы", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getGenresList = async () => {
    try {
      const {data} = await movieAPIInstanse.get(ApiMovieEndpoints.Genres);

      return data.filter((i: Genre) => i.name !== hateGenres[i.name]);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieByQuery = async (
    query: string,
    field: string,
    currentPage: number
  ) => {
    try {
      const currentPageNumber = `&page=${currentPage}`;

      const {data} = await movieAPIInstanse.get(
        `/movie?&field=${query}&search=${field}&sortType=-1${currentPageNumber}&limit=12`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getPageByCurrent = async (currentPage: number) => {
    try {
      const {data} = await movieAPIInstanse.get(
        `/movie?&page=${currentPage}&limit=12`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {getAllMovies, getGenresList, getMovieByQuery, getPageByCurrent};
};

export const movieAPI = movieAPIService();
