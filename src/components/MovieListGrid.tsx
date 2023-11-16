import { Grid, GridItem, Text, Box, Image } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";

const MovieListGrid = () => {
  const { movies, loading, error } = useMovies();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {movies.map((movie, index) => (
          <GridItem key={index}>
            <Box>
              <Image src={movie.Poster} alt={movie.Title} />
              <Text>{movie.Title}</Text>
              <Text>{movie.Year}</Text>
              <Text>{movie.Type}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default MovieListGrid;
