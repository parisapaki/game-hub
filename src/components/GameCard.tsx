import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { cropedImageURL } from "../services/image-url";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card overflow="hidden" borderRadius={10} width="400px">
      <Image src={cropedImageURL(game.background_image)} />
      <CardBody>
        <Heading fontSize="xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}
