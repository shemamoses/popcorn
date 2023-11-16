import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MovieListGrid from "./components/MovieListGrid";
import MovieGrid from "./components/MovieGrid";

function App() {
  return (
    <>
      <Grid m={4}>
        <GridItem>
          <NavBar />
        </GridItem>
        <GridItem>
          <HStack m={4}>
            <MovieListGrid />
            <MovieGrid />
          </HStack>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
