import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import MovieList from "../components/MovieList";
import AddMovie from "../components/AddMovie";

const { movie: Movie } = new PrismaClient();

export default function Home({ data }) {
  const [movies, setMovies] = useState(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Movie List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MovieList movies={movies} />
        <AddMovie setMovies={setMovies} movies={movies} />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const movies = await Movie.findMany();

  return {
    props: {
      data: movies,
    },
  };
};
