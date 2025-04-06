import useGenres from "../hooks/useGenres";

export default function GenreList() {
  const { Genres } = useGenres();

  return (
    <div>
      {Genres.map((Genre) => (
        <div key={Genre.id}>{Genre.name}</div>
      ))}
    </div>
  );
}
