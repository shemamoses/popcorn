import {
  Grid,
  GridItem,
  Text,
  Box,
  Image,
  Card,
  CardBody,
  UnorderedList,
  ListItem,
  HStack,
} from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import { useState } from "react";

const MovieListGrid = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const { movies, loading, error } = useMovies();

  const handleClick = (index: number) => {
    setSelectedItem(index);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Grid gap={2}>
        {movies.map((movie, index) => (
          <GridItem key={index} colSpan={3}>
            <UnorderedList listStyleType="none">
              <ListItem onClick={() => handleClick(index)}>
                <Card
                  maxW="400px"
                  bg={selectedItem === index ? "teal.500" : undefined}
                  sx={{
                    cursor: selectedItem === index ? "pointer" : "default",
                  }}
                >
                  <CardBody>
                    <HStack>
                      <Image
                        src={movie.Poster}
                        alt={movie.Title}
                        boxSize="100px"
                        objectFit="cover"
                        borderRadius="md"
                      />
                      <Box>
                        <Text fontSize="md" fontWeight="bold">
                          {movie.Title}
                        </Text>
                        <Text fontSize="sm">{movie.Year}</Text>
                        <Text fontSize="sm">{movie.Type}</Text>
                      </Box>
                    </HStack>
                  </CardBody>
                </Card>
              </ListItem>
            </UnorderedList>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default MovieListGrid;
