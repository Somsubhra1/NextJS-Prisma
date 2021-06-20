import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const { movie: Movie } = new PrismaClient();

const MoviePage = ({ movie }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{movie.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
      </main>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const movie = await Movie.findFirst({
    where: {
      slug,
    },
  });
  return {
    props: {
      movie,
    },
  };
};

export default MoviePage;
