import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

// Interface for a single movie
interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

// Interface for the API response
interface FetchResponse {
  Search: Movie[]; // Assuming the movies are in an array under the 'Search' property
  totalResults: string;
  Response: string;
}

// Interface for the useMovies hook return value
interface MoviesHookResult {
  movies: Movie[];
  error: Error | null;
  loading: boolean;
}

const useMovies = (): MoviesHookResult => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    apiClient
      .get<FetchResponse>("/", { signal })
      .then((response) => {
        setMovies(response.data.Search);
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((error) => {
        if (error.name === "AbortError") setError(error);
        setLoading(false); // Set loading to false on error
      });

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return { movies: [], error: null, loading: true };
  }

  if (error) {
    return { movies: [], error, loading: false };
  }

  // Render your content based on the fetched data
  return { movies, error: null, loading: false };
};

export default useMovies;
