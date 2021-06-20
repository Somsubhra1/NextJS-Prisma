import Link from "next/link";
import { useRouter } from "next/router";

export default function ({ movie }) {
  const router = useRouter();
  const btnStyles = {
    margin: "0.6rem",
    backgroundColor: "#f00",
    color: "#fff",
    padding: "0.5rem",
    borderRadius: "0.7rem",
  };

  const deleteMovie = async () => {
    await fetch(`/api/movies/?id=${movie.id}`, {
      method: "DELETE",
    });

    router.push("/");
  };

  return (
    <li key={movie.id}>
      <span>
        <strong>{movie.title}</strong>
      </span>
      <span>{movie.year}</span>
      <span>{movie.description}</span>
      <Link href={`/movies/${movie.slug}`}>More about this movie</Link>
      <button style={btnStyles} type="button" onClick={deleteMovie}>
        Delete movie
      </button>
    </li>
  );
}
