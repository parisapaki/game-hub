import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
  return (
    <Heading as="h1">
      {gameQuery.genre ? gameQuery?.genre?.name : "Game"}
    </Heading>
  );
}
