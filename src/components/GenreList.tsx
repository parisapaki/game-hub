import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectedGenre: (Genre: Genre) => void;
  selectedGenre: Genre | null;
}

export default function GenreList({ onSelectedGenre, selectedGenre }: Props) {
  const { data, loading, error } = useGenres();

  if (error) return null;

  if (loading) return <Spinner />;

  return (
    <>
      <Heading marginTop={8} marginBottom={4} marginX={2} fontSize="2xl">
        Genres
      </Heading>
      <List marginX={2}>
        {data.map((Genre) => (
          <ListItem key={Genre.id}>
            <HStack paddingY={2}>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={Genre.image_background}
              />
              <Button
                fontWeight={Genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                onClick={() => onSelectedGenre(Genre)}
              >
                {Genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
