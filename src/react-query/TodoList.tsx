import { useTodos } from "./hooks/useTodos";

export default function TodoList() {
  const { data: todos, error, isLoading } = useTodos();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
}
