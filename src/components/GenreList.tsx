import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectedGenre: (Genre: Genre) => void;
}

export default function GenreList({ onSelectedGenre }: Props) {
  const { data, loading, error } = useGenres();

  if (error) return null;

  if (loading) return <Spinner />;

  return (
    <List>
      {data.map((Genre) => (
        <ListItem key={Genre.id}>
          <HStack paddingY={2}>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={Genre.image_background}
            />
            <Button variant="link" onClick={() => onSelectedGenre(Genre)}>
              {Genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
