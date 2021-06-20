import styles from "../styles/Home.module.css";
import Movie from "./Movie";

export default function ({ movies }) {
  return (
    <ul className={styles.movielist}>
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </ul>
  );
}
