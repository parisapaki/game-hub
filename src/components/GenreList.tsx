import useGenres from "../hooks/useGenres";

export default function GenreList() {
  const { data } = useGenres();

  return (
    <div>
      {data.map((g) => (
        <div key={g.id}>{g.name}</div>
      ))}
    </div>
  );
}
