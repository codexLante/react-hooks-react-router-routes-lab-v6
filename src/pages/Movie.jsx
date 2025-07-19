import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const movies = {
  1: {
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"]
  },
  2: {
    title: "Trolls",
    time: 92,
    genres: ["Animation", "Adventure", "Comedy"]
  },
  3: {
    title: "Jack Reacher: Never Go Back",
    time: 118,
    genres: ["Action", "Crime", "Mystery"]
  }
};

function Movie() {
  const { id } = useParams();
  const movie = movies[id];

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre}</span>
      ))}
    </div>
  );
}

export default Movie;