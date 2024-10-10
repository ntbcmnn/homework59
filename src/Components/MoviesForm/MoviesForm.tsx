import React, { FormEvent, useState } from "react";
import { IMovie } from "../../types";

interface Props {
  addMovie: (movie: IMovie) => void;
}

const MoviesForm: React.FC<Props> = ({ addMovie }) => {
  const [newMovieName, setNewMovieName] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (newMovieName.trim().length > 0) {
      addMovie({ id: String(new Date()), name: newMovieName });
      setNewMovieName("");
    } else {
      alert("Enter movie name!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-start align-items-center gap-3 my-4"
    >
      <input
        type="text"
        value={newMovieName}
        placeholder="Movie name..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewMovieName(e.target.value)
        }
        className="form-control w-100"
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default MoviesForm;
