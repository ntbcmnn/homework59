import React, { useEffect } from "react";
import { IMovie } from "../../types";

interface IMovieProps extends IMovie {
  updateMovie: (id: string, updatedName: string) => void;
  deleteMovie: (id: string) => void;
}

const Movie: React.FC<IMovieProps> = React.memo(
  ({ name, id, updateMovie, deleteMovie }) => {
    useEffect((): void => {
      console.log(`[Movie] ${name} render`);
    }, [name]);

    return (
      <div className="d-flex justify-content-start align-items-center gap-3 my-3">
        <input
          type="text"
          value={name}
          key={id}
          onChange={(e) => updateMovie(id, e.target.value)}
          className="form-control w-25"
        />
        <button
          type="button"
          onClick={() => deleteMovie(id)}
          className="btn btn-close"
        ></button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.name === nextProps.name && prevProps.id === nextProps.id;
  },
);

export default Movie;
