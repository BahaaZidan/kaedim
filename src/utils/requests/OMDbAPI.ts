import axios from "axios";

const API_KEY = "4577bb92";

export const searchMovie = (searchString: string, page: number = 1) =>
  axios.get("https://www.omdbapi.com/", {
    params: {
      s: searchString,
      type: "movie",
      page: page,
      apikey: API_KEY,
    },
  });

export const getMovieDetails = (imdbID: string) =>
  axios.get("https://www.omdbapi.com/", {
    params: {
      i: imdbID,
      plot: "full",
      apikey: API_KEY,
    },
  });
