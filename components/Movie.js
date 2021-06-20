import Link from "next/link";

export default function ({ movie }) {
  return (
    <li key={movie.id}>
      <span>
        <strong>{movie.title}</strong>
      </span>
      <span>{movie.year}</span>
      <span>{movie.description}</span>
      <Link href={`/movies/${movie.slug}`}>More about this movie</Link>
    </li>
  );
}
