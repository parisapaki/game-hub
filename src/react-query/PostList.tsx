import { useState } from "react";
import { usePosts } from "./hooks/usePosts";

export default function PostList() {
  const [userId, setUserId] = useState<number>();
  const { data: Posts, error, isLoading } = usePosts(userId);

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>isLoading ...</p>;
  return (
    <>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={(event) => setUserId(parseInt(event.target.value))}
      >
        <option value=""></option>
        <option value="1">user1</option>
        <option value="2">user2</option>
        <option value="3">user3</option>
      </select>
      <ul>
        {Posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
