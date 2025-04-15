import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}
export default function GameGrid({ selectedGenre }: Props) {
  const { data, error, loading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <Text>{error}</Text>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3}>
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}{" "}
      </SimpleGrid>
    </div>
  );
}
