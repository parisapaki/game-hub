import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import SortSelected from "./components/SortSelected";
export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectedGenre={(Genre) => setSelectedGenre(Genre)}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack marginBottom="4">
          <SortSelected />
        </HStack>

        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}
