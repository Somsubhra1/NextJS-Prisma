import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function ({ setMovies, movies }) {
  const [formData, setFormData] = useState({});

  const saveMovie = async (e) => {
    e.preventDefault();
    setMovies([...movies, formData]);
    const response = await fetch("/api/movies", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    setFormData({});

    return await response.json();
  };

  return (
    <form className={styles.movieform} onSubmit={saveMovie}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Year"
        name="year"
        onChange={(e) => setFormData({ ...formData, year: +e.target.value })}
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
  );
}
