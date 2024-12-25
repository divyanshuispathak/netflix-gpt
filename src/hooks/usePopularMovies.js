import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  // Fetching data from TMDB api and update store
  const dispatch = useDispatch();

  const getPopularMovies = () => {
    const data = fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
    const json = data.json();
    console.log(json);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;