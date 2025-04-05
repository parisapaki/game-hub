import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
export default function GameGrid() {
  const { games, error } = useGames();
  return (
    <div>
      <Text>{error}</Text>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}{" "}
      </SimpleGrid>
    </div>
  );
}
