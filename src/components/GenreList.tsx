import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

export default function GenreList() {
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
            <Text>{Genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
