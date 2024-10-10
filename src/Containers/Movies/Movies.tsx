import { useState } from "react";
import MoviesForm from "../../Components/MoviesForm/MoviesForm.tsx";
import Movie from "../../Components/Movie/Movie.tsx";
import { IMovie } from "../../types";

const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([
    {
      name: "Harry Potter",
      id: "1",
    },

    {
      name: "Truman show",
      id: "2",
    },

    {
      name: "Forrest Gump",
      id: "3",
    },
  ]);

  const addMovie = (movie: IMovie) => {
    setMovies((prevState) => [
      ...prevState,
      {
        name: movie.name,
        id: String(new Date()),
      },
    ]);
  };

  const updateMovie = (id: string, updatedName: string): void => {
    setMovies((prevState) =>
      prevState.map((movie) =>
        movie.id === id ? { ...movie, name: updatedName } : movie,
      ),
    );
  };

  const deleteMovie = (id: string): void => {
    setMovies((prevState) => prevState.filter((movie) => movie.id !== id));
  };

  return (
    <div className="d-flex flex-column align-items-center mb-3">
      <MoviesForm addMovie={addMovie} />
      {movies.length === 0 ? (
        <h4 className="text-dark-emphasis">No movies have been added yet.</h4>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            name={movie.name}
            updateMovie={updateMovie}
            deleteMovie={deleteMovie}
          />
        ))
      )}
    </div>
  );
};

export default Movies;
