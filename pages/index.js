import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const { movie: Movie } = new PrismaClient();

export default function Home({ data }) {
  const [formData, setFormData] = useState({});

  const saveMovie = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul className={styles.movielist}>
          {data.map((item) => (
            <li key={item.id}>
              <span>
                <strong>{item.title}</strong>
              </span>
              <span>{item.year}</span>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>

        <form className={styles.movieform} onSubmit={saveMovie}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={(e) =>
              setFormData({ ...formData, year: +e.target.value })
            }
          />
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Slug"
            name="slug"
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          />
          <button type="submit">Add movie</button>
        </form>
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
